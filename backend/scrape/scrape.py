import pandas as pd
import requests
from alive_progress import alive_bar
import datetime
import swifter


df = pd.read_csv('incidents.csv')
datShape = df.shape

radius = 1
over = 7

url = "http://localhost:8080/api/getTweetLocScore"

with alive_bar(df.shape[0]) as bar:
    def get_polar(r):
            bar()
            payload = {
                "keyword": "a",
                "lat": r['latitude'],
                "lng": r['longitude'],
                "distance": radius,
                "since": (datetime.datetime.strptime(r['date'], '%Y-%m-%d') - datetime.timedelta(days=over)).strftime('%Y-%m-%d'),
                "until": (datetime.datetime.strptime(r['date'], '%Y-%m-%d') + datetime.timedelta(days=over)).strftime('%Y-%m-%d')
            }
            headers = {"Content-Type": "application/json"}

            response = requests.request("POST", url, json=payload, headers=headers).json()
            print(response)
            if response:
                r['pos'] = response['pos']
                r['neg'] = response['neg']
                r['neu'] = response['neu']
                r['comp'] = response['comp']
            else:
                r['pos'] = 0
                r['neg'] = 0
                r['neu'] = 0
                r['comp'] = 0
            return r

    df_polar = df.swifter.apply(get_polar, axis=1)
    df.polar.to_csv(f'polar{radius}.csv')