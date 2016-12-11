/**
 * Created by zhangjianlei on 2016/12/10.
 */
var frame = [];
var fs = require("fs");//fs:filesystem
for (var i = 0; i < 6; i++) {
    //读取本地文件,存入到frame数组里面
    frame[frame.length] = fs.readFileSync(`./frames/${i+1}.txt`,"utf8");
}
var current = 0;
var render = () => {
    process.stdout.write('\033[2J');
    process.stdout.write('\033[0f');
    process.stdout.write(frame[current%6]);
    current++;
}
setInterval(render,300);
