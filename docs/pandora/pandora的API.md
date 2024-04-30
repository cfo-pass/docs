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

论坛：`https://linux.do/`  
邀请码地址(CodeCow佬)：`https://linuxdo-invites.speedcow.top `  

### SessionToken转accessToken(官方接口，因为在吾皇的论坛没有找到)
```
import requests
import json

cookies = {
    'cf_clearance': 'u_KAKoCrBIns5gEljSaCCoo4qQ6azqucYiJDmvYFv7c-1714477461-1.0.1.1-cGzLg9TyXlDcmoyLzZB0ZOaTSdz5panDCMhZQARkZALjBL_9TjmxMi3T9GE7cEcdoBdXQT1t9nNuJAhESNWAdw',
    '__Secure-next-auth.session-token': 'eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..AT0gds2iT28U0z-M.6awP_lpFfYBkCDgq7cdQMkwlRkoOULsUxz-H48Ca4OMi3E5N66_WbfHCoZ01IpdHbCLZ-x7tIxgIwtaOIXpYOrVUImAo5GwnM_BQNH44GeMMBZoS1mGZtN2d5Hmk67psIKU7g6tuwq2wyQ-yyDQCHflSbUIPNQXNnyr58JNGl8ny-jEMjAJD-rKMNhelWmVUakSU8SvErqVjX1RjKPD5p8imD_YeBxMeCKLZ0x-RaCBotIDGytvia4WH2OcaCQXGRVt5wzD0paxHNFmjdgPdy6qEkRWDR04n3yv7kWBL6GhSW-Qjx7HHxE9KXcx9Bsij9trBVwvESA29v5A8kALhmxZz8e-vY4-ZGF3QzDq4Q93g3OkUJxGsZrDIRNQBjSMctmynBnpDQY73eUvWrICi4322DP2JgpD0rf42juoEA0KvrCF3qSod39XTrJYKUntLIRfAHanXZjUdZRixozH_3muS8KRqfoNgqAWJnPATbybPvXV7sJPHQAC5YADoc2B_yP3UHwa64vpTD1jS-DBRJCYL1sZQhMrR_TV5sER5Y1Q4_fkjF7uomPOkGt1I0W2sjqANa_na6TZhrmfDfMknKUeYyhAVRD78HRzpEmhVzQ1_2EPkwGXwXZaAinroDhm464lErOVKALFmTaxJMjS6X0yJK1r_x-iNBMuJeBUNgrZnuIAtFedA0M7bEmWJ0iJu8hVQ7crCRqy54-I66Y9UPXQH5369E27DDL1jL8QEgVLMqsehcit6GLqxavkN9feKUW-nr6jKg2jaLRnXcSV3jJ_g7ai9JKRUFbu_yhMq_9YWMJfSzAoncShdXWhUaM7zdh8iBsQWSRTXaoMUBKYogwZgyYYjTDexABR9NPLiq66tZhr-VStCO3SKyGrnk0Mj1RDTrAKub6LTqkfnXa8myz6Q8i42duHmVMeFFKWQ3OO0fajx2eO85hjcRWDoyn6uD5HeU5Kl1q9cqVxUsRAEuRecs10eKPUbpY1rBEInGUJh-Jfulsoa49-9_1aCRawGdLwVOJcY5Wq32rSXTYDwN0x5-beKPoRAjFY0XaiQZ43yEB6Aa_mgUCnk88POtqsCSfbUg9_Z7FrR4ybGZiLCEcyfbGT_ssmJxaGmTgPWpHQYKgBIeTgjfEwnBeEevKoymsUxz0WsCseyDo2Hrgud77_gJ3D_BZo3kH0tEUAoRuNqFhBPnaeqURCygA8-49LxBU4qGfZd-FvBux0xlJb7fDbZrejfYBhMPEFBs-9slM1Rh2yboEdcaQc04ulIwKcdZeopkrxhZdYw2PhOmV-Y1b6YQ8LPd8QF5lKXnKicrluOcgshSnUztm7zaMYYpFBQe60-NwOAGTfcpR0pjAfdjoHApb0AdBbSs_SK9vB7j1smImgdEKpaF9cyx-FozrU7ur-94NXFtvXsiTouAXixIeag3lcSTHye8XUnLP1gRl3XLqQdp1aMckemmQ7JMzGjLN60NPSLOq1Dcnyf_g6_RJ7ba7ynJNdqTjBqnPQ4aN6TLgXdFqh2uFgop1LXjimwLMLhnmAcCSlRvfxhf-6W8rHlO6TJhp9i3HwD6bDl_3z08Y1YcWwwbPjBVlMevvzTsXon2rWFLiRb9VZ5nT3kWWhKokiBhEQy2rLPd2dDUssXp8MAi7fGbGM0x1Oy07cisA_OhayGJCEHnx8IDAg7Bbmg8MKqX0A5vPSvCA9tsfuF-inprlsXxYy0Y0IK1bBPqTem2zfOZwoNI227ndJjBEoIwIHEv6SBBbHfONmHen5EkOc5RrLcuN9Ohzfc6CENrPZN-a8idUBneFnbqNkQFdoCIImPQKZ6kNbCkET3E1IsLn2VLd2Bt_SvLLuxM_btDMsIlfBrDPnVjilFuA-8QvV3NRWcDejulD1iLaMfmnFmfYLIRVc3yGXGQE_hnnfWK2WW2I9PGVSxtq6FBYToxmuZWleYL77l0v9vdkstv16RmzAgMORj7gjLUlWLrnHfvxQm8EcOkC2Ng24lwN-sdVWzVHdxhuaqCgzBUG5F2yqthUUIbstlC7iZD19FQRRslH9jtlaR-sAMkbFEKnHmzI5K294sFmMTXrlRP94XyN3dJtxhi7hVVyfUF4n9QiSCnkx7JdZaWMeJRXpIPkBFDUT1zYvFwsgTU2rv_A9O8RC7KFQFnDsd21ajq1GMAX-Aysf4eYYAFODWdq7juCYezsweWHj5uVW6s_62NzQ9EaFwUAQ8AiYFeB7gwmQi6jKfci2GqEZoJmvJL_v015nFqQUBiah4iM_RG52JxRzSCV3QbuP3pif0-_WFNJIyIINNn25LnxEWTcSbP6sfpZPddSRIpr-K6pShSYMweFGbnYfDDC99ck_xMKt4TEGVq0ZwdZASzc0-ZC2dq7I_XhixIw4WQtbL5C4I_CsiLFj9dHK8oNhJKMwboMTkfvZ9F9IytS0B-rreSKPrPWfZghtlHhgMkkqMwNjARzNe2B61WiYiCpMrFPTG0OdyuscKkYb1H8NoKfGZk0zAIefNTOilg6l7O-cEM2XyPvntgYeDKU-E_P7ShTAAvt91gJerRAzqXd-p_yDMgrEtUAj7wCrSNY-2_xv6OxUojkAncfYVFqGbH4T9DVd6_Whe_LvdtFij0EEAd_nZUHhqWA62q6ga8sQMg2KQ2AZIixb67NGD9woIvVEPkanGAtdYfjkuQrtLeLKkz0xLGRtxQMXV53Kv1ms9_-C7NmKgwfhZ14Ltaysc821p44Zr5J0_yaWFhcxZv9QUGAuA3sRguSyTDaHem_ZpJAEWBQpziKzsA2ozsmd1e-LwoE4CQgSqu4D23pbuuuxo7tTCoGUqQHsOf-5QaTJW1r-3sQsYixFm7zHXfX06TucAyNDpLTs73KZChvMTi8kpAj5P8YQx-JBIKPo4AQ83GFxnX1W7FvNLxzrCM7LwS9hAkKtuWfXp8_A.QxgvXtgV6DFkz0r75Afpqw',
}

headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
}

response = requests.get('https://chat.openai.com/api/auth/session', cookies=cookies, headers=headers)

print(json.dumps(response.json(), indent=4, ensure_ascii=False))
```

### 显示账号有哪些模型
```
import requests
import json


headers = {
    'authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJhZHp6enowODA4MDRAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWV9LCJodHRwczovL2FwaS5vcGVuYWkuY29tL2F1dGgiOnsicG9pZCI6Im9yZy1UOTdIMVdRSGtiWmtINjZoa2VLczU5NFciLCJ1c2VyX2lkIjoidXNlci1sVkdKQWdBbTZYRzZhS2NqUTI3S3ZHdmcifSwiaXNzIjoiaHR0cHM6Ly9hdXRoMC5vcGVuYWkuY29tLyIsInN1YiI6ImF1dGgwfDYzODJkZjA3MWE0NWZkMWRhYWY0NWY2MSIsImF1ZCI6WyJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxIiwiaHR0cHM6Ly9vcGVuYWkub3BlbmFpLmF1dGgwYXBwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE3MTQxMDc2NzYsImV4cCI6MTcxNDk3MTY3Niwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBtb2RlbC5yZWFkIG1vZGVsLnJlcXVlc3Qgb3JnYW5pemF0aW9uLnJlYWQgb3JnYW5pemF0aW9uLndyaXRlIG9mZmxpbmVfYWNjZXNzIiwiYXpwIjoiVGRKSWNiZTE2V29USHROOTVueXl3aDVFNHlPbzZJdEcifQ.q9adcctN-IfduGTqqxHNEvGAJr-rTRyRrmOLvspwmJXYgMfrTMhk2a_6paEWfTga0MCg42TNT9Xe8JC8JQUOPTwubkUHxnoS75El3wny__BToh21UOQAda2oDFcRWHYkRoSl6d5TDx-C4sdWX4LdheZdFNMtqTkBviymApDTtZSlDn4zKw5TbKwl6u797eE324cXu6150h8ZfxiN03pJiFZg6kwNYSEvYFnPgGuV9BjuPDnXuoueWzULPw8w2XDWIVbWTVu2blEiOiIFFBE41JFKvah0vBCyCcS0ZxmRujrw5C4J5MaXbA-yQl_otL3Y59Qrni0UeT2W21IaYHQbvg',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
}


response = requests.get('https://new.oaifree.com/backend-api/models', headers=headers).json()

print(json.dumps(response, indent=4, ensure_ascii=False))
```


### RefreshToken生成AccessToken

```
import requests
import json

# 设置 API 的 URL
url = "https://token.oaifree.com/api/auth/refresh"

# 定义要发送的数据
data = {
    'refresh_token': 'tSmmTf7OQqZyfk80_kf3YT6pSOdZ_iSUVp508tu1ixVc8'
}

# 发送 POST 请求
response = requests.post(url, data=data)

# 检查响应
if response.status_code == 200:
    # 打印响应的 JSON 数据
    print(json.dumps(response.json(), indent=4, ensure_ascii=False))
else:
    print("Failed to refresh token:", response.status_code)
```






### 对话接口(前提是GPT4)
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


镜像网址：`https://new.oaifree.com/`  
share token地址：`https://chat.oaifree.com/token`  
ShareToken登录：`https://new.oaifree.com/auth/login_share?token=FK密钥`  

### 吾皇的接口

`https://chat.openai.com/backend-api/*`  
`https://chat.openai.com/public-api/*`  
以上接口代理，分别对应：
`https://chat.oaifree.com/dad04481-fa3f-494e-b90c-b822128073e5/backend-api/*`  
`https://chat.oaifree.com/dad04481-fa3f-494e-b90c-b822128073e5/public-api/*`   




### 生成FKtoken

```
import requests
import json


headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
}

data = {
    'unique_name': '6666',
    'access_token': 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJhZHp6enowODA4MDRAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWV9LCJodHRwczovL2FwaS5vcGVuYWkuY29tL2F1dGgiOnsicG9pZCI6Im9yZy1UOTdIMVdRSGtiWmtINjZoa2VLczU5NFciLCJ1c2VyX2lkIjoidXNlci1sVkdKQWdBbTZYRzZhS2NqUTI3S3ZHdmcifSwiaXNzIjoiaHR0cHM6Ly9hdXRoMC5vcGVuYWkuY29tLyIsInN1YiI6ImF1dGgwfDYzODJkZjA3MWE0NWZkMWRhYWY0NWY2MSIsImF1ZCI6WyJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxIiwiaHR0cHM6Ly9vcGVuYWkub3BlbmFpLmF1dGgwYXBwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE3MTQ0Nzg3NDksImV4cCI6MTcxNTM0Mjc0OSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBtb2RlbC5yZWFkIG1vZGVsLnJlcXVlc3Qgb3JnYW5pemF0aW9uLnJlYWQgb2ZmbGluZV9hY2Nlc3MiLCJhenAiOiJwZGxMSVgyWTcyTUlsMnJoTGhURTlWVjliTjkwNWtCaCJ9.DQflzHad61F4YEkBwYtTyxu7z45o_9BfsjxSrHPQQxcHDCmyJ83IPOvslidix5reKB-hqzyY7aMtcP3T5KDfcbA6CIJmG1wgg_iSRoV712zeTf-HTMtpEKJIzkUbWcJn3mfMg_0LILNinQFT0EgRwhXDaaUUd-YDgyV1HVpDWNUvmhPnRvi8JFA2-F-P2Ys_yXeaiPbu8A856D326eveOfx0u3ChHVN2qeoC2r7I5qQjQkulTKNfnlOYo2VATvOtv3O3QOlBPE_Go1eIrMTzy_oE_zUPCLXmXPkPMpV1IEdjJbV0Flf7B-8rL6vQZe4-0ixvywXxjxHpQT1lhncKsQ',
    'expires_in': '0',
    'site_limit': '',
    'gpt35_limit': '-1',
    'gpt4_limit': '-1',
    'show_conversations': 'true',
}

response = requests.post('https://chat.oaifree.com/token/register', headers=headers, data=data)


# 打印响应的 JSON 数据
print(json.dumps(response.json(), indent=4, ensure_ascii=False))
```



### 登录链接也只能使用一次，3分钟有效。
```
import requests
import json

headers = {
    'Origin': 'https://new.oaifree.com',
}

json_data = {
    'share_token': 'fk-VJgxikgdgfpjJDUOAX2NbboSz3bQ0NSKqVGnThaxl5A',
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
