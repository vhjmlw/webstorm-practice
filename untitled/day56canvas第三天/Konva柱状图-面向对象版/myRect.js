/**
 * Created by zhangjianlei on 2016/11/11.
 */
function MyRect(option) {
    this._init(option);
}
MyRect.prototype = {
    _init: function (option) {
        this.x = option.x;
        this.y = option.y;
        this.width = option.width;//这里的width指的是整个柱状图所占的宽度
        this.height = option.height;//这里的height指的是所有矩形的高度加在一起的总和
        this.data = option.data;
        this.group = new Konva.Group();
        var per = window.innerWidth * 6 / 8 / this.data.length;
        //新建一条底线,将底线添加到group当中
        var line = new Konva.Line({
            points: [this.x, this.y, this.x + this.width, this.y],
            stroke: "skyblue",
            strokeWidth: 3,
        });
        this.group.add(line);
        
        //所有的矩形都存放在rectGroup当中,所有的顶部文字都存放在textGroup当中
        var rectGroup = new Konva.Group();
        var textGroup = new Konva.Group();
        this.group.add(rectGroup);
        this.group.add(textGroup);
        
        
        var that = this;
        this.data.forEach(function (item, index) {
            //新建一个矩形,将矩形存放在rectGroup当中
            var rect = new Konva.Rect({
                x: that.x + (1 / 4 + index) * per,
                y: that.y - item.value * that.height,
                width: per / 2,
                height: item.value * that.height,
                fill: item.color,
                cornerRadius: 5,
            });
            rectGroup.add(rect);
            
            //新建一个矩形顶部的文本,将文本存放在textGroup当中
            var topText = new Konva.Text({
                x: that.x + index * per,
                y: that.y - item.value * that.height - 15,
                width: per,
                fontSize: 15,
                fill: item.color,
                align: "center",
                text: item.value * 100 + "%",
                name: "textGroup"//为了便于以后查找,故给每个bottomText添加一个类,方便以后通过类名选择器来查找
            });
            textGroup.add(topText);
            
            //新建一个矩形底部的文本,将文本直接存放在group当中
            var bottomText = new Konva.Text({
                x: that.x + (1 / 2 + index) * per,
                y: that.y,
                fontSize: 15,
                fill:item.color,
                text:item.name,
                rotation: 30,
            });
            that.group.add(bottomText);
        });

    },
    
    addToGroupOrLayer: function (layer) {
          layer.add(this.group);
    },
    
    myAnimate: function () {
        var that = this;
        //通过标签选择器来选择Rect标签的矩形,给一个举行设置动画
        this.group.find("Rect").each(function (item,index) {
            item.y(that.y);
            item.height(0);
            item.to({
                y: that.y - that.data[index].value * that.height,
                height: that.data[index].value * that.height,
                duration: 3,
                easing: Konva.Easings.BounceEaseInOut,
                yoyo: false,
            });
        });
        //通过类名选择器来查找textGroup类名的topText文本内容
        this.group.find(".textGroup").each(function (item,index) {
            item.y(that.y - 15);
            item.to({
                y: that.y - that.data[index].value * that.height -15,
                duration: 3,
                easing: Konva.Easings.BounceEaseInOut,
                yoyo: false,
            });
        });
    }
}