# 流行框架第一天：构建前端自动化工作流环境

## 兩個問題

## 学习目标

- 了解什么是Node，什么是NPM；（Node.js）
- 掌握Bower的使用；
- 熟练使用Less/Sass；
- 搭建一个自己的自动化工作流环境；
  + 自动编译
  + 自动合并
  + 自动刷新
  + 自动部署
- GIT 与 GITHUB
  + master 托管源文件
  + gh-pages 托管部署文件
  + 在github搭建自己的blog

## 为什么要有自动化的流程

- 在我们的开发过程中有大量的重复操作
- DRY  Don't repeat yourself
- 开发人员的精力应放在哪？创造，新的一切

- 前端开发的编译操作


## 1.Node环境

### 1.1.什么是Node

- Node.js 可能类似jquery.js
- 不是JS文件，也不是一个JS框架（）
- 而是Server side Javascript runtime, 服务端的一个JS运行时
- 我们可以在NODE运行JS代码
- alert();ECMAScript  JS- ES  BOM  DOM
- node中只能运行ECMAScript，无法使用 BOM 和 DOM
- 目前我们的JS是运行在浏览器内核中
- PHP是什么？是一门脚本语言也是一个运行环境
- 为什么Node选中了JS，

- 说到底就是一个JS运行环境

- 目前有两个分支
  + Node.js 0.12.7 官方版本 要求尽善尽美
  + IO.js 是社区的产物，不是官方的东西，io.js有很多新特性，迭代非常快，社区推进非常快
  + 15年两者合并，发布node第一个正式版 4.0， 迭代速度又慢了
  + node 5.x == io.js社区版本
  + node 4.0 == node官方版本


### 1.2.Node环境搭建

#### 1.2.1.Mac

- 安装包的方式
  + [pkg](https://nodejs.org/dist/v5.5.0/node-v5.5.0.pkg)
- NVM（Node Version Manager）

  ```bash
  $ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash
  $ echo '. ~/.nvm/nvm.sh' >> .bash_profile
  $ nvm install stable
  $ nvm alias default stable
  ```

#### 1.2.2.Windows

- 安装包的方式
  + [msi_x64](https://nodejs.org/dist/v5.5.0/node-v5.5.0-x64.msi)
  + [msi_x86](https://nodejs.org/dist/v5.5.0/node-v5.5.0-x86.msi)
- NVM（Node Version Manager）
- nvm(node version manager)
- 因为NODE版本比较多，开发人员可能依赖很多版本
- 通过NVM，可以轻松切换于不同的版本之间

  ```command
  
  ```
- windows系统需要自己配置环境变量
NVM_HOME=C:\Develop\nvm

NVM_SYMLINK=C:\Develop\nodejs

NPM_HOME=C:\Develop\nvm\npm

PATH=%NVM_HOME%;%NVM_SYMLINK%;%NPM_HOME%

%系统变量名%:在两个%之间输入系统变量名,可以调用设置的系统变量.

#### 1.2.3.环境变量

- 环境变量就是操作系统提供的系统级别用于存储变量的地方

- 系统变量和用户变量
- 系统变量指的是所用当前系统用户共享的变量
- 用户变量指的是单个用户使用的变量
- 自己的电脑一般只有一个用户
- 建议将自己配置的环境变量放在用户变量中，用户变量比较干净

- 环境变量的变量名是不区分大小写的

- 变量间允许相互引用

- 特殊值：
- PATH变量（不区分大小写）
- PATH 相当于一个路径的引用,全局的路径
- 只要添加到PATH变量中的路径，都可以在任何目录下搜索
- windows系统中在cmd中输入可执行文件,可以省略扩展名.可省略的扩展名在PATHEXT环境变量中设置.
- EXT:扩展 额外的,extra extension
- .cmd文件是可执行文件

- 命令行
- 可以用来执行当前目录下的文件
- 命令

cd :change directory


- Node.js是一个轻内核（本身没有什么功能）的东东，所有的功能都要功能包提供
- node官方提供了一些最基础的包

### 1.3.Node用途

#### 命令行输入node,进入REPL环境（控制台环境）,输入.exit,退出REPL环境.
#### node 文件名:在node环境调用指定的JavaScript文件.

#### 1.3.1.开发Web应用程序

- 做动态网站
- 开发提供数据的服务端API

#### 1.3.2.前端开发工具基础

- Node.js给前端乃至整个开发行业带来一场工业革命

### 1.4.Node开发Web应用Demo

#### 1.4.1.复习请求与响应

客户端发送到服务端的东西称之为请求报文
服务端返回给客户端的东西称之为响应报文



### 1.5.NPM

#### 1.5.1.什么是NPM

https://www.npmjs.com/
- Node Package Manager
- Node应用程序依赖包的管理工具
- 安装卸载更新之类的操作

#### 1.5.2.为什么使用NPM

- 包的数量很多,目前官网提供了2万多个package
- package类似于框架或者类库
- 场景：我需要用一个A，A依赖B，B依赖C
- 常见的包管理工具都有循环依赖的功能
- 只需记住我们需要什么工具,npm会帮我们自动安装该工具依赖的其他的package

#### 1.5.3.常见的NPM操作

// 安装一个包，默认安装最新稳定版本
npm install package_name
npm install package_name@版本号:安装指定版本号的package
//npm install package_name --save
// 初始化操作，给项目添加一个配置文件
npm init 
//npm init --yes:参数走默认配置

- 如果官方数据源太慢使用
- https://npm.taobao.org/
- 可以使用定制的 cnpm 命令行工具代替默认的 npm:以后使用cnpm替换npm
windows环境:
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
Mac环境:
alias cnpm="npm --registry=https://registry.npm.taobao.org \
--cache=$HOME/.npm/.cache/cnpm \
--disturl=https://npm.taobao.org/dist \
--userconfig=$HOME/.cnpmrc"

*****

## 2.Bower

### 2.1.什么是Bower,类似于nmp,依赖包管理工具.
### a package manager for the web


- [官网](http://bower.io/)
- web应用程序依赖项管理工具


### 2.2.为什么使用Bower

- 方便便捷的方式管理包

### 2.3.Bower实践

- npm install -g bower // -g:global  全局方式安装package

- 修改npm全局路径，就是在用户目录下添加.npmrc文件
    在.npmrc配置文件当中,添加以下内容,设置npm通过全局方式安装的package的安装路径(npm install -g)
    注意:路径最后的npm-cache npm不要变动,前面的路径可以改变
    'C:\Develop\nvm'部分可以改动,npm-cache npm两个文件夹是自动创建的

    cache=C:\Develop\nvm\npm-cache
    prefix=C:\Develop\nvm\npm

*****

## 3.Sass/LESS




*****

## 4.Gulp

### 4.1.Gulp简介

- 链接：
  + [官网](http://gulpjs.com/)
  + [中文网](http://www.gulpjs.com.cn/)
  gulp的包既包含工具,又包含编程API,作为开发使用的依赖.
- 就是用来机械化的完成重复性质的工作,例如:
    *CSS js压缩
    *js混淆
    *less→CSS
    *图片质量优化
- gulp的机制就是将重复工作抽象成一个个的任务，
- bootstrap和gulp中文官网翻译人员:王赛

### 4.2.Gulp准备工作

- 安装Node.js
- 安装 gulp 命令行工具
  + `npm install -g gulp`
- 初始化 gulp 项目
- 创建任务 - gulpfile.js

### 4.3.基本使用

### 4.4.常用插件

- [编译 Less：gulp-less](https://www.npmjs.com/package/gulp-less)
- [创建本地服务器：gulp-connect](https://www.npmjs.com/package/gulp-connect)
- [合并文件：gulp-concat](https://www.npmjs.com/package/gulp-concat)
- [最小化 js 文件：gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
- [重命名文件：gulp-rename](https://www.npmjs.com/package/gulp-rename)
- [最小化 css 文件：gulp-minify-css](https://www.npmjs.com/package/gulp-minify-css)
- [压缩html文件 gulp-minify-html](https://www.npmjs.com/package/gulp-minify-html)
- [最小化图像：gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
- 压缩CSS文件gulp-cssnano;

dist:distribution发布,分配;一般使用dist来命名文件夹,表示发布的意思.
dest:destination目的地,终点;
pipe:管道;gulp中的管道,类似于Java中的流的概念.gulp中的管道实现了jQuery中的链式操作.
*****

## 5.Git

### 5.1.什么是GIT，什么是GITHUB

- GIT
- GITHUB

### 5.2.环境安装



### 5.3.GIT常用命令


*****

## 6.Markdown

https://guides.github.com/features/mastering-markdown/
https://help.github.com/articles/github-flavored-markdown/
https://help.github.com/articles/markdown-basics/

