
## webstorm上的练习项目   
### 设置了master作为GitHub Pages展示的分支   
##### 访问地址：https://vhjmlw.github.io/webstorm-practice/
*******************************


## 开发环境的搭建(Mac)  

[1.git](#1.  git)  
[2. brew、brew cask](#2. brew、brew cask)  
[3. nvm、node、npm、bower](#3. nvm、node、npm、bower)  
[4. zsh](#4. zsh)  
[5. oh-my-zsh](#5. oh-my-zsh)  
[6. iterm2](#6. iterm2)  
[7. 开发工具](#7. 开发工具)   
[8. 自动化工作流程搭建(gulp + browser-sync)](#8. 自动化工作流程搭建(gulp + browser-sync))  
[9. 项目脚手架scaffold](#9. 项目脚手架scaffold)  
[10. 测试](#10. 测试)  

### 1.  git  

git是一款目前主流的分布式的版本控制工具。  
> 关于git的详情，可以参考官网：https://git-scm.com/ 

> 关于git的学习资料，如下：  
> git教程： https://git-scm.com/book/zh/v2/  
> 菜鸟学院git教程： http://www.runoob.com/git/git-tutorial.html  
> git教程： http://git.oschina.net/progit/  
> coding网git原理解析（强烈推荐）： https://blog.coding.net/blog/principle-of-Git  
> 廖雪峰git教程： http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000  
> 掘金git原理解析： http://deweixu.me/2016/11/05/how-git-works/  

###  2. brew、brew cask  

***The missing package manager for macOS***：  
brew：macOS系统的包管理工具，可以安装不同的软件。 
**brew的安装：** 
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

**brew cask：**   
macOS系统的软件安装工具，可以安装我们日常使用的APP。使用brew cask可以一条指令安装、卸载、升级我们的软件。  
**brew cask的安装：**  
```
	brew tap caskroom/cask  
```

**brew cask常用的指令如下：**  
```
	搜索软件：brew cask search 软件名
	查看软件信息：brew cask info 软件名
	安装软件：brew cask install 软件名
	卸载软件：brew cask uninstall 软件名
```

> 关于brew的详细信息可以查看官网：http://brew.sh/  
> 关于brew cask的详情可以查看官网：https://caskroom.github.io/

###  3. nvm、node、npm、bower  

nvm：node version manager，node版本管理工具  
node：JavaScript语言在服务器端的运行环境  
npm：node package manager，node包管理工具  
**nvm的安装：**  
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash  
```
**node：的安装**  
```
安装官方版本：nvm install node
或者指定安装的具体的版本：nvm install v4.2
安装io.js即社区版本：nvm install iojs
```
**node版本的切换：**  
```
切换为官方版本：nvm use node
切换为io.js社区版本：nvm use iojs
```
安装的node里面包含了npm工具。  
> 关于nvm，详情可以查看：https://github.com/creationix/nvm/blob/master/README.markdown  
> 关于node，详情可以查看官网：https://nodejs.org/zh-cn/  
> 关于npm，性情可以查看：https://www.npmjs.com/  

**bower：**   
是一个类似于npm的包管理工具，一般使用bower安装项目依赖，使用npm安装开发依赖。  
bower的安装：`npm install -g bower`  
> bower的官网：	https://bower.io/

###  4. zsh  

常用的Shell有sh、bash、csh等，想知道自己的系统有几种shell，可以通过以下命令查看：  `cat /etc/shells`  
显示如下：  
```
	/bin/bash
	/bin/csh
	/bin/ksh
	/bin/sh
	/bin/tcsh
	/bin/zsh
```

zsh为shell的一种，macOS系统自带的shell是bash，但是zsh功能上要比bash强不少。而且zsh完全兼容bash。zsh绝对是马车中的跑车，跑车中的飞行车，史称『终极 Shell』。  
macOS系统预装了zsh。  

###  5. oh-my-zsh  

oh-my-zsh是zsh的配置文件，Github 网址是：https://github.com/robbyrussell/oh-my-zsh     
官方网址是： http://ohmyz.sh/  

**oh-my-zsh的安装：**  
``` 
自动安装：wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh 
```
```
手动安装：git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh
		cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
```
安装完了之后，就可以打开终端，看到彩色的提示了。  

**zsh的配置：**  
zsh 的配置主要集中在用户当前目录的.zshrc里   
打开~/.zshrc文件，在文件的最下面添加设置别名的内容。  

  设置别名：alias  
``` 
  设置命令的别名，使用自定义的简短的命令替换原系统命令：
  如：在终端中输入cls就相当于执行clear指令
  alias cls='clear'
  alias ll='ls -l'
  alias javac="javac -J-Dfile.encoding=utf8"
  针对文件的扩展名指定对应的打开程序：
  alias -s html=mate   # 在命令行直接输入后缀为 html 的文件名，会在 TextMate 中打开
  alias -s rb=mate     # 在命令行直接输入 ruby 文件，会在 TextMate 中打开
  alias -s py=vi       # 在命令行直接输入 python 文件，会用 vim 中打开，以下类似
  alias -s java=vi
  alias -s gz='tar -xzvf'
```

我自己的电脑设置的别名如下：  
```
以下是我自己自定义的alias，使用sublime打开相应后缀的文件,需要添加sublime插件
也可以直接使用 ‘st 文件名’ 的方式直接使用sublime打开指定的文件
alias -s md=st
alias -s html=st
alias -s js=st
alias -s css=st
alias -s json=st
alias -s log=st
alias zshconfig="st ~/.zshrc" #在任何路径，使用sublime打开.zshrc配置文件
```

**设置主题：**
```
	打开~/.zshrc文件，找到ZSH_THEME="robbyrussell"
	引号里面的内容是默认主题，更改其内容就可以更改主题
	这里的主题并不是终端颜色的搭配，而是代码的布局
	终端的主题需要单独下载，下载后导入
	oh-my-zsh 提供了很多种主题，相关文件在~/.oh-my-zsh/themes目录下，可以随意选择，也可以编辑主题满足自己的需求  
```
我自己设置的主题如下：
```
	ZSH_THEME="robbyrussell"
```

**插件：**   
  oh-my-zsh 项目提供了完善的插件体系，相关的文件在~/.oh-my-zsh/plugins目录下，默认提供了100多种，可以根据自己的实际学习和工作环境采用，想了解每个插件的功能，只要打开相关目录下的 zsh 文件看一下就知道了。插件也是在.zshrc里配置，找到plugins关键字，就可以加载自己的插件了，系统默认加载 git ，可以在后面追加内容，如下：
```
	plugins=(git textmate autojump osx dirhistory sublime zsh-autosuggestions zsh-syntax-highlighting)  
```
**使用插件介绍：**   

1. `git`：当处于一个 git 受控的目录下时，Shell 会明确显示 「git」和 branch，另外对 git 很多命令进行了简化，例如 gco=’git checkout’、gd=’git diff’、gst=’git status’、g=’git’等等，熟练使用可以大大减少 git 的命令长度，命令内容可以参考~/.oh-my-zsh/plugins/git/git.plugin.zsh  

2. `textmate`：一种古老的代码编辑器  

3. `autojump`：目录的自动跳转，使用"j 目录名"的方式快速跳转到以前打开过的历史目录，需要单独安装。安装方式：`brew  install  autojump`   

4. `osx`：tab增强，quick-look filename 可以直接预览文件，man-preview grep 可以生成 grep手册 的pdf 版本等。  

5. `dirhistory`：使用Alt + ←/→，可以实现历史目录的快速跳转。Alt + ←快速跳转到上一个目录；Alt + →快速跳转到下一个目录  

6. `sublime`：使用sublime软件打开指定的文件  

7. `zsh-autosuggestions`：强烈建议。当我们敲入指令的时候，根据输入的指令匹配历史记录，提示可能会输入的指令。按→键也可以快速的完成指令  

8. `zsh-syntax-highlighting`：强烈建议。对正在输入的指令进行代码高亮，如果输入的指令有误则显示红色，无误显示绿色。  

> 注意：`zsh-autosuggestions`和`zsh-syntax-highlighting`两个插件需要我们自己单独安装。安装的位置默认存放在：*~/.oh-my-zsh/custom/plugins/*  。第三方的插件，都默认安装在这个目录，当然也可以更改配置文件，修改其安装目录。

> 注意：每次更改完~/.zshrc配置文件之后，都要重新执行下该配置文件：`source ~/.zshrc`

> 关于oh-my-zsh更多的信息，可以参考池建强的播客：http://macshuo.com/?p=676

###  6. iterm2

item2是替代terminal终端的一款命令行软件。功能比terminal更加的强大。  

iterm2具有丰富的主题可以下载，自定义程度也要比terminal要高。  
如：设置不同的快捷键打开不同的窗口，为不同的窗口设置不同的主题，为不同的窗口指定不同的开启目录。将窗口拆分为不同的布局。    

可以使用brew安装：`brew cask install iterm2`  
iterm2里面有一个***install  shell  integration***选项，建议安装，包含了shell集成，扩展了iterm2的功能。  
> 详情可以参考官网：https://www.iterm2.com/

###  7. 开发工具

`webstorm`：代码编辑器以webstorm为主，sublime为辅，偶尔使用visual studio code  
`sublime`：轻量级的编辑器，主要用来读代码  
`visual studio code`：微软的一款代码编辑器，速度介于webstorm和sublime之间  
`dash`：一款开发文档的百库全书，集成了各种语言框架的文档，结合Alfred使用简直酸  
`Alfred`：一款替换Spotlight的效率类工具，可以安装众多的第三方的workflow，提高工作效率  
`keyboard Maestro`：键盘大师，效率类工具，可以自定义众多的工作流，替换掉第三方的应用软件，大大的提高工作效率。详情请查看：http://sspai.com/36442  
`sip`：一款好用的取色器  
`VPN软件`：***鱼摆摆***、***Lantern***  
`shadowsocksX服务提供商`：http://shadowfly.org/ 、http://sv.mljjlt.cn/ 、 http://www.llout.com/ 、 http://www.feixunwangluo.com/ 、 http://www.fly6fish.co/   
`Typora`：MarkDown软件，支持GitHub的MarkDown语法，支持语法高亮，支持`command+/`实时预览，就是小问题有点多  
`MacDown`：MarkDown软件，mou的继承人，小巧高效，但不支持GFM语法  

### 8. 自动化工作流程搭建(gulp + browser-sync)   

**gulp**   

gulp是前端开发过程中一种基于流的代码自动化构建工具，是自动化项目的构建利器。   
官网： http://gulpjs.com/   
中文网：http://www.gulpjs.com.cn/   
gulp的作用主要用来机械化的完成重复性质的工作,例如:    

	JS文件的压缩混淆
	JS文件的合并
	LESS文件的编译
	CSS文件的压缩
	HTML文件的压缩
	图片质量优化

> CSS文件的合并没有意义，因为less语法可以通过   @import   url（"less文件路径"）；  的方式导入其他的less文件，导入之后，主文件就拥有了被导入的less文件的内容。所以只要编译主less文件就可以了，其他的less文件都@import导入到主less文件里面。编译了主less文件后，就拥有了所有的css内容。
> gulp的机制就是将重复工作抽象成一个个的任务。  

gulp的安装：   
```
	npm install -g gulp
	npm install --save-dev gulp  
```
> 因为要在命令行中使用gulp指令，所有要先全局安装gulp之后再在项目目录中局部安装

**gulp第三方插件**    

gulp同Node相同，本身提供的功能并不多，他都是依赖第三方的插件来实现复杂的功能。   

较常用的gulp第三方插件有：浏览器同步`browser-sync`、JS文件压缩混淆`gulp-uglify`、JS文件合并`gulp-concat`、less文件编译`gulp-less`、CSS文件压缩`gulp-cssnano`、HTML文件压缩`gulp-htmlmin`   
- [压缩、混淆js文件：gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
- [合并文件：gulp-concat](https://www.npmjs.com/package/gulp-concat)
- [编译Less：gulp-less](https://www.npmjs.com/package/gulp-less)
- [最小化css文件：gulp-minify-css](https://www.npmjs.com/package/gulp-minify-css)
- [压缩CSS文件gulp-cssnano](https://www.npmjs.com/package/gulp-cssnano)
- [压缩HTML文件gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin)
- [压缩html文件gulp-minify-html](https://www.npmjs.com/package/gulp-minify-html)
- [网页同步：browser-sync](https://www.browsersync.io/)
- [最小化图像：gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
- [重命名文件：gulp-rename](https://www.npmjs.com/package/gulp-rename)
- [创建本地服务器：gulp-connect](https://www.npmjs.com/package/gulp-connect)

第三方插件的使用步骤：  

	1. 在项目的根目录使用npm install安装插件；
	2. 在项目的根目录新建一个gulpfile.js文件；
	2. 在gulpfile.js文件中引入插件require（"插件名"）；
	3. 在gulpfile.js中使用插件，创建各种任务；
	4. 在终端中调用相应的task方法，gulp 任务名。



**browser-sync**   

实现一个网页在不同的标签页，同步的操作。并且实时显示对源码修改后的效果。    
官网：https://www.browsersync.io/docs/gulp  

browse-sync：自己搭建了一个服务器，服务器默认的访问文件夹为当前文件夹`baseDir:"./"`，当然该文件夹可以修改。服务器开启之后自动开启浏览器的页面访问指定目录下的index.html文件。我们对源码修改后，会自动刷新页面，效果实时的显示在页面上。    
服务器的默认访问地址为：http://localhost:3000   

**我自己搭建的自动化工作流程的gulpfile.js源码如下**   

实现的效果为：在命令行输入`gulp`指令，`browser-sync`自动打开默认浏览器的网页，加载指定访问目录下的`index.html`文件。对源码进行修改的时候，修改后的效果实时的显示在页面上。   

使用到的gulp第三方插件有：`browser-sync`、`gulp-less`、`gulp-cssnano`、`gulp-concat`、`gulp-uglify`、`gulp-htmlmin`   

目录结构如下：   
* dist
    * images
      * front-end.jpg
    * styles
      * app.css
    * scripts
      * app.js
    * index.html
* node_modules
* src
    * images
      * front-end.jpg
    * styles
      * app.less
      * _other.less
    * scripts
      * main.js
      * other.js
    * index.html
* gulpfile.js
* README.md
* package.json


```JavaScript
"use strict";
/*
1、安装gulp：npm install -g - gulp;npm install --save-dev gulp
2、安装gulp第三方插件：npm install：browser-sync、gulp-less、gulp-cssnano、gulp-concat、gulp-uglify、gulp-htmlmin
3、创建gulpfile.js文件，在文件内容引入gulp及第三方插件，require（gulp）等
4、使用gulp的API，创建任务
5、在命令行调用 gulp 方法名 指令执行相应的任务
 */
//引包
var gulp = require("gulp");
var gulpLess = require("gulp-less");
var gulpCssnano = require("gulp-cssnano");
var gulpConcat = require("gulp-concat");
var gulpUglify = require("gulp-uglify");
var gulpHtmlmin = require("gulp-htmlmin");
var browserSync = require("browser-sync");

//less编译，压缩，拷贝
gulp.task("style",function(){
	gulp.src(["./src/styles/*.less","!./src/styles/_*.less"])//使用数组声明多个不同的匹配的规则，此处的匹配规则的意思是查找styles目录下的不以'_'开头的less文件
	.pipe(gulpLess())//编译less文件，由于less语法可以@import url("less文件路径")，所以CSS文件合并没有必要，编译主less文件即可，其他的使用import导入到less主文件
	.pipe(gulpCssnano())//压缩less文件
	.pipe(gulp.dest("./dist/styles/"))//拷贝到指定的目录
	.pipe(browserSync.reload({stream:true}));//任务的最后会使用browser-sync自动刷新页面，效果类似于F5或者command+R
});

//JS文件的合并，压缩，混淆，拷贝。为了避免混淆之后命名冲突，建议先合并，后混淆压缩
gulp.task("script",function(){
	gulp.src("./src/scripts/*.js")
	.pipe(gulpConcat("app.js"))//合并多个JS文件，并指定合并后新的文件名为app.js。注意：由于是多个文件合并为一个文件，所以使用原文件名的方式就不再适合了，所以合并文件后要指定一个新的文件名
	.pipe(gulpUglify())//混淆，压缩JS文件
	.pipe(gulp.dest("./dist/scripts/"))
	.pipe(browserSync.reload({stream:true}));
});

//html文件的压缩，拷贝
gulp.task("html",function(){
	gulp.src("./src/*.html")
	.pipe(gulpHtmlmin({collapseWhitespace: true,removeComments:true}))//压缩HTML文件
	.pipe(gulp.dest("./dist/"))//collapseWhitespace：折叠空格；removeComments：删除注释
	.pipe(browserSync.reload({stream:true}));
});

//images文件夹内图片等文件的拷贝
gulp.task("image",function(){
	gulp.src("./src/images/*.*")//查找images目录下的所有的文件
	.pipe(gulp.dest("./dist/images/"))//将所有的文件拷贝到指定的目录
	.pipe(browserSync.reload({stream:true}));
});

//使用browser-sync插件实现浏览器的同步
//default是gulp默认的任务，在命令行输入gulp指令之后，会在当前目录查找gulpfile.js文件，执行里面的default任务
gulp.task("default",function(){//开启一个服务，默认端口为3000，baseDir用来设置服务器默认访问的目录
	browserSync({
		server:{
			baseDir:"./dist",//设置服务器默认访问的目录
		},
		port:9999,//设置服务器的端口，默认为3000
	});

	console.log("仅仅是用来测试用的");

	//使用gulp.watch()对指定的文件进行监视，当文件被修改，则触发执行指定的任务
	//注意：对文件的监视是放在开启服务之后的，代码放在default任务的里面，开启服务之后紧接着对文件进行监视
	//一旦被监视的文件被修改，则触发相应的任务，每个任务的最后都会执行browserSync.reload()方法来自动重新刷新页面
	gulp.watch("./src/styles/*.less",["style"]);
	gulp.watch("./src/scripts/*.js",["script"]);
	gulp.watch("./src/*.html",["html"]);
	gulp.watch("./src/images/*.*",["image"]);
});
```

> 自动化工作流程的复用性很高，在其他的项目下微调目录结构和文件名后可以直接使用。   
> 详情可以查看自动化工作流程搭建目录

### 9. 项目脚手架scaffold   

> 自动化工作流程能够帮我们完成很多机械性的工作，而且可复用性很高。而脚手架能够让我们连自动化工作流程都不用自己搭建，几条指令就能够帮我们轻松完成，搭建好整个项目的骨架。

##### 脚手架是自动创建自动化工作流程的工具，为整个应用生成一个初始化的模板,快速搭建一个完整的项目的结构。  

>在实际的开发过程中，从零开始建立项目的结构是一件让人头疼的事情，所以各种各样的脚手架工具应运而生。较常见的脚手架工具有[yoeman][]，[express-generator][]和[vue-cli][]。它们功能丰富，但最核心的功能都是能够快速搭建一个完整的项目的结构，开发者只需要在生成的项目结构的基础上进行开发即可，非常简单高效。  

关于脚手架的使用，稍后补充

[yoeman]:http://yeoman.io
[express-generator]:http://expressjs.com/zh-cn/starter/generator.html
[vue-cli]:https://github.com/vuejs/vue-cli

### 10. 测试

[FEX前端自动化测试探索](http://fex.baidu.com/blog/2015/07/front-end-test)   
[测试框架Mocha实例教程](http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html)   
[Karma和Jasmine自动化单元测试](http://blog.fens.me/nodejs-karma-jasmine/)   
[Protractor-专门为AngularJS设计的自动化的测试工具](http://www.protractortest.org)   

关于测试环境的搭建，后期补充

### 以上，未完待续，会不断的补充...