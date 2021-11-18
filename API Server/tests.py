import requests

BASE = "http://127.0.0.1:5000/"

r = requests.put( BASE + 'notes/420', {
    "content": "hehe",
    "offer_views": 69,
    })

print(r.status_code)
print(r)
print(r.json())
