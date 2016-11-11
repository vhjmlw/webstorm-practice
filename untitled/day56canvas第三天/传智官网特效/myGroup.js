/**
 * Created by zhangjianlei on 2016/11/9.
 */
function MyGroup(option) {
    this._init(option);
}
MyGroup.prototype = {
    _init : function (option) {
        this.x = option.x;  
        this.y = option.y;
        this.innerRadius = option.innerRadius;
        this.outerRadius = option.outerRadius;
        this.innerFill = option.innerFill;
        this.textContent = option.textContent;
        //设置在内部新建的group组的坐标,坐标在圆弧上,这样group里面的circle ring相对于他的x y的坐标就可以为0了
         this.group = new Konva.Group({
             x:this.x,
             y:this.y
         });
        //在group里面新建一个圆,圆心相对于group的位置为(0,0)
        var circle = new Konva.Circle({
            x : 0,
            y : 0,
            radius : this.innerRadius,
            fill : this.innerFill,
            opacity : .7
        });
        //在group里面新建一个圆环,圆心相对于group的位置为(0,0),注意:圆环和内圆的颜色是相同的,仅仅opacity不同而已
        //新建一个圆环需要圆心坐标 内圆半径 外圆半径 圆环填充颜色 透明度等属性,圆环填充的就是内圆和外圆之间的圆环的颜色
        var ring = new Konva.Ring({
            x : 0,
            y : 0,
            innerRadius : this.innerRadius,
            outerRadius : this.outerRadius,
            fill : this.innerFill,
            opacity : .2
        });
        //在group里面新建一个text,相对于group的位置为(0 - this.outerRadius,0-5),text的宽度为外圆的直径
        var text = new Konva.Text({
            x : 0 - this.outerRadius,
            y : 0 - 5,
            width : this.outerRadius * 2,
            align : "center",
            text : this.textContent,
            fontSize : 16,
            fill : "white"
        });
        this.group.add(circle);
        this.group.add(ring);
        this.group.add(text);
    },
    addToGroupOrLayer : function (layer) {
        layer.add(this.group);
    }
}