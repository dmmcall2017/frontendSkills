export default {
    methods: {
        /**
         * 设置cookie
         * @param cname
         * @param cvalue
         * @param exdays
         */
        $setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toGMTString();
            document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/;";
        },
        /**
         * 读取cookie
         * @param cname
         * @returns {*}
         */
        $getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i].trim();
                if (c.indexOf(name) === 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return null;
        },
        /**
         * 获取地址栏参数
         * @param name
         * @returns {*}
         */
        $getQueryString(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return decodeURIComponent(r[2]);
            return null;
        },
        /**
         * 图片转base64
         * @param imgUrlArr (url数组)
         */
        $getImgToBase64(imgUrlArr) {
            let count = 0;// 已完成渲染数
            var arr = [];
            imgUrlArr.map((item, index) => {
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                var img = new Image();
                img.setAttribute('crossOrigin', 'anonymous');
                img.onload = function () {
                    canvas.height = img.height;
                    canvas.width = img.width;
                    ctx.drawImage(img, 0, 0);
                    arr[index] = canvas.toDataURL('image/png');
                    count++;
                    if (count === imgUrlArr.length) {
                        return arr;
                    }
                };
                img.onerror = function () {
                    arr[index] = '';
                    count++;
                    if (count === imgUrlArr.length) {
                        return imgUrlArr;
                    }
                };
                img.src = item;
            });
        },
        /**
         * 获取随机数(整数)(结果包括最小值、不包含最大值)
         * @param min (最小值)
         * @param max (最大值)
         * @returns {number}
         */
        $getRand(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }
    }
}
