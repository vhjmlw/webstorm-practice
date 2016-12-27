# 流行框架第二天：Git与Angular入门

## 复习

- Node Node.js --- 类似一个操作系统
  + 一个JS的运行环境
  + 主要用于开发Web应用程序（回想登陆的例子）
  + 很多的前端开发工具都是基于node这个平台
  + 所用的工具就相当于一些软件

- NVM （可选的）
  + Node Version Manager(Node的版本管理工具)
  + 因为node的版本比较多，很多时候我们可能依赖多个版本，并要求自由切换
  + 使用
    * nvm use [对应的版本号] [平台架构（如果是32系统需要写32,64位不用管）]
    * nvm install <version> [arch]  安装
    * nvm uninstall <version> 卸载
    * nvm list 查看已经安装版本
  + 官网
    * https://github.com/coreybutler/nvm-windows

- NPM 
  + node package manager(node的包管理工具)
  + npm管理包非常方便，我们只需要记住使用哪个包就可以了
  + 使用
    - npm install xxx 
    - 安装一个包到项目本地，必须要联网
    - 安装完成过后当前项目根目录下会多一个node_modules文件夹，所有的下载下来的包全部在里面
    
    - 由于需要记录项目依赖哪些东西，所以需要一个配置文件“package.json”，可以通过npm init命令生成
    - 以后安装包的时候将其--save
    
    - --save就是将我们安装的包名字和包版本记录到配置文件中的dependencies节点中,记录项目依赖
    - --save-dev将安装的包名字和包版本记录到配置文件中的devDependencies节点中,记录开发依赖
    - 项目依赖分两种:1项目依赖  2开发依赖
    - 一个就是普通的项目依赖比如bootstrap,项目依赖在源代码中被使用,在项目的整个阶段都要被使用;
    - 还有一种只是开发阶段需要用的，这种属于开发依赖比如gulp，开发依赖最终记录在devDependencies节点里面.
    - 开发依赖仅在开发阶段被使用,开发完毕后就没用了,仅仅是一个工具.
    - 项目依赖包在安装时,使用--save;开发依赖包在安装时,使用--save-dev

    - npm uninstall xxx --save卸载项目依赖包
    - npm uninstall xxx --save-dev卸载开发依赖包

    - npm install xxx -g(全局安装包)
      + 如果你安装的是一个工具，工具要在每一个地方都能用，这种情况下一般全局安装。
      + 一般全局安装的都是开发依赖包
    
- Bower
  + Web sites are made of lots of things — frameworks, libraries, assets, and utilities. Bower manages all these things for you.
  + Bower就是用来管理项目中所有的依赖，主要用于Web页面开发时使用的包管理，比如jquery，bootstrap
  + 
  > 重复的轮子太多，抓住轮子与轮子之间的共性
  > 

- Gulp  FIS3(百度制造,类似gulp)
- http://www.ydcss.com/archives/94

- msi - microsoft installer 微软安装器

## GIT

### 什么是GIT

- 是一个源代码管理工具
- 在一个项目中，凡是由开发人员编写的都算是源代码
- 源代码有必要管理起来？
- 让源代码可以被追溯，主要记录每次变更了什么，谁主导这次变化
- 人为的维护比较麻烦，
- GIT是Linux之父当年为了维护管理Linux的源代码写的一个工具
- Git 之前 很多使用 svn vss tfs hs ......


- https://guides.github.com/

### 安装GIT

- git命令行工具
- 基于git命令行的一个客户端软件（提供一个界面去管理源代码）

### GIT命令操作

- 初始化一个本地GIT仓储

```shell
cd 当前项目目录
git init // 初始化一个本地的仓库,在当前文件夹下创建一个隐藏文件夹.git
git init的目的就是创建一个.git目录,对当前文件夹的内容进行追踪
即使当前文件夹的位置发生变更,但是.git目录仍然存在,所以不用重新git init
git就是使用.git目录对当前文件夹进行追踪的,删除了.git目录git也就无法使用了
track:跟踪;
```

> 就是在本地文件夹中添加了一个.git的文件夹用于记录所有的项目变更信息

- 查看本地仓储的变更状态

git status
用于查看本地仓储的状态
第一次查看，显示的是一坨没有被跟踪的文件

git status -s // -s 是输出简要的变更日志

- 添加本地暂存（托管）文件

git add
可以将一个没有被跟踪的文件添加到跟踪列表,git add .将当前文件夹所有的文件添加追踪,'.'表示当前文件夹
git add . === git add --all

类似于node_modules这种性质的文件不应该被跟踪,因为不属于我们的源代码

- 添加本地GIT忽略清单文件

在代码库文件夹的根目录添加一个.gitignore文件,此文件用于说明忽略的文件有哪些
在.gitignore忽略清单文件中添加需要忽略的目录或文件,一行添加一个,可以出现空行
添加的目录或文件,当前文件夹内所有同名的目录或文件都会被忽略
如果同名的文件有很多,有的需要忽略有的不需要,则可以使用具体的路径来指定需要忽略的目录或文件,将其与其他同名的目录或文件区分开

- 提交被托管的文件变化到本地仓储

git commit
将本地的变化提交的本地的仓库文件夹归档
一般在有了一个小单元的整体变化后再提交
每次git commit都要输入提交日志,便于后期追溯

- 对比差异

git diff
可以用于对比当前状态和版本库中最后一次提交的状态的变化

- 查看简单的配置信息git config -l

- 提交日志

git log 
可以查看提交日志,git log --oneline查看简单的提交日志

- 回归到指定版本

git reset --hard 提交哈希值的前六位
将版本回退到指定的位置
每次提交都会生成一个唯一的哈希值,该哈希值对应一次提交
通过git log --oneline可以查看每次提交的前六位哈希值
通过git log可以查看每次提交的完整的哈希值
通过哈希值的前六位,就可以定位到相对应的提交

- 为仓储添加远端（服务器端）地址

- 将本地仓储的提交记录推送到远端的master分支

- 拉取远端master分支的更新记录到本地

- 回归到指定版本

### GITHUB基本使用

- https://github.com/
- GITHUB是一个GIT服务的提供商，
- 
- 提出社交化编程

http://zoomzhao.github.io/code-guide/
https://github.com/jobbole/awesome-javascript-cn
https://github.com/jobbole/awesome-css-cn


- GIT分支
- 将本地代码库同步到GitHub服务器的remote远端仓库
- 1 首先在GitHub创建一个repository仓库,创建的时候不要自动创建README.md文件,创建完成之后该仓库会生成一个https地址
- 2 将本地被追踪的文件git init,git add --all,git commit -m "",也就是将被追踪的文件全部提交
- 3 将本地与远端仓库remote建立连接,使用到远端仓库的https地址,
    给远端的仓库起个别名origin-git便于以后本地和remote交流(默认为origin),
    输入指令之后,会要求输入GitHub的账号和密码,对本地进行校验,输入正确之后则建立连接成功:
    git remote add origin-git https://github.com/vhjmlw/practice-git.git
    当然也可以使用ssh建立连接,这样的话,需要本地先创建一对秘钥,将公钥填写到GitHub账号,之后就可以使用ssh进行连接了
- 4 将本地的文件推送到remote远端仓库:git push -u origin-git master
    -u的意思是使用流的方式推送本地文件,此时远端仓库便拥有了我们本地上传的文件
- 5 将远端仓库的文件拉回本地:git pull origin-git master
    本地的文件与远端的保持一致

- 如果本地有多个分支的话,需要单独的推送每个分支到远端仓库.
    在master分支上创建一个新的分支的时候,将master主分支在创建分支的那一时刻的状态拷贝一份给新的分支;
    而不是将最近一次commit提交时的状态拷贝一份给新的分支.
    也就是说,新创建的分支拷贝的是创建分支时的状态,而不是最后一次提交时的状态.

- gist:GitHub提供的功能模块,用来保存我们日常收集的代码块.

### 使用GitHub+hexo创建自己的博客,搭建自己的个人站点:pages.github.com;hexo.io;
### 使用GitHub Pages展示页面的两种方式:
    1 Project site
    在仓库里面创建一个gh-pages分支,将文件push到远程gh-pages分支,利用gh-pages分支,对页面进行预览,
    使用 "用户ID.github.io/仓库名" 的方式可以查看仓库里面gh-pages分支的文件,自动查看仓库名gh-pages分支的内容.
    实际上是将该仓库gh-pages分支的内容作为服务器的文件夹,默认访问index.html文件,当然也可以访问其他的文件或目录.

    2 User site
    创建一个 "用户ID.github.io" 命名的仓库,该仓库的master也可以被预览,stormzhang的博客就是这么搭建的.
    直接使用 "用户ID.github.io" 的方式来访问仓库master分支的内容.
    "用户ID.github.io"仓库的master作为服务器的文件夹,默认访问index.html文件,当然也可以访问其他的文件或目录.

### 关于GitHub Pages的使用方法,详见官方网址:pages.github.com

DNS服务商:www.dnspod.cn,进行域名绑定,将我们自己的域名绑定到GitHub上的页面.
在项目根目录,添加CNAME文件,注意该文件没有扩展名,在该文件里面添加我们自己的域名,就可以实现域名绑定.

>   使用pages.github.com推送自己的页面,页面可以被预览;使用hexo.io自动生成静态页面,搭建自己的博客;
    可以将hexo生成的静态页面推送到GitHub Pages上,两者搭配,就实现了搭建自己的博客和个人站点.
    hexo用来自动生成一套页面,GitHub Pages用来展示该页面.
    类似hexo功能的还有jekyll和WordPress等.静态页面生成器.
    GitHub的仓库有一个Launch automatic page generator的功能,也可以自动创建一套页面.

### 总结:使用GitHub Pages展示页面的几种方式:
    1 在仓库中创建一个gh-pages分支,gh-pages为展示的默认分支
    2 在仓库的settings选项中,设置use master branch for GitHub Pages,设置master为展示分支
    3 在创建仓库的时候,使用Launch automatic page generator 自动创建一套页面,同时创建一个gh-pages分支
    4 创建一个以 "用户ID.github.io" 命名的仓库
    其中1 2 3使用 "用户ID.github.io/仓库名" 访问,4使用 "用户ID.github.io" 访问

    但是,GitHub Pages上面只能展示静态页面,不能展示PHP文件.








## Angular入门

### 简介

- 知识储备
- 什么是Angular
  + 快速构建Web应用程序
  + 单页面应用程序
- Angular的特性
- 为什么要用Angular
  + 让Web应用程序开发更简单，更快捷
- 带领前端进入MV*的时代

### 开始使用
  
- 引用Angular
  + 下载
  + bower
  + npm
- 基本使用