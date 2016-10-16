/**
 * Created by zhangjianlei on 16/8/30.
 */
var Person = function (name) {
    this.name = name;
}
Person.prototype.makeLove = function (name2) {
    console.log(this.name+"喜欢和"+name2+"makelove");
}
var person1 = new Person("建磊");
person1.makeLove("旭楠");
console.log(person1.name);
console.log(Person.prototype);
console.log(person1.__proto__);
console.log(person1.__proto__ === Person.prototype);
var array = [1, 2, 3, 4, 5];
console.log(delete array[0]);
console.log(array);
for (var i = 0; i <array.length; i++) {
    console.log(array[i]);
}
delete person1.name;
console.log(person1.name);
for (var arr in person1) {
    console.log(arr);
}
console.log("makeLove" in person1);
person1["makeLove"]("x旭楠");
a = 10;
console.log(a);
try {
    delete a;
    console.log(a); 
}catch (e){
    console.log(e);
    // throw new Error("哎呀,出现错误了");
}

