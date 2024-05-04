import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,e as s}from"./app-BiCKOQWs.js";const a={},t=s(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import requests
import json

cookies = {
    &#39;__Secure-next-auth.session-token&#39;: &#39;serdftghjk&#39;,
}

headers = {
    &#39;user-agent&#39;: &#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36&#39;,
}

response = requests.get(&#39;https://chat.openai.com/api/auth/session&#39;, cookies=cookies, headers=headers)

print(response.text)
print(json.dumps(response, indent=4, ensure_ascii=False))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import requests
import json



headers = {
    &#39;authorization&#39;: &#39;Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJyZWV2ZXN0eWxlcjExQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlfSwiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS9hdXRoIjp7InBvaWQiOiJvcmctTE01QWpqU0FwVENrTmx1S1ZFN0Q4YmNZIiwidXNlcl9pZCI6InVzZXItbEJ2M1pscFFZeUhGQW5zM2FoUGJ5UGFXIn0sImlzcyI6Imh0dHBzOi8vYXV0aDAub3BlbmFpLmNvbS8iLCJzdWIiOiJhdXRoMHw2NTFhMjgxNTJlMzBkNWZkMGM5ZTI1ZDAiLCJhdWQiOlsiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MSIsImh0dHBzOi8vb3BlbmFpLm9wZW5haS5hdXRoMGFwcC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNzE0MDE1MDM0LCJleHAiOjE3MTQ4NzkwMzQsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgbW9kZWwucmVhZCBtb2RlbC5yZXF1ZXN0IG9yZ2FuaXphdGlvbi5yZWFkIG9yZ2FuaXphdGlvbi53cml0ZSBvZmZsaW5lX2FjY2VzcyIsImF6cCI6IlRkSkljYmUxNldvVEh0Tjk1bnl5d2g1RTR5T282SXRHIn0.BN01OvB1Hk_WW6b_LkQpXhz-Z0FvFtoCRcNXaS2CdCwr9wK-14aHkZ5ejgM_bkCIxE4gDSFKbrwnUNkXKhg5eYJeG_CWTh5ffNrHt93dQkzy9ixt7_jS90XwkbsEAJeUaFPGgUQwMxNauXuulMUDlXzX9myK8P1aSk4SWSJitojy94GmiI4ARSqVXNl8rtO_OZZlveZc-MjhxeofgQtktIQcH3C1KO7YgftszKbO0qoxF5cOwMxyqTWH51paArvxQ8I37c5BDZxTbjo13F2qTFdaz32PQFW2vq_GLp1irb9XgGFxTGGpp9zwtv8Fht6Cv8s3QPzagnWA9fggn0RWSg&#39;,
    &#39;user-agent&#39;: &#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36&#39;,
}


response = requests.get(&#39;https://chat.openai.com/backend-api/models&#39;, headers=headers).json()


print(json.dumps(response, indent=4, ensure_ascii=False))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import requests
import json

# 设置 API 的 URL
url = &quot;https://token.oaifree.com/api/auth/refresh&quot;

# 定义要发送的数据
data = {
    &#39;refresh_token&#39;: &#39;8w0tih-OaUDqg8bEhrQXMnRWx6j8WG7a-UWCBpsR8r7dP&#39;
}

# 发送 POST 请求
response = requests.post(url, data=data).json()

# 检查响应
if response.status_code == 200:
    # 打印响应的 JSON 数据
    print(json.dumps(response, indent=4, ensure_ascii=False))
else:
    print(&quot;Failed to refresh token:&quot;, response.status_code)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import requests

url = &quot;https://api.oaifree.com/v1/chat/completions&quot;
payload = {
    &quot;model&quot;: &quot;gpt-3.5-turbo&quot;,
    &quot;messages&quot;: [{&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: &quot;Say this is a test!&quot;}],
    &quot;temperature&quot;: 0.7
}
headers = {
    &quot;Content-Type&quot;: &quot;application/json&quot;,
    &quot;Authorization&quot;: &quot;Bearer YOUR_OPENAI_API_KEY&quot;
}

response = requests.post(url, json=payload, headers=headers)
print(response.text)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="前提是gpt4" tabindex="-1"><a class="header-anchor" href="#前提是gpt4"><span>前提是GPT4</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import requests

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>镜像网址：https://new.oaifree.com/ share token地址：https://chat.oaifree.com/token ShareToken登录：https://new.oaifree.com/auth/login_share?token=FK密钥</p><p>https://chat.openai.com/backend-api/* https://chat.openai.com/public-api/*</p><p>以上接口代理，分别对应：</p><p>https://chat.oaifree.com/dad04481-fa3f-494e-b90c-b822128073e5/backend-api/* https://chat.oaifree.com/dad04481-fa3f-494e-b90c-b822128073e5/public-api/*</p><h3 id="有效期3分钟" tabindex="-1"><a class="header-anchor" href="#有效期3分钟"><span>有效期3分钟</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import requests
import json

headers = {
    &#39;Origin&#39;: &#39;https://new.oaifree.com&#39;,
}

json_data = {
    &#39;share_token&#39;: &#39;fk-346_qWjhfd00Lumof9aQnt4Bmd1R2FyQN0chJGUHGow&#39;,
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),d=[t];function l(r,o){return n(),i("div",null,d)}const c=e(a,[["render",l],["__file","test.html.vue"]]),m=JSON.parse(`{"path":"/vuepress/test.html","title":"pandora的API","lang":"zh-CN","frontmatter":{"title":"pandora的API","date":"2024-04-30T00:00:00.000Z","category":["pandora"],"tag":["吾皇","牛逼"],"order":1},"headers":[{"level":3,"title":"前提是GPT4","slug":"前提是gpt4","link":"#前提是gpt4","children":[]},{"level":3,"title":"有效期3分钟","slug":"有效期3分钟","link":"#有效期3分钟","children":[]},{"level":3,"title":"反代pandora：","slug":"反代pandora","link":"#反代pandora","children":[]}],"git":{"createdTime":1714233116000,"updatedTime":1714474744000,"contributors":[{"name":"cfo-pass","email":"162004147+cfo-pass@users.noreply.github.com","commits":3}]},"readingTime":{"minutes":1.14,"words":343},"filePathRelative":"vuepress/test.md","localizedDate":"2024年4月30日","excerpt":"<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>import requests\\nimport json\\n\\ncookies = {\\n    '__Secure-next-auth.session-token': 'serdftghjk',\\n}\\n\\nheaders = {\\n    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',\\n}\\n\\nresponse = requests.get('https://chat.openai.com/api/auth/session', cookies=cookies, headers=headers)\\n\\nprint(response.text)\\nprint(json.dumps(response, indent=4, ensure_ascii=False))\\n</code></pre></div>"}`);export{c as comp,m as data};
