---
title: pandora的API
date: 2024-04-30
category:
  - pandora
tag:
  - 吾皇
  - 反人性
order: 1
---



### SessionToken转accessToken

```
import requests
import json

cookies = {
    '__Secure-next-auth.session-token': 'eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..4hABSX_shMHqixPb.47YXEHtqQhhczNVSBsd6IImoy7tjvsGDmLCZ0fJnVQzuJbPggCAa3CsM4dJnBobtzMORoHltdINgprKQVvtIXt8_24zXEiPyUkXYq3NX-9hUwgKkFtE5IFv3y7L6-JmfyvBjWuStImr6K_Ew1FtnTg9tim-K6FTUOstOfxBcTfchNTx9Ba7c1G0ratmZdGsW9Hbx_Lt7yVtOLWXn3g-i3FSdX97N469kZYYVRtG0iIkksrq17mCOo7Ji1qoMo3AU9EZ20QUFmnlOA_wJRY_Q3VX6FIETSZra1XX_RveBQ7EeQsBtJZ9THcNoua2cN5pdn9Ws_4Q_O2V7VtHxfaHF_UUlU4d-oQF-BzYb5Cwete43hByw1syb01-WeZZApiFji_AQzjfKMF5Ki5lzyBym_AjX8IA1k_e7K4Rr-ZBuxMpqyGlB6TL3LS_IGFyXso4INB2MMzVJE_bb6bWxxFZz1dUl0OuE2hsXwsFBb-C3Ecc7s3G33rOaS-QhjALicJA2S7PmbZfzwbFoQkbmzXjT0F2Qd5a-r2lTv4u3sjPZVt5pOHe0hKOoVtA11sD9vfe3jxP3qEb-Z5SoXo7M4BVzZb9P2rxLue33-ara22GJYmOn-ayjbuxFgKU6-ksyi9cISZYWURVe6rPe96inuNlpG6mwo9p6KwVzzQZVfquXKMNWx5lY92-KK32VbOT0yFXsB1SrrFELGddhOyJtD7-PPjsj19bJx-XzS-0sFXKB7ad21pgowbobUHXuO1XtrKT9YaJ_I_6Fo4bWQ1xua7jxi_2C0ukAsrFMgDYCriVMmamp0ZG_q4YB22HsW9AfK9wfqet6b5cJArD1q9pDtOnD-zs0Hoi-yiDGPw-7MUINwXUR9bnEvftNpPpm7eFphYg2IGrNoVsOK0Cce4gIYTBfEkR8AVsJkQupKCAIiHazwgFdYo4asGeuKOC94baxPeC5HDlbIzlCDt9Q8118O4W9zLo6RDIoRwveHpXeOxTc_PbsXLggVYyqe2RncIjOzMbLXdZHTyQqNEPBKaXPyN-qUGj0OsVLSjL3t2QdCD8i-x6QcMxphRjuVUtOihvUSaNYPjt-3u2DJUGxOySFK8ycM1_5fB7KdrcV9Picp0HrojBWP_exw2Rvt9SBB5WetrzeP1Nj8QAHjljrl3Hx8gAgWFwMFny1RDWgJswC9jhWLLNBezIwnlf5fD2wQqxVjM7iiRC8NabBmDruwu6Hq_VUuAsjqfaOi2eP8MUWm3S0Lt04ZHeOa2YrnlyRCE1maFINuLkzTbngjqAvCwVyvYqn-htRftHXb_BBzxS-4s9HStXddmmpYkWAiRolFzFKywtWGtg5HPUjj8hqVxwgoVuGkPSOiQ56NkCkykxJKQ5ffVcTJN-fbULlOmiMQUvAXGvXGP98ugMyRJ4R7cVVNrp2L3bRGIp1EL5SwXoxHmNCcnCJSKGZT_0GKVdYDt7p33dHkE7y03rSIgZNTL-H4lZ0yLbl-jJDWOay3pIf-Z9SltkZih782u9pYQfk4zYURL0JYSBG_DtsqqNpaQE7wYKSwaL_TIij-GUJpa9DKKCJQeQHs56GtlcooT7U5eDmNnTDV4bUWjGbpXxCQVnxiLZgaRDiW7MH2tX83qC-5Mc1Av0f66teNwPzW4FTrVXyBTQznCfVt2VafmflKhmqFKnKzMPJ3ucP85DvYibOt1SARL6kM2X9K2efeAPBjmj9AiFG7RJGZOteDeAoHzM0afQ9rcMrMIEpfR575X1iAr_8G9K7Nb82mG8_OTavgdDySk5C-vwkT7ia1xedGHrHkyli6_Ncbf06e0hHE6mJ7QowawhVWlxfExsgtCjXaWo_EpfC5uw7IKU9xHkeYeqUCkv9Ub43jqmdvHVHD1lXnsxH2-aGyz-U3zdQewritzc_1Aep3IuUqA505Dek-KaIRhjkNqY9TYXnH2C2SmQBSaxu3e2rBwlEpozNPpLM04tZHj63YP4998RCYhpp5zPHYiFngjJmq2rWbZo-lgl_OAKom5Y7sa9wlC98xFU_kwSTBFNozNBcFa544WUVp0jumpKExbFSoZBJ4wTx5TK-8l4lGJRsEiK_9mqyazMUMqrevqgxe4Uj3cAVw0hc3AeSafyJX_2xmZhdwOyI_jdcKvlEVa8SJdZzxpCD5GuJBN7VgfXrFXvN2ofDmYz3O5wnQIKZPq9LGKiyL2tRBhpkQUYu0I3ZdABGoBIeqCX2CM7M-UAiSUBtHbTiAKEtgkb942CpafC39J-5V-wjvvDNkc8Doz1xpUWTOkKYmIuKqUCN-SIrC45XhFrgsKK3oc-Eg0V3ANkBYTJsEd0mfpx5t1UmfpneQy5zh7te3OcOadf8KuEFz7f0guH2VLXWUOvHP9gMC7NghzM-GivrBlXltl4yuCQMbtSCfWTbd2CQ_rhzKNNhhiGIFVIQ-Hn-_tqlW4bgtyY212cV8yQp-yYmMz6jBmOwnWIjfGK9GRdegHMONbaf7qCtDYtoAh7-VdwhKeHEMTtkIUMqguMqtGIWmYMCGZMIJ9n1qCf3ncMfbnW9rDfoplQ3AX5DjKPcQ5O25XYLDk3KQGmTWRVC6d6Tr5CS1Q2hTTfAcbu_YhUZCo447VR5Sw1G3KgVrKSglEWQse1jf_p2MtLEIjc6Rz43CyPWwCjlaVX3CqoO41uyTxZdcH0ElyhlkAGXhnYX8o-uYmNAmW7tC1E4r_tWxzKVfvy2VevVGZ3cmMrI9qdrszTOXmFs0iuvUuOBvzwW-qqScKC4b89OYxIGx2za18oMXFAEEUj8C0sp_wHTDNoDIHBosGoOd0HvXVFTh9b_xVaGW0z7nZXYWH_noWNfx2e32N-nUKfjRDs7KwXp7vAr55P3leQqis-2Ll-PrhG2dZ_JowKRfsbgS2iLZr3bOEr4C-4KF5Tvb1fE66zru9-UK6c.ZlS4PvtG23RGwpWC5DEDfQ',
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
