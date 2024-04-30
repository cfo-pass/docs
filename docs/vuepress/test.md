---
title: pandora的API
date: 2024-04-30
category:
  - pandora
tag:
  - 吾皇
  - 牛逼
order: 1
---





```
import requests
import json

cookies = {
    '__Secure-next-auth.session-token': 'serdftghjk',
}

headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
}

response = requests.get('https://chat.openai.com/api/auth/session', cookies=cookies, headers=headers)

print(response.text)
print(json.dumps(response, indent=4, ensure_ascii=False))
```


```
import requests
import json



headers = {
    'authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJyZWV2ZXN0eWxlcjExQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlfSwiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS9hdXRoIjp7InBvaWQiOiJvcmctTE01QWpqU0FwVENrTmx1S1ZFN0Q4YmNZIiwidXNlcl9pZCI6InVzZXItbEJ2M1pscFFZeUhGQW5zM2FoUGJ5UGFXIn0sImlzcyI6Imh0dHBzOi8vYXV0aDAub3BlbmFpLmNvbS8iLCJzdWIiOiJhdXRoMHw2NTFhMjgxNTJlMzBkNWZkMGM5ZTI1ZDAiLCJhdWQiOlsiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MSIsImh0dHBzOi8vb3BlbmFpLm9wZW5haS5hdXRoMGFwcC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNzE0MDE1MDM0LCJleHAiOjE3MTQ4NzkwMzQsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgbW9kZWwucmVhZCBtb2RlbC5yZXF1ZXN0IG9yZ2FuaXphdGlvbi5yZWFkIG9yZ2FuaXphdGlvbi53cml0ZSBvZmZsaW5lX2FjY2VzcyIsImF6cCI6IlRkSkljYmUxNldvVEh0Tjk1bnl5d2g1RTR5T282SXRHIn0.BN01OvB1Hk_WW6b_LkQpXhz-Z0FvFtoCRcNXaS2CdCwr9wK-14aHkZ5ejgM_bkCIxE4gDSFKbrwnUNkXKhg5eYJeG_CWTh5ffNrHt93dQkzy9ixt7_jS90XwkbsEAJeUaFPGgUQwMxNauXuulMUDlXzX9myK8P1aSk4SWSJitojy94GmiI4ARSqVXNl8rtO_OZZlveZc-MjhxeofgQtktIQcH3C1KO7YgftszKbO0qoxF5cOwMxyqTWH51paArvxQ8I37c5BDZxTbjo13F2qTFdaz32PQFW2vq_GLp1irb9XgGFxTGGpp9zwtv8Fht6Cv8s3QPzagnWA9fggn0RWSg',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
}


response = requests.get('https://chat.openai.com/backend-api/models', headers=headers).json()


print(json.dumps(response, indent=4, ensure_ascii=False))
```


```
import requests
import json

# 设置 API 的 URL
url = "https://token.oaifree.com/api/auth/refresh"

# 定义要发送的数据
data = {
    'refresh_token': '8w0tih-OaUDqg8bEhrQXMnRWx6j8WG7a-UWCBpsR8r7dP'
}

# 发送 POST 请求
response = requests.post(url, data=data).json()

# 检查响应
if response.status_code == 200:
    # 打印响应的 JSON 数据
    print(json.dumps(response, indent=4, ensure_ascii=False))
else:
    print("Failed to refresh token:", response.status_code)

```


```
import requests

url = "https://api.oaifree.com/v1/chat/completions"
payload = {
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": "Say this is a test!"}],
    "temperature": 0.7
}
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_OPENAI_API_KEY"
}

response = requests.post(url, json=payload, headers=headers)
print(response.text)
```


### 前提是GPT4
```
import requests

url = "https://api.oaifree.com/v1/chat/completions"
headers = {
    "Authorization": "Bearer your_accessToken",
    "Content-Type": "application/json"
}
data = {
    "messages": [
        {
            "role": "user",
            "content": "hi"
        }
    ],
    "model": "gpt-3.5-turbo",
}

response = requests.post(url, headers=headers, json=data)
print(response.text)
```


镜像网址：https://new.oaifree.com/
share token地址：https://chat.oaifree.com/token
ShareToken登录：https://new.oaifree.com/auth/login_share?token=FK密钥


https://chat.openai.com/backend-api/*
https://chat.openai.com/public-api/*

以上接口代理，分别对应：

https://chat.oaifree.com/dad04481-fa3f-494e-b90c-b822128073e5/backend-api/*
https://chat.oaifree.com/dad04481-fa3f-494e-b90c-b822128073e5/public-api/*



### 有效期3分钟

```
import requests
import json

headers = {
    'Origin': 'https://new.oaifree.com',
}

json_data = {
    'share_token': 'fk-346_qWjhfd00Lumof9aQnt4Bmd1R2FyQN0chJGUHGow',
}

response = requests.post('https://new.oaifree.com/api/auth/oauth_token', headers=headers, json=json_data).json()

print(json.dumps(response, indent=4, ensure_ascii=False))
```



### 反代pandora：

```
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    url.host = 'new.oaifree.com';
    return fetch(new Request(url, request))
  }
}
```
