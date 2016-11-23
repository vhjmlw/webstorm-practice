/**
 * Created by zhangjianlei on 2016/11/23.
 */
var gulp = require("gulp");//引入插件
var less = require("gulp-less");//将less编译为CSS
var cleanCss = require("gulp-clean-css");//压缩CSS文件
var concat = require("gulp-concat");//合并多个js文件
var browserSync = require("browser-sync").create();//实现网页同步
//require一般返回的是方法或者对象,可以在pipe()中使用该方法或对象.

//复制demo.html文件到gulp-demo2文件夹
//dest:destination目的地,指向文件被复制到哪里
gulp.task("dest",function () {
    gulp.src("./demo.html")//src()方法指向了一个文件,或者多个文件
        .pipe(gulp.dest("./../gulp-demo2文件被复制到这里"));//pipe()管道,将src选择的文件导入到管道中,
    // 每调用一次pipe,就意味着文件进入到了一个新的管道,会在管道中执行一些新的操作
});

//编译less文件为CSS文件,并压缩文件
gulp.task("less",function () {
    gulp.src("./*.less")
        .pipe(less())//将less编译为CSS
        .pipe(cleanCss())//对CSS文件进行压缩
        .pipe(gulp.dest("./../gulp-demo2文件被复制到这里"));
});

//实现实时同步demo.html到gulp-demo2文件夹的功能
//使用watch()方法监听demo.html文件,一旦该文件被修改,就会触发该事件,
//调用dest()方法,复制demo.html文件到gulp-demo2文件夹
gulp.task("default",function () {
    gulp.watch("./demo.html",["dest"]);//监听demo.html文件,文件一旦修改就会调用dest方法
    gulp.watch("./*Js.js",["concat"]);//监听*Js.js多个文件,文件一旦修改就会调用concat方法
});

//合并js文件,将多个js文件合并为一个文件
gulp.task("concat",function () {
    gulp.src("./*Js.js")
        .pipe(concat("myConcat.js"))//合并符合*Js.js条件的js文件,myConcat.js是自己命名的文件,用来替换原来的js文件
        .pipe(gulp.dest("./../gulp-demo2文件被复制到这里"));
});

//使用browser-sync插件实现网页操作同步效果
//插件会自己搭建一个服务器,服务器访问地址http://localhost:3000
//服务器默认访问的文件夹为当前文件夹 (baseDir: "./")设置
gulp.task("browser-sync",function () {
    browserSync.init({
        server:{
            baseDir: "./"//在这里设置服务器的默认文件夹,这里设置为当前文件夹
        }
    });
});