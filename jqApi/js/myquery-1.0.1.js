/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-12-04
 */
//匿名函数，立即执行
(function( global, factory ) {
    if(typeof module === "object" && typeof module.exports === "object"){
        module.exports = global.document ? 
            factory(global, true) : 
            function( w ) {
                if( !w.document ) {
                    throw new Error( "jQuery requires a window with a document" );
                }
                return factory( w );
            };
    } else {
        factory( global );
    }
//如果window未定义，传this作为参数
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
    
});