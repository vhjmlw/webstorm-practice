# webstorm-practice
## webstorm上的练习项目
*******************************

## 学习路径  


## 开发环境的搭建(Mac)  

[1.git](#1. git)  
[2. brew、brew cask](#2. brew、brew cask)  
[3. nvm、node、npm、bower](#3. nvm、node、npm、bower)  
[4. zsh](#4. zsh)  
[5. oh-my-zsh](#5. oh-my-zsh)  
[6. iterm2](#6. iterm2)  
[7. 开发工具](#7. 开发工具)  

### 1. git  

git是一款目前主流的分布式的版本控制工具。  
> 关于git的详情，可以参考官网：https://git-scm.com/ 

> 关于git的学习资料，如下：  
> git教程： https://git-scm.com/book/zh/v2/  
> 菜鸟学院git教程： http://www.runoob.com/git/git-tutorial.html  
> git教程： http://git.oschina.net/progit/  
> coding网git原理解析（强烈推荐）： https://blog.coding.net/blog/principle-of-Git  
> 廖雪峰git教程： http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000  
> 掘金git原理解析： http://deweixu.me/2016/11/05/how-git-works/  

### 2. brew、brew cask  

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

### 3. nvm、node、npm、bower  

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
切换为官方版本：nvm install node
切换为io.js社区版本：nvm install iojs
```
安装的node里面包含了npm工具。  
> 关于nvm，详情可以查看：https://github.com/creationix/nvm/blob/master/README.markdown  
> 关于node，详情可以查看官网：https://nodejs.org/zh-cn/  
> 关于npm，性情可以查看：https://www.npmjs.com/  

**bower：**   
是一个类似于npm的包管理工具，一般使用bower安装项目依赖，使用npm安装开发依赖。  
bower的安装：`npm install -g bower`  
> bower的官网：	https://bower.io/

### 4. zsh  

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

### 5. oh-my-zsh  

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

### 6. iterm2

item2是替代terminal终端的一款命令行软件。功能比terminal更加的强大。  

iterm2具有丰富的主题可以下载，自定义程度也要比terminal要高。  
如：设置不同的快捷键打开不同的窗口，为不同的窗口设置不同的主题，为不同的窗口指定不同的开启目录。将窗口拆分为不同的布局。    

可以使用brew安装：`brew cask install iterm2`  
iterm2里面有一个***install  shell  integration***选项，建议安装，包含了shell集成，扩展了iterm2的功能。  
> 详情可以参考官网：https://www.iterm2.com/

### 7. 开发工具

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

### 以上，未完待续，会不断的补充...