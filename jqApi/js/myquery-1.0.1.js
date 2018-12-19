/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Author: JaniceDongMM
 * Email: 1213198891@qq.com
 *
 * Date: 2018-12-04
 */
//匿名函数，立即执行,独立作用域
(function (global, factory) {
    /**
     * 判断当前的运行环境
     * 1、浏览器换环境：生成jQuery对象，作为window对象的属性
     * 2、CommonJS环境：模拟一个类似window的全局对象，然后赋给module.exports
     */


    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ?
            factory(global, true) :
            function (w) {
                if (!w.document) {
                    throw new Error("jQuery requires a window with a document");
                }
                return factory(w);
            };
    } else {
        factory(global);
    }
    //如果window未定义，传this作为参数
})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
    var arr = [],

        support = {},
        document = window.document,
        slice = [].slice
        // https://zhuanlan.zhihu.com/p/21403405
        //扩展js本身的typeof（如获取Object类型的具体类型值）
        class2type = {};

    var isFunction = function isFunction ( obj ) {
        return typeof obj === "function" && typeof obj.nodeType !== "number";
    }

    //["window","top","self","parent"]
    var isWindow = function isWindow( obj ) {
        return obj != null && obj === obj.window;
    }

    function toType(obj) {
		if (obj == null) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[toString.call(obj)] || "object" :
			typeof obj;
	}


    var version = "1.0.1",
        jQuery = function (selector, context) {
            //初始化jQuery对象的构造器
            return new jQuery.fn.init(selector, context);
        };
    jQuery.fn = jQuery.prototype = {
        //当前版本号
        jquery: version,
        //new fn() 默认生成constructor，指向jQUery，prototype被覆盖，constructor就会被改变，要重新修正
        constructor: jQuery,
        //定义length属性，便于转化为类数组
        /**
         * 对象转换为数组的条件：
         *  length属性；
         *  key值必须为数字或者数字字符串
         */
        length: 0,
        toArray: function () {
            return slice.call(this);
        }
    }
    //jQuery和jQuery.fn上的扩展函数
    //拷贝继承
    /**
     * js继承方式
     */
    jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone,
            target = arguments[ 0 ] || {},
            i = 1,
            length = arguments.length,
            deep = false;
    
        // Handle a deep copy situation
        if ( typeof target === "boolean" ) {
            deep = target;
    
            // Skip the boolean and the target
            target = arguments[ i ] || {};
            i++;
        }
    
        // Handle case when target is a string or something (possible in deep copy)
        if ( typeof target !== "object" && !isFunction( target ) ) {
            target = {};
        }
    
        // Extend jQuery itself if only one argument is passed
        if ( i === length ) {
            target = this;
            i--;
        }
    
        for ( ; i < length; i++ ) {
    
            // Only deal with non-null/undefined values
            if ( ( options = arguments[ i ] ) != null ) {
    
                // Extend the base object
                for ( name in options ) {
                    src = target[ name ];
                    copy = options[ name ];
    
                    // Prevent never-ending loop
                    if ( target === copy ) {
                        continue;
                    }
    
                    // Recurse if we're merging plain objects or arrays
                    if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
                        ( copyIsArray = Array.isArray( copy ) ) ) ) {
    
                        if ( copyIsArray ) {
                            copyIsArray = false;
                            clone = src && Array.isArray( src ) ? src : [];
    
                        } else {
                            clone = src && jQuery.isPlainObject( src ) ? src : {};
                        }
    
                        // Never move original objects, clone them
                        target[ name ] = jQuery.extend( deep, clone, copy );
    
                    // Don't bring in undefined values
                    } else if ( copy !== undefined ) {
                        target[ name ] = copy;
                    }
                }
            }
        }
    
        // Return the modified object
        return target;
    };

    jQuery.extend({
        //简单的数组拼接，第二个可以是类数组类型（key是数字或数字字符串，必须有length属性）
        merge: function( first, second ) {
            var len = second.length,
                i = first.length,
                j = 0;

            for( ; j < len; j++ ){
                first[i++] = second[j];
            }
            first.length = i;
            return first;
        }
    })

    function isArrayLike(obj) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = toType(obj);

		if (isFunction(obj) || isWindow(obj)) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && (length - 1) in obj;
	}

    support.createHTMLDocument = (function () {
        var body = document.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
    })();


    jQuery.parseHTML = function (data, context, keepScripts) {
        if (typeof data !== "string") {
            return [];
        }
        if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
        }

        var base, parsed, scripts;

        if (!context) {
            if (support.createHTMLDocument) {
                context = document.implementation.createHTMLDocument("");

                // Set the base href for the created document
                // so any parsed elements with URLs
                // are based on the document's URL (gh-2965)
                base = context.createElement("base");
                base.href = document.location.href;
                context.head.appendChild(base);
            } else {
                context = document;
            }
        }

    }

    


    //初始化jQuery对象
    var rootjQuery,
        //正则：安全校验（#id和html标签） 防止通过url的hash进行XSS攻击
        //正则返回结果，数组第一个值是第一个匹配的结果，之后每一个括号匹配一次
        rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

        init = jQuery.fn.init = function (selector, context, root) {
            var match, elem;
            //如果选择器是字符串
            if (typeof selector === "string") {
                if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
                    match = [null, selector, null];
                } else {
                    match = rquickExpr.exec(selector);
                }
                if (match && (match[1] || !context)) {
                    
                    if (match[1]) {//匹配html Tag
                        
                    } else {
                        elem = document.getElementById(match[2]);
                        if (elem) {//把dom添加到jQuery对象上，length+1;
                            this[0] = elem;
                            this.length = 1;
                        }
                        return jQuery.merge([],this);
                    }
                }
            }
        }

    init.prototype = jQuery.fn;
    if (!noGlobal) {
        window.jQuery = window.$ = jQuery;
    }
});