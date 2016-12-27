/**
 * Created by jiaoshou on 2016/1/20.
 */
//创建xhr的过程封装
function createXHR() {
    var xhr = null;
    if (XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }else{
        xhr = ActiveXObject("Microsoft.XMLHTTP");
    }
    return xhr;
}

//把异步请求封装
function ajax(type, url, data, async, success, error) {
    var xhr = createXHR();
    type = type == "get"?"get":"post";
    async = async ? true : false;


    xhr.open(type, url, async);
    //3 注册状态发生改变的时间
    if (type == "post") {
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 ){
            if(xhr.status == 200) {
                //获取服务器的数据
                var data = xhr.responseText;
                //成功的回调
                success(data);
            }else{
                //服务器出错
                error();
            }
        }
    }
    //4 发送请求
    xhr.send(data);
}


//传过来的data的样子
//data = {"type":"get","url":"",data:null,async:true,fn,fn};
function ajax2(data) {

    var type,url,async,xhr;
    xhr = createXHR();
    type = data.type == "get"? "get":"post";
    if (data.url) {
        url = data.url;
    }
    async = data.async? true: false;

    xhr.open(type, url, async);
    //3 注册状态发生改变的时间
    if (type == "post") {
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 ){
            if(xhr.status == 200) {
                //获取服务器的数据
                var response = xhr.responseText;
                //成功的回调
                if (typeof data.success == "function") {
                    data.success(response);
                }
            }else{
                //服务器出错
                if (typeof data.error == "function") {
                    data.error();

                }
            }
        }
    }
    //4 发送请求
    xhr.send(data.data);
}
