/**
 * Created by zhangjianlei on 2016/11/7.
 */
function Arc(option) {
    this._init(option);
}
Arc.prototype = {
    _init : function (option) {
        this.x = option.x==0 ? 0 : (option.x || 100);
        this.y = option.y == 0 ? 0 : (option.y || 100);
        this.radius = option.radius || 50;
        this.sAngle = option.sAngle*Math.PI / 180 || 0;
        this.eAngle = option.eAngle*Math.PI / 180 || 2*Math.PI;
        this.reverse = option.reverse || false;
        this.fillStyle = option.fillStyle || "blue";
        this.strokeStyle = option.strokeStyle || "red";
        this.translateX = option.translateX || 0;
        this.translateY = option.translateY || 0;
        this.rotate = option.rotate || 0;
        this.scaleX = option.scaleX || 1;
        this.scaleY = option.scaleY || 1;
        this.globalAlpha = option.globalAlpha || 1;
    },
    render : function (context) {
        context.save();
        var that = this;
        context.beginPath();
        context.translate(that.translateX,that.translateY);
        context.rotate(that.rotate * Math.PI / 180);
        context.scale(that.scaleX,that.scaleY);
        context.globalAlpha = that.globalAlpha;
        context.moveTo(that.x,that.y);
        context.arc(that.x,that.y,that.radius,that.sAngle,that.eAngle,that.reverse);
        context.fillStyle = that.fillStyle;
        // context.stroke();
        context.fill();
        context.restore();
    }
}