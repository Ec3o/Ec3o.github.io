import{_ as s,c as i,o as a,a1 as t}from"./chunks/framework.CJ8LAyNs.js";const e="/assets/1.BByan86j.jpeg",n="/assets/2.BeY3FcxD.jpeg",u=JSON.parse('{"title":"Git 使用教程","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Git 使用教程.md","filePath":"articles/Git 使用教程.md"}'),h={name:"articles/Git 使用教程.md"},p=t('<h1 id="git-使用教程" tabindex="-1">Git 使用教程 <a class="header-anchor" href="#git-使用教程" aria-label="Permalink to &quot;Git 使用教程&quot;">​</a></h1><h2 id="git的历史" tabindex="-1">Git的历史 <a class="header-anchor" href="#git的历史" aria-label="Permalink to &quot;Git的历史&quot;">​</a></h2><blockquote><p>如果你在读这篇文章的话，你可能会好奇我们为什么要使用git而不是简单的上传文件和数据。你可能会在下面的内容找到答案。</p></blockquote><p>你是一名大学生，你在和小组同学做期末大作业的PPT，并准备presentation。你们每个人负责一部分，做好之后把数据发到了群里，却发现还要面临PPT版本各不相同和模块整合的问题，你犯了难。</p><h3 id="版本控制系统的出现" tabindex="-1">版本控制系统的出现 <a class="header-anchor" href="#版本控制系统的出现" aria-label="Permalink to &quot;版本控制系统的出现&quot;">​</a></h3><p>很多人都知道，Linus在1991年创建了开源的Linux，从此，Linux系统不断发展，已经成为最大的服务器系统软件了。</p><p>Linus虽然创建了Linux，但Linux的壮大是靠全世界热心的志愿者参与的，这么多人在世界各地为Linux编写代码，那Linux的代码是如何管理的呢？</p><p>事实是，在2002年以前，世界各地的志愿者把源代码文件通过diff的方式发给Linus，然后由Linus本人通过手工方式合并代码！</p><p>你也许会想，为什么Linus不把Linux代码放到版本控制系统里呢？不是有CVS、SVN这些免费的版本控制系统吗？因为Linus坚定地反对CVS和SVN，这些集中式的版本控制系统不但速度慢，而且必须联网才能使用。有一些商用的版本控制系统，虽然比CVS、SVN好用，但那是付费的，和Linux的开源精神不符。</p><p>不过，到了2002年，Linux系统已经发展了十年了，代码库之大让Linus很难继续通过手工方式管理了，社区的弟兄们也对这种方式表达了强烈不满，于是Linus选择了一个商业的版本控制系统BitKeeper，BitKeeper的东家BitMover公司出于人道主义精神，授权Linux社区免费使用这个版本控制系统。</p><p>安定团结的大好局面在2005年就被打破了，原因是Linux社区牛人聚集，不免沾染了一些梁山好汉的江湖习气。开发Samba的Andrew试图破解BitKeeper的协议（这么干的其实也不只他一个），被BitMover公司发现了（监控工作做得不错！），于是BitMover公司怒了，要收回Linux社区的免费使用权。</p><p>Linus可以向BitMover公司道个歉，保证以后严格管教弟兄们，嗯，这是不可能的。实际情况是这样的：</p><p>Linus花了两周时间自己用C写了一个分布式版本控制系统，这就是Git！一个月之内，Linux系统的源码已经由Git管理了！牛是怎么定义的呢？大家可以体会一下。</p><p>Git迅速成为最流行的分布式版本控制系统，尤其是2008年，GitHub网站上线了，它为开源项目免费提供Git存储，无数开源项目开始迁移至GitHub，包括jQuery，PHP，Ruby等等。</p><p>历史就是这么偶然，如果不是当年BitMover公司威胁Linux社区，可能现在我们就没有免费而超级好用的Git了。</p><h3 id="集中式vs分布式管理系统" tabindex="-1">集中式vs分布式管理系统 <a class="header-anchor" href="#集中式vs分布式管理系统" aria-label="Permalink to &quot;集中式vs分布式管理系统&quot;">​</a></h3><p>Linus一直痛恨的CVS及SVN都是集中式的版本控制系统，而Git是分布式版本控制系统，集中式和分布式版本控制系统有什么区别呢？</p><p>先说集中式版本控制系统，版本库是集中存放在中央服务器的，而干活的时候，用的都是自己的电脑，所以要先从中央服务器取得最新的版本，然后开始干活，干完活了，再把自己的活推送给中央服务器。中央服务器就好比是一个图书馆，你要改一本书，必须先从图书馆借出来，然后回到家自己改，改完了，再放回图书馆。</p><p><img src="'+e+'" alt=""></p><p>集中式版本控制系统最大的毛病就是必须联网才能工作，如果在局域网内还好，带宽够大，速度够快，可如果在互联网上，遇到网速慢的话，可能提交一个10M的文件就需要5分钟，这还不得把人给憋死啊。</p><p>那分布式版本控制系统与集中式版本控制系统有何不同呢？首先，分布式版本控制系统根本没有“中央服务器”，每个人的电脑上都是一个完整的版本库，这样，你工作的时候，就不需要联网了，因为版本库就在你自己的电脑上。既然每个人电脑上都有一个完整的版本库，那多个人如何协作呢？比方说你在自己电脑上改了文件A，你的同事也在他的电脑上改了文件A，这时，你们俩之间只需把各自的修改推送给对方，就可以互相看到对方的修改了。</p><p>和集中式版本控制系统相比，分布式版本控制系统的安全性要高很多，因为每个人电脑里都有完整的版本库，某一个人的电脑坏掉了不要紧，随便从其他人那里复制一个就可以了。而集中式版本控制系统的中央服务器要是出了问题，所有人都没法干活了。</p><p>在实际使用分布式版本控制系统的时候，其实很少在两人之间的电脑上推送版本库的修改，因为可能你们俩不在一个局域网内，两台电脑互相访问不了，也可能今天你的同事病了，他的电脑压根没有开机。因此，分布式版本控制系统通常也有一台充当“中央服务器”的电脑，但这个服务器的作用仅仅是用来方便“交换”大家的修改，没有它大家也一样干活，只是交换修改不方便而已。</p><p><img src="'+n+`" alt=""></p><h2 id="使用git" tabindex="-1">使用Git <a class="header-anchor" href="#使用git" aria-label="Permalink to &quot;使用Git&quot;">​</a></h2><h3 id="安装git" tabindex="-1">安装Git <a class="header-anchor" href="#安装git" aria-label="Permalink to &quot;安装Git&quot;">​</a></h3><h4 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h4><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span></span></code></pre></div><h4 id="mac-os" tabindex="-1">Mac OS <a class="header-anchor" href="#mac-os" aria-label="Permalink to &quot;Mac OS&quot;">​</a></h4><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span></span></code></pre></div><h4 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h4><p><a href="https://git-scm.com/downloads" target="_blank" rel="noreferrer">Git - Downloads (git-scm.com)</a></p><h4 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-label="Permalink to &quot;初始化&quot;">​</a></h4><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Your Name&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.email</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;email@example.com&quot;</span></span></code></pre></div><h3 id="创建-初始化-git仓库" tabindex="-1">创建/初始化 Git仓库 <a class="header-anchor" href="#创建-初始化-git仓库" aria-label="Permalink to &quot;创建/初始化 Git仓库&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><p>这个操作会在当前工作目录下创建一个<code>.git</code>目录，将其变成可用于git管理的仓库.</p><h3 id="添加文件到git仓库" tabindex="-1">添加文件到Git仓库 <a class="header-anchor" href="#添加文件到git仓库" aria-label="Permalink to &quot;添加文件到Git仓库&quot;">​</a></h3><h4 id="add" tabindex="-1">add <a class="header-anchor" href="#add" aria-label="Permalink to &quot;add&quot;">​</a></h4><p>言归正传，现在我们编写一个<code>readme.txt</code>文件，内容如下：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> control</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> system.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> free</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> software.</span></span></code></pre></div><p>放到你要作为存储库的Git仓库中。和把大象放到冰箱需要3步相比，把一个文件放到Git仓库只需要两步：</p><p>第一步，用命令<code>git add</code>告诉Git，把文件添加到仓库：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> readme.txt</span></span></code></pre></div><p>执行上面的命令，没有任何显示，这就对了，Unix的哲学是“没有消息就是好消息”，说明添加成功。</p><h4 id="commit" tabindex="-1">commit <a class="header-anchor" href="#commit" aria-label="Permalink to &quot;commit&quot;">​</a></h4><p>第二步，用命令<code>git commit</code>告诉Git，把文件提交到仓库：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;wrote a readme file&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[master (root</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">commit) eaadf4e] wrote a readme file</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> changed,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> insertions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mode</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100644</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> readme.txt</span></span></code></pre></div><p>简单解释一下<code>git commit</code>命令，<code>-m</code>后面输入的是本次提交的说明，可以输入任意内容，当然最好是有意义的，这样你就能从历史记录里方便地找到改动记录。</p><h3 id="检查git更改" tabindex="-1">检查Git更改 <a class="header-anchor" href="#检查git更改" aria-label="Permalink to &quot;检查Git更改&quot;">​</a></h3><h4 id="status" tabindex="-1">status <a class="header-anchor" href="#status" aria-label="Permalink to &quot;status&quot;">​</a></h4><p>我们已经成功地添加并提交了一个readme.txt文件，现在，是时候继续工作了，于是，我们继续修改readme.txt文件，改成如下内容：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Git is a distributed version control system.</span></span>
<span class="line"><span>Git is free software.</span></span></code></pre></div><p>现在，运行<code>git status</code>命令看看结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ git status</span></span>
<span class="line"><span>On branch master</span></span>
<span class="line"><span>Changes not staged for commit:</span></span>
<span class="line"><span>  (use &quot;git add &lt;file&gt;...&quot; to update what will be committed)</span></span>
<span class="line"><span>  (use &quot;git checkout -- &lt;file&gt;...&quot; to discard changes in working directory)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	modified:   readme.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>no changes added to commit (use &quot;git add&quot; and/or &quot;git commit -a&quot;)</span></span></code></pre></div><p><code>git status</code>命令可以让我们时刻掌握仓库当前的状态，上面的命令输出告诉我们，<code>readme.txt</code>被修改过了，但还没有准备提交的修改。</p><h4 id="diff" tabindex="-1">diff <a class="header-anchor" href="#diff" aria-label="Permalink to &quot;diff&quot;">​</a></h4><p>虽然Git告诉我们<code>readme.txt</code>被修改了，但如果能看看具体修改了什么内容，自然是很好的。比如你休假两周从国外回来，第一天上班时，已经记不清上次怎么修改的<code>readme.txt</code>，所以，需要用<code>git diff</code>这个命令看看：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> readme.txt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">diff</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a/readme.txt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> b/readme.txt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">index</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 46d49bf..9247db6</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100644</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a/readme.txt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">+++</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> b/readme.txt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@@</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -1,2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +1,2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @@</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-Git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> control</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> system.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">+Git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> distributed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> control</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> system.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> free</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> software.</span></span></code></pre></div><p><code>git diff</code>顾名思义就是查看difference，显示的格式正是Unix通用的diff格式，可以从上面的命令输出看到，我们在第一行添加了一个<code>distributed</code>单词。</p><p>知道了对<code>readme.txt</code>作了什么修改后，再把它提交到仓库就放心多了，提交修改和提交新文件是一样的两步，第一步是<code>git add</code>：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> readme.txt</span></span></code></pre></div><p>同样没有任何输出。在执行第二步<code>git commit</code>之前，我们再运行<code>git status</code>看看当前仓库的状态：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">On</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Changes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> committed:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;git reset HEAD &lt;file&gt;...&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unstage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	modified:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   readme.txt</span></span></code></pre></div><p><code>git status</code>告诉我们，将要被提交的修改包括<code>readme.txt</code>，下一步，就可以放心地提交了：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;add distributed&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[master e475afc] add distributed</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> changed,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> insertion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deletion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>提交后，我们再用<code>git status</code>命令看看仓库的当前状态：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">On</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nothing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> working</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tree</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clean</span></span></code></pre></div><p>Git告诉我们当前没有需要提交的修改，而且，工作目录是干净（working tree clean）的。</p><h3 id="显示过去git修改" tabindex="-1">显示过去Git修改 <a class="header-anchor" href="#显示过去git修改" aria-label="Permalink to &quot;显示过去Git修改&quot;">​</a></h3><h4 id="log" tabindex="-1">log <a class="header-anchor" href="#log" aria-label="Permalink to &quot;log&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> git log</span></span></code></pre></div><p><code>git log</code>命令显示从最近到最远的提交日志。</p><h3 id="版本回退" tabindex="-1">版本回退 <a class="header-anchor" href="#版本回退" aria-label="Permalink to &quot;版本回退&quot;">​</a></h3><p>首先，Git必须知道当前版本是哪个版本，在Git中，用<code>HEAD</code>表示当前版本，也就是最新的提交<code>1094adb...</code>（注意我的提交ID和你的肯定不一样），上一个版本就是<code>HEAD^</code>，上上一个版本就是<code>HEAD^^</code>，当然往上100个版本写100个<code>^</code>比较容易数不过来，所以写成<code>HEAD~100</code>。</p><h4 id="reset" tabindex="-1">reset <a class="header-anchor" href="#reset" aria-label="Permalink to &quot;reset&quot;">​</a></h4><p>现在，我们要把当前版本<code>append GPL</code>回退到上一个版本<code>add distributed</code>，就可以使用<code>git reset</code>命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ git reset --hard HEAD^</span></span>
<span class="line"><span>HEAD is now at e475afc add distributed</span></span></code></pre></div><h3 id="远程仓库克隆" tabindex="-1">远程仓库克隆 <a class="header-anchor" href="#远程仓库克隆" aria-label="Permalink to &quot;远程仓库克隆&quot;">​</a></h3><h4 id="clone" tabindex="-1">clone <a class="header-anchor" href="#clone" aria-label="Permalink to &quot;clone&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git clone git@github.com:michaelliao/gitskills.git</span></span>
<span class="line"><span>Cloning into &#39;gitskills&#39;...</span></span>
<span class="line"><span>remote: Counting objects: 3, done.</span></span>
<span class="line"><span>remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 3</span></span>
<span class="line"><span>Receiving objects: 100% (3/3), done.</span></span></code></pre></div><h3 id="远程仓库推送" tabindex="-1">远程仓库推送 <a class="header-anchor" href="#远程仓库推送" aria-label="Permalink to &quot;远程仓库推送&quot;">​</a></h3><blockquote><p>⚠️注意：Github由于某种原因，远程仓库的默认分支由master分支改为了main分支，若推送失败请重试。</p></blockquote><h4 id="创建ssh-key并关联账户" tabindex="-1">创建SSH-Key并关联账户 <a class="header-anchor" href="#创建ssh-key并关联账户" aria-label="Permalink to &quot;创建SSH-Key并关联账户&quot;">​</a></h4><p>第1步：创建SSH Key。在用户主目录下，看看有没有.ssh目录，如果有，再看看这个目录下有没有<code>id_rsa</code>和<code>id_rsa.pub</code>这两个文件，如果已经有了，可直接跳到下一步。如果没有，打开Shell（Windows下打开Git Bash），创建SSH Key：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ssh-keygen</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rsa</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -C</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;youremail@example.com&quot;</span></span></code></pre></div><p>第2步：登陆GitHub，打开“Account settings”，“SSH Keys”页面：</p><p>然后，点“Add SSH Key”，填上任意Title，在Key文本框里粘贴<code>id_rsa.pub</code>文件的内容</p><p>为什么GitHub需要SSH Key呢？因为GitHub需要识别出你推送的提交确实是你推送的，而不是别人冒充的，而Git支持SSH协议，所以，GitHub只要知道了你的公钥，就可以确认只有你自己才能推送。</p><h4 id="本地储存库关联" tabindex="-1">本地储存库关联 <a class="header-anchor" href="#本地储存库关联" aria-label="Permalink to &quot;本地储存库关联&quot;">​</a></h4><p>进入本地Git仓库，执行以下命令</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@github.com:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">usernam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">reponam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.git</span></span></code></pre></div><p>添加后，远程库的名字就是<code>origin</code>，这是Git默认的叫法，也可以改成别的，但是<code>origin</code>这个名字一看就知道是远程库。</p><h4 id="仓库推送" tabindex="-1">仓库推送 <a class="header-anchor" href="#仓库推送" aria-label="Permalink to &quot;仓库推送&quot;">​</a></h4><p>下一步，就可以把本地库的所有内容推送到远程库上：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Counting</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> objects:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> done.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Delta</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compression</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> using</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> threads.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Compressing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> objects:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 100%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (15/15), done.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Writing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> objects:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 100%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (20/20), 1.64 KiB </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 560.00</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> KiB/s,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> done.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Total</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (delta </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), reused 0 (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">delta</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">remote:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Resolving</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deltas:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 100%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (5/5), done.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">To</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> github.com:michaelliao/learngit.git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [new </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">branch]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      master</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;master&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> track</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;master&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;origin&#39;.</span></span></code></pre></div><p>把本地库的内容推送到远程，用<code>git push</code>命令，实际上是把当前分支<code>master</code>推送到远程。</p><p>由于远程库是空的，我们第一次推送<code>master</code>分支时，加上了<code>-u</code>参数，Git不但会把本地的<code>master</code>分支内容推送的远程新的<code>master</code>分支，还会把本地的<code>master</code>分支和远程的<code>master</code>分支关联起来，在以后的推送或者拉取时就可以简化命令。</p><p>从现在起，只要本地作了提交，就可以通过命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ git push origin master</span></span></code></pre></div><p>把本地<code>master</code>分支的最新修改推送至GitHub。</p>`,101),l=[p];function k(d,r,o,F,c,g){return a(),i("div",null,l)}const C=s(h,[["render",k]]);export{u as __pageData,C as default};
