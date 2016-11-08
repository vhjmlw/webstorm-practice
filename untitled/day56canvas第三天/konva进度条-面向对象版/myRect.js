/**
 * Created by zhangjianlei on 2016/11/9.
 */
//自定义自己的
function MyProgress(option) {
    this._init(option);
}
MyProgress.prototype = {
    _init: function (option) {
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.width = option.width || 1000;
        this.height = option.height || 50;
        this.fill = option.fill || "green";
        this.stroke = option.stroke || "red";4
        this.cornerRadius = option.width / 2 || 25;
        //在内部创建一个innerRect
        this.innerRect = new Konva.Rect({
            x: this.x,
            y: this.y,
            width: 0,
            height: this.height,
            fill: this.fill,
            cornerRadius: this.cornerRadius,
            id : "innerRect"
        });
        //在内部创建一个outterRect
        this.outterRect = new Konva.Rect({
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            cornerRadius: this.cornerRadius,
            stroke: this.stroke,
            strokeWidth: 3
        });
        //在内部创建一个group,将创建的innerRect和outterRect添加进group里面
        this.group = new Konva.Group();
        this.group.add(this.innerRect);
        this.group.add(this.outterRect);
    },
    //将创建对象时内部创建的group添加到外部创建的layer里面
    addToGroupOrLayer: function (layer) {
        layer.add(this.group);
    },
    //设置进度条的动画,具体可以设置的属性有width duration easing yoyo
    animateTo: function (obj) {
        //如果传入的width<0,则看成进度条前进的百分比,如果1<width<100,则换算成百分比,如果width>100,则按照100计算
        if (obj.width > 1) {
            if (obj.width > 100) {
                obj.width =100;
            }
            obj.width /= 100;
        }
        //通过选择器来选择绘制的innerRect对象
        //var innerRect = this.group.findOne("#innerRect");
        this.innerRect.to({
            width: obj.width * this.width || .5,
            duration: obj.duration || 3,
            easing: obj.easing || Konva.Easings.Linear,
            yoyo : obj.yoyo || false
        });
    }
}