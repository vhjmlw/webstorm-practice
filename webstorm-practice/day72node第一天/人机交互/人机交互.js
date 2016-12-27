process.stdout.write("请输入key\n");
var user = {
        "name": "建磊",
        "age": "26",
        "degree": "本科"
    }
    //REPL环境进入了待输入状态，每次输入完内容回车的时候，都会触发data事件
    // input是输入的内容，是一个包含换行符的二进制数组，是一个Buffer对象
    // 想要使用的话需要使用input.toString.trim()来转变为正常的字符串
var keys = Object.keys(user);
// var flag = true;
var key = '';
//当控制台输入完内容按下回车,会触发该事件,input是读取到的我们在控制台输入的内容,是一个Buffer对象
//需要将其转换为字符串:input.toString().trim();
process.stdin.on("data", (input) => {
    input = input.toString().trim();
    if (!key) {
        if (keys.indexOf(input) === -1) {
            process.stdout.write("输入的key有误，请重新输入\n");

        } else {
            key = input;
            process.stdout.write("输入key正确，请输入key对应的value\n");
            // flag = false;
        }
    } else {
        var value = input;
        if (value === user[key]) {
            process.stdout.write("输入的value正确");
            process.exit();
        } else {
            process.stdout.write("您输入的value有误，请重新输入\n");
        }
    }
});