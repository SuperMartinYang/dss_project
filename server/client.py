import requests

user_info =  {'address': '0x20764a436e5864ca703f2792759312f9c00c8af9'}
print(user_info)
r = requests.post("http://127.0.0.1:5000/getHistory", data = user_info)

print(r.text)