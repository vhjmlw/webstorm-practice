/**
 * Created by zhangjianlei on 2016/12/10.
 */
var frame = [];
frame[frame.length] = `
╭~~~╮
(o^.^o)
`;
frame[frame.length] = `
╭~~~╮
(o~.~o)
`;
frame[frame.length] = `
╭~~~╮
(o@.@o)
`;
frame[frame.length] = `
╭~~~╮
(o'.'o)
`;
var current = 0;
var render = () => {//胖箭头函数
    /*//返回当前控制台的尺寸,返回一个数组[宽,高]
    var array = process.stdout.getWindowSize();
    var height = array[1];
    for (var i = 0; i < height; i++) {
        //在控制台输出回车加换行,输出控制台的高度,
        // 将控制台的内容顶上去,实现清空控制台的效果
        console.log('\r\n');
    }*/
    //下面两行代码用来清除控制台的内容
    process.stdout.write('\033[2J');
    process.stdout.write('\033[0f');
    //循环输出frame数组的内容
    //process.stdout.write类似于console.log()
    process.stdout.write(frame[current%4]);
    current++;
}
setInterval(render,300);