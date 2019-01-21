(function(global, factory){

})(typeof window !== "undefined" ? window : this, function (window, noGlobal){
    //-----------变量声明--------------
    var arr = [];
    var document = window.document;
    var getProto = Object.getPrototypeOf;

    //-----------jQuery对象------------
    var jQuery = function(selector, context){
        //调用原型方法
        return new jQuery.fn.init(selector, context);
    }
    jQuery.fn = jQuery.prototype = {
        
    }

    //----------jQuery扩展函数----------
    jQuery.extend = jQuery.fn.extend = function(){
        
    }
})