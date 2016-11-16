/**
 * Created by zhangjianlei on 2016/11/12.
 */
function Product() {
    this.imgSrc = "";
    this.discount = "";
    this.brand = "";
    this.price = "";
    this.originPrice = "";
    this.sales = "";
}
Product.prototype = {
    bindDOM: function () {
        var str = '';
        str += '<dl>'
            str += '<dt><a href="javascript:;"><img src="'+this.imgSrc+'" width="384" height="225" /></a></dt>'
            str += '<dd> <span> <a href="javascript:;"> <em>'+this.discount+'折/</em>'+this.brand+'</a></span></dd>'
            str += '<dd class="price"> <em>?'+this.price+'</em> <del>?'+this.originPrice+'</del> <i>销量：'+this.sales+'</i></dd>'
        str += '</dl>'
        return str;
    }
}