import pandas as pd
import requests
from alive_progress import alive_bar
import datetime
# import swifter
# import pandarallel
from pandarallel import pandarallel
from nltk.sentiment.vader import SentimentIntensityAnalyzer
pandarallel.initialize(progress_bar=True, nb_workers=32)
import twint
from stem.control import Controller
from stem import Signal
import time
import random




df = pd.read_csv('incidents.csv')
datShape = df.shape

radius = 1
over = 14

url = "http://localhost:8080/api/getTweetLocScore"

with Controller.from_port(port = 9051) as controller:
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
        def get_tweet_loc(params):
            for _ in range(10):
                try:
                    c = twint.Config()
                    c.Proxy_host = "127.0.0.1"
                    c.Proxy_port = 5566
                    c.Proxy_type = "http"
                    c.Search = params['keyword']
                    c.Limit = 100
                    c.Geo = f"{str(params['lat'])},{str(params['lng'])},{str(params['distance'])}{params['unit']}"
                    c.Pandas = True
                    c.Since = params['since']
                    c.Until = params['until']
                    twint.run.Search(c)
                    sid = SentimentIntensityAnalyzer()
                    stat = {"pos": 0, "neg": 0, "neu": 0, "comp": 0}
                    print(twint.storage.panda.Tweets_df.shape)
                    if twint.storage.panda.Tweets_df.shape[0] > 0:
                        tweets = twint.storage.panda.Tweets_df['tweet']
                        for tweet in tweets:
                            senvalue = sid.polarity_scores(tweet)
                            stat['pos'] += senvalue["pos"]
                            stat['neg'] += senvalue["neg"]
                            stat['neu'] += senvalue["neu"]
                            stat['comp'] += senvalue["compound"]
                        stat['neg'] /= tweets.shape[0]
                        stat['pos'] /= tweets.shape[0]
                        stat['neu'] /= tweets.shape[0]
                        stat['comp'] /= tweets.shape[0] 
                    return stat
                except Exception as e:
                    # controller.authenticate(password='')
                    # controller.signal(Signal.NEWNYM)
                    time.sleep(random.random() * 300)
                    print('error: ', e)
                    continue

        def get_loca_polar(r):
            bar()
            response = get_tweet_loc({
                    "keyword": "gun",
                    "lat": r['latitude'],
                    "lng": r['longitude'],
                    "distance": radius,
                    "unit": "km",
                    "since": (datetime.datetime.strptime(r['date'], '%Y-%m-%d') - datetime.timedelta(days=over)).strftime('%Y-%m-%d'),
                    "until": (datetime.datetime.strptime(r['date'], '%Y-%m-%d') + datetime.timedelta(days=over)).strftime('%Y-%m-%d')
                })
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

        df_polar = df.parallel_apply(get_loca_polar, axis=1)
        df.polar.to_csv('polar_1_7d.csv')


