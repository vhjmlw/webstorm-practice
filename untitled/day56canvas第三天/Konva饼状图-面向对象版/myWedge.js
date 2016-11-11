/**
 * Created by zhangjianlei on 2016/11/11.
 */
function MyWedge(option) {
    this._init(option);
}
MyWedge.prototype = {
    _init: function (option) {
        this.x = option.x;
        this.y = option.y;
        this.radius = option.radius;
        this.rotation = option.rotation;
        this.data = option.data;
        this.group = new Konva.Group({
            x: this.x,
            y: this.y,
        });
        //新建wedgeGroup,所有新建的wedge都存放在wedgeGroup里面
        var wedgeGroup = new Konva.Group({
            x: 0,
            y: 0,
        });
        //新建textGroup,所有新建的text都存放在textGroup里面
        var textGroup = new Konva.Group({
            x: 0,
            y: 0,
        });
        this.group.add(wedgeGroup);
        this.group.add(textGroup);
        
        //根据data数组里面的每一项,新建相对应的wedge和text
        var that = this;
        this.data.forEach(function (item,index) {
            //新建扇形
            var wedge = new Konva.Wedge({
                x: 0,
                y: 0,
                radius: that.radius,
                rotation: that.rotation,
                angle: item.value * 360,
                fill: item.color,
            });
            //对应每个扇形新建一个文本
            var myAngle = that.rotation + item.value * 360 / 2;
            var text = new Konva.Text({
                x: (that.radius + 20) * Math.cos(myAngle * Math.PI / 180),
                y: (that.radius + 20) * Math.sin(myAngle * Math.PI / 180),
                text: item.name + item.value*100 + "%",
                fill: item.color,
            });//如果文本所处的角度位于(90-270)则将text的X轴坐标向左移动自身的宽度,以免文本内容距离扇形太近甚至内容重叠
            if (myAngle > 90 && myAngle < 270) {
                text.x(text.x() - text.getWidth());
            }
            
            wedgeGroup.add(wedge);
            textGroup.add(text);
            
            //重新定位扇形结束的线条,让这个扇形结束的线条作为下一个扇形开始的线条
            that.rotation += item.value * 360;
            
        });
    },
    
    //不解释
    addToGroupOrLayer: function (layer) {
        layer.add(this.group);
    },
    
    //扇形执行动画的函数,利用递归实现循环的效果
    myAnimate: function () {
        var index = 0;
        var that = this;
        function animate() {
            //如果index==0,则说明是刚开始,让所有的扇形的angle角度变为0,让所有的text文本隐藏hide()
            if (index == 0) {
                that.group.find("Wedge").each(function (item,index) {
                    item.angle(0);
                });
                that.group.find("Text").each(function (item,index) {
                    item.hide();
                });
            }
            that.group.find("Wedge")[index].to({
                duration: 3 * that.data[index].value,
                angle: that.data[index].value * 360,
                //回调函数,当前扇形的to()动画执行完毕的时候调用的函数,
                // 当当前扇形的动画执行完毕的时候,让与其相对应的text文本内容显示show(),同时index自增1,进入下一个递归
                onFinish: function () {
                    that.group.find("Text")[index].show();
                    index++;
                    //递归跳出的条件判断,当满足条件的时候,index冲值为0,同时跳出函数
                    if (index >= that.data.length) {
                        index = 0;
                        return;
                    }
                    animate();//递归
                }
            });
        }
        animate();//记得一定要主动调用函数,否则动画只有声明没有调用
    }
}