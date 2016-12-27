/**
 * Created by zhangjianlei on 2016/12/11.
 */
function oddOrEven(data,callback) {
    if(typeof data === "number") {
        callback(null,data);
        if (data % 2) {
            process.stdout.write(`${data}为奇数\n`);
        } else {
            process.stdout.write(`${data}为偶数\n`);
        }
    } else {
        callback(new Error("您输入的有误"));
    }
}
oddOrEven(111,(error,data)=>{
    "use strict";
    if(error) {
        throw error;
    }
    console.log(`您输入的数据为${data}`);
});


