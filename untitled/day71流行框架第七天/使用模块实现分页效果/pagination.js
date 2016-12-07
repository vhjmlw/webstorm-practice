/**
 * Created by zhangjianlei on 2016/12/8.
 */
define(function (require,exports,module) {
    //自定义一个Pagination类,将初始化分页数据的操作封装在构造函数中
    //将DOM操作实现分页效果封装在原型对象中
    function Pagination(current,show,total) {
        this.current = current;
        this.show = show;
        this.total = total;
        /*var current = 14;//当前选中的页数
        var show = 5;//每次显示的页数
        var total = 30;//总页数*/
        var region = parseInt(show / 2);//中间页两边的页数
        var begin = current - region;
        begin = begin < 1 ? 1 : begin;//对开始页数进行校验,如果小于1则重置为1
        var end = begin + show;
        end = end > total ? total + 1 : end;//对结束页数进行校验,如果大于总页数,则重置为总页数+1
        begin = (end - show) < 1 ? 1 : (end - show);//结束页数被重置后,开始页数也要被重置,并进行校验.
        this.begin = begin;
        this.end = end;
    }
    Pagination.prototype.render = function (container) {
        if (typeof container === "string") {
            var containers = window.document.querySelectorAll(container);
        }
        if (container.length === undefined) {
            var containers = [container];
        }
        for (var m = 0; m < containers.length; m++) {
            var ul = containers[m];
            ////////////创建上一页按钮///////////
            var liLeft = window.document.createElement("li");
            liLeft.innerHTML = '<a href="?page='+(this.current - 1)+'" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>';
            //当选中第一页的时候,给上一页按钮添加disabled类,禁止点击上一页按钮
            if (this.current === 1) {
                liLeft.classList.add("disabled");
            }
            ul.appendChild(liLeft);

            //////////////创建中间页数按钮///////////
            for (var i = this.begin; i < this.end; i++) {
                var li = window.document.createElement("li");
                li.innerHTML = '<a href="?page='+i+'">' + i + '</a>';
                //给当前被选中的按钮添加active类
                if (this.current === i) {
                    li.classList.add("active");
                }
                ul.appendChild(li);
            }

            //////////////创建下一页按钮/////////////
            var liRight = window.document.createElement("li");
            liRight.innerHTML = '<a href="?page='+(this.current + 1)+'" aria-label="Next"><span aria-hidden="true">&raquo;</span></a>';
            //当选中最后一页的时候,给下一页按钮添加disabled类,禁止点击下一页按钮
            if (this.current === this.total) {
                liRight.classList.add("disabled");
            }
            ul.appendChild(liRight);
        }
    }
    module.exports = Pagination;
});