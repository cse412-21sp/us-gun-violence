from fastapi import APIRouter, Body, Response, status
from fastapi.encoders import jsonable_encoder
from server.model import TweetSchema,  TxtSchema, Item, TweeetNearCord, tweetGraphSchema, tweetWordCloud
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from server.helper import tmpJsonToRealJson
import twint
from collections import Counter
from nltk.corpus import stopwords


nltk.download('words')


router = APIRouter()

@router.post('/sentiment')
def get_sentiment(txt: TxtSchema) -> dict:
    sid = SentimentIntensityAnalyzer()
    return {"outp": sid.polarity_scores(txt.text)}

@router.get('/nltk_path')
def get_path() -> dict:
    return nltk.data.path

@router.get('/tweet/user/{username}')
def get_tweet(username: str):
    c = twint.Config()
    c.Proxy_host = "127.0.0.1"
    c.Proxy_port = 5566
    c.Proxy_type = "http"
    c.Limit = 180
    c.Username = username
    c.Pandas = True
    twint.run.Search(c)

    return twint.storage.panda.Tweets_df.to_json()


@router.post('/getTweetLoc')
def get_tweet_loc(params: TweeetNearCord) -> dict:
    c = twint.Config()
    c.Proxy_host = "127.0.0.1"
    c.Proxy_port = 5566
    c.Proxy_type = "http"
    c.Search = params.keyword
    if not params.limit:
        c.Limit = 20
    else:
        c.Limit = params.limit
    c.Geo = f"{str(params.lat)},{str(params.lng)},{str(params.distance)}{params.unit}"
    c.Pandas = True
    twint.run.Search(c)
    print(twint.storage.panda.Tweets_df.info())

    return twint.storage.panda.Tweets_df.to_json()


@router.post('/getGraph')
def get_graph(params: tweetGraphSchema) -> dict:
    c = twint.Config()
    c.Proxy_host = "127.0.0.1"
    c.Proxy_port = 5566
    c.Proxy_type = "http"
    c.Search = params.keyword
    if params.username: 
        c.Username = params.username
    c.Pandas = True
    print(twint.storage.panda.Tweets_df.info)
    return twint.storage.panda.Tweets_df.to_json()
    
@router.post('/getWordCloud')
def get_wordCloud(params: tweetWordCloud, response: Response) -> dict:
    c = twint.Config()
    # c.Proxy_host = "127.0.0.1"
    # c.Proxy_port = 5566
    # c.Proxy_type = "http"
    words = set(nltk.corpus.words.words())
    c.Search = params.keyword
    c.Limit = params.limit
    c.Pandas = True
    c.Lang = "en"
    twint.run.Search(c)
    tweets = twint.storage.panda.Tweets_df
    print(tweets.info())
    if tweets.shape[0] == 0:
        response.status_code = status.HTTP_204_NO_CONTENT
        return {};
    tweets_sent = tweets['tweet'].apply(lambda sent: sent.join(w for w in nltk.wordpunct_tokenize(sent) \
         if w.lower() in words or not w.isalpha()))
    total_counter = Counter()
    common_word_set=set(stopwords.words('english'))
    tweets_remove_common = tweets_sent.apply(lambda txt: (lambda w: not w in common_word_set,txt.split())())
    for index, value in tweets_remove_common.items():
        current = Counter(value.split(''' '''))
        total_counter = total_counter + current
    emotions = dict()
    sid = SentimentIntensityAnalyzer()
    total_counter = total_counter.most_common(100)
    print(total_counter)
    for key, value in total_counter:
        emotions[key] = sid.polarity_scores(key)
    format = list()
    for key, value in total_counter:
        format.append({"text": key, "count": value, "weight": (float(emotions[key]['compound']) + 1) * 300})
    return format 


@router.post('/getTweetLocScore')
def get_tweet_loc(params: TweeetNearCord) -> dict:
    for _ in range(10):
        try:
            c = twint.Config()
            c.Proxy_host = "127.0.0.1"
            c.Proxy_port = 5566
            c.Proxy_type = "http"
            c.Search = params.keyword
            if not params.limit:    
                c.Limit = 20
            else:
                c.Limit = params.limit
            c.Geo = f"{str(params.lat)},{str(params.lng)},{str(params.distance)}{params.unit}"
            c.Pandas = True
            c.Since = params.since
            c.Until = params.until
            twint.run.Search(c)
            sid = SentimentIntensityAnalyzer()
            stat = {"pos": 0, "neg": 0, "neu": 0, "comp": 0}
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
            print(e)
            continue

@router.post('/getTweet')
def get_tweet(params: TweetSchema) -> dict:
    c = twint.Config()
    c.Search = params.keyword
    if not params.limit:
        c.Limit = 20
    else:
        c.Limit = params.limit
    c.Pandas = True
    twint.run.Search(c)

    return twint.storage.panda.Tweets_df.to_json()

@router.post("/items/")
async def create_item(item: Item):
    return item


# notes = {
#     "1": {
#         "title": "My first note",
#         "content": "This is the first note in my notes application"
#     },
#     "2": {
#         "title": "Uniform circular motion.",
#         "content": "Consider a body moving round a circle of radius r, wit uniform speed v as shown below. The speed everywhere is the same as v but direction changes as it moves round the circle."
#     }
# }


# @router.get("/")
# def get_notes() -> dict:
#     return {
#         "data": notes
#     }

# @router.get("/{id}")
# async def get_note(id: str) -> dict:
#     if int(id) > len(notes):
#         return {
#             "error": "Invalid note ID"
#         }

#     for note in notes.keys():
#         if note == id:
#             return {
#                 "data": notes[note]
#             }

#     return {
#         "Error": "Invalid ID"
#     }

# @router.post("/")
# def add_note(note: NoteSchema = Body(...)) -> dict:
#     notes[str(len(notes)+1)] = note.dict()

#     return {
#         "message": "Note added successfully"
#     }
# #
# @router.put("/{id}")
# def update_note(id: str, note: NoteSchema):
#     stored_note = notes[id]
#     if stored_note:
#         stored_note_model = NoteSchema(**stored_note)
#         update_data = note.dict(exclude_unset=True)
#         updated_note = stored_note_model.copy(update=update_data)
#         notes[id] = jsonable_encoder(updated_note)
#         return {
#             "message": "Note updated successfully"
#         }
#     return {
#         "error": "No such note exist"
#     }

# @router.delete("/{id}")
# def delete_note(id: str) -> dict:
#     if int(id) > len(notes):
#         return {
#             "error": "Invalid note ID"
#         }

#     for note in notes.keys():
#         if note == id:
#             del notes[note]
#             return {
#                 "message": "Note deleted"
#             }

#     return {
#         "error": "Note with {} doesn't exist".format(id)
#     }

# c = twint.Config()
# c.Proxy_host = "127.0.0.1"
# c.Proxy_port = 5566
# c.Proxy_type = "http"
# c.Search = "great"
# twint.run.Search(c)