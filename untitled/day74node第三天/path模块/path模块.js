/**
 * Created by zhangjianlei on 2016/12/13.
 */
const path = require("path");
let filename = "/Users/zhangjianlei/webstormprojects/untitled/day74node第三天/path模块/path模块.js";
//获取目录路径
const dirname = path.dirname(filename);
console.log(dirname);// /Users/zhangjianlei/webstormprojects/untitled/day74node第三天/path模块
//获取文件名,包含扩展名
const basename1 = path.basename(filename);
console.log(basename1);//path模块.js
//获取文件名,不包含扩展名
const basename2 = path.basename(filename,".js");
console.log(basename2);//path模块
//获取扩展名
const extname = path.extname(basename1);
console.log(extname);//'.js'
//拼接路径,将多个参数拼接为路径字符串
filename = path.join(__dirname,"./path模块.js");
console.log(filename);// /Users/zhangjianlei/WebstormProjects/untitled/day74node第三天/path模块/path模块.js
//将路径解析为一个JSON对象,对象的里面包含了路径的各个组成部分
const obj = path.parse(filename);
console.log(obj);
/*{ root: '/',
    dir: '/Users/zhangjianlei/WebstormProjects/untitled/day74node第三天/path模块',
    base: 'path模块.js',
    ext: '.js',
    name: 'path模块' }*/
//将一个路径的JSON对象,格式化为一个路径字符串
filename = path.format(obj);
console.log(filename);// /Users/zhangjianlei/WebstormProjects/untitled/day74node第三天/path模块/path模块.js
//判断一个路径是否为绝对路径
const isAbsolute = path.isAbsolute(filename);
console.log(isAbsolute);//true
//获取PATH环境变量中每个路径的定界符(路径分隔符),Linux系统为:,windows系统为;
const delimiter = path.delimiter;
console.log(delimiter);// ':'
//快速提取环境变量PATH中所有的路径,返回一个数组
const PATH = process.env.PATH.split(path.delimiter);
console.log(PATH);
/*[ '/Users/zhangjianlei/.nvm/versions/node/v7.1.0/bin',
 '/usr/local/bin',
 '/usr/bin',
 '/bin',
 '/usr/sbin',
 '/sbin' ]*/
//获取路径中每个成员的分隔符,Linux系统为/,windows系统为\
const sep = path.sep;
console.log(sep);// '/'
//常规化路径,如果路径中有转义符的话,将路径转变为正常的路径
filename = path.normalize("/Users/zhangjianlei/WebstormProjects/untitled/day74node第三天/path模块/path模块.js");
console.log(filename);// /Users/zhangjianlei/WebstormProjects/untitled/day74node第三天/path模块/path模块.js
//path.relative(a,b)a和b都是绝对路径,获取从a到b的相对路径
const relative = path.relative("/users/zhangjianlei/webstormprojects/untitled","/users/zhangjianlei/documents/mygit");
console.log(relative);// ../../documents/mygit
//效果类似于path.join(),但是和join又有所不同
const resolve1 = path.resolve(__dirname,"..","..","./for_practice.html");
console.log(resolve1);// /Users/zhangjianlei/WebstormProjects/untitled/for_practice.html
const resolve2 = path.resolve(__dirname,"/users/zhangjianlei","documents","./mygit");
console.log(resolve2);// /users/zhangjianlei/documents/mygit
//path.posix和path.win32就是path对象,posix是Linux系统,win32是windows系统
path.posix===path;//true
path.win32===path;//false
