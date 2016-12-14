/**
 * Created by zhangjianlei on 2016/12/14.
 */
"use strict";
// 使用到的制表符: │ ├─ └─
const fs = require("fs");
const path = require("path");
const target = path.join(__dirname, process.argv[2] || "./");
//封装一个函数,函数的内部使用递归,实现遍历一个目录内所有的文件和目录的功能,
//并以目录树的形式打印输出
function tree(target,depth) {
    const dirArray = fs.readdirSync(target);
    let dirs = [];
    let files = [];
    dirArray.forEach((dir)=>{
        "use strict";
        //需要使用同步的方式读取文件的状态,异步读取无效
        // 使用isFile()方法判断是文件还是目录,并存入不同的数组里面
        const state = fs.statSync(path.join(target,dir));
        if (state.isFile()){
            files.push(dir);
        } else {
            dirs.push(dir);
        }
        /*fs.stat(path.join(target,dir),(error,state)=>{
         if(error) {
         throw error;
         }
         if (state.isFile()) {
         files.push(dir);
         } else {
         dirs.push(dir);
         }
         });*/
    });
    /*console.log(dirs);
     console.log(files);*/
    const depth0 = "";
    const depth1 = "| ";
    const depth2 = "| | ";
    const prefix = new Array(depth + 1).join("| ");
    //prefix是文件和目录的前缀,每深入一个目录,depth就多加一级,就多加一个"| "前缀
    //depth表示目录的层级,目录每多深入一级,depth就多加一级,就多加一个"| "前缀
    dirs.forEach((dir)=>{
        "use strict";
        console.log(`${prefix}├─${dir}`);
        //使用递归的方式,遍历目录中的目录,
        // path.join(target,dir)作为target实参非常的巧妙,
        // 每进入一个目录,就多嵌套一层,就多加一个dir
        //注意target是不断变化的,每次的target+dir作为下一级目录的target
        tree(path.join(target,dir),depth + 1);
        /*递归中target形参的值是下面这样的:
        * target
        * path.join(target,dir)
        * path.join(path.join(target,dir),dir)
        * path.join(path.join(path.join(target,dir),dir),dir)*/
    });
    //打印输出文件,在当前目录下,每打印一个文件,总文件的长度就减一,
    //判断到打印最后一个文件的时候,改变打印的前缀为"└─"
    let length = files.length;
    files.forEach((file)=>{
        console.log(`${prefix}${length - 1 ? "├─":"└─"}${file}`);
        length--;
    });
}
//调用自定义的函数,depth必须为0
tree(target,0);

