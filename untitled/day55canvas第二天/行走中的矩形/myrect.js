/**
 * Created by zhangjianlei on 2016/11/6.
 */
function Rect(option) {
    this._init(option);
}
Rect.prototype = {
    _init : function (option) {
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.width = option.width || 50;
        this.height = option.height || 50;
        this.strokeStyle = option.strokeStyle || "red";
        this.fillStyle = option.fillStyle || "blue";
        this.translateX = option.translateX || 0;
        this.translateY = option.translateY || 0;
        this.rotate = option.rotate || 0;
        this.scaleX = option.scaleX || 1;
        this.scaleY = option.scaleY || 1;
        this.globalAlpha = option.globalAlpha || 1;
    },
    render : function (context) {
        //为了能够取到Rect实例对象的各个属性
        var that = this;
        //每次进行操作的时候,第一步都要先save(),最后一步restore()
        context.save();
        //每次执行render()方法的时候,首先清除掉画布中的内容,如果不清除的话,每次绘制的矩形都被保留下来
        //context.canvas通过context上下文环境获取到canvas画布
        context.clearRect(0,0,context.canvas.width,context.canvas.height);
        context.beginPath();
        //先对画布进行操作,因为是在画布上进行绘制的,先操作画布后绘制路径,
        //对画布操作的效果才能够看得到
        context.translate(that.translateX,that.translateY);
        context.rotate(that.rotate*Math.PI / 180);
        context.scale(that.scaleX,that.scaleY);
        context.globalAlpha = that.globalAlpha;
        //绘制路径,现在绘制的路径是在操作后的画布上进行操作的
        //如果先绘制路径后操作画布,则绘制的路径是绘制在之前的画布上的
        
        context.rect(that.x,that.y,that.width,that.height);
        context.strokeStyle = that.strokeStyle;
        context.fillStyle = that.fillStyle;
        context.stroke();
        context.fill();
        context.restore();
    }
}