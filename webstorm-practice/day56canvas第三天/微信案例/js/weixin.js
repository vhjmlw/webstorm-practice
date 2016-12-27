var stage = new Konva.Stage({
	container: 'container',
	width: window.innerWidth,//全屏
	height: window.innerHeight
});

// 总的思路：
//上滑：  让索引+1， 执行sceneBuilders数组中下一个场景的play（）
//下滑：  让索引-1， 执行sceneBuilders数组中下一个场景的play（）

// 场景的构造器
var sceneBuilders = [ builderHtml5Scene, builderC3Scene, builderDemoScene ];

//当前场景的执行的索引
var sceneIndex = 0;

//上来之后执行第一个场景
sceneBuilders[0]().play();

//构造h5的场景
function builderHtml5Scene() {
	var bgLayer = new Konva.Layer();
	var animateLayer = new Konva.Layer();
	var lightLayer = new Konva.Layer();

	var rect = new Konva.Rect({
		x: -100,
		y: -100,
		fill: 'red',
		width: 100,
		height: 100
	});


	return new ItcastScene({
		name: '场景1',
		layers: [bgLayer, animateLayer, lightLayer], //最后的层放到最上面
		stage: stage,
		init: function() {
			//初始化场景中的所有形状
			animateLayer.add(rect);
			this.layers.forEach(function(layer) {
				layer.draw();
			});
		},
		pre: function() {
			rect.to({
				x: 100,
				y: 100,
				duration: 1,
				scaleX: 2,
				scaleY: 2,
				opacity: .4
			});
		},
		post: function( dopre ) {
			var self = this;
			rect.to({
				x: -100,
				y: -100,
				duration: 1,
				scaleX: 2,
				scaleY: 2,
				opacity: .4,
				onFinish: function() {
					self.layers.forEach(function(item) {
						item.destroy();//把所有层销毁
					});
					dopre(); //必须执行next方法，执行下一个场景的初始化和入场动画
				}
			});
		}
	});
}

//构造c3的场景
function builderC3Scene() {
	var bgLayer = new Konva.Layer();
	var animateLayer = new Konva.Layer();
	var lightLayer = new Konva.Layer();

	var rect = new Konva.Rect({
		x: -100,
		y: -100,
		fill: 'green',
		width: 100,
		height: 100
	});

	//柱状图的数据
		var data = [
			{ name: '前端', value: '.8', color: 'green'},
			{ name: 'PHP', value: '.3', color: 'blue'},
			{ name: 'Java', value: '.7', color: 'red'},
			{ name: 'UI', value: '.9', color: 'orange'},
			{ name: 'IOS', value: '.4', color: 'purple'},
			{ name: 'Android', value: '.9', color: 'pink'}
		];


		var h  = new HistogramChart({
			x: 1/8 * stage.width(),
			y: 3/4 * stage.height(),
			w: 3/4 * stage.width(),
			h: 1/2 * stage.height(),
			data: data
		});




	return new ItcastScene({
		name: '场景2',
		layers: [bgLayer, animateLayer, lightLayer], //最后的层放到最上面
		stage: stage,
		init: function() {
			//初始化场景中的所有形状
			animateLayer.add(rect);
			h.addToGroupOrLayer( animateLayer );

			this.layers.forEach(function(layer) {
				layer.draw();
			});


		},
		pre: function() {
			rect.to({
				x: 100,
				y: 100,
				duration: 1,
				scaleX: 2,
				scaleY: 2,
				opacity: .4,
				yoyo: true
			});

			h.playAnimate();
		},
		post: function( dopre ) {
			this.layers.forEach(function(item) {
				item.destroy();
			});
			dopre(); //必须执行next方法，执行下一个场景的初始化和入场动画
		}
	});
}

//构造demo的场景
function builderDemoScene() {
	return new ItcastScene({
	});
}

//给舞台添加 上滑动，和下滑动的事件
function addStageEvent() {
	var startY  = 0;
	var endY = 0;
	stage.on('contentMousedown contentTouchstart', function( e ) {
		if( e.type == 'contentMousedown' ) {
			// console.log(e.evt.screenX + ' ' +  e.evt.screenY);
			startY = e.evt.screenY;

		}else if( e.type == 'contentTouchstart'){
			// console.log(e.evt.touches[0].screenX + ' ' + e.evt.touches[0].screenY);
			startY = e.evt.touches[0].screenY;
		}
		// console.log(e);
	});

	stage.on('contentMousemove contentTouchmove', function( e ) {
		if( e.type == 'contentMousemove' ) {
			// console.log(e.evt.screenX + ' ' +  e.evt.screenY);
			endY = e.evt.screenY;
		}else if( e.type == 'contentTouchmove') {
			// console.log(e.evt.touches[0].screenX + ' ' + e.evt.touches[0].screenY);
			endY = e.evt.touches[0].screenY;
		}
		// console.log(e);
	});

	stage.on('contentMouseup contentTouchend', function( e ) {
		if( endY > startY ) {
			//把当前执行场景的索引-1
			//下滑动 执行上一个场景 的play()
			sceneIndex = sceneIndex <= 0 ? 0 : sceneIndex -1;
		}else {
			//执行下一个场景的 play();
			//把当前执行场景的索引 +1
			// 0 1 2    1 2   length=3
			sceneIndex = sceneIndex >= sceneBuilders.length-1 ? sceneBuilders.length-1 : sceneIndex +1;
		}

		sceneBuilders[ sceneIndex ]().play();
	});
}

//给舞台添加滑动的事件
addStageEvent();