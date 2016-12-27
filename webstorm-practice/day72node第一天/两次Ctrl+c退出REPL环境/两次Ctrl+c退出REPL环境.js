//当按下Ctrl+C的时候，触发SIGINT事件
//第一次按下Ctrl+C的时候，改变current变量的值为true，同时设置了一个定时器，
//如果在接下来的2秒内没有再次按下Ctrl+C，则重置current的值为false
//在2秒之内第二次按下Ctrl+C的时候，由于current为true，所以执行process.exit()方法退出REPL环境
//通过current变量的值，来控制是第一次还是第二次按下Ctrl+C，以及第二次按下的时间间隔
//两次按下ctrl+C的时间间隔不能超过2秒
var current = false;
process.on("SIGINT",()=>{
    if(current) {
        console.log("第二次按下Ctrl+C，退出");
        process.exit();
    }else{
        current = true;
        console.log("第一次按下Ctrl+C");
        setTimeout(()=>{
            current = false;
        },2000);
    }
});
setInterval(()=>{
    console.log(666);
},500);