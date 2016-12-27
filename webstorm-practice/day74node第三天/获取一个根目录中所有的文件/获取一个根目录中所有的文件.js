/**
 * Created by zhangjianlei on 2016/12/14.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const target = path.join(__dirname,process.argv[2]|| "./");
fs.readdir(target,(error,array)=>{
    "use strict";
    if(error) {
        throw error;
    }
    array.forEach((item)=>{
        fs.stat(path.join(target,item),(error,state)=>{
            if(error) {
                throw error;
            }
            // console.log(state);
            /*state对象的具体内容
            { dev: 16777217,
             mode: 33188,
             nlink: 1,
             uid: 502,
             gid: 20,
             rdev: 0,
             blksize: 4096,
             ino: 22659876,
             size: 10244,
             blocks: 24,
             atime: 2016-12-10T12:16:52.000Z,
             mtime: 2016-12-10T15:09:52.000Z,
             ctime: 2016-12-10T15:09:52.000Z,
             birthtime: 2016-08-30T16:09:28.000Z }*/
            // '\t制表符'
            console.log(`${state.mtime.toLocaleString()}\t${state.size}\t${item}\n`);
        });
    });
});