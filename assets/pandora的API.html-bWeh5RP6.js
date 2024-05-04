import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,e as s}from"./app-BiCKOQWs.js";const a={},d=s(`<p>论坛：<code>https://linux.do/</code><br> 邀请码地址(CodeCow佬)：<code>https://linuxdo-invites.speedcow.top </code></p><h3 id="sessiontoken转accesstoken-官方接口-因为在吾皇的论坛没有找到" tabindex="-1"><a class="header-anchor" href="#sessiontoken转accesstoken-官方接口-因为在吾皇的论坛没有找到"><span>SessionToken转accessToken(官方接口，因为在吾皇的论坛没有找到)</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import requests
import json

cookies = {
    &#39;cf_clearance&#39;: &#39;u_KAKoCrBIns5gEljSaCCoo4qQ6azqucYiJDmvYFv7c-1714477461-1.0.1.1-cGzLg9TyXlDcmoyLzZB0ZOaTSdz5panDCMhZQARkZALjBL_9TjmxMi3T9GE7cEcdoBdXQT1t9nNuJAhESNWAdw&#39;,
    &#39;__Secure-next-auth.session-token&#39;: &#39;eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..AT0gds2iT28U0z-M.6awP_lpFfYBkCDgq7cdQMkwlRkoOULsUxz-H48Ca4OMi3E5N66_WbfHCoZ01IpdHbCLZ-x7tIxgIwtaOIXpYOrVUImAo5GwnM_BQNH44GeMMBZoS1mGZtN2d5Hmk67psIKU7g6tuwq2wyQ-yyDQCHflSbUIPNQXNnyr58JNGl8ny-jEMjAJD-rKMNhelWmVUakSU8SvErqVjX1RjKPD5p8imD_YeBxMeCKLZ0x-RaCBotIDGytvia4WH2OcaCQXGRVt5wzD0paxHNFmjdgPdy6qEkRWDR04n3yv7kWBL6GhSW-Qjx7HHxE9KXcx9Bsij9trBVwvESA29v5A8kALhmxZz8e-vY4-ZGF3QzDq4Q93g3OkUJxGsZrDIRNQBjSMctmynBnpDQY73eUvWrICi4322DP2JgpD0rf42juoEA0KvrCF3qSod39XTrJYKUntLIRfAHanXZjUdZRixozH_3muS8KRqfoNgqAWJnPATbybPvXV7sJPHQAC5YADoc2B_yP3UHwa64vpTD1jS-DBRJCYL1sZQhMrR_TV5sER5Y1Q4_fkjF7uomPOkGt1I0W2sjqANa_na6TZhrmfDfMknKUeYyhAVRD78HRzpEmhVzQ1_2EPkwGXwXZaAinroDhm464lErOVKALFmTaxJMjS6X0yJK1r_x-iNBMuJeBUNgrZnuIAtFedA0M7bEmWJ0iJu8hVQ7crCRqy54-I66Y9UPXQH5369E27DDL1jL8QEgVLMqsehcit6GLqxavkN9feKUW-nr6jKg2jaLRnXcSV3jJ_g7ai9JKRUFbu_yhMq_9YWMJfSzAoncShdXWhUaM7zdh8iBsQWSRTXaoMUBKYogwZgyYYjTDexABR9NPLiq66tZhr-VStCO3SKyGrnk0Mj1RDTrAKub6LTqkfnXa8myz6Q8i42duHmVMeFFKWQ3OO0fajx2eO85hjcRWDoyn6uD5HeU5Kl1q9cqVxUsRAEuRecs10eKPUbpY1rBEInGUJh-Jfulsoa49-9_1aCRawGdLwVOJcY5Wq32rSXTYDwN0x5-beKPoRAjFY0XaiQZ43yEB6Aa_mgUCnk88POtqsCSfbUg9_Z7FrR4ybGZiLCEcyfbGT_ssmJxaGmTgPWpHQYKgBIeTgjfEwnBeEevKoymsUxz0WsCseyDo2Hrgud77_gJ3D_BZo3kH0tEUAoRuNqFhBPnaeqURCygA8-49LxBU4qGfZd-FvBux0xlJb7fDbZrejfYBhMPEFBs-9slM1Rh2yboEdcaQc04ulIwKcdZeopkrxhZdYw2PhOmV-Y1b6YQ8LPd8QF5lKXnKicrluOcgshSnUztm7zaMYYpFBQe60-NwOAGTfcpR0pjAfdjoHApb0AdBbSs_SK9vB7j1smImgdEKpaF9cyx-FozrU7ur-94NXFtvXsiTouAXixIeag3lcSTHye8XUnLP1gRl3XLqQdp1aMckemmQ7JMzGjLN60NPSLOq1Dcnyf_g6_RJ7ba7ynJNdqTjBqnPQ4aN6TLgXdFqh2uFgop1LXjimwLMLhnmAcCSlRvfxhf-6W8rHlO6TJhp9i3HwD6bDl_3z08Y1YcWwwbPjBVlMevvzTsXon2rWFLiRb9VZ5nT3kWWhKokiBhEQy2rLPd2dDUssXp8MAi7fGbGM0x1Oy07cisA_OhayGJCEHnx8IDAg7Bbmg8MKqX0A5vPSvCA9tsfuF-inprlsXxYy0Y0IK1bBPqTem2zfOZwoNI227ndJjBEoIwIHEv6SBBbHfONmHen5EkOc5RrLcuN9Ohzfc6CENrPZN-a8idUBneFnbqNkQFdoCIImPQKZ6kNbCkET3E1IsLn2VLd2Bt_SvLLuxM_btDMsIlfBrDPnVjilFuA-8QvV3NRWcDejulD1iLaMfmnFmfYLIRVc3yGXGQE_hnnfWK2WW2I9PGVSxtq6FBYToxmuZWleYL77l0v9vdkstv16RmzAgMORj7gjLUlWLrnHfvxQm8EcOkC2Ng24lwN-sdVWzVHdxhuaqCgzBUG5F2yqthUUIbstlC7iZD19FQRRslH9jtlaR-sAMkbFEKnHmzI5K294sFmMTXrlRP94XyN3dJtxhi7hVVyfUF4n9QiSCnkx7JdZaWMeJRXpIPkBFDUT1zYvFwsgTU2rv_A9O8RC7KFQFnDsd21ajq1GMAX-Aysf4eYYAFODWdq7juCYezsweWHj5uVW6s_62NzQ9EaFwUAQ8AiYFeB7gwmQi6jKfci2GqEZoJmvJL_v015nFqQUBiah4iM_RG52JxRzSCV3QbuP3pif0-_WFNJIyIINNn25LnxEWTcSbP6sfpZPddSRIpr-K6pShSYMweFGbnYfDDC99ck_xMKt4TEGVq0ZwdZASzc0-ZC2dq7I_XhixIw4WQtbL5C4I_CsiLFj9dHK8oNhJKMwboMTkfvZ9F9IytS0B-rreSKPrPWfZghtlHhgMkkqMwNjARzNe2B61WiYiCpMrFPTG0OdyuscKkYb1H8NoKfGZk0zAIefNTOilg6l7O-cEM2XyPvntgYeDKU-E_P7ShTAAvt91gJerRAzqXd-p_yDMgrEtUAj7wCrSNY-2_xv6OxUojkAncfYVFqGbH4T9DVd6_Whe_LvdtFij0EEAd_nZUHhqWA62q6ga8sQMg2KQ2AZIixb67NGD9woIvVEPkanGAtdYfjkuQrtLeLKkz0xLGRtxQMXV53Kv1ms9_-C7NmKgwfhZ14Ltaysc821p44Zr5J0_yaWFhcxZv9QUGAuA3sRguSyTDaHem_ZpJAEWBQpziKzsA2ozsmd1e-LwoE4CQgSqu4D23pbuuuxo7tTCoGUqQHsOf-5QaTJW1r-3sQsYixFm7zHXfX06TucAyNDpLTs73KZChvMTi8kpAj5P8YQx-JBIKPo4AQ83GFxnX1W7FvNLxzrCM7LwS9hAkKtuWfXp8_A.QxgvXtgV6DFkz0r75Afpqw&#39;,
}

headers = {
    &#39;accept&#39;: &#39;*/*&#39;,
    &#39;accept-language&#39;: &#39;zh-CN,zh;q=0.9,en;q=0.8&#39;,
    &#39;user-agent&#39;: &#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36&#39;,
}

response = requests.get(&#39;https://chat.openai.com/api/auth/session&#39;, cookies=cookies, headers=headers)

print(json.dumps(response.json(), indent=4, ensure_ascii=False))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示账号有哪些模型" tabindex="-1"><a class="header-anchor" href="#显示账号有哪些模型"><span>显示账号有哪些模型</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import requests
import json


headers = {
    &#39;authorization&#39;: &#39;Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJhZHp6enowODA4MDRAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWV9LCJodHRwczovL2FwaS5vcGVuYWkuY29tL2F1dGgiOnsicG9pZCI6Im9yZy1UOTdIMVdRSGtiWmtINjZoa2VLczU5NFciLCJ1c2VyX2lkIjoidXNlci1sVkdKQWdBbTZYRzZhS2NqUTI3S3ZHdmcifSwiaXNzIjoiaHR0cHM6Ly9hdXRoMC5vcGVuYWkuY29tLyIsInN1YiI6ImF1dGgwfDYzODJkZjA3MWE0NWZkMWRhYWY0NWY2MSIsImF1ZCI6WyJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxIiwiaHR0cHM6Ly9vcGVuYWkub3BlbmFpLmF1dGgwYXBwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE3MTQxMDc2NzYsImV4cCI6MTcxNDk3MTY3Niwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBtb2RlbC5yZWFkIG1vZGVsLnJlcXVlc3Qgb3JnYW5pemF0aW9uLnJlYWQgb3JnYW5pemF0aW9uLndyaXRlIG9mZmxpbmVfYWNjZXNzIiwiYXpwIjoiVGRKSWNiZTE2V29USHROOTVueXl3aDVFNHlPbzZJdEcifQ.q9adcctN-IfduGTqqxHNEvGAJr-rTRyRrmOLvspwmJXYgMfrTMhk2a_6paEWfTga0MCg42TNT9Xe8JC8JQUOPTwubkUHxnoS75El3wny__BToh21UOQAda2oDFcRWHYkRoSl6d5TDx-C4sdWX4LdheZdFNMtqTkBviymApDTtZSlDn4zKw5TbKwl6u797eE324cXu6150h8ZfxiN03pJiFZg6kwNYSEvYFnPgGuV9BjuPDnXuoueWzULPw8w2XDWIVbWTVu2blEiOiIFFBE41JFKvah0vBCyCcS0ZxmRujrw5C4J5MaXbA-yQl_otL3Y59Qrni0UeT2W21IaYHQbvg&#39;,
    &#39;user-agent&#39;: &#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36&#39;,
}


response = requests.get(&#39;https://new.oaifree.com/backend-api/models&#39;, headers=headers).json()

print(json.dumps(response, indent=4, ensure_ascii=False))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="refreshtoken生成accesstoken" tabindex="-1"><a class="header-anchor" href="#refreshtoken生成accesstoken"><span>RefreshToken生成AccessToken</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import requests
import json

# 设置 API 的 URL
url = &quot;https://token.oaifree.com/api/auth/refresh&quot;

# 定义要发送的数据
data = {
    &#39;refresh_token&#39;: &#39;tSmmTf7OQqZyfk80_kf3YT6pSOdZ_iSUVp508tu1ixVc8&#39;
}

# 发送 POST 请求
response = requests.post(url, data=data)

# 检查响应
if response.status_code == 200:
    # 打印响应的 JSON 数据
    print(json.dumps(response.json(), indent=4, ensure_ascii=False))
else:
    print(&quot;Failed to refresh token:&quot;, response.status_code)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对话接口-前提是gpt4" tabindex="-1"><a class="header-anchor" href="#对话接口-前提是gpt4"><span>对话接口(前提是GPT4)</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import requests

url = &quot;https://api.oaifree.com/v1/chat/completions&quot;
headers = {
    &quot;Authorization&quot;: &quot;Bearer your_accessToken&quot;,
    &quot;Content-Type&quot;: &quot;application/json&quot;
}
data = {
    &quot;messages&quot;: [
        {
            &quot;role&quot;: &quot;user&quot;,
            &quot;content&quot;: &quot;hi&quot;
        }
    ],
    &quot;model&quot;: &quot;gpt-3.5-turbo&quot;,
}

response = requests.post(url, headers=headers, json=data)
print(response.text)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>镜像网址：<code>https://new.oaifree.com/</code><br> share token地址：<code>https://chat.oaifree.com/token</code><br> ShareToken登录：<code>https://new.oaifree.com/auth/login_share?token=FK密钥</code></p><h3 id="吾皇的接口" tabindex="-1"><a class="header-anchor" href="#吾皇的接口"><span>吾皇的接口</span></a></h3><p><code>https://chat.openai.com/backend-api/*</code><br><code>https://chat.openai.com/public-api/*</code><br> 以上接口代理，分别对应： <code>https://chat.oaifree.com/dad04481-fa3f-494e-b90c-b822128073e5/backend-api/*</code><br><code>https://chat.oaifree.com/dad04481-fa3f-494e-b90c-b822128073e5/public-api/*</code></p><h3 id="生成fktoken" tabindex="-1"><a class="header-anchor" href="#生成fktoken"><span>生成FKtoken</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import requests
import json


headers = {
    &#39;user-agent&#39;: &#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36&#39;,
}

data = {
    &#39;unique_name&#39;: &#39;6666&#39;,
    &#39;access_token&#39;: &#39;eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJhZHp6enowODA4MDRAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWV9LCJodHRwczovL2FwaS5vcGVuYWkuY29tL2F1dGgiOnsicG9pZCI6Im9yZy1UOTdIMVdRSGtiWmtINjZoa2VLczU5NFciLCJ1c2VyX2lkIjoidXNlci1sVkdKQWdBbTZYRzZhS2NqUTI3S3ZHdmcifSwiaXNzIjoiaHR0cHM6Ly9hdXRoMC5vcGVuYWkuY29tLyIsInN1YiI6ImF1dGgwfDYzODJkZjA3MWE0NWZkMWRhYWY0NWY2MSIsImF1ZCI6WyJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxIiwiaHR0cHM6Ly9vcGVuYWkub3BlbmFpLmF1dGgwYXBwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE3MTQ0Nzg3NDksImV4cCI6MTcxNTM0Mjc0OSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBtb2RlbC5yZWFkIG1vZGVsLnJlcXVlc3Qgb3JnYW5pemF0aW9uLnJlYWQgb2ZmbGluZV9hY2Nlc3MiLCJhenAiOiJwZGxMSVgyWTcyTUlsMnJoTGhURTlWVjliTjkwNWtCaCJ9.DQflzHad61F4YEkBwYtTyxu7z45o_9BfsjxSrHPQQxcHDCmyJ83IPOvslidix5reKB-hqzyY7aMtcP3T5KDfcbA6CIJmG1wgg_iSRoV712zeTf-HTMtpEKJIzkUbWcJn3mfMg_0LILNinQFT0EgRwhXDaaUUd-YDgyV1HVpDWNUvmhPnRvi8JFA2-F-P2Ys_yXeaiPbu8A856D326eveOfx0u3ChHVN2qeoC2r7I5qQjQkulTKNfnlOYo2VATvOtv3O3QOlBPE_Go1eIrMTzy_oE_zUPCLXmXPkPMpV1IEdjJbV0Flf7B-8rL6vQZe4-0ixvywXxjxHpQT1lhncKsQ&#39;,
    &#39;expires_in&#39;: &#39;0&#39;,
    &#39;site_limit&#39;: &#39;&#39;,
    &#39;gpt35_limit&#39;: &#39;-1&#39;,
    &#39;gpt4_limit&#39;: &#39;-1&#39;,
    &#39;show_conversations&#39;: &#39;true&#39;,
}

response = requests.post(&#39;https://chat.oaifree.com/token/register&#39;, headers=headers, data=data)


# 打印响应的 JSON 数据
print(json.dumps(response.json(), indent=4, ensure_ascii=False))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="登录链接也只能使用一次-3分钟有效。" tabindex="-1"><a class="header-anchor" href="#登录链接也只能使用一次-3分钟有效。"><span>登录链接也只能使用一次，3分钟有效。</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import requests
import json

headers = {
    &#39;Origin&#39;: &#39;https://new.oaifree.com&#39;,
}

json_data = {
    &#39;share_token&#39;: &#39;fk-VJgxikgdgfpjJDUOAX2NbboSz3bQ0NSKqVGnThaxl5A&#39;,
}

response = requests.post(&#39;https://new.oaifree.com/api/auth/oauth_token&#39;, headers=headers, json=json_data).json()

print(json.dumps(response, indent=4, ensure_ascii=False))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="反代pandora" tabindex="-1"><a class="header-anchor" href="#反代pandora"><span>反代pandora：</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    url.host = &#39;new.oaifree.com&#39;;
    return fetch(new Request(url, request))
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),t=[d];function l(r,c){return n(),i("div",null,t)}const u=e(a,[["render",l],["__file","pandora的API.html.vue"]]),m=JSON.parse(`{"path":"/pandora/pandora%E7%9A%84API.html","title":"pandora的API","lang":"zh-CN","frontmatter":{"title":"pandora的API","date":"2024-04-30T00:00:00.000Z","category":["pandora"],"tag":["吾皇","反人性"],"order":1},"headers":[{"level":3,"title":"SessionToken转accessToken(官方接口，因为在吾皇的论坛没有找到)","slug":"sessiontoken转accesstoken-官方接口-因为在吾皇的论坛没有找到","link":"#sessiontoken转accesstoken-官方接口-因为在吾皇的论坛没有找到","children":[]},{"level":3,"title":"显示账号有哪些模型","slug":"显示账号有哪些模型","link":"#显示账号有哪些模型","children":[]},{"level":3,"title":"RefreshToken生成AccessToken","slug":"refreshtoken生成accesstoken","link":"#refreshtoken生成accesstoken","children":[]},{"level":3,"title":"对话接口(前提是GPT4)","slug":"对话接口-前提是gpt4","link":"#对话接口-前提是gpt4","children":[]},{"level":3,"title":"吾皇的接口","slug":"吾皇的接口","link":"#吾皇的接口","children":[]},{"level":3,"title":"生成FKtoken","slug":"生成fktoken","link":"#生成fktoken","children":[]},{"level":3,"title":"登录链接也只能使用一次，3分钟有效。","slug":"登录链接也只能使用一次-3分钟有效。","link":"#登录链接也只能使用一次-3分钟有效。","children":[]},{"level":3,"title":"反代pandora：","slug":"反代pandora","link":"#反代pandora","children":[]}],"git":{"createdTime":1714475408000,"updatedTime":1714481139000,"contributors":[{"name":"cfo-pass","email":"162004147+cfo-pass@users.noreply.github.com","commits":6}]},"readingTime":{"minutes":1.65,"words":496},"filePathRelative":"pandora/pandora的API.md","localizedDate":"2024年4月30日","excerpt":"<p>论坛：<code>https://linux.do/</code><br>\\n邀请码地址(CodeCow佬)：<code>https://linuxdo-invites.speedcow.top </code></p>\\n<h3>SessionToken转accessToken(官方接口，因为在吾皇的论坛没有找到)</h3>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>import requests\\nimport json\\n\\ncookies = {\\n    'cf_clearance': 'u_KAKoCrBIns5gEljSaCCoo4qQ6azqucYiJDmvYFv7c-1714477461-1.0.1.1-cGzLg9TyXlDcmoyLzZB0ZOaTSdz5panDCMhZQARkZALjBL_9TjmxMi3T9GE7cEcdoBdXQT1t9nNuJAhESNWAdw',\\n    '__Secure-next-auth.session-token': 'eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..AT0gds2iT28U0z-M.6awP_lpFfYBkCDgq7cdQMkwlRkoOULsUxz-H48Ca4OMi3E5N66_WbfHCoZ01IpdHbCLZ-x7tIxgIwtaOIXpYOrVUImAo5GwnM_BQNH44GeMMBZoS1mGZtN2d5Hmk67psIKU7g6tuwq2wyQ-yyDQCHflSbUIPNQXNnyr58JNGl8ny-jEMjAJD-rKMNhelWmVUakSU8SvErqVjX1RjKPD5p8imD_YeBxMeCKLZ0x-RaCBotIDGytvia4WH2OcaCQXGRVt5wzD0paxHNFmjdgPdy6qEkRWDR04n3yv7kWBL6GhSW-Qjx7HHxE9KXcx9Bsij9trBVwvESA29v5A8kALhmxZz8e-vY4-ZGF3QzDq4Q93g3OkUJxGsZrDIRNQBjSMctmynBnpDQY73eUvWrICi4322DP2JgpD0rf42juoEA0KvrCF3qSod39XTrJYKUntLIRfAHanXZjUdZRixozH_3muS8KRqfoNgqAWJnPATbybPvXV7sJPHQAC5YADoc2B_yP3UHwa64vpTD1jS-DBRJCYL1sZQhMrR_TV5sER5Y1Q4_fkjF7uomPOkGt1I0W2sjqANa_na6TZhrmfDfMknKUeYyhAVRD78HRzpEmhVzQ1_2EPkwGXwXZaAinroDhm464lErOVKALFmTaxJMjS6X0yJK1r_x-iNBMuJeBUNgrZnuIAtFedA0M7bEmWJ0iJu8hVQ7crCRqy54-I66Y9UPXQH5369E27DDL1jL8QEgVLMqsehcit6GLqxavkN9feKUW-nr6jKg2jaLRnXcSV3jJ_g7ai9JKRUFbu_yhMq_9YWMJfSzAoncShdXWhUaM7zdh8iBsQWSRTXaoMUBKYogwZgyYYjTDexABR9NPLiq66tZhr-VStCO3SKyGrnk0Mj1RDTrAKub6LTqkfnXa8myz6Q8i42duHmVMeFFKWQ3OO0fajx2eO85hjcRWDoyn6uD5HeU5Kl1q9cqVxUsRAEuRecs10eKPUbpY1rBEInGUJh-Jfulsoa49-9_1aCRawGdLwVOJcY5Wq32rSXTYDwN0x5-beKPoRAjFY0XaiQZ43yEB6Aa_mgUCnk88POtqsCSfbUg9_Z7FrR4ybGZiLCEcyfbGT_ssmJxaGmTgPWpHQYKgBIeTgjfEwnBeEevKoymsUxz0WsCseyDo2Hrgud77_gJ3D_BZo3kH0tEUAoRuNqFhBPnaeqURCygA8-49LxBU4qGfZd-FvBux0xlJb7fDbZrejfYBhMPEFBs-9slM1Rh2yboEdcaQc04ulIwKcdZeopkrxhZdYw2PhOmV-Y1b6YQ8LPd8QF5lKXnKicrluOcgshSnUztm7zaMYYpFBQe60-NwOAGTfcpR0pjAfdjoHApb0AdBbSs_SK9vB7j1smImgdEKpaF9cyx-FozrU7ur-94NXFtvXsiTouAXixIeag3lcSTHye8XUnLP1gRl3XLqQdp1aMckemmQ7JMzGjLN60NPSLOq1Dcnyf_g6_RJ7ba7ynJNdqTjBqnPQ4aN6TLgXdFqh2uFgop1LXjimwLMLhnmAcCSlRvfxhf-6W8rHlO6TJhp9i3HwD6bDl_3z08Y1YcWwwbPjBVlMevvzTsXon2rWFLiRb9VZ5nT3kWWhKokiBhEQy2rLPd2dDUssXp8MAi7fGbGM0x1Oy07cisA_OhayGJCEHnx8IDAg7Bbmg8MKqX0A5vPSvCA9tsfuF-inprlsXxYy0Y0IK1bBPqTem2zfOZwoNI227ndJjBEoIwIHEv6SBBbHfONmHen5EkOc5RrLcuN9Ohzfc6CENrPZN-a8idUBneFnbqNkQFdoCIImPQKZ6kNbCkET3E1IsLn2VLd2Bt_SvLLuxM_btDMsIlfBrDPnVjilFuA-8QvV3NRWcDejulD1iLaMfmnFmfYLIRVc3yGXGQE_hnnfWK2WW2I9PGVSxtq6FBYToxmuZWleYL77l0v9vdkstv16RmzAgMORj7gjLUlWLrnHfvxQm8EcOkC2Ng24lwN-sdVWzVHdxhuaqCgzBUG5F2yqthUUIbstlC7iZD19FQRRslH9jtlaR-sAMkbFEKnHmzI5K294sFmMTXrlRP94XyN3dJtxhi7hVVyfUF4n9QiSCnkx7JdZaWMeJRXpIPkBFDUT1zYvFwsgTU2rv_A9O8RC7KFQFnDsd21ajq1GMAX-Aysf4eYYAFODWdq7juCYezsweWHj5uVW6s_62NzQ9EaFwUAQ8AiYFeB7gwmQi6jKfci2GqEZoJmvJL_v015nFqQUBiah4iM_RG52JxRzSCV3QbuP3pif0-_WFNJIyIINNn25LnxEWTcSbP6sfpZPddSRIpr-K6pShSYMweFGbnYfDDC99ck_xMKt4TEGVq0ZwdZASzc0-ZC2dq7I_XhixIw4WQtbL5C4I_CsiLFj9dHK8oNhJKMwboMTkfvZ9F9IytS0B-rreSKPrPWfZghtlHhgMkkqMwNjARzNe2B61WiYiCpMrFPTG0OdyuscKkYb1H8NoKfGZk0zAIefNTOilg6l7O-cEM2XyPvntgYeDKU-E_P7ShTAAvt91gJerRAzqXd-p_yDMgrEtUAj7wCrSNY-2_xv6OxUojkAncfYVFqGbH4T9DVd6_Whe_LvdtFij0EEAd_nZUHhqWA62q6ga8sQMg2KQ2AZIixb67NGD9woIvVEPkanGAtdYfjkuQrtLeLKkz0xLGRtxQMXV53Kv1ms9_-C7NmKgwfhZ14Ltaysc821p44Zr5J0_yaWFhcxZv9QUGAuA3sRguSyTDaHem_ZpJAEWBQpziKzsA2ozsmd1e-LwoE4CQgSqu4D23pbuuuxo7tTCoGUqQHsOf-5QaTJW1r-3sQsYixFm7zHXfX06TucAyNDpLTs73KZChvMTi8kpAj5P8YQx-JBIKPo4AQ83GFxnX1W7FvNLxzrCM7LwS9hAkKtuWfXp8_A.QxgvXtgV6DFkz0r75Afpqw',\\n}\\n\\nheaders = {\\n    'accept': '*/*',\\n    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',\\n    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',\\n}\\n\\nresponse = requests.get('https://chat.openai.com/api/auth/session', cookies=cookies, headers=headers)\\n\\nprint(json.dumps(response.json(), indent=4, ensure_ascii=False))\\n</code></pre></div>"}`);export{u as comp,m as data};
