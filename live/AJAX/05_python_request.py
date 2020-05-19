import requests

res = requests.get('https://koreanjson.com/posts/1')
res = requests.get('https://koreanjson.com/posts/2')
res = requests.get('https://koreanjson.com/posts/3')
res = requests.get('https://koreanjson.com/posts/4')
res = requests.get('https://koreanjson.com/posts/5')

data = res.json()
print(data)

post_content = data.get("content")
print(post_content)
