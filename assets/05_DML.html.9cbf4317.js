import{_ as n,o as s,c as a,f as p}from"./app.3adea723.js";const t={},e=p(`<h2 id="\u4E00\u3001\u4EC0\u4E48\u662Fdml" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u4EC0\u4E48\u662Fdml" aria-hidden="true">#</a> \u4E00\u3001\u4EC0\u4E48\u662FDML</h2><blockquote><p>DML(Data Manipulation Language)\u6570\u636E\u64CD\u4F5C\u8BED\u8A00\uFF1A\u589E\u3001\u5220\u3001\u6539\u8868\u8BB0\u5F55\u3002</p><p><strong>\u6CE8\u610F\uFF1ADML\u662F\u5BF9\u8868\u7684\u5185\u5BB9\u8FDB\u884C\u64CD\u4F5C\uFF0CDDL\u662F\u5BF9\u8868\u7684\u7ED3\u6784\u8FDB\u884C\u64CD\u4F5C\uFF0C\u4E24\u8005\u6709\u672C\u8D28\u533A\u522B\u3002</strong></p></blockquote><h3 id="_1-1\u3001\u51C6\u5907\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#_1-1\u3001\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a> 1.1\u3001\u51C6\u5907\u5DE5\u4F5C</h3><blockquote><p>\u5EFA\u5E93\u5EFA\u8868</p></blockquote><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment"># \u521B\u5EFA\u6570\u636E\u5E93</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> mydb<span class="token punctuation">;</span>
<span class="token comment"># \u5207\u6362\u6570\u636E\u5E93</span>
<span class="token keyword">USE</span> mydb<span class="token punctuation">;</span>

<span class="token comment"># \u5220\u9664\u8868</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> stu<span class="token punctuation">;</span>
<span class="token comment"># \u521B\u5EFA\u5B66\u751F\u8868</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> stu  <span class="token punctuation">(</span>
  id <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  age <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  gender <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  addr <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u7531\u4E8EDML\u5BF9\u8868\u7684\u5185\u5BB9\u8FDB\u884C\u64CD\u4F5C\uFF0C\u6211\u4EEC\u4E3A\u4E86\u9A8C\u8BC1\u64CD\u4F5C\u662F\u5426\u751F\u6548\uFF0C\u9700\u8981\u67E5\u8BE2\u4E00\u4E0B\u8868\u7684\u5185\u5BB9\uFF0CSQL\u8BED\u53E5\u5982\u4E0B\uFF1A</p></blockquote><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment"># \u67E5\u627E\u8868\u7684\u6240\u6709\u8BB0\u5F55</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> \u8868\u540D<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C\u3001dml\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001dml\u7684\u4F7F\u7528" aria-hidden="true">#</a> \u4E8C\u3001DML\u7684\u4F7F\u7528</h2><h3 id="_2-1\u3001\u63D2\u5165\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_2-1\u3001\u63D2\u5165\u6570\u636E" aria-hidden="true">#</a> 2.1\u3001\u63D2\u5165\u6570\u636E</h3><blockquote><p>\u7528\u6765\u5728\u8868\u4E2D\u589E\u52A0\u6570\u636E\uFF0C\u589E\u52A0\u7684\u6570\u636E\u53EF\u80FD\u662F\u4E00\u884C\uFF0C\u4E5F\u53EF\u80FD\u662F\u591A\u884C\uFF0C\u4F46\u662F\u4E0D\u53EF\u80FD\u662F\u534A\u884C\u3002</p></blockquote><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment"># \u5728\u8868\u540D\u540E\u7ED9\u51FA\u8981\u63D2\u5165\u7684\u5217\u540D\uFF0C\u5176\u4ED6\u6CA1\u6709\u6307\u5B9A\u7684\u5217\u7B49\u540C\u4E0E\u63D2\u5165null\u503C\u3002\u6240\u4EE5\u63D2\u5165\u8BB0\u5F55\u603B\u662F\u63D2\u5165\u4E00\u884C\uFF0C\u4E0D\u53EF\u80FD\u662F\u534A\u884C\u3002</span>
<span class="token comment"># \u5728VALUES\u540E\u7ED9\u51FA\u5217\u503C\uFF0C\u503C\u7684\u987A\u5E8F\u548C\u4E2A\u6570\u5FC5\u987B\u4E0E\u524D\u9762\u6307\u5B9A\u7684\u5217\u5BF9\u5E94</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> \u8868\u540D<span class="token punctuation">(</span>\u5217\u540D<span class="token number">1</span><span class="token punctuation">,</span> \u5217\u540D<span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span>\u5217\u503C<span class="token number">1</span><span class="token punctuation">,</span> \u5217\u503C<span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> stu<span class="token punctuation">(</span>id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender<span class="token punctuation">,</span> addr<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;zs&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&#39;\u7537&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u9752\u5C9B\u5E02\u5317\u533A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> stu<span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender<span class="token punctuation">,</span> addr<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token string">&#39;ls&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&#39;\u7537&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u9752\u5C9B\u5E02\u5357\u533A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> stu<span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token string">&quot;ww&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># \u6CA1\u6709\u7ED9\u51FA\u8981\u63D2\u5165\u7684\u5217\uFF0C\u90A3\u4E48\u8868\u793A\u63D2\u5165\u6240\u6709\u5217</span>
<span class="token comment"># \u503C\u7684\u4E2A\u6570\u5FC5\u987B\u662F\u8BE5\u8868\u5217\u7684\u4E2A\u6570</span>
<span class="token comment"># \u503C\u7684\u987A\u5E8F\uFF0C\u5FC5\u987B\u4E0E\u8868\u521B\u5EFA\u65F6\u7ED9\u51FA\u7684\u5217\u7684\u987A\u5E8F\u76F8\u540C\u3002</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> \u8868\u540D <span class="token keyword">VALUES</span><span class="token punctuation">(</span>\u5217\u503C<span class="token number">1</span><span class="token punctuation">,</span> \u5217\u503C<span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> stu <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;zs&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&#39;\u7537&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u9752\u5C9B\u5E02\u5317\u533A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> stu <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;ls&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&#39;\u7537&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u9752\u5C9B\u5E02\u5357\u533A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># \u4E00\u6B21\u63D2\u5165\u591A\u6761\u6570\u636E</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> \u8868\u540D<span class="token punctuation">(</span>\u5217\u540D<span class="token number">1</span><span class="token punctuation">,</span> \u5217\u540D<span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span>\u5217\u503C<span class="token number">1</span><span class="token punctuation">,</span> \u5217\u503C<span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>\u5217\u503C<span class="token number">1</span><span class="token punctuation">,</span> \u5217\u503C<span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>\u5217\u503C<span class="token number">1</span><span class="token punctuation">,</span> \u5217\u503C<span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> stu<span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token string">&#39;zs&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;ls&#39;</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;ww&#39;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2\u3001\u4FEE\u6539\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_2-2\u3001\u4FEE\u6539\u6570\u636E" aria-hidden="true">#</a> 2.2\u3001\u4FEE\u6539\u6570\u636E</h3><blockquote><p>\u7528\u6765\u4FEE\u6539\u8868\u4E2D\u5DF2\u6709\u7684\u6570\u636E\u3002</p></blockquote><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment"># WHERE\u6761\u4EF6\u662F\u53EF\u9009\u7684, \u5982\u679C\u6CA1\u6709\u6761\u4EF6, \u5C31\u4FEE\u6539\u6240\u6709\u8BB0\u5F55, \u591A\u6570\u65F6\u5019\u6211\u4EEC\u90FD\u52A0\u4E0AWHERE\u6761\u4EF6</span>
<span class="token keyword">UPDATE</span> \u8868\u540D <span class="token keyword">SET</span> \u5217\u540D<span class="token number">1</span><span class="token operator">=</span>\u5217\u503C<span class="token number">1</span><span class="token punctuation">,</span> \u5217\u540D<span class="token number">2</span><span class="token operator">=</span>\u5217\u503C<span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">[</span><span class="token keyword">WHERE</span> \u6761\u4EF6<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5173\u4E8E\u6761\u4EF6\uFF1A</p><ul><li>\u6761\u4EF6\u5FC5\u987B\u662F\u4E00\u4E2Aboolean\u7C7B\u578B\u7684\u503C\u6216\u8868\u8FBE\u5F0F\uFF1B</li><li>\u8FD0\u7B97\u7B26:=\u3001!=\u3001&lt;&gt;\u3001&gt;\u3001&lt;\u3001&gt;=\u3001&lt;=\u3001between...and... \u3001in(...)\u3001is null\u3001not\u3001or\u3001and\uFF1B</li><li>\u548C\u540E\u9762\u5B66\u4E60\u7684\u5220\u9664\u6570\u636E\u53CADQL\u4E2D\u7684\u6761\u4EF6\u901A\u7528\u3002</li></ul></blockquote><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">UPDATE</span> stu <span class="token keyword">SET</span> addr<span class="token operator">=</span><span class="token string">&#39;qd&#39;</span><span class="token punctuation">,</span> gender<span class="token operator">=</span><span class="token string">&#39;\u7537&#39;</span> <span class="token keyword">WHERE</span> age <span class="token operator">&gt;=</span> <span class="token number">18</span> <span class="token operator">AND</span> age <span class="token operator">&lt;=</span> <span class="token number">80</span><span class="token punctuation">;</span>
<span class="token keyword">UPDATE</span> stu <span class="token keyword">SET</span> addr<span class="token operator">=</span><span class="token string">&#39;qd&#39;</span><span class="token punctuation">,</span> gender<span class="token operator">=</span><span class="token string">&#39;\u7537&#39;</span> <span class="token keyword">WHERE</span> age <span class="token operator">&lt;&gt;</span> <span class="token number">18</span><span class="token punctuation">;</span>
<span class="token keyword">UPDATE</span> stu <span class="token keyword">SET</span> addr<span class="token operator">=</span><span class="token string">&#39;qd&#39;</span><span class="token punctuation">,</span> gender<span class="token operator">=</span><span class="token string">&#39;\u7537&#39;</span> <span class="token keyword">WHERE</span> age <span class="token operator">BETWEEN</span> <span class="token number">18</span> <span class="token operator">AND</span> <span class="token number">80</span><span class="token punctuation">;</span>
<span class="token keyword">UPDATE</span> stu <span class="token keyword">SET</span> addr<span class="token operator">=</span><span class="token string">&#39;qdsnq&#39;</span> <span class="token keyword">WHERE</span> name<span class="token operator">=</span><span class="token string">&#39;zs&#39;</span> <span class="token operator">OR</span> name<span class="token operator">=</span><span class="token string">&#39;ls&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">UPDATE</span> stu <span class="token keyword">SET</span> addr<span class="token operator">=</span><span class="token string">&#39;qdsnq&#39;</span> <span class="token keyword">WHERE</span> name <span class="token operator">IN</span><span class="token punctuation">(</span><span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;lisi&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">UPDATE</span> stu <span class="token keyword">SET</span> addr<span class="token operator">=</span><span class="token string">&#39;qdsnq&#39;</span> <span class="token keyword">WHERE</span> age <span class="token operator">IS</span> <span class="token operator">NOT</span> <span class="token boolean">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3\u3001\u5220\u9664\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_2-3\u3001\u5220\u9664\u6570\u636E" aria-hidden="true">#</a> 2.3\u3001\u5220\u9664\u6570\u636E</h3><blockquote><p>\u7528\u6765\u5220\u9664\u8868\u4E2D\u5DF2\u6709\u7684\u6570\u636E\u3002</p></blockquote><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment"># WHERE\u6761\u4EF6\u662F\u53EF\u9009\u7684, \u5982\u679C\u6CA1\u6709\u6761\u4EF6, \u5C31\u5220\u9664\u6240\u6709\u8BB0\u5F55, \u591A\u6570\u65F6\u5019\u6211\u4EEC\u90FD\u52A0\u4E0AWHERE\u6761\u4EF6</span>
<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> \u8868\u540D <span class="token punctuation">[</span><span class="token keyword">WHERE</span> \u6761\u4EF6<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment"># \u5220\u9664id\u4E3A1\u7684\u5B66\u751F</span>
<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> stu <span class="token keyword">WHERE</span> id<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">#\u4E0EDELETE\u4E0D\u52A0WHERE\u5220\u9664\u6574\u8868\u6570\u636E\u4E0D\u540C\uFF0CTRUNCATE\u662F\u628A\u8868\u9500\u6BC1\uFF0C\u518D\u6309\u7167\u539F\u8868\u7684\u683C\u5F0F\u521B\u5EFA\u4E00\u5F20\u65B0\u8868</span>
<span class="token keyword">TRUNCATE</span> <span class="token keyword">TABLE</span> \u8868\u540D<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),o=[e];function c(l,u){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","05_DML.html.vue"]]);export{k as default};
