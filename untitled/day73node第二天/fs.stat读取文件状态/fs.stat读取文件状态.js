/**
 * Created by zhangjianlei on 2016/12/11.
 */
const fs = require("fs");
//读取文件的状态fs.stat();
fs.stat("./demo.md",(error,data)=>{
    "use strict";
    if (error) {
        //读取文件失败,新创建文件demonew1.md,fs.writeFile();
        fs.writeFile("./demonew1.md",new Date().toLocaleString(),(error,data)=>{
            if(error) {
                process.stdout.write("读取文件失败,创建新文件失败");
                throw error;
            } else {
                process.stdout.write("读取文件失败,创建新文件成功\n");
                //读取新创建文件的内容fs.readFile();
                fs.readFile("./demonew1.md",(error,data)=>{
                    if(error) {
                        throw error;
                    } else {
                        process.stdout.write(`新创建的文件的内容为:${data}`);
                    }
                });
            }
        });
        // throw error;
    } else {
        process.stdout.write(`读取文件成功,原文件的状态为${data}\n`);
        //读取文件成功,删除原文件,fs.unlink();删除文件
        fs.unlink("./demo.md",(error,data)=>{
            if(error) {
                process.stdout.write("读取文件成功,删除原文件失败");
                throw error;
            } else {
                //删除原文件之后,再创建一个新的文件demonew2.md
                fs.writeFile("./demonew2.md",new Date().toLocaleString(),(error,data)=>{
                    if (error) {
                        process.stdout.write("读取文件成功,删除原文件成功,创建新文件失败");
                        throw error;
                    } else {
                        process.stdout.write("读取文件成功,删除原文件成功,创建新文件成功\n");
                        //读取新创建文件的内容
                        fs.readFile("./demonew2.md",(error,data)=>{
                            if(error) {
                                throw error;
                            } else {
                                process.stdout.write(`新创建的文件的内容为:${data}`);
                            }
                        });
                    }
                });
            }
        });
    }
});