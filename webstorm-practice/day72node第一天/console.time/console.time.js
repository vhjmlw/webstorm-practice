console.time("main");//注意:time()一定要传入参数
//for循环过长,阻塞了代码的执行
for (var i = 0; i < 1000000; i++) {

}
console.timeEnd("main");//注意:time()一定要传入同样的参数
//main: 1.606ms

