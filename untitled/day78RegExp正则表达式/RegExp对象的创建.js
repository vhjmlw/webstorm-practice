"use strict";
var reg = /\bis\b/g; //g全局匹配，否则的话只会匹配到第一个
var str = "He is a girl, a is beautiful is girl.";
var strnew = str.replace(reg, "am");
console.log(strnew); //He am a girl, a am beautiful am girl.
var reg2 = new RegExp("\\bam\\b", "g");
console.log(strnew.replace(reg2, "is")); //He is a girl, a is beautiful is girl
var str2 = "He Is a Man He is";
var reg3 = /\bis\b/g;
console.log(str2.replace(reg3, "am")); //He Is a Man He am
var reg4 = /\bis\b/gi; //i：ignore忽略大小写，默认为大小写敏感
console.log(str2.replace(reg4, "am")); //He am a Man He am
var str5 = "hello world is world hello Is IS";
var str6 = str5.replace(/\bis\b/gi, "are"); //注意第一个参数是RegExp对象
console.log(str6); //hello world are world hello are are
console.log("hello\t\tworld\r\n world\thello \0 \f");
var str7 = "abcABC123";
console.log(str7.replace(/[abc]/gi, "x")); //xxxxxx12
//[abc]表示的意思是 a 或者 b 或者 c
console.log(str7.replace(/[^abc]/gi, "x")); //abcABCxx
//[^abc]：^ 表示取反，不是 a 或者 b 或者 c
var str8 = "a1b2c3d4e5A1B2C3D4";
console.log(str8.replace(/[a-z]/, "啊")); //啊1b2c3d4e5A1B2C3D4，只会匹配到第一个
console.log(str8.replace(/[a-z]/g, "啊")); //啊1啊2啊3啊4啊5A1B2C3D4，匹配全部的小写字母
console.log(str8.replace(/[a-z]/gi, "啊")); //啊1啊2啊3啊4啊5啊1啊2啊3啊4，匹配到所有的大小写字母
console.log(str8.replace(/[a-zA-Z]/gi, "啊")); //啊1啊2啊3啊4啊5啊1啊2啊3啊4，匹配到所有的大小写字母
//[a-z]匹配到所有的小写字母
//[a-zA-Z]匹配到所有的大小写字母
//[0-9]匹配到所有的数字
//[0-9-]表示任意一个数字或者 -
var str9 = "@abc@abc@";
console.log(str9.replace(/@./g, "啊")); //啊bc啊bc
console.log(str9.replace(/^@./, "啊")); //啊bc@abc
console.log(str9.replace(/@$/, "啊")); //@abc@abc