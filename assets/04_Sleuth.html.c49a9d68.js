import{_ as n,o as a,c as s,f as t}from"./app.3adea723.js";const e="/blog3/assets/image-20201101225842101.7fc65a6d.png",p="/blog3/assets/image-20210331224808688.f585a28a.png",l={},c=t('<h1 id="\u4E00-\u4E3A\u4EC0\u4E48\u8981\u94FE\u8DEF\u8FFD\u8E2A" tabindex="-1"><a class="header-anchor" href="#\u4E00-\u4E3A\u4EC0\u4E48\u8981\u94FE\u8DEF\u8FFD\u8E2A" aria-hidden="true">#</a> \u4E00\uFF1A\u4E3A\u4EC0\u4E48\u8981\u94FE\u8DEF\u8FFD\u8E2A</h1><blockquote><p>\u5C0F\u7ED3\uFF1A</p><p>nacos \u3010name server\u3011\uFF1A\u6CE8\u518C\u4E2D\u5FC3\uFF0C\u89E3\u51B3\u670D\u52A1\u7684\u6CE8\u518C\u4E0E\u53D1\u73B0</p><p>nacos\u3010config\u3011\uFF1A\u914D\u7F6E\u4E2D\u5FC3\uFF0C\u5FAE\u670D\u52A1\u914D\u7F6E\u6587\u4EF6\u7684\u4E2D\u5FC3\u5316\u7BA1\u7406\uFF0C\u540C\u65F6\u914D\u7F6E\u4FE1\u606F\u7684\u52A8\u6001\u5237\u65B0</p><p>Ribbon\uFF1A\u5BA2\u6237\u7AEF\u8D1F\u8F7D\u5747\u8861\u5668\uFF0C\u89E3\u51B3\u5FAE\u670D\u52A1\u96C6\u7FA4\u8D1F\u8F7D\u5747\u8861\u7684\u95EE\u9898</p><p>Openfeign\uFF1A\u58F0\u660E\u5F0FHTTP\u5BA2\u6237\u7AEF\uFF0C\u89E3\u51B3\u5FAE\u670D\u52A1\u4E4B\u95F4\u8FDC\u7A0B\u8C03\u7528\u95EE\u9898</p><p>Sentinel\uFF1A\u5FAE\u670D\u52A1\u6D41\u91CF\u9632\u536B\u5175,\u4EE5\u6D41\u91CF\u4E3A\u5165\u53E3\uFF0C\u4FDD\u62A4\u5FAE\u670D\u52A1\uFF0C\u9632\u6B62\u670D\u52A1\u96EA\u5D29</p><p>gateway\uFF1A\u5FAE\u670D\u52A1\u7F51\u5173\uFF0C\u670D\u52A1\u96C6\u7FA4\u7684\u5165\u53E3\uFF0C\u8DEF\u7531\u8F6C\u53D1\u4EE5\u53CA\u8D1F\u8F7D\u5747\u8861\uFF08\u5168\u5C40\u8BA4\u8BC1\u3001\u6D41\u63A7\uFF09</p><p>\u94FE\u8DEF\u8FFD\u8E2A\u3010sleuth\u3011</p></blockquote><p>\u968F\u7740\u670D\u52A1\u7684\u8D8A\u6765\u8D8A\u591A\uFF0C\u5BF9\u8C03\u7528\u94FE\u7684\u5206\u6790\u4F1A\u8D8A\u6765\u8D8A\u590D\u6742\u3002\u5B83\u4EEC\u4E4B\u95F4\u7684\u8C03\u7528\u5173\u7CFB\u4E5F\u8BB8\u5982\u4E0B\u56FE\uFF1A</p><p><img src="'+e+'" alt="image-20201101225842101"></p><blockquote><p>\u95EE\u9898\uFF1A</p><p>1\uFF1A\u5FAE\u670D\u52A1\u4E4B\u95F4\u7684\u8C03\u7528\u9519\u7EFC\u590D\u6742\uFF0C\u7528\u6237\u53D1\u9001\u7684\u8BF7\u6C42\u7ECF\u5386\u90A3\u4E9B\u670D\u52A1\uFF0C\u8C03\u7528\u94FE\u4E0D\u6E05\u695A\uFF0C\u6CA1\u6709\u4E00\u4E2A\u81EA\u52A8\u5316\u5DE5\u5177\u6765\u7EF4\u62A4\u8C03\u7528\u94FE\u3002</p><p>2\uFF1A\u65E0\u6CD5\u5FEB\u901F\u5B9A\u4F4D\u8C03\u7528\u94FE\u4E2D\u54EA\u4E2A\u73AF\u8282\u51FA\u4E86\u95EE\u9898</p><p>3\uFF1A\u65E0\u6CD5\u5FEB\u901F\u5B9A\u4F4D\u8C03\u7528\u94FE\u4E2D\u54EA\u4E2A\u73AF\u8282\u6BD4\u8F83\u8017\u65F6</p></blockquote><h1 id="\u4E8C-sleuth\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u4E8C-sleuth\u7B80\u4ECB" aria-hidden="true">#</a> \u4E8C\uFF1ASleuth\u7B80\u4ECB</h1><h2 id="_2-1-springcloud-sleuth" tabindex="-1"><a class="header-anchor" href="#_2-1-springcloud-sleuth" aria-hidden="true">#</a> 2.1\uFF1ASpringCloud-Sleuth</h2><blockquote><p>SpringCloud-Sleuth \u63D0\u4F9B\u7684\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u94FE\u8DEF\u8FFD\u8E2A\u89E3\u51B3\u65B9\u6848</p><p>\u540C\u7C7B\u4EA7\u54C1\uFF1A</p><p>SkyWalking\u662F\u672C\u571F\u5F00\u6E90\u7684\u57FA\u4E8E\u5B57\u8282\u7801\u6CE8\u5165\u7684\u8C03\u7528\u94FE\u5206\u6790\uFF0C\u4EE5\u53CA\u5E94\u7528\u76D1\u63A7\u5206\u6790\u5DE5\u5177\u3002\u7279\u70B9\u662F\u652F\u6301\u591A</p><p>\u79CD\u63D2\u4EF6\uFF0CUI\u529F\u80FD\u8F83\u5F3A\uFF0C\u63A5\u5165\u7AEF\u65E0\u4EE3\u7801\u4FB5\u5165\u3002\u76EE\u524D\u5DF2\u52A0\u5165Apache\u5B75\u5316\u5668\u3002</p><p>cat \u7531\u5927\u4F17\u70B9\u8BC4\u5F00\u6E90\uFF0C\u57FA\u4E8EJava\u5F00\u53D1\u7684\u5B9E\u65F6\u5E94\u7528\u76D1\u63A7\u5E73\u53F0\uFF0C\u5305\u62EC\u5B9E\u65F6\u5E94\u7528\u76D1\u63A7\uFF0C\u4E1A\u52A1\u76D1\u63A7 \u3002 \u96C6\u6210\u65B9\u6848\u662F\u901A\u8FC7\u4EE3\u7801\u57CB\u70B9\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u76D1\u63A7</p></blockquote><h2 id="_2-2-sleuth\u672F\u8BED" tabindex="-1"><a class="header-anchor" href="#_2-2-sleuth\u672F\u8BED" aria-hidden="true">#</a> 2.2\uFF1ASleuth\u672F\u8BED</h2><blockquote><p>span\uFF1A</p><p>\u4EE3\u8868\u4E86\u4E00\u7EC4\u57FA\u672C\u7684\u5DE5\u4F5C\u5355\u5143\u3002\u4E3A\u4E86\u7EDF\u8BA1\u5404\u5904\u7406\u5355\u5143\u7684\u5EF6\u8FDF\uFF0C\u5F53\u8BF7\u6C42\u5230\u8FBE\u5404\u4E2A\u670D\u52A1\u7EC4\u4EF6\u7684\u65F6\u5019\uFF0C\u4E5F\u901A\u8FC7\u4E00\u4E2A\u552F\u4E00\u6807\u8BC6\uFF08SpanId\uFF09\u6765\u6807\u8BB0\u5B83\u7684\u5F00\u59CB\u3001\u5177\u4F53\u8FC7\u7A0B\u548C\u7ED3\u675F\u3002\u901A\u8FC7SpanId\u7684\u5F00\u59CB\u548C\u7ED3\u675F\u65F6\u95F4\u6233\uFF0C\u5C31\u80FD\u7EDF\u8BA1\u8BE5span\u7684\u8C03\u7528\u65F6\u95F4\uFF0C\u9664\u6B64\u4E4B\u5916\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u83B7\u53D6\u5982\u4E8B\u4EF6\u7684\u540D\u79F0\u3002\u8BF7\u6C42\u4FE1\u606F\u7B49\u5143\u6570\u636E\u3002</p></blockquote><blockquote><p>Trace\uFF1A</p><p>\u7531\u4E00\u7EC4Trace Id\u76F8\u540C\u7684Span\u4E32\u8054\u5F62\u6210\u4E00\u4E2A\u6811\u72B6\u7ED3\u6784\u3002\u4E3A\u4E86\u5B9E\u73B0\u8BF7\u6C42\u8DDF\u8E2A\uFF0C\u5F53\u8BF7\u6C42\u5230\u8FBE\u5206\u5E03\u5F0F\u7CFB\u7EDF\u7684\u5165\u53E3\u7AEF\u70B9\u65F6\uFF0C\u53EA\u9700\u8981\u670D\u52A1\u8DDF\u8E2A\u6846\u67B6\u4E3A\u8BE5\u8BF7\u6C42\u521B\u5EFA\u4E00\u4E2A\u552F\u4E00\u7684\u6807\u8BC6\uFF08\u5373TraceId\uFF09\uFF0C\u540C\u65F6\u5728\u5206\u5E03\u5F0F\u7CFB\u7EDF\u5185\u90E8\u6D41\u8F6C\u7684\u65F6\u5019\uFF0C\u6846\u67B6\u59CB\u7EC8\u4FDD\u6301\u4F20\u9012\u8BE5\u552F\u4E00\u503C\uFF0C\u76F4\u5230\u6574\u4E2A\u8BF7\u6C42\u7684\u8FD4\u56DE\u3002\u90A3\u4E48\u6211\u4EEC\u5C31\u53EF\u4EE5\u4F7F\u7528\u8BE5\u552F\u4E00\u6807\u8BC6\u5C06\u6240\u6709\u7684\u8BF7\u6C42\u4E32\u8054\u8D77\u6765\uFF0C\u5F62\u6210\u4E00\u6761\u5B8C\u6574\u7684\u8BF7\u6C42\u94FE\u8DEF\u3002</p></blockquote><blockquote><p>Annotation\uFF1A\u7528\u5B83\u8BB0\u5F55\u4E00\u4E2A\u5B8C\u6210\u8BF7\u6C42\u76844\u4E2A\u4E8B\u4EF6\uFF0C\u5185\u90E8\u4F7F\u7528\u7684\u91CD\u8981\u6CE8\u91CA\uFF1A</p><p>cs\uFF08Client Send\uFF09\u5BA2\u6237\u7AEF\u53D1\u51FA\u8BF7\u6C42\uFF0C\u5F00\u59CB\u4E00\u4E2A\u8BF7\u6C42\u7684\u751F\u547D</p><p>sr\uFF08Server Received\uFF09\u670D\u52A1\u7AEF\u63A5\u53D7\u5230\u8BF7\u6C42\u5F00\u59CB\u8FDB\u884C\u5904\u7406\uFF0C sr\uFF0Dcs = \u7F51\u7EDC\u5EF6\u8FDF\uFF08\u670D\u52A1\u8C03\u7528\u7684\u65F6\u95F4\uFF09</p><p>ss\uFF08Server Send\uFF09\u670D\u52A1\u7AEF\u5904\u7406\u5B8C\u6BD5\u51C6\u5907\u53D1\u9001\u5230\u5BA2\u6237\u7AEF\uFF0Css - sr = \u670D\u52A1\u5668\u4E0A\u7684\u8BF7\u6C42\u5904\u7406\u65F6\u95F4</p><p>cr\uFF08Client Reveived\uFF09\u5BA2\u6237\u7AEF\u63A5\u53D7\u5230\u670D\u52A1\u7AEF\u7684\u54CD\u5E94\uFF0C\u8BF7\u6C42\u7ED3\u675F\u3002 cr - sr = \u8BF7\u6C42\u7684\u603B\u65F6\u95F4</p></blockquote><h2 id="_2-3-sleuth-zipkin\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#_2-3-sleuth-zipkin\u67B6\u6784" aria-hidden="true">#</a> 2.3\uFF1ASleuth+Zipkin\u67B6\u6784</h2><p><img src="'+p+`" alt="image-20210331224808688"></p><p>\u4E0B\u8F7DZipkin dashboard</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>Zipkin \u662FTwitter\u5F00\u653E\u6E90\u4EE3\u7801\u5206\u5E03\u5F0F\u7684\u8DDF\u8E2A\u7CFB\u7EDF\uFF0C\u6BCF\u4E2A\u670D\u52A1\u5411zipkin\u62A5\u544A\u8BA1\u65F6\u6570\u636E\uFF0Czipkin\u4F1A\u6839\u636E\u8C03\u7528\u5173\u7CFB\u901A\u8FC7Zipkin UI\u751F\u6210\u4F9D\u8D56\u5173\u7CFB\u56FE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0B\u8F7D\u5730\u5740\uFF1Ahttps://dl.bintray.com/openzipkin/maven/io/zipkin/java/zipkin-server/</p><h2 id="_2-4-cloud-goods\u96C6\u6210sleuth" tabindex="-1"><a class="header-anchor" href="#_2-4-cloud-goods\u96C6\u6210sleuth" aria-hidden="true">#</a> 2.4\uFF1Acloud-goods\u96C6\u6210Sleuth</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--\u94FE\u8DEF\u8FFD\u8E2A\u573A\u666F\u4F9D\u8D56--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-sleuth<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-zipkin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token key attr-name">spring</span><span class="token punctuation">:</span>
<span class="token key attr-name">  zipkin</span><span class="token punctuation">:</span>
<span class="token key attr-name">    base-url</span><span class="token punctuation">:</span> <span class="token value attr-value">http://localhost:9999</span>
<span class="token key attr-name">    discovery-client-enabled</span><span class="token punctuation">:</span> <span class="token value attr-value">false</span>
<span class="token key attr-name">  sleuth</span><span class="token punctuation">:</span>
<span class="token key attr-name">    sampler</span><span class="token punctuation">:</span>
<span class="token key attr-name">      rate</span><span class="token punctuation">:</span> <span class="token value attr-value">100</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-5-cloud-jifen\u96C6\u6210sleuth" tabindex="-1"><a class="header-anchor" href="#_2-5-cloud-jifen\u96C6\u6210sleuth" aria-hidden="true">#</a> 2.5\uFF1Acloud-jifen\u96C6\u6210Sleuth</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--\u94FE\u8DEF\u8FFD\u8E2A\u573A\u666F\u4F9D\u8D56--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-sleuth<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-zipkin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token key attr-name">spring</span><span class="token punctuation">:</span>
<span class="token key attr-name">  zipkin</span><span class="token punctuation">:</span>
<span class="token key attr-name">    base-url</span><span class="token punctuation">:</span> <span class="token value attr-value">http://localhost:9999</span>
<span class="token key attr-name">    discovery-client-enabled</span><span class="token punctuation">:</span> <span class="token value attr-value">false</span>
<span class="token key attr-name">  sleuth</span><span class="token punctuation">:</span>
<span class="token key attr-name">    sampler</span><span class="token punctuation">:</span>
<span class="token key attr-name">      rate</span><span class="token punctuation">:</span> <span class="token value attr-value">100</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-6-cloud-order\u96C6\u6210sleuth" tabindex="-1"><a class="header-anchor" href="#_2-6-cloud-order\u96C6\u6210sleuth" aria-hidden="true">#</a> 2.6\uFF1Acloud-order\u96C6\u6210Sleuth</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--\u94FE\u8DEF\u8FFD\u8E2A\u573A\u666F\u4F9D\u8D56--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-sleuth<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-zipkin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token key attr-name">spring</span><span class="token punctuation">:</span>
<span class="token key attr-name">  zipkin</span><span class="token punctuation">:</span>
<span class="token key attr-name">    base-url</span><span class="token punctuation">:</span> <span class="token value attr-value">http://localhost:9999</span>
<span class="token key attr-name">    discovery-client-enabled</span><span class="token punctuation">:</span> <span class="token value attr-value">false</span>
<span class="token key attr-name">  sleuth</span><span class="token punctuation">:</span>
<span class="token key attr-name">    sampler</span><span class="token punctuation">:</span>
<span class="token key attr-name">      rate</span><span class="token punctuation">:</span> <span class="token value attr-value">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),o=[c];function i(u,d){return a(),s("div",null,o)}const k=n(l,[["render",i],["__file","04_Sleuth.html.vue"]]);export{k as default};
