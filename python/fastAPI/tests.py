import requests

headers = {
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0IiwiZXhwIjoxNzY1NjM5NzY0fQ.fNh3xD-YE0twVIm_dbL_WtGoXUdycs9zGSTr6UIldSM'
}

request = requests.get('http://127.0.0.1:8000/auth/refresh', headers=headers)

print(request)
print(request.json())