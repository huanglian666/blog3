import{_ as n,o as s,c as a,f as e}from"./app.3adea723.js";const i={},l=e(`<h2 id="\u4E00-\u8D2D\u7269\u8F66\u5F00\u53D1\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u4E00-\u8D2D\u7269\u8F66\u5F00\u53D1\u601D\u8DEF" aria-hidden="true">#</a> \u4E00\uFF1A\u8D2D\u7269\u8F66\u5F00\u53D1\u601D\u8DEF</h2><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>Redis\u5B58\u50A8\u8D2D\u7269\u8F66\u6570\u636E\u7ED3\u6784
Hash

K=\u300Bmenhu:cart
field=&gt;\${userid} 
value=&gt;\${cart}






</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C-\u52A0\u8D2D" tabindex="-1"><a class="header-anchor" href="#\u4E8C-\u52A0\u8D2D" aria-hidden="true">#</a> \u4E8C\uFF1A\u52A0\u8D2D</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>fengmi<span class="token punctuation">.</span>cart</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">AllArgsConstructor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">NoArgsConstructor</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cart</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">private</span> <span class="token class-name">String</span> skuId<span class="token punctuation">;</span>
    
    <span class="token keyword">private</span> <span class="token class-name">String</span> title<span class="token punctuation">;</span>
    
    <span class="token keyword">private</span> <span class="token class-name">String</span> img<span class="token punctuation">;</span>
    
    <span class="token keyword">private</span> <span class="token class-name">String</span> spec<span class="token punctuation">;</span>
    
    <span class="token keyword">private</span> <span class="token class-name">Double</span> price<span class="token punctuation">;</span>
    
    <span class="token keyword">private</span>  <span class="token class-name">Double</span> marketPrice<span class="token punctuation">;</span>
    
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> buyNum<span class="token punctuation">;</span>
    
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> choose <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E09-\u8D2D\u7269\u8F66\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u4E09-\u8D2D\u7269\u8F66\u5217\u8868" aria-hidden="true">#</a> \u4E09\uFF1A\u8D2D\u7269\u8F66\u5217\u8868</h2><h2 id="\u56DB-\u8D2D\u7269\u8F66\u7F16\u8F91" tabindex="-1"><a class="header-anchor" href="#\u56DB-\u8D2D\u7269\u8F66\u7F16\u8F91" aria-hidden="true">#</a> \u56DB\uFF1A\u8D2D\u7269\u8F66\u7F16\u8F91</h2>`,6),c=[l];function t(p,o){return s(),a("div",null,c)}const r=n(i,[["render",t],["__file","08_\u8D2D\u7269\u8F66.html.vue"]]);export{r as default};
