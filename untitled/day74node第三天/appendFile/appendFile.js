/**
 * Created by zhangjianlei on 2016/12/13.
 */
const fs = require("fs");
const path = require("path");
let i = 0;
//追加内容到文件中,文件中原内容被保留,追加的内容添加到文件的最后面
setInterval(()=>{
    "use strict";
    fs.appendFile(path.join(__dirname,"./demo1.txt"),`helloworld${i++}\n`,(error)=>{
        if(error) {
            throw error;
        }
    });
},3000);
