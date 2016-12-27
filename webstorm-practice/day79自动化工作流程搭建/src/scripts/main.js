"use strcit";
(function(window){
	console.log(window.location.href+"这里是app.js文件");
	age = 33;
	// var age = 18;
	var json = {name:this.age,age:26};//json对象中的this的指向问题，永远指向window对象
	console.log("这里是app.js文件"+JSON.stringify(json));//"{'name':33,'age':26}"
	//同一个对象的tostring()方法和stringify()方法返回的结果可能不同
	//stringify()叫做序列化
	//var array = [1,2,3,4];
	//array.tostring();返回"1,2,3,4"；
	//JSON.stringify(array);返回"[1,2,3,4]"
	//var json = {name:1,age:2,sex:3};
	//json.tostring();返回[object,Object];
	//JSON.stringify(json);返回"{'name':1,'age':2,'sex':3}"
})(window);