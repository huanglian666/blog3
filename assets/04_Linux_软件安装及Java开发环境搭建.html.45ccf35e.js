import{_ as s,o as a,c as n,f as e}from"./app.3adea723.js";const t="/blog3/assets/image-20210623061645125.53e13ed0.png",l={},i=e(`<h2 id="\u4E00\u3001\u5B89\u88C5jdk" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u5B89\u88C5jdk" aria-hidden="true">#</a> \u4E00\u3001\u5B89\u88C5JDK</h2><blockquote><p>\u5728Linux\u4E0B\u5B89\u88C5JDK\uFF0C\u5E76\u914D\u7F6EJAVA_HOME\u73AF\u5883\u53D8\u91CF\u2026\u2026</p></blockquote><h3 id="_1-1\u3001\u4E0B\u8F7Djdk\u7684\u538B\u7F29\u5305" tabindex="-1"><a class="header-anchor" href="#_1-1\u3001\u4E0B\u8F7Djdk\u7684\u538B\u7F29\u5305" aria-hidden="true">#</a> 1.1\u3001\u4E0B\u8F7DJDK\u7684\u538B\u7F29\u5305</h3><blockquote><p>\u53BB\u5B98\u7F51\u4E0B\u8F7D\u538B\u7F29\u5305\uFF0C\u7531\u4E8Eoracle\u5B98\u7F51\u66F4\u65B0\uFF0C\u9700\u8981\u767B\u5F55\u5E76\u540C\u610F\u534F\u8BAE\u624D\u5141\u8BB8\u4E0B\u8F7D</p><p><a href="">https://www.oracle.com/java/technologies/javase-jdk8-downloads.html</a></p></blockquote><h3 id="_1-2\u3001\u5C06jdk\u538B\u7F29\u5305\u62C9\u53D6\u5230linux\u7CFB\u7EDF\u4E2D" tabindex="-1"><a class="header-anchor" href="#_1-2\u3001\u5C06jdk\u538B\u7F29\u5305\u62C9\u53D6\u5230linux\u7CFB\u7EDF\u4E2D" aria-hidden="true">#</a> 1.2\u3001\u5C06jdk\u538B\u7F29\u5305\u62C9\u53D6\u5230Linux\u7CFB\u7EDF\u4E2D</h3><blockquote><p>\u9700\u8981\u4F7F\u7528\u56FE\u5F62\u5316\u754C\u9762\u7684xftp\u62D6\u62FD\u5230Linux\u64CD\u4F5C\u7CFB\u7EDF</p></blockquote><h3 id="_1-3\u3001\u5C06jdk\u7684\u538B\u7F29\u5305\u89E3\u538B" tabindex="-1"><a class="header-anchor" href="#_1-3\u3001\u5C06jdk\u7684\u538B\u7F29\u5305\u89E3\u538B" aria-hidden="true">#</a> 1.3\u3001\u5C06jdk\u7684\u538B\u7F29\u5305\u89E3\u538B</h3><blockquote><p>\u540E\u671F\u5927\u591A\u8F6F\u4EF6\u90FD\u5B89\u88C5\u5728/usr/local\u4E0B\uFF0C\u76F4\u63A5\u4F7F\u7528tar\u89E3\u538B</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5728/usr/local/\u65B0\u5EFA\u76EE\u5F55jdk</span>
$ <span class="token function">mkdir</span> jdk
<span class="token comment"># \u89E3\u538B\u5230\u65B0\u5EFA\u7684jdk\u76EE\u5F55</span>
$ <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> jdk-8u281-linux-x64.tar.gz <span class="token parameter variable">-C</span> /usr/local/jdk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4\u3001\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_1-4\u3001\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> 1.4\u3001\u914D\u7F6E\u73AF\u5883\u53D8\u91CF</h3><blockquote><p>Linux\u63D0\u4F9B\u4E86\u4E24\u79CD\u73AF\u5883\u53D8\u91CF\u7684\u6587\u4EF6</p><ul><li>\u7B2C\u4E00\u4E2A\u662F\u7528\u6237\u7EA7\u522B\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u5B58\u653E\u5728\uFF1A~/.bashrc</li><li><strong>\u7B2C\u4E8C\u4E2A\u662F\u7CFB\u7EDF\u7EA7\u522B\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u5B58\u653E\u5728\uFF1A/etc/profile</strong></li></ul><p>\u4FEE\u6539\u54EA\u4E2A\u6587\u4EF6\u90FD\u53EF\u4EE5\uFF08\u5EFA\u8BAE\u91C7\u7528\u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF09\uFF0C\u6BD5\u7ADF\u865A\u62DF\u673A\u5C31\u6211\u4EEC\u81EA\u5DF1\u4F7F\u7528</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u7F16\u8F91/etc/profile</span>
$ <span class="token function">vim</span> /etc/profile
<span class="token comment"># \u5728\u73AF\u5883\u53D8\u91CF\u6587\u4EF6\u4E2D\uFF0C\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/local/jdk/jdk1.8.0_281
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span>
<span class="token comment"># \u91CD\u65B0\u52A0\u8F7D\u73AF\u5883\u53D8\u91CF\u6587\u4EF6</span>
$ <span class="token builtin class-name">source</span> /etc/profile
<span class="token comment"># \u6700\u7EC8\u6D4B\u8BD5</span>
$ <span class="token function">java</span> <span class="token parameter variable">-version</span>
javac <span class="token number">1.8</span>.0_281
$ javac <span class="token parameter variable">-version</span>
<span class="token function">java</span> version <span class="token string">&quot;1.8.0_281&quot;</span>
Java<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> SE Runtime Environment <span class="token punctuation">(</span>build <span class="token number">1.8</span>.0_281-b09<span class="token punctuation">)</span>
Java HotSpot<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>build <span class="token number">25.281</span>-b09, mixed mode<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C\u3001\u5B89\u88C5tomcat" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5B89\u88C5tomcat" aria-hidden="true">#</a> \u4E8C\u3001\u5B89\u88C5Tomcat</h2><blockquote><p>\u5728Linux\u4E0B\u5B89\u88C5Tomcat\uFF0C\u4EE5\u4FBF\u90E8\u7F72\u5DE5\u7A0B\u5230Linux\u64CD\u4F5C\u7CFB\u7EDF</p></blockquote><h3 id="_2-1\u3001\u4E0B\u8F7Dtomcat\u7684\u538B\u7F29\u5305" tabindex="-1"><a class="header-anchor" href="#_2-1\u3001\u4E0B\u8F7Dtomcat\u7684\u538B\u7F29\u5305" aria-hidden="true">#</a> 2.1\u3001\u4E0B\u8F7DTomcat\u7684\u538B\u7F29\u5305</h3><blockquote><p>Tomcat8.x\u4E0B\u8F7D\u5730\u5740\uFF1Ahttps://tomcat.apache.org/download-80.cgi</p></blockquote><h3 id="_2-2\u3001\u89E3\u538B\u538B\u7F29\u5305" tabindex="-1"><a class="header-anchor" href="#_2-2\u3001\u89E3\u538B\u538B\u7F29\u5305" aria-hidden="true">#</a> 2.2\u3001\u89E3\u538B\u538B\u7F29\u5305</h3><blockquote><p>\u4E00\u6837\u89E3\u538B\u5230/usr/local\u76EE\u5F55\u4E0B</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5728/usr/local/\u65B0\u5EFA\u76EE\u5F55tomcat</span>
$ <span class="token function">mkdir</span> tomcat
<span class="token comment"># \u89E3\u538B\u5230\u65B0\u5EFA\u7684tomcat\u76EE\u5F55</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> apache-tomcat-8.5.68.tar.gz <span class="token parameter variable">-C</span> /usr/local/tomcat/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3\u3001\u542F\u52A8tomcat\u5E76\u76D1\u542C\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#_2-3\u3001\u542F\u52A8tomcat\u5E76\u76D1\u542C\u65E5\u5FD7" aria-hidden="true">#</a> 2.3\u3001\u542F\u52A8Tomcat\u5E76\u76D1\u542C\u65E5\u5FD7</h3><blockquote><p>\u901A\u8FC7./\u6267\u884C\u53EF\u8FD0\u884C\u6587\u4EF6\uFF0C\u5E76\u4F7F\u7528tail\u76D1\u63A7\u65E5\u5FD7\u4FE1\u606F</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8DF3\u8F6C\u5230tomcat\u7684bin\u76EE\u5F55</span>
<span class="token builtin class-name">cd</span> /usr/local/tomcat/apache-tomcat-8.5.68/bin
<span class="token comment"># \u542F\u52A8</span>
./startup.sh
<span class="token comment"># \u76D1\u63A7\u65E5\u5FD7</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/logs
<span class="token function">tail</span> <span class="token parameter variable">-f</span> catalina.out
<span class="token comment"># \u542F\u52A8\u6210\u529F\u5982\u4E0B\uFF0C\u770B\u5230xxx ms\u5C31\u662F\u6210\u529F\u4E86</span>
<span class="token number">23</span>-Jun-2021 06:08:07.620 INFO <span class="token punctuation">[</span>localhost-startStop-1<span class="token punctuation">]</span> org.apache.catalina.startup.HostConfig.deployDirectory Deployment of web application directory <span class="token punctuation">[</span>/usr/local/tomcat/apache-tomcat-8.5.68/webapps/manager<span class="token punctuation">]</span> has finished <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token number">18</span><span class="token punctuation">]</span> ms
<span class="token number">23</span>-Jun-2021 06:08:07.623 INFO <span class="token punctuation">[</span>main<span class="token punctuation">]</span> org.apache.coyote.AbstractProtocol.start Starting ProtocolHandler <span class="token punctuation">[</span><span class="token string">&quot;http-nio-8080&quot;</span><span class="token punctuation">]</span>
<span class="token number">23</span>-Jun-2021 06:08:07.636 INFO <span class="token punctuation">[</span>main<span class="token punctuation">]</span> org.apache.catalina.startup.Catalina.start Server startup <span class="token keyword">in</span> <span class="token number">541</span> ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4\u3001\u5173\u95ED\u9632\u706B\u5899\u5E76\u8BBF\u95EEtomcat" tabindex="-1"><a class="header-anchor" href="#_2-4\u3001\u5173\u95ED\u9632\u706B\u5899\u5E76\u8BBF\u95EEtomcat" aria-hidden="true">#</a> 2.4\u3001\u5173\u95ED\u9632\u706B\u5899\u5E76\u8BBF\u95EEtomcat</h3><blockquote><p>\u7531\u4E8ELinux\u9632\u706B\u5899\u7684\u9650\u5236\u9650\u5236\u6211\u4EEC\u8FD8\u4E0D\u80FD\u8BBF\u95EELinux\u4E2D\u7684Tomcat</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5173\u95ED\u9632\u706B\u5899</span>
$ systemctl stop firewalld.service
<span class="token comment"># \u7981\u6B62firewall\u5F00\u673A\u542F\u52A8</span>
$ systemctl disable firewalld.service 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5728Windows\u6D4F\u89C8\u5668\u5730\u5740\u680F\u8F93\u5165<code>http://Linux\u865A\u62DF\u673A\u7684IP\u5730\u5740:8080</code>\uFF0C\u80FD\u591F\u770B\u5230\u5982\u4E0B\u9875\u9762\uFF0C\u8BC1\u660Etomcat\u914D\u7F6E\u6210\u529F</p></blockquote><p><img src="`+t+`" alt="image-20210623061645125"></p><h2 id="\u4E09\u3001\u5B89\u88C5mysql" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5B89\u88C5mysql" aria-hidden="true">#</a> \u4E09\u3001\u5B89\u88C5MySQL</h2><blockquote><p>\u5728MySQL\u4E0B\u7528yum\u7684\u65B9\u5F0F\u5B89\u88C5MySQL</p></blockquote><h3 id="_3-1\u3001\u51C6\u5907\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#_3-1\u3001\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a> 3.1\u3001\u51C6\u5907\u5DE5\u4F5C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u7CFB\u7EDF\u81EA\u5E26\u7684Mariadb</span>
$ <span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> mariadb
<span class="token comment"># \u5378\u8F7D\u7CFB\u7EDF\u81EA\u5E26\u7684Mariadb</span>
$ <span class="token function">rpm</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">--nodeps</span> \u521A\u624D\u67E5\u8BE2\u5230\u7684mariadb\u7248\u672C\u4FE1\u606F
<span class="token comment"># \u5173\u95ED\u9632\u706B\u5899</span>
$ systemctl stop firewalld.service
<span class="token comment"># \u7981\u6B62firewall\u5F00\u673A\u542F\u52A8</span>
$ systemctl disable firewalld.service 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2\u3001\u5B89\u88C5mysql\u7684yum\u5B58\u50A8\u5E93" tabindex="-1"><a class="header-anchor" href="#_3-2\u3001\u5B89\u88C5mysql\u7684yum\u5B58\u50A8\u5E93" aria-hidden="true">#</a> 3.2\u3001\u5B89\u88C5MySQL\u7684YUM\u5B58\u50A8\u5E93</h3><blockquote><p>\u4F7F\u7528wget\u4E0B\u8F7D\u5373\u53EF\uFF0C\u4E0D\u8FC7\u9700\u8981\u5148\u4E0B\u8F7Dwget\uFF0C\u518D\u901A\u8FC7wget\u4E0B\u8F7Drpm\u5305</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u9996\u5148\u901A\u8FC7yum\u4E0B\u8F7Dwget\u547D\u4EE4</span>
$ yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">wget</span>
<span class="token comment"># \u901A\u8FC7wget\u4E0B\u8F7DMySQL\u5B58\u50A8\u5E93 z</span>
$ <span class="token function">wget</span> https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3\u3001\u5B89\u88C5\u4E0B\u8F7D\u597D\u7684rpm\u5305" tabindex="-1"><a class="header-anchor" href="#_3-3\u3001\u5B89\u88C5\u4E0B\u8F7D\u597D\u7684rpm\u5305" aria-hidden="true">#</a> 3.3\u3001\u5B89\u88C5\u4E0B\u8F7D\u597D\u7684rpm\u5305</h3><blockquote><p>\u4F7F\u7528rpm\u5305\u7684\u547D\u4EE4\u76F4\u63A5\u5B89\u88C5</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5Yum Repository</span>
$ yum localinstall mysql57-community-release-el7-11.noarch.rpm
<span class="token comment"># \u68C0\u67E5 mysql \u6E90\u662F\u5426\u5B89\u88C5\u6210\u529F</span>
$ yum repolist enabled <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;mysql.*-community.*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4\u3001\u5B89\u88C5mysql\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#_3-4\u3001\u5B89\u88C5mysql\u670D\u52A1\u5668" aria-hidden="true">#</a> 3.4\u3001\u5B89\u88C5MySQL\u670D\u52A1\u5668</h3><blockquote><p>\u5F00\u59CB\u5B89\u88C5\uFF0C\u8FD9\u4E00\u6B65\u9700\u8981\u4E0B\u8F7D\u4E00\u6BB5\u65F6\u95F4</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ yum <span class="token parameter variable">-y</span> <span class="token function">install</span> mysql-community-server <span class="token parameter variable">--nogpgcheck</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-5\u3001\u542F\u52A8mysql\u670D\u52A1-\u5E76\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#_3-5\u3001\u542F\u52A8mysql\u670D\u52A1-\u5E76\u8FDE\u63A5" aria-hidden="true">#</a> 3.5\u3001\u542F\u52A8MySQL\u670D\u52A1\uFF0C\u5E76\u8FDE\u63A5</h3><blockquote><p>\u5B89\u88C5\u6210\u529F\u540E\uFF0C\u624B\u52A8\u542F\u52A8\uFF0C\u5E76\u4F7F\u7528\u65E5\u5FD7\u4E2D\u7684\u5BC6\u7801\u767B\u9646\uFF0C\u800C\u4E14\u7B2C\u4E00\u4E2A\u64CD\u4F5C\u5FC5\u987B\u662F\u4FEE\u6539\u5BC6\u7801\uFF0C\u624D\u53EF\u540E\u7EED\u6B63\u5E38\u64CD\u4F5C</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u542F\u52A8MySQL\u670D\u52A1</span>
$ systemctl start mysqld.service
<span class="token comment"># \u67E5\u770BMySQL\u8FD0\u884C\u72B6\u6001\uFF0C\u5982\u679C\u663E\u793Arunning\u8BF4\u660E\u8FD0\u884C\u6210\u529F</span>
$ systemctl status mysqld.service
<span class="token comment"># \u67E5\u770B\u521D\u59CB\u5316\u5BC6\u7801</span>
$ <span class="token function">grep</span> <span class="token string">&#39;temporary password&#39;</span> /var/log/mysqld.log
<span class="token comment"># \u8FDE\u63A5MySQL\u670D\u52A1\uFF0C\u4F7F\u7528\u521D\u59CB\u5316\u5BC6\u7801\u767B\u5F55</span>
$ mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>
Enter password:\u521A\u624D\u67E5\u8BE2\u5230\u7684\u5BC6\u7801
<span class="token comment"># \u4FEE\u6539\u5BC6\u7801\u6821\u9A8C\u7B56\u7565</span>
$ mysql<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> global <span class="token assign-left variable">validate_password_policy</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment"># \u4FEE\u6539\u5BC6\u7801\u6700\u5C0F\u957F\u5EA6</span>
$ mysql<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> global <span class="token assign-left variable">validate_password_length</span><span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">;</span>
<span class="token comment"># \u5982\u679C\u6CA1\u6709\u8FDB\u884C\u4E0A\u9762\u4E24\u4E2A\u8BBE\u7F6E\uFF0C\u4FEE\u6539\u5BC6\u7801\uFF0C\u8981\u6C42\u5BC6\u7801\uFF0C\u5FC5\u987B\u643A\u5E26\u5927\u5199\u5B57\u6BCD\uFF0C\u5C0F\u5199\u5B57\u6BCD\uFF0C\u6570\u5B57\uFF0C\u7279\u6B8A\u7B26\u53F7</span>
$ mysql<span class="token operator">&gt;</span> ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;\u65B0\u5BC6\u7801&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6\u3001\u5F00\u542F\u8FDC\u7A0B\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#_3-6\u3001\u5F00\u542F\u8FDC\u7A0B\u8FDE\u63A5" aria-hidden="true">#</a> 3.6\u3001\u5F00\u542F\u8FDC\u7A0B\u8FDE\u63A5</h3><blockquote><p>\u9ED8\u8BA4MySQL\u7981\u6B62\u8FDC\u7A0B\u94FE\u63A5\uFF0C\u9700\u8981\u5355\u72EC\u521B\u5EFA\u4E00\u4E2A\u7528\u6237\u5F00\u542F\u8FDC\u7A0B\u94FE\u63A5\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u5728windows\u4E0B\u4F7F\u7528\u56FE\u5F62\u5316\u5DE5\u5177\u8FDE\u63A5</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4EFB\u4F55\u5E93\u548C\u8868\u4F7F\u7528root\u7528\u6237\u5728\u4EFB\u610F\u4E3B\u673A\u4E0A\u90FD\u53EF\u4EE5\u8BBF\u95EE</span>
$ mysql<span class="token operator">&gt;</span> GRANT ALL PRIVILEGES ON *.* TO <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED BY <span class="token string">&#39;\u65B0\u5BC6\u7801&#39;</span> WITH GRANT OPTION<span class="token punctuation">;</span>
$ mysql<span class="token operator">&gt;</span> FLUSH PRIVILEGES<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7\u3001mysql\u5B57\u7B26\u7F16\u7801\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#_3-7\u3001mysql\u5B57\u7B26\u7F16\u7801\u8BBE\u7F6E" aria-hidden="true">#</a> 3.7\u3001MySQL\u5B57\u7B26\u7F16\u7801\u8BBE\u7F6E</h3><blockquote><p>\u5BA2\u6237\u7AEF\u63D0\u4F9BMYSQL\u7684\u73AF\u5883\uFF0C\u4F46\u662F\u4E0D\u652F\u6301\u4E2D\u6587,\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u53EF\u4EE5\u67E5\u770Bmysql\u7684\u5B57\u7B26\u96C6</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770Bmysql\u7684\u5B57\u7B26\u96C6</span>
$ mysql<span class="token operator">&gt;</span> show variables like <span class="token string">&#39;character_set%&#39;</span><span class="token punctuation">;</span>
+--------------------------+----------------------------+
<span class="token operator">|</span> Variable_name            <span class="token operator">|</span> Value                      <span class="token operator">|</span>
+--------------------------+----------------------------+
<span class="token operator">|</span> character_set_client     <span class="token operator">|</span> utf8                       <span class="token operator">|</span>
<span class="token operator">|</span> character_set_connection <span class="token operator">|</span> utf8                       <span class="token operator">|</span>
<span class="token operator">|</span> character_set_database   <span class="token operator">|</span> latin1                     <span class="token operator">|</span>
<span class="token operator">|</span> character_set_filesystem <span class="token operator">|</span> binary                     <span class="token operator">|</span>
<span class="token operator">|</span> character_set_results    <span class="token operator">|</span> utf8                       <span class="token operator">|</span>
<span class="token operator">|</span> character_set_server     <span class="token operator">|</span> latin1                     <span class="token operator">|</span>
<span class="token operator">|</span> character_set_system     <span class="token operator">|</span> utf8                       <span class="token operator">|</span>
<span class="token operator">|</span> character_sets_dir       <span class="token operator">|</span> /usr/share/mysql/charsets/ <span class="token operator">|</span>
+--------------------------+----------------------------+
<span class="token number">8</span> rows <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4E3A\u4E86\u8BA9 MySQL\u652F\u6301\u4E2D\u6587\uFF0C\u9700\u8981\u628A\u5B57\u7B26\u96C6\u6539\u6210UTF-8</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">vim</span> /etc/my.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u5C06\u6587\u4EF6\u5185\u5BB9\u4FEE\u6539\u5982\u4E0B</p></blockquote><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code>[client]
<span class="token key attr-name">port</span><span class="token punctuation">=</span><span class="token value attr-value">3306</span>
<span class="token key attr-name">socket</span><span class="token punctuation">=</span><span class="token value attr-value">/var/lib/mysql/mysql.sock</span>
<span class="token key attr-name">default-character-set</span><span class="token punctuation">=</span><span class="token value attr-value">utf8</span>

[mysqld]
<span class="token key attr-name">datadir</span><span class="token punctuation">=</span><span class="token value attr-value">/var/lib/mysql</span>
<span class="token key attr-name">socket</span><span class="token punctuation">=</span><span class="token value attr-value">/var/lib/mysql/mysql.sock</span>
<span class="token key attr-name">user</span><span class="token punctuation">=</span><span class="token value attr-value">mysql</span>
<span class="token comment"># Disabling symbolic-links is recommended to prevent assorted security risks</span>
<span class="token key attr-name">symbolic-links</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
<span class="token key attr-name">character-set-server</span><span class="token punctuation">=</span><span class="token value attr-value">utf8</span>

[mysql]
no-auto-rehash
<span class="token key attr-name">default-character-set</span><span class="token punctuation">=</span><span class="token value attr-value">utf8</span>

[mysqld_safe]
<span class="token key attr-name">log-error</span><span class="token punctuation">=</span><span class="token value attr-value">/var/log/mysqld.log</span>
<span class="token key attr-name">pid-file</span><span class="token punctuation">=</span><span class="token value attr-value">/var/run/mysqld/mysqld.pid</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u91CD\u542Fmysql\u670D\u52A1</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ systemctl restart mysqld.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u767B\u5F55mysql\uFF0C\u91CD\u65B0\u67E5\u770B\u6570\u636E\u5E93\u7F16\u7801</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ mysql<span class="token operator">&gt;</span> show variables like <span class="token string">&#39;character_set%&#39;</span><span class="token punctuation">;</span>
+--------------------------+----------------------------+
<span class="token operator">|</span> Variable_name            <span class="token operator">|</span> Value                      <span class="token operator">|</span>
+--------------------------+----------------------------+
<span class="token operator">|</span> character_set_client     <span class="token operator">|</span> utf8                       <span class="token operator">|</span>
<span class="token operator">|</span> character_set_connection <span class="token operator">|</span> utf8                       <span class="token operator">|</span>
<span class="token operator">|</span> character_set_database   <span class="token operator">|</span> utf8                       <span class="token operator">|</span>
<span class="token operator">|</span> character_set_filesystem <span class="token operator">|</span> binary                     <span class="token operator">|</span>
<span class="token operator">|</span> character_set_results    <span class="token operator">|</span> utf8                       <span class="token operator">|</span>
<span class="token operator">|</span> character_set_server     <span class="token operator">|</span> utf8                       <span class="token operator">|</span>
<span class="token operator">|</span> character_set_system     <span class="token operator">|</span> utf8                       <span class="token operator">|</span>
<span class="token operator">|</span> character_sets_dir       <span class="token operator">|</span> /usr/share/mysql/charsets/ <span class="token operator">|</span>
+--------------------------+----------------------------+
<span class="token number">8</span> rows <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-8\u3001\u4F7F\u7528windows\u4E0B\u7684\u5BA2\u6237\u7AEF\u5DE5\u5177\u8FDE\u63A5mysql" tabindex="-1"><a class="header-anchor" href="#_3-8\u3001\u4F7F\u7528windows\u4E0B\u7684\u5BA2\u6237\u7AEF\u5DE5\u5177\u8FDE\u63A5mysql" aria-hidden="true">#</a> 3.8\u3001\u4F7F\u7528Windows\u4E0B\u7684\u5BA2\u6237\u7AEF\u5DE5\u5177\u8FDE\u63A5MySQL</h3><blockquote><p>\u5728Navicat\u6216SQLyog\u4E2D\u8F93\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801\u8FDE\u63A5MySQL\u3002</p></blockquote><h2 id="\u56DB\u3001\u90E8\u7F72ssm\u5DE5\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u90E8\u7F72ssm\u5DE5\u7A0B" aria-hidden="true">#</a> \u56DB\u3001\u90E8\u7F72SSM\u5DE5\u7A0B</h2><blockquote><p>\u90E8\u7F72\u9879\u76EE\u5230Linux\u4E2D\u9700\u8981\u6CE8\u610F\u4E00\u4E0B\u5185\u5BB9\uFF1A</p><ul><li><strong>\u9879\u76EE\u8981\u4FDD\u8BC1\u5728Windows\u4E0B\u662F\u6CA1\u6709\u95EE\u9898\u7684\uFF0C\u518D\u8003\u8651\u90E8\u7F72\u5230Linux\u3002</strong></li><li>\u5C06\u5F00\u53D1\u73AF\u5883\u4E2D\u7684\u5185\u5BB9\u66F4\u6539\u4E3A\u6D4B\u8BD5\u73AF\u5883\u3002 <ul><li>\u8FDE\u63A5\u6570\u636E\u5E93\u7684\u4FE1\u606F\u3002</li><li>\u5B58\u653E\u6587\u4EF6\u7684\u8DEF\u5F84\u3002</li><li>\u65E5\u5FD7\u6587\u4EF6\u5B58\u653E\u7684\u4F4D\u7F6E\u3002</li><li>\u9879\u76EE\u8DEF\u5F84\u95EE\u9898\u3002</li></ul></li><li>\u5C06Maven\u9879\u76EE\u6253\u5305\u3002</li><li>\u6839\u636E\u9879\u76EE\u8DEF\u5F84\u7684\u4E0D\u540C\uFF0C\u5C06\u9879\u76EE\u90E8\u7F72\u5230Tomcat\u4E2D\u3002</li><li>\u5728\u90E8\u7F72\u5230Linux\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u540E\uFF0C\u4E00\u5B9A\u8981\u67E5\u770B\u65E5\u5FD7\u3002</li></ul></blockquote>`,61),o=[i];function c(r,p){return a(),n("div",null,o)}const u=s(l,[["render",c],["__file","04_Linux_\u8F6F\u4EF6\u5B89\u88C5\u53CAJava\u5F00\u53D1\u73AF\u5883\u642D\u5EFA.html.vue"]]);export{u as default};
