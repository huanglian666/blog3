import{_ as n,o as s,c as a,f as t}from"./app.3adea723.js";const e="/blog3/assets/image-20210909162304967.0ad65c58.png",l={},i=t(`<h2 id="\u4E00\u3001jsp\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001jsp\u6307\u4EE4" aria-hidden="true">#</a> \u4E00\u3001JSP\u6307\u4EE4</h2><blockquote><p>JSP\u6307\u4EE4\u7528\u6765\u8BBE\u7F6E\u4E0E\u6574\u4E2AJSP\u9875\u9762\u76F8\u5173\u7684\u5C5E\u6027\u3002</p><p>\u8BED\u6CD5\u683C\u5F0F\uFF1A<code>\u6307\u4EE4\u683C\u5F0F\uFF1A&lt;%@\u6307\u4EE4\u540D attr1=&quot;&quot; attr2=&quot;&quot; %&gt;</code>\u3002</p><p>\u4E00\u822C\u90FD\u4F1A\u628AJSP\u6307\u4EE4\u653E\u5230JSP\u6587\u4EF6\u7684\u6700\u4E0A\u65B9\uFF0C\u4F46\u8FD9\u4E0D\u662F\u5FC5\u987B\u7684\u3002</p><p>\u5E38\u7528\u6307\u4EE4\uFF1A</p><ul><li><p><code>page </code>\uFF1A\u5B9A\u4E49\u9875\u9762\u7684\u4F9D\u8D56\u5C5E\u6027\uFF0C\u6BD4\u5982\u811A\u672C\u8BED\u8A00\u3001error\u9875\u9762\u3001\u7F13\u5B58\u9700\u6C42\u7B49\u7B49\uFF1B</p></li><li><p><code>include</code>\uFF1A\u5305\u542B\u5176\u4ED6\u6587\u4EF6\uFF1B</p></li><li><p><code>taglib </code>\uFF1A\u5F15\u5165\u6807\u7B7E\u5E93\u7684\u5B9A\u4E49\uFF0C\u53EF\u4EE5\u662F\u81EA\u5B9A\u4E49\u6807\u7B7E\u3002</p></li></ul></blockquote><h3 id="_1-1\u3001page\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#_1-1\u3001page\u6307\u4EE4" aria-hidden="true">#</a> 1.1\u3001page\u6307\u4EE4</h3><blockquote><p>page\u6307\u4EE4\u662F\u6700\u4E3A\u5E38\u7528\u7684\u6307\u5B9A\uFF0C\u4E5F\u662F\u5C5E\u6027\u6700\u591A\u7684\u5C5E\u6027\uFF0Cpage\u6307\u4EE4\u6CA1\u6709\u5FC5\u987B\u5C5E\u6027\uFF0C\u90FD\u662F\u53EF\u9009\u5C5E\u6027\uFF0C\u4F8B\u5982<code>&lt;%@page %&gt;</code>\uFF0C\u6CA1\u6709\u7ED9\u51FA\u4EFB\u4F55\u5C5E\u6027\u4E5F\u662F\u53EF\u4EE5\u7684\u3002</p><p>\u5173\u4E8EpageEncoding\u548CcontentType\uFF1A</p><ul><li>pageEncoding <ul><li>\u6307\u5B9A\u5F53\u524DJSP\u9875\u9762\u7684\u7F16\u7801</li><li>\u8FD9\u4E2A\u7F16\u7801\u662F\u7ED9\u670D\u52A1\u5668\u770B\u7684\uFF0C\u670D\u52A1\u5668\u9700\u8981\u77E5\u9053\u5F53\u524DJSP\u4F7F\u7528\u7684\u7F16\u7801\uFF0C\u4E0D\u7136\u670D\u52A1\u5668\u65E0\u6CD5\u6B63\u786E\u628AJSP\u7F16\u8BD1\u6210java\u6587\u4EF6</li><li>\u8FD9\u4E2A\u7F16\u7801\u53EA\u9700\u8981\u4E0E\u771F\u5B9E\u7684\u9875\u9762\u7F16\u7801\u4E00\u81F4\u5373\u53EF</li></ul></li><li>contentType <ul><li>\u8BBE\u7F6E\u54CD\u5E94\u5B57\u7B26\u6D41\u7684\u7F16\u7801</li><li>\u8BBE\u7F6Econtent-type\u54CD\u5E94\u5934</li></ul></li><li>\u65E0\u8BBA\u662Fpage\u6307\u4EE4\u7684pageEncoding\u8FD8\u662FcontentType\uFF0C\u5B83\u4EEC\u7684\u9ED8\u8BA4\u503C\u90FD\u662FISO-8859-1\uFF0CISO-8859-1\u662F\u65E0\u6CD5\u663E\u793A\u4E2D\u6587\u7684\uFF0C\u6240\u4EE5JSP\u9875\u9762\u4E2D\u5B58\u5728\u4E2D\u6587\u7684\u8BDD\uFF0C\u4E00\u5B9A\u8981\u8BBE\u7F6E\u8FD9\u4E24\u4E2A\u5C5E\u6027</li><li>\u4E24\u8005\u5173\u7CFB <ul><li>\u5F53pageEncoding\u548CcontentType\u53EA\u51FA\u73B0\u4E00\u4E2A\u65F6\uFF0C\u90A3\u4E48\u53E6\u4E00\u4E2A\u7684\u503C\u4E0E\u51FA\u73B0\u7684\u503C\u76F8\u540C\u3002</li><li>\u5982\u679C\u4E24\u4E2A\u90FD\u4E0D\u51FA\u73B0\uFF0C\u90A3\u4E48\u4E24\u4E2A\u5C5E\u6027\u7684\u503C\u90FD\u662FISO-8859-1\u3002</li></ul></li></ul><p>import\u5C5E\u6027\uFF1A\u5BF9\u5E94java\u4EE3\u7801\u4E2D\u7684import\u8BED\u53E5\uFF0C\u7528\u6765\u5BFC\u5165\u5305\u3002</p></blockquote><h3 id="_1-2\u3001include\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#_1-2\u3001include\u6307\u4EE4" aria-hidden="true">#</a> 1.2\u3001include\u6307\u4EE4</h3><blockquote><ul><li>include\u6307\u4EE4\u8868\u793A\u9759\u6001\u5305\u542B\uFF0C\u5373\u76EE\u7684\u662F\u628A\u591A\u4E2AJSP\u5408\u5E76\u6210\u4E00\u4E2AJSP\u6587\u4EF6\u3002</li><li>include\u6307\u4EE4\u53EA\u6709\u4E00\u4E2A\u5C5E\u6027\uFF1Afile\uFF0C\u6307\u5B9A\u8981\u5305\u542B\u7684\u9875\u9762</li><li>a.jsp\u9875\u9762\u4E2D\u4F7F\u7528include\u6307\u4EE4\u5305\u542B\u4E86b.jsp\uFF0C\u90A3\u4E48\u5728\u7F16\u8BD1a.jsp\u65F6\uFF0C\u4F1A\u628A\u4E24\u4E2A\u6587\u4EF6\u5408\u5E76\u6210\u4E00\u4E2A\u6587\u4EF6\u518D\u7F16\u8BD1\u6210.java\u3002</li></ul></blockquote><h3 id="_1-3\u3001taglib\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#_1-3\u3001taglib\u6307\u4EE4" aria-hidden="true">#</a> 1.3\u3001taglib\u6307\u4EE4</h3><blockquote><p>\u5B66\u4E60jstl\u6807\u7B7E\u4F7F\u7528\uFF0C\u540E\u9762\u518D\u8BB2</p></blockquote><h2 id="\u4E8C\u3001jsp\u4E5D\u5927\u5185\u7F6E\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001jsp\u4E5D\u5927\u5185\u7F6E\u5BF9\u8C61" aria-hidden="true">#</a> \u4E8C\u3001JSP\u4E5D\u5927\u5185\u7F6E\u5BF9\u8C61</h2><h3 id="_2-1\u3001\u7B80\u8981\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_2-1\u3001\u7B80\u8981\u8BF4\u660E" aria-hidden="true">#</a> 2.1\u3001\u7B80\u8981\u8BF4\u660E</h3><blockquote><p>JSP\u5185\u7F6E\u5BF9\u8C61\uFF1A\u5728JSP\u4E2D\u65E0\u9700\u521B\u5EFA\u5C31\u53EF\u4EE5\u4F7F\u7528\u76849\u4E2A\u5BF9\u8C61\u3002</p><p>\u4E5D\u5927\u5185\u7F6E\u5BF9\u8C61\u5982\u4E0B\uFF1A</p><ul><li><code>out(JspWriter)</code>\uFF1A\u7B49\u540C\u4E0Eresponse.getWriter()\uFF0C\u7528\u6765\u5411\u5BA2\u6237\u7AEF\u53D1\u9001\u6587\u672C\u6570\u636E</li><li><code>config(ServletConfig)</code>\uFF1A\u5BF9\u5E94\u201D\u771F\u8EAB\u201D\u4E2D\u7684ServletConfig</li><li><code>page(\u5F53\u524DJSP\u7684\u771F\u8EAB\u7C7B\u578B)</code>\uFF1A\u5F53\u524DJSP\u9875\u9762\u7684\u201Cthis\u201D\uFF0C\u5373\u5F53\u524D\u5BF9\u8C61</li><li><code>pageContext(PageContext)</code>\uFF1A\u9875\u9762\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF0C\u5B83\u662F\u6700\u540E\u4E00\u4E2A\u6CA1\u8BB2\u7684\u57DF\u5BF9\u8C61</li><li><code>exception(Throwable)</code>\uFF1A\u53EA\u6709\u5728\u9519\u8BEF\u9875\u9762\u4E2D\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u5BF9\u8C61</li><li><code>request(HttpServletRequest)</code>\uFF1A\u5373HttpServletRequest\u7C7B\u7684\u5BF9\u8C61\uFF08\u6CE8\u610F\uFF09</li><li><code>response(HttpServletResponse)</code>\uFF1A\u5373HttpServletResponse\u7C7B\u7684\u5BF9\u8C61\uFF08\u6CE8\u610F\uFF09</li><li><code>application(ServletContext)</code>\uFF1A\u5373ServletContext\u7C7B\u7684\u5BF9\u8C61\uFF08\u6CE8\u610F\uFF09</li><li><code>session(HttpSession)</code>\uFF1A\u5373HttpSession\u7C7B\u7684\u5BF9\u8C61\uFF0C\u4E0D\u662F\u6BCF\u4E2AJSP\u9875\u9762\u4E2D\u90FD\u53EF\u4EE5\u4F7F\u7528\uFF0C\u5982\u679C\u5728\u67D0\u4E2AJSP\u9875\u9762\u4E2D\u8BBE\u7F6E<code>&lt;%@page session=\u201Dfalse\u201D%&gt;</code>\uFF0C\u8BF4\u660E\u8FD9\u4E2A\u9875\u9762\u4E0D\u80FD\u4F7F\u7528session</li></ul><p>\u4F7F\u7528\u60C5\u51B5</p><ul><li>\u6781\u5C11\u4F7F\u7528\uFF1Aconfig\u3001page\u3001exception</li><li>\u4E0D\u662F\u6BCF\u4E2AJSP\u9875\u9762\u90FD\u53EF\u4EE5\u4F7F\u7528\uFF1Aexception\u3001session</li></ul></blockquote><h3 id="_2-2\u3001pagecontext" tabindex="-1"><a class="header-anchor" href="#_2-2\u3001pagecontext" aria-hidden="true">#</a> 2.2\u3001pageContext</h3><blockquote><p>\u4E3B\u8981\u529F\u80FD\uFF1A</p><ul><li>\u57DF\u5BF9\u8C61\u529F\u80FD</li><li>\u4EE3\u7406\u5176\u5B83\u57DF\u5BF9\u8C61\u529F\u80FD</li><li>\u83B7\u53D6\u5176\u4ED6\u5185\u7F6E\u5BF9\u8C61</li></ul></blockquote><h4 id="_2-2-1\u3001\u57DF\u5BF9\u8C61\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#_2-2-1\u3001\u57DF\u5BF9\u8C61\u529F\u80FD" aria-hidden="true">#</a> 2.2.1\u3001\u57DF\u5BF9\u8C61\u529F\u80FD</h4><blockquote><p>\u8868\u793A\u5F53\u524D\u9875\u9762 \u548C\u5176\u4ED6\u57DF\u5BF9\u8C61\u4E00\u6837\uFF0C\u4ED6\u4EEC\u90FD\u6709\u5171\u540C\u7684\u65B9\u6CD5\uFF1A</p><ul><li><code>void setAttribute(String name, Object value)</code></li><li><code>Object getAttribute(String name)</code></li><li><code>void removeAttribute(String name)</code></li></ul></blockquote><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;\u6D4B\u8BD5Page\u57DF\u5BF9\u8C61&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;%
    	//\u5728page\u57DF\u4E2D\u5B58\u653E\u6570\u636E
        pageContext.setAttribute(&quot;name&quot;, &quot;zhangsan&quot;);
    %&gt;

    &lt;%
    	//\u4ECEpage\u57DF\u4E2D\u83B7\u53D6\u6570\u636E
        System.out.println(pageContext.getAttribute(&quot;name&quot;));
    %&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-2\u3001\u4EE3\u7406\u5176\u4ED6\u57DF\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_2-2-2\u3001\u4EE3\u7406\u5176\u4ED6\u57DF\u5BF9\u8C61" aria-hidden="true">#</a> 2.2.2\u3001\u4EE3\u7406\u5176\u4ED6\u57DF\u5BF9\u8C61</h4><blockquote><p>\u53EF\u4EE5\u4F7F\u7528pageContext\u5411request\u3001session\u3001application\u5BF9\u8C61\u4E2D\u5B58\u53D6\u6570\u636E\uFF0C\u201C\u4E00\u4E2A\u9876\u56DB\u4E2A\u201D</p><p><code>void setAttribute(String name, Object value, int scope)</code>\uFF1A\u5728\u6307\u5B9A\u8303\u56F4\u4E2D\u6DFB\u52A0\u6570\u636E</p><p><code>Object getAttribute(String name, int scope)</code>\uFF1A\u83B7\u53D6\u6307\u5B9A\u8303\u56F4\u7684\u6570\u636E</p><p><code>void removeAttribute(String name, int scope)</code>\uFF1A\u79FB\u9664\u6307\u5B9A\u8303\u56F4\u7684\u6570\u636E</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>pageContext<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;x&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;X&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pageContext<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;x&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;XX&quot;</span><span class="token punctuation">,</span> <span class="token class-name">PageContext</span><span class="token punctuation">.</span><span class="token constant">REQUEST_SCOPE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pageContext<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;x&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;XXX&quot;</span><span class="token punctuation">,</span> <span class="token class-name">PageContext</span><span class="token punctuation">.</span><span class="token constant">SESSION_SCOPE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pageContext<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;x&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;XXXX&quot;</span><span class="token punctuation">,</span> <span class="token class-name">PageContext</span><span class="token punctuation">.</span><span class="token constant">APPLICATION_SCOPE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u521B\u5EFAServlet</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;MServlet&quot;</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token string">&quot;/MServlet&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u83B7\u53D6Session</span>
        <span class="token class-name">HttpSession</span> session <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5728Session\u57DF\u4E2D\u5B58\u653E\u6570\u636E</span>
        session<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;lisi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token function">doGet</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u521B\u5EFA\u6D4B\u8BD5\u7684JSP</p></blockquote><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;%
        //\u901A\u8FC7page\u57DF\u4ECEsession\u4E2D\u83B7\u53D6\u6570\u636E
        Object name = pageContext.getAttribute(&quot;name&quot;, PageContext.SESSION_SCOPE);
        System.out.println(name);
    %&gt;
&lt;/body&gt;
&lt;/html&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>Object findAttribute(String name)</code>\uFF1A\u4F9D\u6B21\u5728<code>page\u3001request\u3001session\u3001application</code>\u8303\u56F4\u67E5\u627E\u540D\u79F0\u4E3Aname\u7684\u6570\u636E\uFF0C\u5982\u679C\u627E\u5230\u5C31\u505C\u6B62\u67E5\u627E\u3002\u8FD9\u8BF4\u660E\u5728\u8FD9\u4E2A\u8303\u56F4\u5185\u6709\u76F8\u540C\u540D\u79F0\u7684\u6570\u636E\uFF0C\u90A3\u4E48page\u8303\u56F4\u7684\u4F18\u5148\u7EA7\u6700\u9AD8</p></blockquote><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page language=&quot;java&quot; contentType=&quot;text/html; charset=UTF-8&quot;
    pageEncoding=&quot;UTF-8&quot;%&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Insert title here&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
	&lt;%
	
		pageContext.setAttribute(&quot;key&quot;, &quot;page_value&quot;);
		request.setAttribute(&quot;key&quot;, &quot;request_value&quot;);
		session.setAttribute(&quot;key&quot;, &quot;session_value&quot;);
		application.setAttribute(&quot;key&quot;, &quot;app_value&quot;);
	%&gt;
	
	&lt;%
    	//\u5168\u57DF\u67E5\u627E
		String value = (String)pageContext.findAttribute(&quot;key&quot;);
		out.print(value);
	%&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-3\u3001\u83B7\u53D6\u5176\u4ED6\u5185\u7F6E\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_2-2-3\u3001\u83B7\u53D6\u5176\u4ED6\u5185\u7F6E\u5BF9\u8C61" aria-hidden="true">#</a> 2.2.3\u3001\u83B7\u53D6\u5176\u4ED6\u5185\u7F6E\u5BF9\u8C61</h4><blockquote><p>\u4E00\u4E2ApageContext\u5BF9\u8C61\u7B49\u4E8E\u6240\u6709\u5185\u7F6E\u5BF9\u8C61\uFF0C\u53731\u4E2A\u5F539\u4E2A\u3002\u8FD9\u662F\u56E0\u4E3A\u53EF\u4EE5\u4F7F\u7528pageContext\u5BF9\u8C61\u83B7\u53D6\u5176\u5B838\u4E2A\u5185\u7F6E\u5BF9\u8C61\u3002</p><p><code>JspWriter getOut()</code>\uFF1A\u83B7\u53D6out\u5185\u7F6E\u5BF9\u8C61</p><p><code>ServletConfig getServletConfig()</code>\uFF1A\u83B7\u53D6config\u5185\u7F6E\u5BF9\u8C61</p><p><code>Object getPage()</code>\uFF1A\u83B7\u53D6page\u5185\u7F6E\u5BF9\u8C61</p><p><code>ServletRequest getRequest()</code>\uFF1A\u83B7\u53D6request\u5185\u7F6E\u5BF9\u8C61</p><p><code>ServletResponse getResponse()</code>\uFF1A\u83B7\u53D6response\u5185\u7F6E\u5BF9\u8C61</p><p><code>HttpSession getSession()</code>\uFF1A\u83B7\u53D6session\u5185\u7F6E\u5BF9\u8C61</p><p><code>ServletContext getServletContext()</code>\uFF1A\u83B7\u53D6application\u5185\u7F6E\u5BF9\u8C61</p><p><code>Exception getException()</code>\uFF1A\u83B7\u53D6exception\u5185\u7F6E\u5BF9\u8C61</p></blockquote><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;%
    	//\u83B7\u53D6application\u5BF9\u8C61
        System.out.println(pageContext.getServletContext().getContextPath());
    %&gt;
&lt;/body&gt;
&lt;/html&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E09\u3001jsp\u52A8\u4F5C\u6807\u7B7E-\u4E86\u89E3" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001jsp\u52A8\u4F5C\u6807\u7B7E-\u4E86\u89E3" aria-hidden="true">#</a> \u4E09\u3001JSP\u52A8\u4F5C\u6807\u7B7E\uFF08\u4E86\u89E3\uFF09</h2><blockquote><p>\u52A8\u4F5C\u6807\u7B7E\u7684\u4F5C\u7528\u662F\u7528\u6765\u7B80\u5316Java\u811A\u672C\u7684\uFF0CJSP\u52A8\u4F5C\u6807\u7B7E\u662FJavaWeb\u5185\u7F6E\u7684\u52A8\u4F5C\u6807\u7B7E\uFF0C\u5B83\u4EEC\u662F\u5DF2\u7ECF\u5B9A\u4E49\u597D\u7684\u52A8\u4F5C\u6807\u7B7E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u62FF\u6765\u76F4\u63A5\u4F7F\u7528\u3002</p></blockquote><h3 id="_3-1\u3001include\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#_3-1\u3001include\u6807\u7B7E" aria-hidden="true">#</a> 3.1\u3001include\u6807\u7B7E</h3><blockquote><p>\u8BED\u6CD5\uFF1A<code>&lt;jsp:include page=&quot;\u76F8\u5BF9URL\u5730\u5740&quot; /&gt;</code></p><p>\u4F5C\u7528\uFF1A\u5305\u542B\u5176\u5B83JSP\u9875\u9762</p><p>\u4E0Einclude\u6307\u4EE4\u533A\u522B\uFF1A</p><ul><li>include\u6307\u4EE4\u662F\u5728\u7F16\u8BD1\u7EA7\u522B\u5B8C\u6210\u7684\u5305\u542B\uFF0C\u5373\u628A\u5F53\u524DJSP\u548C\u88AB\u5305\u542B\u7684JSP\u5408\u5E76\u6210\u4E00\u4E2AJSP\uFF0C\u7136\u540E\u518D\u7F16\u8BD1\u6210\u4E00\u4E2AServlet\uFF1B</li><li>include\u52A8\u4F5C\u6807\u7B7E\u662F\u5728\u8FD0\u884C\u7EA7\u522B\u5B8C\u6210\u7684\u5305\u542B\uFF0C\u5373\u5F53\u524DJSP\u548C\u88AB\u5305\u542B\u7684JSP\u90FD\u4F1A\u5404\u81EA\u751F\u6210Servlet\uFF0C\u7136\u540E\u5728\u6267\u884C\u5F53\u524DJSP\u7684Servlet\u65F6\u5B8C\u6210\u5305\u542B\u53E6\u4E00\u4E2AJSP\u7684Servlet\u3002\u5B83\u4E0ERequestDispatcher\u7684include()\u65B9\u6CD5\u662F\u76F8\u540C\u7684\u3002</li></ul><p>\u88AB\u5305\u542B\u7684JSP\uFF1Aa.jsp</p></blockquote><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;p&gt;11111111111&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>b.jsp</p></blockquote><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;jsp:include page=&quot;a.jsp&quot; /&gt;
    &lt;p&gt;222222222222&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2\u3001forward" tabindex="-1"><a class="header-anchor" href="#_3-2\u3001forward" aria-hidden="true">#</a> 3.2\u3001forward</h3><blockquote><p>forward\u6807\u7B7E\u7684\u4F5C\u7528\u662F\u8BF7\u6C42\u8F6C\u53D1\uFF01forward\u6807\u7B7E\u7684\u4F5C\u7528\u4E0E<code>RequestDispatcher.forward()</code>\u65B9\u6CD5\u76F8\u540C</p></blockquote><h2 id="\u56DB\u3001el\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001el\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> \u56DB\u3001EL\u8868\u8FBE\u5F0F</h2><h3 id="_4-1\u3001\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_4-1\u3001\u6982\u8FF0" aria-hidden="true">#</a> 4.1\u3001\u6982\u8FF0</h3><blockquote><p>EL\uFF1AExpression Language\uFF0C\u8868\u8FBE\u5F0F\u8BED\u8A00\u3002\u5728JSP\u9875\u9762\u4E2D\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\uFF0C\u4ECEJSP2.0\u5F00\u59CB\uFF0C\u4EE3\u66FFJSP\u811A\u672C\uFF0C\u975EJava\u5F00\u53D1\u4EBA\u5458\u4E5F\u53EF\u4EE5\u4F7F\u7528\u3002</p></blockquote><h3 id="_4-2\u3001el\u8868\u8FBE\u5F0F\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_4-2\u3001el\u8868\u8FBE\u5F0F\u4F7F\u7528" aria-hidden="true">#</a> 4.2\u3001EL\u8868\u8FBE\u5F0F\u4F7F\u7528</h3><blockquote><ul><li>\u7528\u4E8E\u66FF\u6362\u4F5C\u7528\u57DF\u5BF9\u8C61<code>.getAttribute(&quot;name&quot;)</code>, \u5E76\u5C06\u4ECE\u57DF\u4E2D\u83B7\u53D6\u7684\u6570\u636E\u8FDB\u884C\u663E\u793A\uFF1B</li><li>EL\u7528\u6765\u4EE3\u66FF<code>&lt;%=...%&gt;</code>\uFF0C<code>&lt;%=...%&gt;</code>\u4EE3\u8868\u8F93\u51FA\u3002</li></ul></blockquote><h4 id="_4-2-1\u3001el\u8868\u8FBE\u5F0F\u5E94\u7528-\u83B7\u53D6\u57FA\u672C\u7C7B\u578B\u3001\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#_4-2-1\u3001el\u8868\u8FBE\u5F0F\u5E94\u7528-\u83B7\u53D6\u57FA\u672C\u7C7B\u578B\u3001\u5B57\u7B26\u4E32" aria-hidden="true">#</a> 4.2.1\u3001EL\u8868\u8FBE\u5F0F\u5E94\u7528\uFF08\u83B7\u53D6\u57FA\u672C\u7C7B\u578B\u3001\u5B57\u7B26\u4E32\uFF09</h4><blockquote><p><code>\${scope.name}</code>\u83B7\u53D6\u5177\u4F53\u67D0\u4E2A\u4F5C\u7528\u57DF\u4E2D\u7684\u6570\u636E\uFF1B</p><p><code>\${name}</code>\u83B7\u53D6\u4F5C\u7528\u57DF\u4E2D\u7684\u6570\u636E\uFF0C\u9010\u7EA7\u67E5\u627E\uFF08pageContext\u3001request\u3001session\u3001application\uFF09</p><p>EL\u548CJSP\u811A\u672C\u7684\u533A\u522B</p><ul><li><code>&lt;%=request.getAttribute() %&gt;</code> \u6CA1\u6709\u627E\u5230\u8FD4\u56DEnull</li><li><code>\${requestScope.name}</code>\u6CA1\u627E\u5230\u8FD4\u56DE&quot;&quot;</li></ul></blockquote><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;el\u521D\u6B65&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;%
        //\u5728request\u57DF\u603B\u5B58\u653E\u6570\u636E String
        pageContext.setAttribute(&quot;name&quot;, &quot;Bob&quot;);
        request.setAttribute(&quot;name&quot;, &quot;Zhangsan&quot;);
        request.setAttribute(&quot;age&quot;, 10);
        session.setAttribute(&quot;name&quot;, &quot;Jim&quot;);
        application.setAttribute(&quot;name&quot;, &quot;Lucy&quot;);
    %&gt;

    &lt;%-- \u4F7F\u7528EL\u8868\u8FBE\u5F0F\u83B7\u53D6\u67D0\u4E2A\u57DF\u4E2D\u7684\u6570\u636E\u5E76\u5728\u7F51\u9875\u4E0A\u663E\u793A
        \u4F5C\u7528\u57DF xxxScope
     --%&gt;
    &lt;p&gt;\${requestScope.name}&lt;/p&gt;
    &lt;p&gt;\${requestScope.age}&lt;/p&gt;
    &lt;hr/&gt;
    &lt;%--
        \u5168\u57DF\u67E5\u627E
            \u5982\u679C\u6CA1\u6709\u9650\u5B9AxxxScope\uFF0C\u4F1A\u6309\u7167pageContext,request,session,application\u7684\u987A\u5E8F\u8FDB\u884C\u67E5\u627E
     --%&gt;
    &lt;p&gt;\${name}&lt;/p&gt;
    &lt;hr/&gt;
    &lt;%--
        JSP\u811A\u672C\u548CEL\u8868\u8FBE\u5F0F\u7684\u533A\u522B
     --%&gt;
    &lt;p&gt;&lt;%=request.getAttribute(&quot;abc&quot;)%&gt;&lt;/p&gt;
    &lt;p&gt;\${requestScope.abc}&lt;/p&gt;
    &lt;hr/&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-2\u3001el\u8868\u8FBE\u5F0F\u5E94\u7528-\u83B7\u53D6\u5F15\u7528\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_4-2-2\u3001el\u8868\u8FBE\u5F0F\u5E94\u7528-\u83B7\u53D6\u5F15\u7528\u7C7B\u578B" aria-hidden="true">#</a> 4.2.2\u3001EL\u8868\u8FBE\u5F0F\u5E94\u7528\uFF08\u83B7\u53D6\u5F15\u7528\u7C7B\u578B\uFF09</h4><blockquote><p>\u4F7F\u7528EL\u83B7\u53D6\u4F5C\u7528\u57DF\u4E2D\u7684\u5BF9\u8C61\u8C03\u7528\u5C5E\u6027\u65F6\uFF0C\u53EA\u80FD\u8BBF\u95EE\u5BF9\u8C61\u7684get\u65B9\u6CD5\uFF0C\u5FC5\u987B\u9075\u5B88\u547D\u540D\u89C4\u8303\u5B9A\u4E49</p><p>\u521B\u5EFA\u5B9E\u4F53\u7C7B</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u8868\u793APerson\u7684\u5B9E\u4F53\u7C7B
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>

	<span class="token comment">//set,get</span>
    <span class="token comment">//toString</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>EL\u8868\u8FBE\u5F0F\u6F14\u793A</p></blockquote><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page import=&quot;com.qf.entity.Person&quot; %&gt;
&lt;%@ page import=&quot;java.util.List&quot; %&gt;
&lt;%@ page import=&quot;java.util.ArrayList&quot; %&gt;
&lt;%@ page import=&quot;java.util.Map&quot; %&gt;
&lt;%@ page import=&quot;java.util.HashMap&quot; %&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;el\u8868\u8FBE\u5F0F\u5904\u7406\u590D\u6742\u7C7B\u578B&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;%
        Person p = new Person();
        p.setId(100);
        p.setName(&quot;Tom&quot;);
        p.setAge(20);

        Person p1 = new Person();
        p1.setId(200);
        p1.setName(&quot;zs&quot;);
        p1.setAge(21);
        //\u5C06Person\u5BF9\u8C61\u5B58\u653E\u5728\u57DF\u5F53\u4E2D
        request.setAttribute(&quot;person&quot;, p);

        int[] arr = {1, 2, 100, 50};
        request.setAttribute(&quot;arr&quot;, arr);

        List&lt;String&gt; names = new ArrayList&lt;&gt;();
        names.add(&quot;zs&quot;);
        names.add(&quot;ls&quot;);
        names.add(&quot;ww&quot;);
        request.setAttribute(&quot;names&quot;, names);

        List&lt;Person&gt; persons = new ArrayList&lt;&gt;();
        persons.add(p);
        persons.add(p1);
        request.setAttribute(&quot;persons&quot;, persons);

        Map&lt;String, Object&gt; map = new HashMap&lt;&gt;();
        map.put(&quot;name&quot;, &quot;zs&quot;);
        map.put(&quot;addr&quot;, &quot;qd&quot;);
        request.setAttribute(&quot;map&quot;, map);
    %&gt;
    &lt;%--
        \u901A\u8FC7EL\u8868\u8FBE\u5F0F\u5728\u9875\u9762\u4E0A\u663E\u793A\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027
        \u524D\u63D0\uFF1A\u5C5E\u6027\u8981\u6709\u5BF9\u5E94\u7684set\u548Cget\u65B9\u6CD5
     --%&gt;
    &lt;p&gt;\${requestScope.person.id}&lt;/p&gt;
    &lt;p&gt;\${requestScope.person.name}&lt;/p&gt;
    &lt;p&gt;\${requestScope.person.age}&lt;/p&gt;
    &lt;hr/&gt;
    &lt;%--
        int[]
            1 2 100 1000
        List&lt;String&gt;
            &quot;111&quot; &quot;222&quot; &quot;333&quot;
        List&lt;Person&gt;
        Map&lt;String, Object&gt;
    --%&gt;
    &lt;%--
        \u901A\u8FC7EL\u8868\u8FBE\u5F0F\u5728\u9875\u9762\u4E0A\u663E\u793A\u6570\u7EC4\u4E2D\u7684\u5143\u7D20
    --%&gt;
    &lt;p&gt;\${requestScope.arr[3]}&lt;/p&gt;
    &lt;hr/&gt;
    &lt;%--
        \u901A\u8FC7EL\u8868\u8FBE\u5F0F\u5728\u9875\u9762\u4E0A\u663E\u793A\u96C6\u5408\u4E2D\u7684\u5143\u7D20\uFF0C\u96C6\u5408\u4E2D\u5B58\u653E\u7684\u662F\u7B80\u5355\u7C7B\u578B\uFF08\u57FA\u672C\u6570\u636E\u7C7B\u578B + String\uFF09
    --%&gt;
    &lt;p&gt;\${names[2]}&lt;/p&gt;
    &lt;hr/&gt;

    &lt;%--
        \u901A\u8FC7EL\u8868\u8FBE\u5F0F\u5728\u9875\u9762\u4E0A\u663E\u793A\u96C6\u5408(List, Map)\u4E2D\u7684\u5143\u7D20\uFF0C\u96C6\u5408\u4E2D\u5B58\u653E\u7684\u662F\u590D\u6742\u7C7B\u578B\uFF08\u9664\u4E86String\u7C7B\u578B\u4E4B\u5916\u7684\u5F15\u7528\u6570\u636E\u7C7B\u578B\uFF09
    --%&gt;
    &lt;p&gt;\${persons[0].id}&lt;/p&gt;
    &lt;p&gt;\${persons[0].name}&lt;/p&gt;
    &lt;p&gt;\${persons[0].age}&lt;/p&gt;
    &lt;hr/&gt;
    &lt;p&gt;\${map.name}&lt;/p&gt;
    &lt;p&gt;\${map.addr}&lt;/p&gt;
    &lt;p&gt;\${map[&quot;addr&quot;]}&lt;/p&gt;
    &lt;hr/&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3\u3001el\u8868\u8FBE\u5F0F\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#_4-3\u3001el\u8868\u8FBE\u5F0F\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> 4.3\u3001EL\u8868\u8FBE\u5F0F\u8FD0\u7B97\u7B26</h3><blockquote><table><thead><tr><th style="text-align:left;"><strong>\u64CD\u4F5C\u7B26</strong></th><th style="text-align:left;"><strong>\u63CF\u8FF0</strong></th></tr></thead><tbody><tr><td style="text-align:left;">.</td><td style="text-align:left;">\u8BBF\u95EE\u4E00\u4E2ABean\u5C5E\u6027\u6216\u8005\u4E00\u4E2A\u6620\u5C04\u6761\u76EE</td></tr><tr><td style="text-align:left;">[]</td><td style="text-align:left;">\u8BBF\u95EE\u4E00\u4E2A\u6570\u7EC4\u6216\u8005\u96C6\u5408\u7684\u5143\u7D20</td></tr><tr><td style="text-align:left;">+</td><td style="text-align:left;">\u52A0</td></tr><tr><td style="text-align:left;">-</td><td style="text-align:left;">\u51CF\u6216\u8D1F</td></tr><tr><td style="text-align:left;">*</td><td style="text-align:left;">\u4E58</td></tr><tr><td style="text-align:left;">/ or div</td><td style="text-align:left;">\u9664</td></tr><tr><td style="text-align:left;">% or mod</td><td style="text-align:left;">\u53D6\u6A21</td></tr><tr><td style="text-align:left;">== or eq</td><td style="text-align:left;">\u6D4B\u8BD5\u662F\u5426\u76F8\u7B49</td></tr><tr><td style="text-align:left;">!= or ne</td><td style="text-align:left;">\u6D4B\u8BD5\u662F\u5426\u4E0D\u7B49</td></tr><tr><td style="text-align:left;">&lt; or lt</td><td style="text-align:left;">\u6D4B\u8BD5\u662F\u5426\u5C0F\u4E8E</td></tr><tr><td style="text-align:left;">&gt; or gt</td><td style="text-align:left;">\u6D4B\u8BD5\u662F\u5426\u5927\u4E8E</td></tr><tr><td style="text-align:left;">&lt;= or le</td><td style="text-align:left;">\u6D4B\u8BD5\u662F\u5426\u5C0F\u4E8E\u7B49\u4E8E</td></tr><tr><td style="text-align:left;">&gt;= or ge</td><td style="text-align:left;">\u6D4B\u8BD5\u662F\u5426\u5927\u4E8E\u7B49\u4E8E</td></tr><tr><td style="text-align:left;">&amp;&amp; or and</td><td style="text-align:left;">\u6D4B\u8BD5\u903B\u8F91\u4E0E</td></tr><tr><td style="text-align:left;">|| or or</td><td style="text-align:left;">\u6D4B\u8BD5\u903B\u8F91\u6216</td></tr><tr><td style="text-align:left;">! or not</td><td style="text-align:left;">\u6D4B\u8BD5\u53D6\u53CD</td></tr><tr><td style="text-align:left;">empty</td><td style="text-align:left;">\u6D4B\u8BD5\u662F\u5426\u7A7A\u503C</td></tr></tbody></table></blockquote><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;el_\u8FD0\u7B97\u7B26&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;%
        request.setAttribute(&quot;num&quot;, 15);
        request.setAttribute(&quot;name&quot;, &quot;&quot;);
    %&gt;

    &lt;%-- el\u8FD0\u7B97\u7B26 --%&gt;
    &lt;p&gt;\${num + 1}&lt;/p&gt;
    &lt;p&gt;\${num - 1}&lt;/p&gt;
    &lt;p&gt;\${num * 10}&lt;/p&gt;
    &lt;p&gt;\${num / 10}&lt;/p&gt;
    &lt;p&gt;\${num div 10}&lt;/p&gt;
    &lt;p&gt;\${num % 3}&lt;/p&gt;
    &lt;p&gt;\${num mod 3}&lt;/p&gt;
    &lt;hr/&gt;
    &lt;p&gt;\${num == 15}&lt;/p&gt;
    &lt;p&gt;\${num eq 15}&lt;/p&gt; &lt;%-- eq equals --%&gt;
    &lt;p&gt;\${num != 15}&lt;/p&gt;
    &lt;p&gt;\${num ne 15}&lt;/p&gt;&lt;%-- ne not equals --%&gt;
    &lt;p&gt;\${num lt 20}&lt;/p&gt;&lt;%-- lt less than --%&gt;
    &lt;p&gt;\${num gt 20}&lt;/p&gt;&lt;%-- gt great than --%&gt;
    &lt;hr/&gt;
    &lt;p&gt;\${true or false}&lt;/p&gt;
    &lt;hr/&gt;
    &lt;p&gt;\${empty name}&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5173\u4E8E<code>empty</code>\u5173\u952E\u5B57</p></blockquote><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;% 
	String s1=&quot;&quot;;
    pageContext.setAttribute(&quot;s1&quot;, s1);
    String s2=null;
    pageContext.setAttribute(&quot;s2&quot;, s2);
    String s3=&quot;abcdefg&quot;;
    pageContext.setAttribute(&quot;s3&quot;, s3);
    List list1 = new ArrayList();
    pageContext.setAttribute(&quot;list1&quot;, list1);
%&gt;
&lt;!-- empty\u5173\u952E\u53EA\u8981\u5185\u5BB9\u662F&quot;\u7A7A&quot;\u5C31\u8FD4\u56DEtrue --&gt;
\${empty s1}&lt;br&gt;
\${empty s2}&lt;br&gt;
\${empty s3}&lt;br&gt;
\${empty list1}&lt;br&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4\u3001el\u7684\u9690\u5F0F\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_4-4\u3001el\u7684\u9690\u5F0F\u5BF9\u8C61" aria-hidden="true">#</a> 4.4\u3001EL\u7684\u9690\u5F0F\u5BF9\u8C61</h3><blockquote><p>EL \u8868\u8FBE\u5F0F\u8BED\u8A00\u5B9A\u4E49\u4E8611\u4E2A\u9690\u5F0F\u5BF9\u8C61</p><table><thead><tr><th style="text-align:left;"><strong>\u9690\u542B\u5BF9\u8C61</strong></th><th style="text-align:left;"><strong>\u63CF\u8FF0</strong></th></tr></thead><tbody><tr><td style="text-align:left;">pageScope</td><td style="text-align:left;">page\u4F5C\u7528\u57DF</td></tr><tr><td style="text-align:left;">requestScope</td><td style="text-align:left;">request\u4F5C\u7528\u57DF</td></tr><tr><td style="text-align:left;">sessionScope</td><td style="text-align:left;">session\u4F5C\u7528\u57DF</td></tr><tr><td style="text-align:left;">applicationScope</td><td style="text-align:left;">application\u4F5C\u7528\u57DF</td></tr><tr><td style="text-align:left;">param</td><td style="text-align:left;">request\u5BF9\u8C61\u7684\u53C2\u6570\uFF0C\u5B57\u7B26\u4E32</td></tr><tr><td style="text-align:left;">paramValues</td><td style="text-align:left;">request\u5BF9\u8C61\u7684\u53C2\u6570\uFF0C\u5B57\u7B26\u4E32\u96C6\u5408</td></tr><tr><td style="text-align:left;">header</td><td style="text-align:left;">HTTP\u4FE1\u606F\u5934\uFF0C\u5B57\u7B26\u4E32</td></tr><tr><td style="text-align:left;">headerValues</td><td style="text-align:left;">HTTP\u4FE1\u606F\u5934\uFF0C\u5B57\u7B26\u4E32\u96C6\u5408</td></tr><tr><td style="text-align:left;">initParam</td><td style="text-align:left;">\u4E0A\u4E0B\u6587\u521D\u59CB\u5316\u53C2\u6570</td></tr><tr><td style="text-align:left;">cookie</td><td style="text-align:left;">Cookie\u503C</td></tr><tr><td style="text-align:left;">pageContext</td><td style="text-align:left;">\u5F53\u524D\u9875\u9762\u7684pageContext\u57DF\u5BF9\u8C61</td></tr></tbody></table></blockquote><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;%--
        \u8BBF\u95EE\u670D\u52A1\u5668\u67D0\u4E2A\u4F4D\u7F6E\u7684\u65F6\u5019
        \u534F\u8BAE://\u4E3B\u673A\u540D:\u7AEF\u53E3  http://localhost:8080
        \u9879\u76EE\u540D\uFF1A\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\u4E0D\u80FD\u5199\u6B7B - \u201C\u52A8\u201D
        \u8D44\u6E90\u7684\u4F4D\u7F6E
    --%&gt;
    &lt;%--&lt;a href=&quot;/el_jstl/loginServlet?username=bob&quot;&gt;\u767B\u5F55&lt;/a&gt;--%&gt;
    &lt;a href=&quot;\${pageContext.request.contextPath}/loginServlet?username=bob&quot;&gt;\u767B\u5F55&lt;/a&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4F7F\u7528EL\u8868\u8FBE\u5F0F\u4FEE\u6539\u767B\u5F55\u6848\u4F8B</p><p>login.jsp</p></blockquote><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;\u767B\u5F55&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;%
    String errorMsg = (String)request.getAttribute(&quot;errorMsg&quot;);
    if(errorMsg != null) {
%&gt;
    &lt;p style=&quot;color: red;&quot;&gt;\${errorMsg}&lt;/p&gt;
&lt;%
    }
%&gt;
&lt;form action=&quot;\${pageContext.request.contextPath}/LoginServlet&quot; method=&quot;post&quot;&gt;
    &lt;fieldset style=&quot;width: 300px;&quot;&gt;
        &lt;legend&gt;\u7528\u6237\u767B\u5F55&lt;/legend&gt;
        &lt;p&gt;
            &lt;label&gt;\u8D26\u53F7&lt;/label&gt;
            &lt;input type=&quot;text&quot; name=&quot;username&quot; placeholder=&quot;\u8BF7\u8F93\u5165\u7528\u6237\u540D&quot; /&gt;
        &lt;/p&gt;
        &lt;p&gt;
            &lt;label&gt;\u5BC6\u7801&lt;/label&gt;
            &lt;input type=&quot;password&quot; name=&quot;password&quot; placeholder=&quot;\u8BF7\u8F93\u5165\u5BC6\u7801&quot; /&gt;
        &lt;/p&gt;
        &lt;p&gt;
            &lt;label&gt;\u9A8C\u8BC1\u7801&lt;/label&gt;
            &lt;input type=&quot;text&quot; name=&quot;code&quot; placeholder=&quot;\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801&quot; /&gt;
            &lt;img src=&quot;\${pageContext.request.contextPath}/CodeServlet&quot; alt=&quot;\u9A8C\u8BC1\u7801&quot;&gt;
        &lt;/p&gt;
        &lt;p&gt;
            &lt;button type=&quot;submit&quot;&gt;\u767B\u5F55&lt;/button&gt;
            &lt;button type=&quot;reset&quot;&gt;\u91CD\u7F6E&lt;/button&gt;
        &lt;/p&gt;
    &lt;/fieldset&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>success.jsp</p></blockquote><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;success&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;%
        String username = (String) session.getAttribute(&quot;username&quot;);
        if(username != null) {
    %&gt;
    &lt;p&gt;\u6B22\u8FCE\${username}&lt;/p&gt;
    &lt;p&gt;&lt;a href=&quot;\${pageContext.request.contextPath}/LogoutServlet&quot;&gt;\u6CE8\u9500&lt;/a&gt;&lt;/p&gt;
    &lt;%
        } else {
    %&gt;
    &lt;p&gt;\u60A8\u8FD8\u6CA1\u6709\u767B\u5F55\uFF0C\u8BF7\u5148&lt;a href=&quot;\${pageContext.request.contextPath}/login.jsp&quot;&gt;\u767B\u5F55&lt;/a&gt;&lt;/p&gt;
    &lt;%
        }
    %&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E94\u3001jstl" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001jstl" aria-hidden="true">#</a> \u4E94\u3001JSTL</h2><h3 id="_5-1\u3001\u76EE\u524D\u5B58\u5728\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_5-1\u3001\u76EE\u524D\u5B58\u5728\u7684\u95EE\u9898" aria-hidden="true">#</a> 5.1\u3001\u76EE\u524D\u5B58\u5728\u7684\u95EE\u9898</h3><blockquote><p>EL\u4E3B\u8981\u662F\u7528\u4E8E\u4F5C\u7528\u57DF\u83B7\u53D6\u6570\u636E\uFF0C\u867D\u7136\u53EF\u4EE5\u505A\u8FD0\u7B97\u5224\u65AD\uFF0C\u4F46\u662F\u5F97\u5230\u7684\u90FD\u662F\u4E00\u4E2A\u7ED3\u679C\uFF0C\u505A\u5C55\u793A\uFF1B</p><p>EL\u4E0D\u5B58\u5728\u6D41\u7A0B\u63A7\u5236\u3002\u6BD4\u5982\u5224\u65AD\uFF1B</p><p>EL\u5BF9\u4E8E\u96C6\u5408\u53EA\u80FD\u505A\u5355\u70B9\u8BBF\u95EE\uFF0C\u4E0D\u80FD\u5B9E\u73B0\u904D\u5386\u64CD\u4F5C\u3002\u6BD4\u5982\u5FAA\u73AF\u3002</p></blockquote><h3 id="_5-2\u3001\u4EC0\u4E48\u662Fjstl" tabindex="-1"><a class="header-anchor" href="#_5-2\u3001\u4EC0\u4E48\u662Fjstl" aria-hidden="true">#</a> 5.2\u3001\u4EC0\u4E48\u662FJSTL</h3><blockquote><p>JSTL\u662Fapache\u5BF9EL\u8868\u8FBE\u5F0F\u7684\u6269\u5C55\uFF08\u4E5F\u5C31\u662F\u8BF4JSTL\u4F9D\u8D56EL\uFF09\uFF0CJSTL\u662F\u6807\u7B7E\u8BED\u8A00;</p><p>\u4E0D\u662FJSP\u7684\u5185\u7F6E\u6807\u7B7E\uFF0C\u4F7F\u7528\u65F6\u9700\u8981\u5BFC\u5305</p></blockquote><h3 id="_5-3\u3001jstl\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_5-3\u3001jstl\u7684\u4F5C\u7528" aria-hidden="true">#</a> 5.3\u3001JSTL\u7684\u4F5C\u7528</h3><blockquote><p>\u53EF\u5BF9EL\u83B7\u53D6\u5230\u7684\u6570\u636E\u8FDB\u884C\u903B\u8F91\u64CD\u4F5C\uFF1B</p><p>\u4E0EEL\u5408\u4F5C\u5B8C\u6210\u6570\u636E\u7684\u5C55\u793A\u3002</p></blockquote><h3 id="_5-4\u3001\u5982\u4F55\u4F7F\u7528jstl" tabindex="-1"><a class="header-anchor" href="#_5-4\u3001\u5982\u4F55\u4F7F\u7528jstl" aria-hidden="true">#</a> 5.4\u3001\u5982\u4F55\u4F7F\u7528JSTL</h3><blockquote><ol><li>\u5BFC\u5165Jar\u5305\uFF0Cstandard.jar \u548C jstl.jar\uFF1B</li><li>\u5728JSP\u9875\u9762\u5F15\u5165\u6807\u7B7E\u5E93<code>&lt;% @taglib uri=&quot;http://java.sun.com/jsp/jstl/core&quot; prefix=&quot;c&quot;&gt;</code></li></ol></blockquote><h3 id="_5-5\u3001jstl\u6838\u5FC3\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#_5-5\u3001jstl\u6838\u5FC3\u6807\u7B7E" aria-hidden="true">#</a> 5.5\u3001JSTL\u6838\u5FC3\u6807\u7B7E</h3><h4 id="_5-5-1\u3001\u8F93\u5165\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#_5-5-1\u3001\u8F93\u5165\u8F93\u51FA" aria-hidden="true">#</a> 5.5.1\u3001\u8F93\u5165\u8F93\u51FA</h4><blockquote><p>out\u6807\u7B7E</p><ul><li>value\uFF1A\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u5E38\u91CF\uFF0C\u4E5F\u53EF\u4EE5\u662FEL\u8868\u8FBE\u5F0F</li><li>default\uFF1A\u5F53\u8981\u8F93\u51FA\u7684\u5185\u5BB9\u4E3Anull\u65F6\uFF0C\u4F1A\u8F93\u51FAdefault\u6307\u5B9A\u7684\u503C</li></ul></blockquote><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;!-- \u8F93\u51FA\u5B57\u7B26\u4E32aaa --&gt;
&lt;c:out value=&quot;aaa&quot;/&gt; 
&lt;!-- \u8F93\u51FA\u57DF\u5C5E\u6027aaa\uFF0C\u5176\u4E2D\u4E0E\${aaa}\u76F8\u540C --&gt;
&lt;c:out value=&quot;\${aaa}&quot;/&gt; 
&lt;!-- \u5982\u679C\${aaa}\u4E0D\u5B58\u5728\uFF0C\u90A3\u4E48\u8F93\u51FAxxx\u5B57\u7B26\u4E32 --&gt;
&lt;c:out value=&quot;\${aaa}&quot; default=&quot;xxx&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>set\u6807\u7B7E</p></blockquote><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;!-- \u521B\u5EFA\u540D\u4E3Aa,\u503C\u4E3Ahello\u7684\u57DF\u5C5E\u6027\uFF0C\u8303\u56F4\uFF1ApageContext --&gt;
&lt;c:set var=&quot;a&quot; value=&quot;hello&quot;/&gt; 
&lt;!-- \u8303\u56F4\u4E3Asession --&gt;
&lt;c:set var=&quot;a&quot; value=&quot;hello&quot; scope=&quot;session&quot;/&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>remove\u6807\u7B7E</p></blockquote><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;!-- \u5220\u9664\u540D\u4E3Aa\u7684\u57DF\u5C5E\u6027 --&gt;
&lt;c:remove var=&quot;a&quot;/&gt; 
&lt;!-- \u5220\u9664page\u57DF\u4E2D\u540D\u4E3Aa\u7684\u57DF\u5C5E\u6027 --&gt;
&lt;c:remove var=&quot;a&quot; scope=&quot;page&quot;/&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6848\u4F8B</p></blockquote><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;jstl\u8F93\u5165\u8F93\u51FA&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;%--
        JSTL
        \u589E\u5F3AEL\u8868\u8FBE\u5F0F\u7684\u529F\u80FD\uFF0C\u5B9E\u73B0\u590D\u6742\u7684\u903B\u8F91\u64CD\u4F5C
     --%&gt;
    &lt;%-- \u8F93\u51FA --%&gt;
    &lt;p&gt;&lt;c:out value=&quot;hello world&quot;/&gt;&lt;/p&gt;
    &lt;p&gt;hello world&lt;/p&gt;
    &lt;hr/&gt;
    &lt;%-- \u5B9A\u4E49\u53D8\u91CF
        int age = 10;
        \u5728\u57DF\u5BF9\u8C61\u4E2D\u5B58\u653E\u6570\u636E\uFF0C\u9ED8\u8BA4\u5728page\u57DF\u4E2D\u5B58\u653E
        scope:\u6307\u5B9A\u6570\u636E\u5B58\u653E\u5728\u54EA\u4E2A\u57DF\u4E2D
     --%&gt;
    &lt;c:set var=&quot;name&quot; value=&quot;Zhangsan&quot; /&gt;
    &lt;p&gt;\${pageScope.name}&lt;/p&gt;

    &lt;c:set var=&quot;age&quot; value=&quot;10&quot; scope=&quot;application&quot; /&gt;
    &lt;p&gt;\${age}&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-5-2\u3001\u5206\u652F\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_5-5-2\u3001\u5206\u652F\u7ED3\u6784" aria-hidden="true">#</a> 5.5.2\u3001\u5206\u652F\u7ED3\u6784</h4><blockquote><p>if\u6807\u7B7E</p></blockquote><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;!-- \u5F53\u6761\u4EF6\u4E3Atrue\u65F6\u6267\u884C\u6807\u7B7E\u4F53\u5185\u5BB9 --&gt;
&lt;c:if test=&quot;\${\u6761\u4EF6}&quot;&gt; 
    hello
&lt;/c:if&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>choose\u6807\u7B7E</p></blockquote><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;!--
	\u7B49\u540C\u4E8E\uFF1A
        if() {
        } esle if() {
        } esle if() {
        } else if() {
        } else {
        }
--&gt;
&lt;c:choose&gt;
    &lt;c:when test=&quot;\${\u6761\u4EF61}&quot;&gt;a&lt;/c:when&gt;
    &lt;c:when test=&quot;\${\u6761\u4EF62}&quot;&gt;b&lt;/c:when&gt;
    &lt;c:when test=&quot;\${\u6761\u4EF63}&quot;&gt;c&lt;/c:when&gt;
    &lt;c:otherwise&gt;d&lt;/c:otherwise&gt;
&lt;/c:choose&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6848\u4F8B</p></blockquote><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;jstl\u5206\u652F\u7ED3\u6784&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;!--
        if...else
            if() {
            }

            if() {
            } else {
            }

            if() {
            } else if(){
            } else if() {
            } else {
            }
        \u4F7F\u7528JSTL\u5B9E\u73B0\u5206\u652F\u7ED3\u6784
    --&gt;
    &lt;c:set var=&quot;num&quot; value=&quot;10&quot; /&gt;
    &lt;c:if test=&quot;\${num gt 2}&quot;&gt;
        \${num}\u5927\u4E8E2\u662F\u6210\u7ACB\u7684
    &lt;/c:if&gt;
    &lt;hr/&gt;

    &lt;%-- \u5224\u65AD\u662F\u5426\u53CA\u683C --%&gt;
    &lt;c:set var=&quot;score&quot; value=&quot;80&quot; /&gt;
    &lt;c:choose&gt;
        &lt;c:when test=&quot;\${score &gt;= 60}&quot;&gt;
            &lt;p&gt;\u53CA\u683C&lt;/p&gt;
        &lt;/c:when&gt;
        &lt;c:otherwise&gt;
            &lt;p&gt;\u4E0D\u53CA\u683C&lt;/p&gt;
        &lt;/c:otherwise&gt;
    &lt;/c:choose&gt;
    &lt;hr/&gt;
    &lt;c:choose&gt;
        &lt;c:when test=&quot;\${score &gt;= 80}&quot;&gt;
            &lt;p&gt;\u4F18\u79C0&lt;/p&gt;
        &lt;/c:when&gt;
        &lt;c:when test=&quot;\${score &gt;= 70}&quot;&gt;
            &lt;p&gt;\u826F\u597D&lt;/p&gt;
        &lt;/c:when&gt;
        &lt;c:when test=&quot;\${score &gt;= 60}&quot;&gt;
            &lt;p&gt;\u53CA\u683C&lt;/p&gt;
        &lt;/c:when&gt;
        &lt;c:otherwise&gt;
            &lt;p&gt;\u4E0D\u53CA\u683C&lt;/p&gt;
        &lt;/c:otherwise&gt;
    &lt;/c:choose&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-5-3\u3001\u5FAA\u73AF\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_5-5-3\u3001\u5FAA\u73AF\u7ED3\u6784" aria-hidden="true">#</a> 5.5.3\u3001\u5FAA\u73AF\u7ED3\u6784</h4><blockquote><p>forEach\u6807\u7B7E</p></blockquote><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;!-- 
    var\uFF1A\u5FAA\u73AF\u53D8\u91CF
    begin\uFF1A\u8BBE\u7F6E\u5FAA\u73AF\u53D8\u91CF\u4ECE\u51E0\u5F00\u59CB\u3002
    end\uFF1A\u8BBE\u7F6E\u5FAA\u73AF\u53D8\u91CF\u5230\u51E0\u7ED3\u675F\u3002
    step\uFF1A\u8BBE\u7F6E\u6B65\u957F\uFF01\u7B49\u540C\u4E0Ejava\u4E2D\u7684i++\uFF0C\u6216i+=2\u3002step\u9ED8\u8BA4\u4E3A1
--&gt;
&lt;c:forEach var=&quot;i&quot; begin=&quot;1&quot; end=&quot;10&quot; step=&quot;1&quot;&gt;
    \${i}
&lt;/c:forEach&gt;


&lt;!--
	\u7528\u6765\u8F93\u51FA\u6570\u7EC4\u3001\u96C6\u5408
    items\uFF1A\u6307\u5B9A\u8981\u5FAA\u73AF\u8C01\uFF0C\u5B83\u53EF\u4EE5\u662F\u4E00\u4E2A\u6570\u7EC4\u6216\u4E00\u4E2A\u96C6\u5408
    var\uFF1A\u628A\u6570\u7EC4\u6216\u96C6\u5408\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u8D4B\u503C\u7ED9var\u6307\u5B9A\u7684\u53D8\u91CF

	\u53EF\u4EE5\u4F7F\u7528varStatus\u6765\u521B\u5EFA\u5FAA\u73AF\u72B6\u6001\u53D8\u91CF
		count\uFF1A\u5FAA\u73AF\u5143\u7D20\u7684\u4E2A\u6570
        index\uFF1A\u5FAA\u73AF\u5143\u7D20\u7684\u4E0B\u6807
        first\uFF1A\u662F\u5426\u4E3A\u7B2C\u4E00\u4E2A\u5143\u7D20
        last\uFF1A\u662F\u5426\u4E3A\u6700\u540E\u4E00\u4E2A\u5143\u7D20
        current\uFF1A\u5F53\u524D\u5143\u7D20
--&gt;
&lt;c:forEach items=&quot;\${strs }&quot; var=&quot;str&quot;&gt;
    \${str }&lt;br/&gt;
&lt;/c:forEach&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6848\u4F8B</p></blockquote><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page import=&quot;java.util.List&quot; %&gt;
&lt;%@ page import=&quot;java.util.ArrayList&quot; %&gt;
&lt;%@ page import=&quot;com.qf.entity.Person&quot; %&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;JSTL\u5FAA\u73AF\u7ED3\u6784&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;%--
        \u5FAA\u73AF - \u53CD\u590D\u505A\u67D0\u4EF6\u4E8B\u60C5
        1.\u8F93\u51FA1 2 3 ... 5
        for(int i = 1; i &lt;= 5; i++) {
            System.out.println(i);
        }
    --%&gt;
    &lt;c:forEach var=&quot;i&quot; begin=&quot;1&quot; end=&quot;5&quot; step=&quot;1&quot;&gt;
        &lt;p&gt;\${i}&lt;/p&gt;
    &lt;/c:forEach&gt;
    &lt;hr/&gt;

    &lt;%--
        1+2+3+...+100

        int sum = 0;
        for(int i = 1; i &lt;= 100; i++) {
            sum = sum + i;
        }
        System.out.println(sum);

        2+4+6+8+...+100
    --%&gt;
    &lt;c:set var=&quot;sum&quot; value=&quot;0&quot; /&gt;
    &lt;c:forEach var=&quot;i&quot; begin=&quot;2&quot; end=&quot;100&quot; step=&quot;2&quot;&gt;
        &lt;c:set var=&quot;sum&quot; value=&quot;\${sum + i}&quot; /&gt;
    &lt;/c:forEach&gt;
    &lt;p&gt;\${sum}&lt;/p&gt;
    &lt;hr/&gt;

    &lt;%-- \u901A\u8FC7jstl\u904D\u5386\u4E00\u4E2A\u96C6\u5408,\u5728h1\u6807\u9898\u4E2D\u663E\u793A
        \u5047\u8BBE\u96C6\u5408\u4ECEservlet\u4E2D\u4FDD\u5B58\u5230request\u57DF\u4E2D\uFF0C\u7136\u540E\u8F6C\u53D1\u5230\u8BE5\u9875\u9762
     --%&gt;
    &lt;%
        List&lt;String&gt; list = new ArrayList&lt;&gt;();
        list.add(&quot;1111&quot;);
        list.add(&quot;2222&quot;);
        list.add(&quot;333&quot;);
        list.add(&quot;******&quot;);

        request.setAttribute(&quot;list&quot;, list);
    %&gt;
    &lt;%--
        items:\u8868\u793A\u88AB\u904D\u5386\u7684\u96C6\u5408
        var:\u6BCF\u4E00\u6B21\u88AB\u904D\u5386\u5230\u7684\u5143\u7D20

        int[] arr = {1, 2, 3};
        for(int i : arr) {

        }
    --%&gt;
    &lt;c:forEach items=&quot;\${list}&quot; var=&quot;item&quot;&gt;
        &lt;h1&gt;\${item}&lt;/h1&gt;
    &lt;/c:forEach&gt;

    &lt;hr/&gt;
    &lt;%
        //\u6A21\u62DF
        List&lt;Person&gt; persons = new ArrayList&lt;&gt;();
        Person p = new Person();
        p.setId(100);
        p.setName(&quot;Tom&quot;);
        p.setAge(20);

        Person p1 = new Person();
        p1.setId(200);
        p1.setName(&quot;zs&quot;);
        p1.setAge(21);

        persons.add(p);
        persons.add(p1);

        request.setAttribute(&quot;persons&quot;, persons);
        //emp
    %&gt;

    &lt;table border=&quot;1&quot;&gt;
        &lt;tr&gt;
            &lt;th&gt;id&lt;/th&gt;
            &lt;th&gt;name&lt;/th&gt;
            &lt;th&gt;age&lt;/th&gt;
            &lt;th colspan=&quot;2&quot;&gt;opt&lt;/th&gt;
        &lt;/tr&gt;
        &lt;c:forEach items=&quot;\${persons}&quot; var=&quot;p&quot;&gt;
            &lt;tr&gt;
                &lt;td&gt;\${p.id}&lt;/td&gt;
                &lt;td&gt;\${p.name}&lt;/td&gt;
                &lt;td&gt;\${p.age}&lt;/td&gt;
                &lt;td&gt;&lt;a href=&quot;\${pageContext.request.contextPath}/xxxServlet?id=\${p.id}&quot;&gt;\u4FEE\u6539&lt;/a&gt;&lt;/td&gt;
                &lt;td&gt;&lt;a href=&quot;\${pageContext.request.contextPath}/aaaServlet?id=\${p.id}&quot;&gt;\u5220\u9664&lt;/a&gt;&lt;/td&gt;
            &lt;/tr&gt;
        &lt;/c:forEach&gt;
    &lt;/table&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-6\u3001\u767B\u5F55\u6848\u4F8B\u5347\u7EA7" tabindex="-1"><a class="header-anchor" href="#_5-6\u3001\u767B\u5F55\u6848\u4F8B\u5347\u7EA7" aria-hidden="true">#</a> 5.6\u3001\u767B\u5F55\u6848\u4F8B\u5347\u7EA7</h3><blockquote><p>\u4FEE\u6539login.jsp</p></blockquote><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;\u767B\u5F55&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;p style=&quot;color: red;&quot;&gt;\${errorMsg}&lt;/p&gt;
&lt;form action=&quot;\${pageContext.request.contextPath}/LoginServlet&quot; method=&quot;post&quot;&gt;
    &lt;fieldset style=&quot;width: 300px;&quot;&gt;
        &lt;legend&gt;\u7528\u6237\u767B\u5F55&lt;/legend&gt;
        &lt;p&gt;
            &lt;label&gt;\u8D26\u53F7&lt;/label&gt;
            &lt;input type=&quot;text&quot; name=&quot;username&quot; placeholder=&quot;\u8BF7\u8F93\u5165\u7528\u6237\u540D&quot; /&gt;
        &lt;/p&gt;
        &lt;p&gt;
            &lt;label&gt;\u5BC6\u7801&lt;/label&gt;
            &lt;input type=&quot;password&quot; name=&quot;password&quot; placeholder=&quot;\u8BF7\u8F93\u5165\u5BC6\u7801&quot; /&gt;
        &lt;/p&gt;
        &lt;p&gt;
            &lt;label&gt;\u9A8C\u8BC1\u7801&lt;/label&gt;
            &lt;input type=&quot;text&quot; name=&quot;code&quot; placeholder=&quot;\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801&quot; /&gt;
            &lt;img src=&quot;\${pageContext.request.contextPath}/CodeServlet&quot; alt=&quot;\u9A8C\u8BC1\u7801&quot;&gt;
        &lt;/p&gt;
        &lt;p&gt;
            &lt;button type=&quot;submit&quot;&gt;\u767B\u5F55&lt;/button&gt;
            &lt;button type=&quot;reset&quot;&gt;\u91CD\u7F6E&lt;/button&gt;
        &lt;/p&gt;
    &lt;/fieldset&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4FEE\u6539success.jsp</p></blockquote><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;success&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;c:choose&gt;
        &lt;c:when test=&quot;\${not empty username}&quot;&gt;
            &lt;p&gt;\u6B22\u8FCE\${username}&lt;/p&gt;
            &lt;p&gt;&lt;a href=&quot;\${pageContext.request.contextPath}/LogoutServlet&quot;&gt;\u6CE8\u9500&lt;/a&gt;&lt;/p&gt;
        &lt;/c:when&gt;
        &lt;c:otherwise&gt;
            &lt;p&gt;\u60A8\u8FD8\u6CA1\u6709\u767B\u5F55\uFF0C\u8BF7\u5148&lt;a href=&quot;\${pageContext.request.contextPath}/login.jsp&quot;&gt;\u767B\u5F55&lt;/a&gt;&lt;/p&gt;
        &lt;/c:otherwise&gt;
    &lt;/c:choose&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-7\u3001mvc\u8BBE\u8BA1\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_5-7\u3001mvc\u8BBE\u8BA1\u6A21\u5F0F" aria-hidden="true">#</a> 5.7\u3001MVC\u8BBE\u8BA1\u6A21\u5F0F</h3><h4 id="_5-7-1\u3001\u7ECF\u5178\u7684mvc" tabindex="-1"><a class="header-anchor" href="#_5-7-1\u3001\u7ECF\u5178\u7684mvc" aria-hidden="true">#</a> 5.7.1\u3001\u7ECF\u5178\u7684MVC</h4><blockquote><p>MVC\u662F\u8F6F\u4EF6\u5DE5\u7A0B\u4E2D\u7684\u4E00\u79CD\u67B6\u6784\u6A21\u5F0F\uFF0C\u662F\u4E00\u79CD\u8F6F\u4EF6\u8BBE\u8BA1\u601D\u60F3\uFF0C\u5C06\u6570\u636E\u64CD\u4F5C\u3001\u9875\u9762\u5C55\u793A\u3001\u4E1A\u52A1\u903B\u8F91\u5206\u4E3A\u4E09\u4E2A\u5C42\u7EA7\uFF08\u6A21\u5757\uFF09\uFF0C\u72EC\u7ACB\u5B8C\u6210\uFF0C\u76F8\u4E92\u8C03\u7528 \uFF0CMVC\u5E76\u4E0D\u662FJava\u72EC\u6709\u7684\uFF0C\u73B0\u5728\u51E0\u4E4E\u6240\u6709\u7684B/S\u7684\u67B6\u6784\u90FD\u91C7\u7528\u4E86MVC\u6A21\u5F0F\uFF0C\u4E09\u4E2A\u5C42\u7EA7\u5982\u4E0B\uFF1A</p><ul><li>\u89C6\u56FEView\uFF1A\u89C6\u56FE\u5373\u662F\u7528\u6237\u770B\u5230\u5E76\u4E0E\u4E4B\u4EA4\u4E92\u7684\u754C\u9762\uFF0C\u6BD4\u5982HTML\uFF08\u9759\u6001\u8D44\u6E90\uFF09\uFF0CJSP\uFF08\u52A8\u6001\u8D44\u6E90\uFF09\u7B49\u7B49\uFF1B</li><li>\u63A7\u5236\u5668Controller\uFF1A\u63A7\u5236\u5668\u5373\u662F\u63A7\u5236\u8BF7\u6C42\u7684\u5904\u7406\u903B\u8F91\uFF0C\u5BF9\u8BF7\u6C42\u8FDB\u884C\u5904\u7406\uFF0C\u8D1F\u8D23\u6D41\u7A0B\u8DF3\u8F6C(\u8F6C\u53D1\u548C\u91CD\u5B9A\u5411)\uFF1B</li><li>\u6A21\u578BModel\uFF1A\u5BF9\u5BA2\u89C2\u4E16\u754C\u7684\u4E00\u79CD\u4EE3\u8868\u548C\u6A21\u62DF(\u4E1A\u52A1\u6A21\u62DF\u3001\u5BF9\u8C61\u6A21\u62DF)\u3002</li></ul><p>\u4F18\u70B9\uFF1A</p><ul><li>\u4F4E\u8026\u5408\u6027\uFF1A\u6A21\u5757\u4E0E\u6A21\u5757\u4E4B\u95F4\u7684\u5173\u8054\u6027\u4E0D\u5F3A\uFF0C\u4E0D\u4E0E\u67D0\u4E00\u79CD\u5177\u4F53\u5B9E\u73B0\u4EA7\u751F\u5BC6\u4E0D\u53EF\u5206\u7684\u5173\u8054\u6027\uFF1B</li><li>\u9AD8\u7EF4\u62A4\u6027\uFF1A\u57FA\u4E8E\u4F4E\u8026\u5408\u6027\uFF0C\u53EF\u505A\u5230\u4E0D\u540C\u5C42\u7EA7\u7684\u529F\u80FD\u6A21\u5757\u7075\u6D3B\u66F4\u6362\u3001\u63D2\u62D4\uFF1B</li><li>\u9AD8\u91CD\u7528\u6027\uFF1A\u76F8\u540C\u7684\u6570\u636E\u5E93\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u670D\u52A1\u4E8E\u4E0D\u540C\u7684\u4E1A\u52A1\u5904\u7406\u3002\u5C06\u6570\u636E\u4F5C\u4E3A\u72EC\u7ACB\u6A21\u5757\uFF0C\u63D0\u9AD8\u91CD\u7528\u6027\u3002</li></ul></blockquote><h4 id="_5-7-2\u3001javaweb\u7ECF\u5178\u4E09\u5C42\u6846\u67B6" tabindex="-1"><a class="header-anchor" href="#_5-7-2\u3001javaweb\u7ECF\u5178\u4E09\u5C42\u6846\u67B6" aria-hidden="true">#</a> 5.7.2\u3001JavaWeb\u7ECF\u5178\u4E09\u5C42\u6846\u67B6</h4><blockquote><p>WEB\u5C42\uFF1A\u5305\u542BJSP\u548CServlet\u7B49\u4E0EWEB\u76F8\u5173\u7684\u5185\u5BB9</p><p>\u4E1A\u52A1\u5C42\uFF1A\u4E1A\u52A1\u5C42\u4E2D\u4E0D\u5305\u542BJavaWeb API\uFF0C\u5B83\u53EA\u5173\u5FC3\u4E1A\u52A1\u903B\u8F91</p><p>\u6570\u636E\u5C42\uFF1A\u5C01\u88C5\u4E86\u5BF9\u6570\u636E\u5E93\u7684\u8BBF\u95EE\u7EC6\u8282\uFF0C\u8FDB\u884C\u6700\u7EC6\u7C92\u5EA6\u7684\u589E\u5220\u6539\u67E5\u7684\u64CD\u4F5C</p></blockquote><p><img src="`+e+`" alt="image-20210909162304967"></p><blockquote><p>\u8C03\u7528\u5173\u7CFB\uFF1Aweb\u5C42\u8C03\u7528---\u4E1A\u52A1\u5C42(Service)---\u6570\u636E\u5C42(Dao)---DB</p><ul><li>\u4E1A\u52A1\u5904\u7406\u4ECE\u524D\u5230\u540E</li><li>\u5F00\u53D1\u65F6\u8981\u4ECE\u540E\u5411\u524D\u8FDB\u884C</li></ul><p>\u5173\u4E8E\u4E1A\u52A1\uFF1A</p><ul><li>\u8F6C\u8D26</li><li>\u5BF9DAO\u5C42\u65B9\u6CD5\u7684\u7EC4\u5408</li></ul><p>\u6CE8\u610F\uFF1A</p><ul><li>\u4E1A\u52A1\u5C42(Service)\u4E0D\u8981\u51FA\u73B0Java Web API\uFF0C\u4E1A\u52A1\u5C42\u4EE3\u7801\u662F\u53EF\u91CD\u7528\u7684\uFF0C\u751A\u81F3\u53EF\u4EE5\u5E94\u7528\u5230\u975EWeb\u73AF\u5883\u4E2D\uFF1B</li><li>\u4E1A\u52A1\u5C42\u4E0D\u8981\u51FA\u73B0JDBC\u76F8\u5173\u7684API\uFF1B</li><li>JavaBean\u4F5C\u4E3A\u5B9E\u4F53\u7C7B\u8D2F\u7A7Fweb\u5C42\u3001\u4E1A\u52A1\u5C42\u3001\u6570\u636E\u5C42\uFF0C\u5404\u5C42\u4E4B\u95F4\u901A\u8FC7JavaBean\u6216\u8005JavaBean\u7684\u7EC4\u5408\u8FDB\u884C\u6570\u636E\u4EA4\u4E92\u3002</li></ul></blockquote><h4 id="_5-7-3\u3001\u57FA\u4E8Ejavaweb\u4E09\u5C42\u67B6\u6784\u5347\u7EA7\u767B\u5F55\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#_5-7-3\u3001\u57FA\u4E8Ejavaweb\u4E09\u5C42\u67B6\u6784\u5347\u7EA7\u767B\u5F55\u6848\u4F8B" aria-hidden="true">#</a> 5.7.3\u3001\u57FA\u4E8EJavaWeb\u4E09\u5C42\u67B6\u6784\u5347\u7EA7\u767B\u5F55\u6848\u4F8B</h4><blockquote><p>\u51C6\u5907\u5DE5\u4F5C\uFF1A</p><ul><li>\u5EFA\u5E93\u5EFA\u8868</li><li>\u65B0\u5EFA\u9879\u76EE</li><li>\u62F7\u8D1DJar\u5305\u5230\u9879\u76EE\u7684WEB-INF\u53D1lib\u76EE\u5F55\u4E0B</li><li>\u51C6\u5907jdbc\u914D\u7F6E\u6587\u4EF6\uFF0C\u653E\u7F6E\u5728src\u4E0B</li><li>JdbcUtils\u5DE5\u5177\u7C7B\u653E\u5728utils\u5305\u4E0B\u3002</li></ul></blockquote><h5 id="_5-7-3-1\u3001\u5EFA\u5E93\u5EFA\u8868" tabindex="-1"><a class="header-anchor" href="#_5-7-3-1\u3001\u5EFA\u5E93\u5EFA\u8868" aria-hidden="true">#</a> 5.7.3.1\u3001\u5EFA\u5E93\u5EFA\u8868</h5><blockquote><p>SQL\u8BED\u53E5\u5982\u4E0B</p></blockquote><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> webtest<span class="token punctuation">;</span>
<span class="token keyword">USE</span> webtest<span class="token punctuation">;</span>

<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token keyword">user</span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">user</span>  <span class="token punctuation">(</span>
  id <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
  username <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  password <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token keyword">user</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token keyword">user</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;lisi&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5BF9\u5E94\u7684\u5B9E\u4F53\u7C7BUser</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>
    
    <span class="token comment">//set\u548Cget</span>
    <span class="token comment">//toString</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-7-3-2\u3001dao\u5C42" tabindex="-1"><a class="header-anchor" href="#_5-7-3-2\u3001dao\u5C42" aria-hidden="true">#</a> 5.7.3.2\u3001Dao\u5C42</h5><blockquote><p>Dao\u5C42\u63A5\u53E3</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>qfedu<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">SQLException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserDao</span> <span class="token punctuation">{</span>
    <span class="token class-name">User</span> <span class="token function">findByUsernameAndPassword</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">,</span> <span class="token class-name">String</span> password<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Dao\u5C42\u63A5\u53E3\u5B9E\u73B0\u7C7B</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>qfedu<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span><span class="token class-name">UserDao</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>qfedu<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>qfedu<span class="token punctuation">.</span>utils<span class="token punctuation">.</span></span><span class="token class-name">JdbcUtils</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>dbutils<span class="token punctuation">.</span></span><span class="token class-name">QueryRunner</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>dbutils<span class="token punctuation">.</span>handlers<span class="token punctuation">.</span></span><span class="token class-name">BeanHandler</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">SQLException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserDaoImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserDao</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">findByUsernameAndPassword</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">,</span> <span class="token class-name">String</span> password<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select * from user where username=? and password=?&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>username<span class="token punctuation">,</span> password<span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token class-name">QueryRunner</span> qr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryRunner</span><span class="token punctuation">(</span><span class="token class-name">JdbcUtils</span><span class="token punctuation">.</span><span class="token function">getDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> qr<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">BeanHandler</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> user<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-7-3-3\u3001service\u5C42" tabindex="-1"><a class="header-anchor" href="#_5-7-3-3\u3001service\u5C42" aria-hidden="true">#</a> 5.7.3.3\u3001Service\u5C42</h5><blockquote><p>Service\u5C42\u63A5\u53E3</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>qfedu<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
    <span class="token class-name">User</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">,</span> <span class="token class-name">String</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Service\u5C42\u5B9E\u73B0\u7C7B\u5BF9\u8C61</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>qfedu<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span><span class="token class-name">UserDao</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>qfedu<span class="token punctuation">.</span>dao<span class="token punctuation">.</span>impl<span class="token punctuation">.</span></span><span class="token class-name">UserDaoImpl</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>qfedu<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>qfedu<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">UserService</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">SQLException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">UserDao</span> userDao <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserDaoImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">,</span> <span class="token class-name">String</span> password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            user <span class="token operator">=</span> userDao<span class="token punctuation">.</span><span class="token function">findByUsernameAndPassword</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> throwables<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            throwables<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> user<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-7-3-4\u3001servlet" tabindex="-1"><a class="header-anchor" href="#_5-7-3-4\u3001servlet" aria-hidden="true">#</a> 5.7.3.4\u3001Servlet</h5><blockquote><p>\u7528\u4E8E\u767B\u5F55\u9A8C\u8BC1\u7684Servlet</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>qfedu<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>qfedu<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">UserService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>qfedu<span class="token punctuation">.</span>service<span class="token punctuation">.</span>impl<span class="token punctuation">.</span></span><span class="token class-name">UserServiceImpl</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;LoginServlet&quot;</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token string">&quot;/LoginServlet&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LoginServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">UserService</span> userService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u83B7\u53D6\u767B\u5F55\u4FE1\u606F</span>
        <span class="token class-name">String</span> username <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> password <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> code <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;code&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">HttpSession</span> session <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u4F7F\u7528\u7528\u6237\u8F93\u5165\u7684\u9A8C\u8BC1\u7801\u548C\u751F\u6210\u7684\u9A8C\u8BC1\u7801\u8FDB\u884C\u6BD4\u8F83</span>
        <span class="token class-name">String</span> generateCode <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span>session<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;generateCode&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5FFD\u7565\u5927\u5C0F\u5199\u6BD4\u8F83\u5F3A</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>generateCode<span class="token punctuation">.</span><span class="token function">equalsIgnoreCase</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//\u767B\u5F55\u9A8C\u8BC1</span>
            <span class="token class-name">User</span> user <span class="token operator">=</span> userService<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">if</span><span class="token punctuation">(</span>user <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//\u5C06\u6210\u529F\u767B\u5F55\u7684\u7528\u6237\u4FE1\u606F\u653E\u5728Session\u4E2D</span>
                session<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
                request<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">&quot;/success.jsp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;errorMsg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                request<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">&quot;/login.jsp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;errorMsg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u9A8C\u8BC1\u7801\u9519\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            request<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">&quot;/login.jsp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token function">doGet</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u7528\u4E8E\u751F\u6210\u9A8C\u8BC1\u7801\u7684Servlet</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>dsna<span class="token punctuation">.</span>util<span class="token punctuation">.</span>images<span class="token punctuation">.</span></span><span class="token class-name">ValidateCode</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;CodeServlet&quot;</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token string">&quot;/CodeServlet&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CodeServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u751F\u6210\u9A8C\u8BC1\u7801</span>
        <span class="token class-name">ValidateCode</span> codeImg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ValidateCode</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> code <span class="token operator">=</span> codeImg<span class="token punctuation">.</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u5C06\u751F\u6210\u7684\u9A8C\u8BC1\u7801\u5B58\u653E\u5728session\u4E2D</span>
        request<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;generateCode&quot;</span><span class="token punctuation">,</span> code<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u53D1\u9001\u7ED9\u6D4F\u89C8\u5668</span>
        codeImg<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token function">doGet</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u7528\u4E8E\u9000\u51FA\u767B\u5F55\u7684Servlet</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;LogoutServlet&quot;</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token string">&quot;/LogoutServlet&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LogoutServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u8BA9session\u5931\u6548</span>
        request<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">invalidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u91CD\u5B9A\u5411\u5230login.jsp</span>
        response<span class="token punctuation">.</span><span class="token function">sendRedirect</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">getContextPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;/login.jsp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token function">doGet</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-7-3-5\u3001\u76F8\u5173\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#_5-7-3-5\u3001\u76F8\u5173\u9875\u9762" aria-hidden="true">#</a> 5.7.3.5\u3001\u76F8\u5173\u9875\u9762</h5><blockquote><p>\u767B\u5F55\u9875\u9762login.jsp</p><p>\u6CE8\u610F\u8FD9\u4E2A\u9875\u9762\u4E2D\u5F15\u5165jquery\u7528\u4E8E\u5B9E\u73B0\u5355\u51FB\u5237\u65B0\u9A8C\u8BC1\u7801\uFF0C\u5982\u679C\u52A0\u8F7Djquery\u4E0D\u80FD\u8FD0\u884C\u6210\u529F\uFF0C\u5220\u9664out\u76EE\u5F55\u91CD\u8BD5\u3002</p></blockquote><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
&lt;head&gt;
    &lt;title&gt;\u767B\u5F55&lt;/title&gt;
    &lt;script src=&quot;\${pageContext.request.contextPath}/js/jquery-3.4.1.min.js&quot;&gt;&lt;/script&gt;
    &lt;script&gt;
        $(function () {
            //\u5355\u51FB\u9A8C\u8BC1\u7801\u56FE\u7247\uFF0C\u5237\u65B0\u9A8C\u8BC1\u7801
            $(&quot;#codeImg&quot;).click(function () {
                var date = new Date();
                $(&quot;#codeImg&quot;).prop(&quot;src&quot;, &quot;\${pageContext.request.contextPath}/CodeServlet?timeStamp=&quot; + date.getTime());
            });
        });
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;p style=&quot;color: red;&quot;&gt;\${errorMsg}&lt;/p&gt;
&lt;form action=&quot;\${pageContext.request.contextPath}/LoginServlet&quot; method=&quot;post&quot;&gt;
    &lt;fieldset style=&quot;width: 300px;&quot;&gt;
        &lt;legend&gt;\u7528\u6237\u767B\u5F55&lt;/legend&gt;
        &lt;p&gt;
            &lt;label&gt;\u8D26\u53F7&lt;/label&gt;
            &lt;input type=&quot;text&quot; name=&quot;username&quot; placeholder=&quot;\u8BF7\u8F93\u5165\u7528\u6237\u540D&quot; /&gt;
        &lt;/p&gt;
        &lt;p&gt;
            &lt;label&gt;\u5BC6\u7801&lt;/label&gt;
            &lt;input type=&quot;password&quot; name=&quot;password&quot; placeholder=&quot;\u8BF7\u8F93\u5165\u5BC6\u7801&quot; /&gt;
        &lt;/p&gt;
        &lt;p&gt;
            &lt;label&gt;\u9A8C\u8BC1\u7801&lt;/label&gt;
            &lt;input type=&quot;text&quot; name=&quot;code&quot; placeholder=&quot;\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801&quot; /&gt;
            &lt;img id=&quot;codeImg&quot; src=&quot;\${pageContext.request.contextPath}/CodeServlet&quot; alt=&quot;\u9A8C\u8BC1\u7801&quot; /&gt;
        &lt;/p&gt;
        &lt;p&gt;
            &lt;button type=&quot;submit&quot;&gt;\u767B\u5F55&lt;/button&gt;
            &lt;button type=&quot;reset&quot;&gt;\u91CD\u7F6E&lt;/button&gt;
        &lt;/p&gt;
    &lt;/fieldset&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6210\u529F\u9875\u9762success.jsp</p></blockquote><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;success&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;c:choose&gt;
        &lt;c:when test=&quot;\${not empty user}&quot;&gt;
            &lt;p&gt;\u6B22\u8FCE\${user.username}&lt;/p&gt;
            &lt;p&gt;&lt;a href=&quot;\${pageContext.request.contextPath}/LogoutServlet&quot;&gt;\u6CE8\u9500&lt;/a&gt;&lt;/p&gt;
        &lt;/c:when&gt;
        &lt;c:otherwise&gt;
            &lt;p&gt;\u60A8\u8FD8\u6CA1\u6709\u767B\u5F55\uFF0C\u8BF7\u5148&lt;a href=&quot;\${pageContext.request.contextPath}/login.jsp&quot;&gt;\u767B\u5F55&lt;/a&gt;&lt;/p&gt;
        &lt;/c:otherwise&gt;
    &lt;/c:choose&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,134),o=[i];function p(c,u){return s(),a("div",null,o)}const r=n(l,[["render",p],["__file","04_JSP\u8FDB\u9636_EL_JSTL.html.vue"]]);export{r as default};
