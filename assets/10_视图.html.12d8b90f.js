import{_ as s,o as n,c as a,f as e}from"./app.3adea723.js";const l={},p=e(`<h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><h3 id="_1-1\u3001\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_1-1\u3001\u6982\u5FF5" aria-hidden="true">#</a> 1.1\u3001\u6982\u5FF5</h3><blockquote><p>\u89C6\u56FE\uFF0C\u865A\u62DF\u8868\uFF0C\u4ECE\u4E00\u4E2A\u8868\u6216\u591A\u4E2A\u8868\u4E2D\u67E5\u8BE2\u51FA\u6765\u7684\u8868\uFF0C\u4F5C\u7528\u548C\u771F\u5B9E\u8868\u4E00\u6837\uFF0C\u5305\u542B\u4E00\u7CFB\u5217\u5E26\u6709\u884C\u548C\u5217\u7684\u6570\u636E\u3002\u89C6\u56FE\u4E2D\uFF0C\u7528\u6237\u53EF\u4EE5\u4F7F\u7528SELECT\u8BED\u53E5\u67E5\u8BE2\u6570\u636E\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528INSERT\uFF0CUPDATE\uFF0CDELETE\u4FEE\u6539\u8BB0\u5F55\uFF0C\u89C6\u56FE\u53EF\u4EE5\u4F7F\u7528\u6237\u64CD\u4F5C\u65B9\u4FBF\uFF0C\u5E76\u4FDD\u969C\u6570\u636E\u5E93\u7CFB\u7EDF\u5B89\u5168\u3002</p></blockquote><h3 id="_1-2\u3001\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#_1-2\u3001\u7279\u70B9" aria-hidden="true">#</a> 1.2\u3001\u7279\u70B9</h3><blockquote><ul><li><p>\u4F18\u70B9</p></li><li><p>\u7B80\u5355\u5316\uFF0C\u6570\u636E\u6240\u89C1\u5373\u6240\u5F97\u3002</p></li><li><p>\u5B89\u5168\u6027\uFF0C\u7528\u6237\u53EA\u80FD\u67E5\u8BE2\u6216\u4FEE\u6539\u4ED6\u4EEC\u6240\u80FD\u89C1\u5230\u5F97\u5230\u7684\u6570\u636E\u3002</p></li><li><p>\u903B\u8F91\u72EC\u7ACB\u6027\uFF0C\u53EF\u4EE5\u5C4F\u853D\u771F\u5B9E\u8868\u7ED3\u6784\u53D8\u5316\u5E26\u6765\u7684\u5F71\u54CD\u3002</p></li><li><p>\u7F3A\u70B9</p></li><li><p>\u6027\u80FD\u76F8\u5BF9\u8F83\u5DEE\uFF0C\u7B80\u5355\u7684\u67E5\u8BE2\u4E5F\u4F1A\u53D8\u5F97\u7A0D\u663E\u590D\u6742\u3002</p></li><li><p>\u4FEE\u6539\u4E0D\u65B9\u4FBF\uFF0C\u7279\u53D8\u662F\u590D\u6742\u7684\u805A\u5408\u89C6\u56FE\u57FA\u672C\u65E0\u6CD5\u4FEE\u6539\u3002</p></li></ul></blockquote><h2 id="\u4E8C\u3001\u89C6\u56FE\u7684\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u89C6\u56FE\u7684\u64CD\u4F5C" aria-hidden="true">#</a> \u4E8C\u3001\u89C6\u56FE\u7684\u64CD\u4F5C</h2><h3 id="_2-1\u3001\u521B\u5EFA\u89C6\u56FE" tabindex="-1"><a class="header-anchor" href="#_2-1\u3001\u521B\u5EFA\u89C6\u56FE" aria-hidden="true">#</a> 2.1\u3001\u521B\u5EFA\u89C6\u56FE</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment"># \u8BED\u6CD5</span>
<span class="token keyword">CREATE</span> <span class="token keyword">VIEW</span> \u89C6\u56FE\u540D <span class="token keyword">AS</span> \u67E5\u8BE2\u8BED\u53E5<span class="token punctuation">;</span>

<span class="token comment"># \u521B\u5EFAemp_info\u89C6\u56FE\uFF0C\u901A\u8FC7\u89C6\u56FE\u4ECEemp\u8868\u4E2D\u67E5\u8BE2\u5458\u5DE5\u7F16\u53F7\u3001\u59D3\u540D\u3001\u603B\u5DE5\u8D44</span>
<span class="token keyword">CREATE</span> <span class="token keyword">VIEW</span> emp_info
<span class="token keyword">AS</span>
<span class="token keyword">SELECT</span> empno <span class="token string">&#39;\u7F16\u53F7&#39;</span><span class="token punctuation">,</span> ename <span class="token string">&#39;\u59D3\u540D&#39;</span><span class="token punctuation">,</span> sal<span class="token operator">+</span>IFNULL<span class="token punctuation">(</span>comm<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token string">&#39;\u603B\u5DE5\u8D44&#39;</span> <span class="token keyword">FROM</span> emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2\u3001\u4F7F\u7528\u89C6\u56FE" tabindex="-1"><a class="header-anchor" href="#_2-2\u3001\u4F7F\u7528\u89C6\u56FE" aria-hidden="true">#</a> 2.2\u3001\u4F7F\u7528\u89C6\u56FE</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment"># \u67E5\u8BE2\u7F16\u53F7\u4E3A1003\u7684\u5458\u5DE5\u4FE1\u606F</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> emp_info <span class="token keyword">WHERE</span> \u7F16\u53F7<span class="token operator">=</span><span class="token number">1003</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3\u3001\u4FEE\u6539\u89C6\u56FE" tabindex="-1"><a class="header-anchor" href="#_2-3\u3001\u4FEE\u6539\u89C6\u56FE" aria-hidden="true">#</a> 2.3\u3001\u4FEE\u6539\u89C6\u56FE</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment"># \u8BED\u6CD5 \u65B9\u5F0F1</span>
<span class="token keyword">CREATE</span> <span class="token operator">OR</span> <span class="token keyword">REPLACE</span> <span class="token keyword">VIEW</span> \u89C6\u56FE\u540D <span class="token keyword">AS</span> \u67E5\u8BE2\u8BED\u53E5<span class="token punctuation">;</span>
<span class="token comment"># \u8BED\u6CD5 \u65B9\u5F0F2</span>
<span class="token keyword">ALTER</span> <span class="token keyword">VIEW</span> \u89C6\u56FE\u540D <span class="token keyword">AS</span> \u67E5\u8BE2\u8BED\u53E5<span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token operator">OR</span> <span class="token keyword">REPLACE</span> <span class="token keyword">VIEW</span> emp_info
<span class="token keyword">AS</span>
<span class="token keyword">SELECT</span> empno <span class="token string">&#39;\u7F16\u53F7&#39;</span><span class="token punctuation">,</span> ename <span class="token string">&#39;\u59D3\u540D&#39;</span><span class="token punctuation">,</span> sal <span class="token string">&#39;\u57FA\u672C\u5DE5\u8D44&#39;</span> <span class="token keyword">FROM</span> emp<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">VIEW</span> emp_info
<span class="token keyword">AS</span>
<span class="token keyword">SELECT</span> empno <span class="token string">&#39;\u7F16\u53F7&#39;</span><span class="token punctuation">,</span> ename <span class="token string">&#39;\u59D3\u540D&#39;</span><span class="token punctuation">,</span> sal <span class="token string">&#39;\u57FA\u672C\u5DE5\u8D44&#39;</span> <span class="token keyword">FROM</span> emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4\u3001\u5220\u9664\u89C6\u56FE" tabindex="-1"><a class="header-anchor" href="#_2-4\u3001\u5220\u9664\u89C6\u56FE" aria-hidden="true">#</a> 2.4\u3001\u5220\u9664\u89C6\u56FE</h3><blockquote><p>\u5220\u9664\u89C6\u56FE\u4E0D\u4F1A\u5F71\u54CD\u539F\u8868</p></blockquote><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment"># \u8BED\u6CD5</span>
<span class="token keyword">DROP</span> <span class="token keyword">VIEW</span> \u89C6\u56FE\u540D<span class="token punctuation">;</span>

<span class="token keyword">DROP</span> <span class="token keyword">VIEW</span> emp_info<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5\u3001\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#_2-5\u3001\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> 2.5\u3001\u6CE8\u610F\u4E8B\u9879</h3><blockquote><p>\u89C6\u56FE\u4E0D\u4F1A\u72EC\u7ACB\u5B58\u50A8\u6570\u636E\uFF0C\u539F\u8868\u53D1\u751F\u6539\u53D8\uFF0C\u89C6\u56FE\u4E5F\u53D1\u751F\u6539\u53D8\u3002\u6CA1\u6709\u4F18\u5316\u4EFB\u4F55\u67E5\u8BE2\u6027\u80FD\u3002</p><p>\u5982\u679C\u89C6\u56FE\u5305\u542B\u4EE5\u4E0B\u7ED3\u6784\u4E2D\u7684\u4E00\u79CD\uFF0C\u5219\u89C6\u56FE\u4E0D\u53EF\u66F4\u65B0</p><ul><li>\u805A\u5408\u51FD\u6570\u7684\u7ED3\u679C</li><li>DISTINCT \u53BB\u91CD\u540E\u7684\u7ED3\u679C</li><li>GROUP BY \u5206\u7EC4\u540E\u7684\u7ED3\u679C</li><li>HAVING \u7B5B\u9009\u8FC7\u6EE4\u540E\u7684\u7ED3\u679C</li><li>UNION\u3001UNION ALL \u8054\u5408\u540E\u7684\u7ED3\u679C</li></ul></blockquote>`,17),i=[p];function o(c,t){return n(),a("div",null,i)}const r=s(l,[["render",o],["__file","10_\u89C6\u56FE.html.vue"]]);export{r as default};
