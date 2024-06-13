import{_ as a,c as s,o as e,a1 as n}from"./chunks/framework.CJ8LAyNs.js";const y=JSON.parse('{"title":"MySQL学习笔记——CRUD篇","description":"","frontmatter":{},"headers":[],"relativePath":"articles/MySQL学习笔记——CRUD篇.md","filePath":"articles/MySQL学习笔记——CRUD篇.md"}'),l={name:"articles/MySQL学习笔记——CRUD篇.md"},t=n(`<h1 id="mysql学习笔记——crud篇" tabindex="-1">MySQL学习笔记——CRUD篇 <a class="header-anchor" href="#mysql学习笔记——crud篇" aria-label="Permalink to &quot;MySQL学习笔记——CRUD篇&quot;">​</a></h1><h2 id="安装mysql" tabindex="-1">安装MySQL <a class="header-anchor" href="#安装mysql" aria-label="Permalink to &quot;安装MySQL&quot;">​</a></h2><p>略，可根据操作平台自主选择.</p><h2 id="连接mysql" tabindex="-1">连接MySQL <a class="header-anchor" href="#连接mysql" aria-label="Permalink to &quot;连接MySQL&quot;">​</a></h2><h3 id="shell连接mysql" tabindex="-1">shell连接MySQL <a class="header-anchor" href="#shell连接mysql" aria-label="Permalink to &quot;shell连接MySQL&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mysql</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> your_username</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span></span></code></pre></div><p><strong>参数说明：</strong></p><ul><li><code>-u</code> 参数用于指定用户名。</li><li><code>-p</code> 参数表示需要输入密码。</li></ul><h3 id="使用编程语言连接mysql" tabindex="-1">使用编程语言连接MySQL <a class="header-anchor" href="#使用编程语言连接mysql" aria-label="Permalink to &quot;使用编程语言连接MySQL&quot;">​</a></h3><p>提供mysql主机地址，用户名和用户名密码，调用mysql支持库进行连接并执行数据库语句.</p><h3 id="简单的命令" tabindex="-1">简单的命令 <a class="header-anchor" href="#简单的命令" aria-label="Permalink to &quot;简单的命令&quot;">​</a></h3><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>SHOW DATABASES;//展示所有可用数据库</span></span>
<span class="line"><span>USE DATABASENAME;//选择要使用的数据库</span></span>
<span class="line"><span>SHOW TABLES;//列出所选数据库中的所有表</span></span></code></pre></div><h2 id="使用sql语句创建数据库" tabindex="-1">使用SQL语句创建数据库 <a class="header-anchor" href="#使用sql语句创建数据库" aria-label="Permalink to &quot;使用SQL语句创建数据库&quot;">​</a></h2><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>CREATE DATABASE &lt;DATABASE_NAME&gt;;</span></span></code></pre></div><p>使用逻辑语句<code>IF</code></p><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>CREATE DATABASE IF NOT EXISTS mydatabase;</span></span></code></pre></div><p>可以实现简单的逻辑判断，如果数据库不存在，就创建新数据库，否则跳过.</p><h2 id="使用sql语句删除数据库" tabindex="-1">使用SQL语句删除数据库 <a class="header-anchor" href="#使用sql语句删除数据库" aria-label="Permalink to &quot;使用SQL语句删除数据库&quot;">​</a></h2><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>DROP DATABASE &lt;database_name&gt;;</span></span></code></pre></div><p>使用下面的语句更安全：</p><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>DROP DATABASE [IF EXISTS] &lt;database_name&gt;;</span></span></code></pre></div><h2 id="mysql-创建数据表" tabindex="-1">MySQL 创建数据表 <a class="header-anchor" href="#mysql-创建数据表" aria-label="Permalink to &quot;MySQL 创建数据表&quot;">​</a></h2><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>CREATE TABLE table_name (</span></span>
<span class="line"><span>    column1 datatype,</span></span>
<span class="line"><span>    column2 datatype,</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>);</span></span></code></pre></div><p>Example</p><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>CREATE TABLE users (</span></span>
<span class="line"><span>    id INT AUTO_INCREMENT PRIMARY KEY,</span></span>
<span class="line"><span>    username VARCHAR(50) NOT NULL,</span></span>
<span class="line"><span>    email VARCHAR(100) NOT NULL,</span></span>
<span class="line"><span>    birthdate DATE,</span></span>
<span class="line"><span>    is_active BOOLEAN DEFAULT TRUE</span></span>
<span class="line"><span>);</span></span></code></pre></div><h2 id="mysql-删除数据表" tabindex="-1">MySQL 删除数据表 <a class="header-anchor" href="#mysql-删除数据表" aria-label="Permalink to &quot;MySQL 删除数据表&quot;">​</a></h2><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>DROP TABLE table_name ;</span></span></code></pre></div><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>DROP TABLE [IF EXISTS] table_name;</span></span></code></pre></div><h2 id="mysql-插入数据" tabindex="-1">MySQL 插入数据 <a class="header-anchor" href="#mysql-插入数据" aria-label="Permalink to &quot;MySQL 插入数据&quot;">​</a></h2><p>MySQL 表中使用 <strong>INSERT INTO</strong> 语句来插入数据。</p><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>INSERT INTO table_name (column1, column2, column3, ...)</span></span>
<span class="line"><span>VALUES (value1, value2, value3, ...);</span></span></code></pre></div><p>示例</p><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>INSERT INTO users (username, email, birthdate, is_active)</span></span>
<span class="line"><span>VALUES (&#39;test&#39;, &#39;test@hdu.com&#39;, &#39;1990-01-01&#39;, true);</span></span></code></pre></div><p>自增数据不需要赋值，在Insert的时候插入值为Null.</p><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>INSERT INTO users</span></span>
<span class="line"><span>VALUES (NULL,&#39;test&#39;, &#39;test@hdu.com&#39;, &#39;1990-01-01&#39;, true);</span></span></code></pre></div><h2 id="mysql查询数据" tabindex="-1">MySQL查询数据 <a class="header-anchor" href="#mysql查询数据" aria-label="Permalink to &quot;MySQL查询数据&quot;">​</a></h2><p>MySQL 数据库使用 <strong>SELECT</strong> 语句来查询数据。</p><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>SELECT column1, column2, ...</span></span>
<span class="line"><span>FROM table_name</span></span>
<span class="line"><span>[WHERE condition]</span></span>
<span class="line"><span>[ORDER BY column_name [ASC | DESC]]</span></span>
<span class="line"><span>[LIMIT number];</span></span></code></pre></div><h2 id="mysql-update-更新" tabindex="-1">MySQL UPDATE 更新 <a class="header-anchor" href="#mysql-update-更新" aria-label="Permalink to &quot;MySQL UPDATE 更新&quot;">​</a></h2><p>如果我们需要修改或更新 MySQL 中的数据，我们可以使用 <strong>UPDATE</strong> 命令来操作。</p><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>UPDATE table_name</span></span>
<span class="line"><span>SET column1 = value1, column2 = value2, ...</span></span>
<span class="line"><span>WHERE condition;</span></span></code></pre></div>`,41),p=[t];function i(c,o,d,h,r,u){return e(),s("div",null,p)}const b=a(l,[["render",i]]);export{y as __pageData,b as default};
