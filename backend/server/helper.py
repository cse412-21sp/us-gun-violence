import json
import pandas as pd 

def tmpJsonToRealJson():
  df = pd.read_json("tmp.json", orient='record', lines=True)
  return df.to_json()

