from fastapi import APIRouter, Body
from fastapi.encoders import jsonable_encoder
from server.model import TweetSchema,  TxtSchema, Item, TweeetNearCord
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from server.helper import tmpJsonToRealJson
import twint

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



@router.post('/getTweetLocScore')
async def get_tweet_loc(params: TweeetNearCord) -> dict:
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
    except:
        print('there is some problem')

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