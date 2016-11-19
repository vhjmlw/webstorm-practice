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
//��������һ��ʱ 
        if (arguments.length > 1) { // extending with a name/value pair
        //���proto������
            var ancestor = this[source];
            var value = arguments[1];
            //���value���ڶ�����������function���������ȶ�����ڣ������غ����е���baseʱ
            if (typeof value == "function" && ancestor && /\bbase\b/.test(value)) {
            // get the underlying method
                var method = value;
            // override
                value = function(){
                    var previous = this.base;
                    this.base = ancestor;
                    //���ݵ��������
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
        if (source) { // extending with an object literal ��һ�������б�����չ
            var extend = Base.prototype.extend;
            /**
             * 1.��չԭ�ͷ��������� 2.
             */
            //�������չ����ԭ�͵ķ���������,�ȱ���������Object��3������
            if (Base._prototyping) {
                var key, i = 0, members = ["constructor", "toString", "valueOf"];
                while (key = members[i++]) {
//�������������Щ���� 
                    if (source[key] != Object.prototype[key]) {
                        /**
                         * �����չ,��call��ԭ����Ҫ��extend�������ĸ�ΪҪ��չ��Դthis,
                         * �����½�����ĸ������
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
     * Base��ԭ�͵���չ����,���������һ����������
     */
    var extend = Base.prototype.extend;
    /**
     * build the prototype,����ԭ��
     * ����ԭ�ͱ�־
     */
    Base._prototyping = true;
    /**
     * ����һ��Base��ʵ��,��ʼ���̳в���
     * �̳з�ʽ���»������·�ʽ
     * function A(){}
     * function B(){
* this.b=[]; 
* }
     * A.prototype=new B();//A�̳�B���������Ժͷ���
     * ���ּ̳з�ʽ����һ������,B�������Ķ���(��b)��prototype����ʽ
     * ��A�̳�֮��,prototypeֻ������һ��ָ��B�ж��������,��
     * A����ʵ���Ṳͬ����B�ж���(b)
     * var a1=new A();
     * var a2=new A();
     * a1.b.push("a11");
     * a2.b.push("a21");
     * ��ʱ,a1.b=a2.b=["a11","a21"],
     *
     * Dean Edwards��ʵ�ּ̳е�ʱ��,�Ը���Ϊ����,����ʵ��,
     * ����extend��չ��ʵ��,�����A.prototype=new B();ʵ�ּ̳�
     * ���������Ƕ����ʱ��û��������,
     * ����û�бܿ������ļ̳�ȱ��
     */
    var proto=new this;
    /**
     * ������,�������� proto.extend(_instance)����
     */
    extend.call(proto, _instance);
    /**
     * ��ʵ�����Ժͷ�����ԭ�Ͳ��ֹ������,ɾ����־λ
     */
    delete Base._prototyping;
    /**
     * ����������������������ģʽ,���Զ���Ĺ���������һ���µ������
     * wrapper/adapter:ͨ��һ���ķ�����һ�������װ����Ȩ��һ��
     * �������ı����Ľӿڻ�����Ϊ
     */
// create the wrapper for the constructor function 
    /**
     * ��ù�����������
     */
    var constructor = proto.constructor;
    /**
     * ����klass��Function����,�����Զ���Ĺ�����, klass��������������
     * ���������,���ô˷���:
     * 1.������ʵ����ʱ��,��ʱ����ԭ�͹���׶�,ִ����extend����
     * �̳е�ʱ���趨�Ĺ��췽��
     * 2.����extend�������������ʱ��---new this
     * ��Ϊ������klass�������Ѿ�ȫ�����,
     * ���Ե�new��֮��,������и���ķ��������Զ���������
     * proto������,��ʱ��,��proto�Ļ���������prototype��extend����
     * ������������Ժͷ�����ӵ�proto����
     */
    var klass = proto.constructor = function(){
        /**
         * var proto=new this; ���ø���Ĺ��캯��,����һ�������ʵ��
         * new this�����,�����ض�����������췽��
         */
        if (!Base._prototyping) {
            /**
             * ���ڹ��캯����(constructor)����base����ʱ,
             * base��������ø������Ĺ��캯��,��ʱ���Ƕ��
             * ������������,��������ִ�е���������this._constructing==true
             */
            if (this._constructing || this.constructor == klass) { // instantiation
                this._constructing = true;
                constructor.apply(this, arguments);
                delete this._constructing;
            }
            /**
             *
             * ��������ִ��
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
     * �����̳���
     */
    klass.ancestor = this;
    klass.base = Base.base;
    klass.prototype = proto;
    klass.toString = this.toString;
    /**
     * ��չ�෽��,����,����java��static
     */
    extend.call(klass, _static);
// class initialisation �������init���� ���� 
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