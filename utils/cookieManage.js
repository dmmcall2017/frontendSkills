/**
 * Cookie增删改查
 */
let cookieManagement = {
    /**
     * 设置cookie
     * @param name cookie名称
     * @param value cookie值
     * @param day 有效期
     */
    setCookie(name, value, day) {
        if(day !== 0) {
            let expires = day*24*60*60*1000;//有效期
            let date = new Date(+new Date()+expires);
            document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + date.toUTCString();
        }else {
            document.cookie = name + "=" + encodeURIComponent(value);
        }
    },

    //获取cookie
    getCookie(name) {
        let arr = document.cookie.split(";");
        for(let i=0,len = arr.length; i<len; i++) {
            if(arr[i].indexOf(name) > -1) {
                return decodeURIComponent(arr[i].trim()).split("=")[1];
            }
        }
        return null;
    },

    //删除cookie（修改过期时间）
    delCookie(name) {
        this.setCookie(name, ' ', -1);
    }
}