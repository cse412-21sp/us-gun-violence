from typing import Optional

from pydantic import BaseModel

# class NoteSchema(BaseModel):
#     title: Optional[str]
#     content: Optional[str]

#     class Config:
#         schema_extra = {
#             "example": {
#                 "title": "LogRocket.",
#                 "content": "Logrocket is the most flexible publishing company for technical authors. From editors to payment, the process is too flexible and that's what makes it great."
#             }
#         }



class TweetSchema(BaseModel):
    keyword: str
    limit: Optional[int]

class TweeetNearCord(BaseModel):
    keyword: str
    lat: float
    lng: float
    distance: float
    limit: Optional[int]
    unit: Optional[str] = "km"
    since: Optional[str] = "2014-01-01"
    until: Optional[str] = "2018-12-31"

class TxtSchema(BaseModel):
    text: str


class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None
