import pandas as pd
import requests
from alive_progress import alive_bar
import datetime
from pandarallel import pandarallel
from nltk.sentiment.vader import SentimentIntensityAnalyzer
pandarallel.initialize(progress_bar=True, verbose=0)
import twint
from stem.control import Controller
from stem import Signal
import time
import random
import nest_asyncio
nest_asyncio.apply()




df = pd.read_csv('incidents.csv')
df = df[df['state'] == 'California']
datShape = df.shape

radius = 1
over = 14

url = "http://localhost:8080/api/getTweetLocScore"


rand = lambda: random.random() * random.random() * 10
wait = lambda: time.sleep(rand())

with Controller.from_port(port = 9051) as controller:
    def get_polar(r):
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
                stat = {"pos": 0, "neg": 0, "neu": 0, "comp": 0, "scrape": True}
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
                    wait()
                    return stat
                else:
                    return {"pos": 0, "neg": 0, "neu": 0, "comp": 0, "scrape": True}
            except Exception as e:
                print('error: ', e)
                [wait() for i in range(24)] 
                continue
        return {"pos": 0, "neg": 0, "neu": 0, "comp": 0, "scrape": False}

    def get_loca_polar(r):
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
            r['scrape'] = response['scrape']
            return r
        else:
            r['pos'] = 0
            r['neg'] = 0
            r['neu'] = 0
            r['comp'] = 0
            r['scrape'] = False
            return r

    df_polar = df.parallel_apply(get_loca_polar, axis=1)
    df_polar.to_csv('polar_1_7d.csv')


