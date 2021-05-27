import pandas as pd
import requests

df = pd.read_csv('participants.csv')
print(df)

url = "http://localhost:8080/api/getTweetLocScore"

payload = {
    "keyword": "a",
    "lat": 48.88048,
    "lng": 2.385939,
    "distance": 1
}
headers = {"Content-Type": "application/json"}

response = requests.request("POST", url, json=payload, headers=headers)
print(response)