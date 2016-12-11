console.time("hello");
console.log("start");
//使用setTimeout0实现了,回调函数异步执行的效果,
//设置setTimeout为0,则里面的回调函数会被放在事件队列的最后面
setTimeout(()=>{
    for (var i = 0; i < 100000; i++){

    }
    console.log("middle");
},0);
console.log("end");
console.timeEnd("hello");
/*先后的打印顺序
start
end
hello: 2.612ms
middle*/


