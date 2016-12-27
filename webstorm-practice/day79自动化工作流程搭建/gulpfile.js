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
	.pipe(gulpConcat("app.js"))//合并多个JS文件，并指定合并后新的文件名为'app.js'。注意：由于是多个文件合并为一个文件，所以使用原文件名的方式就不再适合了，所以合并文件后要指定一个新的文件名
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
