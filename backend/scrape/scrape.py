import pandas as pd
import requests
import json

df = pd.read_csv('participants.csv')
print(df)

radius = 1

url = "http://localhost:8080/api/getTweetLocScore"

def get_polar(r):
    payload = {
        "keyword": "a",
        "lat": 48.88048,
        "lng": 2.385939,
        "distance": radius
    }
    headers = {"Content-Type": "application/json"}

    response = json.load(requests.request("POST", url, json=payload, headers=headers).text)
    r['pos'] = response.pos
    r['neg'] = response.neg
    r['neu'] = response.neu
    r['comp'] = response.comp
    return r

df_polar = df.apply(get_polar)
df.polar.to_csv(f'polar{radius}.csv')