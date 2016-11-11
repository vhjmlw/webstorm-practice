// 场景类
function ItcastScene( options ) {
    // 场景所属的舞台
    this.stage = options.stage;

    //执行场景的初始化
    this.init = options.init || ItcastScene.voidFn;

    //执行场景的进场动画
    this.pre = options.pre || ItcastScene.voidFn;


    //执行场景的出场动画
    this.post = options.post || ItcastScene.voidFn;

    //当前场景的所有的层
    this.layers = options.layers || [new Konva.Layer()];

    this.name = options.name || '';

    this.init();
}

ItcastScene.prototype = {
	constructor: ItcastScene,
	voidFn: function() {},
    //当前场景
	CurrentScence: null,
	//场景要进入舞台，只需要调用场景的 play方法。
	play: function () {
        var self = this;
                // doPre,
	    var doPre = function doPre() {
            // 把当前场景中的所有的层添加到舞台
            self.layers.forEach(function( val ){
                self.stage.add( val );
            });
            //设置当前场景为 this
            ItcastScene.currentScene = self;
            //执行当前场景的入场动画
            self.pre();
        };

        //如果不是第一个场景，先执行当前场景的出场动画，
        //然后执行下一个场景的入场动画
        //需要在场景的post方法中执行传进去的 next 方法。
        if (ItcastScene.currentScene) {
            //执行上一个场景的出场动画
            ItcastScene.currentScene.post(doPre);
        } else {
            //如果是第一个场景直接执行入场动画
            doPre();
        }
    }// play
};
