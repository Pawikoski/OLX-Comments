import requests

BASE = "http://127.0.0.1:5000/"

r = requests.put( BASE + 'notes/2', {
    "content": "drugi",
    "offer_views": 3213,
    })

if r.status_code == 201:
    print("OK")
