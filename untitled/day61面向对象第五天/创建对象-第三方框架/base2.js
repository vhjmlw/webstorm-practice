// timestamp: Tue, 01 May 2007 19:13:00 
/* 
 base2.js - copyright 2007, Dean Edwards
 http://www.opensource.org/licenses/mit-license
 */
// You know, writing a javascript library is awfully time consuming. 
//////////////////// BEGIN: CLOSURE //////////////////// 
// ========================================================================= 
// base2/Base.js 
// ========================================================================= 
// version 1.1 
var Base = function(){
// call this method from any other method to invoke that method's ancestor 
};
Base.prototype = {
    extend: function(source){
//参数大于一个时 
        if (arguments.length > 1) { // extending with a name/value pair
        //获得proto的祖先
            var ancestor = this[source];
            var value = arguments[1];
            //如果value（第二个参数）是function，并且祖先对象存在，在重载函数中调用base时
            if (typeof value == "function" && ancestor && /\bbase\b/.test(value)) {
            // get the underlying method
                var method = value;
            // override
                value = function(){
                    var previous = this.base;
                    this.base = ancestor;
                    //上溯到父类对象
                    var returnValue = method.apply(this, arguments);
                    this.base = previous;
                    return returnValue;
                };
                value.method = method;
                value.ancestor = ancestor;
            }
            this[source] = value;
        }
        else
        if (source) { // extending with an object literal 用一个对象列表来扩展
            var extend = Base.prototype.extend;
            /**
             * 1.扩展原型方法和属性 2.
             */
            //如果是扩展属于原型的方法或属性,先遍历其重载Object的3个方法
            if (Base._prototyping) {
                var key, i = 0, members = ["constructor", "toString", "valueOf"];
                while (key = members[i++]) {
//如果是重载了这些方法 
                    if (source[key] != Object.prototype[key]) {
                        /**
                         * 逐个扩展,用call的原因是要将extend的上下文改为要扩展的源this,
                         * 既是新建对象的父类对象
                         */
                        extend.call(this, key, source[key]);
                    }
                }
            }
            else
            if (typeof this != "function") {
// if the object has a customised extend() method then use it 
                extend = this.extend || extend;
            }
// copy each of the source object's properties to this object 
            for (key in source)
                if (!Object.prototype[key]) {
                    extend.call(this, key, source[key]);
                }
        }
        return this;
    },
    base: Base
};
Base.extend = function(_instance, _static){ // subclass 
    /**
     * Base类原型的扩展别名,将这个当成一个方法调用
     */
    var extend = Base.prototype.extend;
    /**
     * build the prototype,创建原型
     * 设置原型标志
     */
    Base._prototyping = true;
    /**
     * 创建一个Base的实例,初始化继承部分
     * 继承方式大致还是以下方式
     * function A(){}
     * function B(){
* this.b=[]; 
* }
     * A.prototype=new B();//A继承B的所有属性和方法
     * 这种继承方式会有一个问题,B中声明的对象(如b)以prototype的形式
     * 被A继承之后,prototype只是生成一个指向B中对象的引用,即
     * A所有实例会共同享有B中对象(b)
     * var a1=new A();
     * var a2=new A();
     * a1.b.push("a11");
     * a2.b.push("a21");
     * 此时,a1.b=a2.b=["a11","a21"],
     *
     * Dean Edwards在实现继承的时候,以父类为基础,创建实例,
     * 利用extend扩展该实例,最后用A.prototype=new B();实现继承
     * 但是属性是对象的时候没有做处理,
     * 还是没有避开上述的继承缺陷
     */
    var proto=new this;
    /**
     * 在这里,不可以用 proto.extend(_instance)代替
     */
    extend.call(proto, _instance);
    /**
     * 类实例属性和方法的原型部分构造完毕,删除标志位
     */
    delete Base._prototyping;
    /**
     * 这里作者运用了适配器的模式,用自定义的构造器生成一个新的类对象
     * wrapper/adapter:通过一定的方法，一个对象封装或授权另一个
     * 对象来改变它的接口或者行为
     */
// create the wrapper for the constructor function 
    /**
     * 获得构造器的引用
     */
    var constructor = proto.constructor;
    /**
     * 建立klass的Function对象,调用自定义的构造器, klass就是衍生的子类
     * 两种情况下,调用此方法:
     * 1.创建类实例的时候,这时候不是原型构造阶段,执行由extend方法
     * 继承的时候设定的构造方法
     * 2.当用extend方法衍生子类的时候---new this
     * 因为下文中klass的属性已经全部获得,
     * 所以当new完之后,获得所有父类的方法和属性都包含在了
     * proto里面了,这时候,在proto的基础上运用prototype的extend方法
     * 将此子类的属性和方法添加到proto里面
     */
    var klass = proto.constructor = function(){
        /**
         * var proto=new this; 调用父类的构造函数,创建一个父类的实例
         * new this用完后,函数重定向到子类对象构造方法
         */
        if (!Base._prototyping) {
            /**
             * 当在构造函数中(constructor)调用base方法时,
             * base方法会调用父类对象的构造函数,这时候会嵌套
             * 调用这个代码段,方法得以执行的条件就是this._constructing==true
             */
            if (this._constructing || this.constructor == klass) { // instantiation
                this._constructing = true;
                constructor.apply(this, arguments);
                delete this._constructing;
            }
            /**
             *
             * 不再向下执行
             */
            else { // casting
                var object = arguments[0];
                if (object != null) {
                    (object.extend || extend).call(object, proto);
                }
                return object;
            }
        }
    };
// build the class interface 
    /**
     *
     */
    for (var i in Base){
        klass[i] = this[i];
    }
    /**
     * 创建继承链
     */
    klass.ancestor = this;
    klass.base = Base.base;
    klass.prototype = proto;
    klass.toString = this.toString;
    /**
     * 扩展类方法,属性,类似java的static
     */
    extend.call(klass, _static);
// class initialisation 如果存在init函数 调用 
    if (typeof klass.init == "function")
        klass.init();
    return klass;
};
// initialise 
Base = Base.extend({
    constructor: function(){
        this.extend(arguments[0]);
    }
}, {
    ancestor: Object,
    base: Base,
    implement: function(_interface){
        if (typeof _interface == "function") {
// if it's a function, call it 
            _interface(this.prototype);
        }
        else {
// add the interface using the extend() method 
            this.prototype.extend(_interface);
        }
        return this;
    }
}); 