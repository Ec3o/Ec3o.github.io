import{_ as s,c as i,o as a,a2 as l}from"./chunks/framework.CQ12TVIp.js";const u=JSON.parse('{"title":"Go语言学习-命令行操作","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Go/Go基础/Go命令行操作.md","filePath":"articles/Go/Go基础/Go命令行操作.md"}'),t={name:"articles/Go/Go基础/Go命令行操作.md"},e=l(`<h1 id="go语言学习-命令行操作" tabindex="-1">Go语言学习-命令行操作 <a class="header-anchor" href="#go语言学习-命令行操作" aria-label="Permalink to &quot;Go语言学习-命令行操作&quot;">​</a></h1><h2 id="查看可用命令" tabindex="-1">查看可用命令 <a class="header-anchor" href="#查看可用命令" aria-label="Permalink to &quot;查看可用命令&quot;">​</a></h2><p>直接在终端中输入 <code>go help</code> 即可显示所有的 go 命令以及相应命令功能简介，主要有下面这些:</p><ul><li>build: 编译包和依赖</li><li>clean: 移除对象文件</li><li>doc: 显示包或者符号的文档</li><li>env: 打印go的环境信息</li><li>bug: 启动错误报告</li><li>fix: 运行go tool fix</li><li>fmt: 运行gofmt进行格式化</li><li>generate: 从processing source生成go文件</li><li>get: 下载并安装包和依赖</li><li>install: 编译并安装包和依赖</li><li>list: 列出包</li><li>run: 编译并运行go程序</li><li>test: 运行测试</li><li>tool: 运行go提供的工具</li><li>version: 显示go的版本</li><li>vet: 运行go tool vet</li></ul><p>命令的使用方式为: <code>go command [args]</code>, 除此之外，可以使用<code>go help &lt;command&gt;</code> 来显示指定命令的更多帮助信息。</p><p>在运行 go help 时，不仅仅打印了这些命令的基本信息，还给出了一些概念的帮助信息:</p><ul><li>c: Go和c的相互调用</li><li>buildmode: 构建模式的描述</li><li>filetype: 文件类型</li><li>gopath: GOPATH环境变量</li><li>environment: 环境变量</li><li>importpath: 导入路径语法</li><li>packages: 包列表的描述</li><li>testflag: 测试符号描述</li><li>testfunc: 测试函数描述</li></ul><p>同样使用 <code>go help &lt;topic&gt;</code>来查看这些概念的的信息。</p><h2 id="build-和-run-命令" tabindex="-1">build 和 run 命令 <a class="header-anchor" href="#build-和-run-命令" aria-label="Permalink to &quot;build 和 run 命令&quot;">​</a></h2><p>就像其他静态类型语言一样，要执行 go 程序,需要先编译，然后在执行产生的可执行文件。<code>go build</code> 命令就是用来编译 go程序生成可执行文件的。但并不是所以的 go 程序都可以编译生成可执行文件的, 要生成可执行文件，go程序需要满足两个条件:</p><ul><li>该go程序需要属于main包</li><li>在main包中必须还得包含main函数</li></ul><p>也就是说go程序的入口就是 <code>main.main</code>, 即main包下的main函数,　例子(hello.go):</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fmt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fmt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello World!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>编译hello.go,然后运行可执行程序:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hello.go</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 将会生成可执行文件 hello</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./hello</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">           # 运行可执行文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Hello</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> World!</span></span></code></pre></div><p>上面就是 go build 的基本用法，另外如果使用 go build 编译的不是一个可执行程序，而是一个包，那么将不会生成可执行文件。</p><p>而 <code>go run</code> 命令可以将上面两步并为一步执行(不会产生中间文件)。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hello.go</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Hello</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> World!</span></span></code></pre></div><p>上面两个命令都是在开发中非常常用的。</p><p>此外 go clean 命令，可以用于将清除产生的可执行程序:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clean</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 不加参数，可以删除当前目录下的所有可执行文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clean</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sourcefile.go</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 会删除对应的可执行文件</span></span></code></pre></div><h2 id="fmt-和-doc-命令" tabindex="-1">fmt 和 doc 命令 <a class="header-anchor" href="#fmt-和-doc-命令" aria-label="Permalink to &quot;fmt 和 doc 命令&quot;">​</a></h2><p>go 语言有一个褒贬不一的特性，就是对格式的要求很严格，我是很喜欢这个特性的，因为可以保持代码的清晰一致，编译组合开发，并且go还提供了一个非常强大的工具来格式化代码，它就是 <code>go fmt sourcefile.go</code>, 不过通常其实不需要我们手动调用，各种编辑器都可以帮助我们自动完成格式化。</p><p><code>go doc</code> 命令可以方便我们快速查看包文档，<code>go doc package</code> 命令将会在终端中打印出指定 package 的文档。</p><p>另外有一个与 <code>go doc</code> 命令相关的命令是 <code>godoc</code>, 可以通过它启动我们自己的文档服务器:</p><div class="language-undefined vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">undefined</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>godoc -http=:8080</span></span></code></pre></div><p>然后我们就可与在浏览器<code>localhost:8080</code>中查看go文档了</p><h2 id="get-命令" tabindex="-1">get 命令 <a class="header-anchor" href="#get-命令" aria-label="Permalink to &quot;get 命令&quot;">​</a></h2><p>这个命令同样也是很常用的，我们可以使用它来下载并安装第三方包, 使用方式:</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">go get src</span></span></code></pre></div><p>从指定源上面下载或者更新指定的代码和依赖，并对他们进行编译和安装，例如我们想使用 beego 来开发web应用，我们首先就需要获取 beego:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> github.com/astaxie/beego</span></span></code></pre></div><p>这条命令将会自动下载安装 beego 以及它的依赖，然后我们就可以使用下面的方式使用:</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">github.com/astaxie/beego</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   # 这里需要使用 src 下的完整路径</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    beego.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="install-命令" tabindex="-1">install 命令 <a class="header-anchor" href="#install-命令" aria-label="Permalink to &quot;install 命令&quot;">​</a></h2><p>用来编译和安装go程序，我们可以将它与 build 命令对比:</p><table><thead><tr><th></th><th>install</th><th>build</th></tr></thead><tbody><tr><td>生成的可执行文件路径</td><td>工作目录下的bin目录下</td><td>当前目录下</td></tr><tr><td>可执行文件的名字</td><td>与源码所在目录同名</td><td>默认与源程序同名，可以使用-o选项指定</td></tr><tr><td>依赖</td><td>将依赖的包放到工作目录下的pkg文件夹下</td><td>-</td></tr></tbody></table><h2 id="test-命令" tabindex="-1">test 命令 <a class="header-anchor" href="#test-命令" aria-label="Permalink to &quot;test 命令&quot;">​</a></h2><p>顾名思义，用来运行测试的命令，这种测试是以包为单位的。需要遵循一定规则：</p><ul><li>测试源文件是名称以“_test.go”为后缀的</li><li>测试源文件内含若干测试函数的源码文件</li><li>测试函数一般是以“Test”为名称前缀, 并有一个类型为“testing.T”的参数。</li></ul><h2 id="其他命令" tabindex="-1">其他命令 <a class="header-anchor" href="#其他命令" aria-label="Permalink to &quot;其他命令&quot;">​</a></h2><p>其他命令不会经常使用，这里就不介绍了，真的用到的时候，直接使用 <code>go help command</code> 即可查看相关命令。</p>`,42),n=[e];function p(h,o,d,k,c,g){return a(),i("div",null,n)}const F=s(t,[["render",p]]);export{u as __pageData,F as default};
