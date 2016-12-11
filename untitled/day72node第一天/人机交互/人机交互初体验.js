process.stdin.setEncoding("utf8");
process.stdout.write("请输入内容\n");
//执行了下面的代码后，REPL进入了待输入的状态
//一旦输入内容回车，便会触发readable事件
process.stdin.on("readable", () => {
    var input = process.stdin.read();
    //注意这里的input末尾有换行符\n
    if (input) {
        process.stdout.write(`data:${input}\n`);
    }
});
