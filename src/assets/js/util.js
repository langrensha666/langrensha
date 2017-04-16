/*eslint-disable*/
/**
 * @file: 公用方法
 * @Author: maruiqiong
 * @Date:   2016-05-14
 * @用法: import Util from '../assets/js/util.js';
 *        Util.getFestival(month,day);
 */

export default {
    /**
     * 获取节假日
     *
     * @param {int} month
     * @param {int} day of month
     * @return {string} festival of Gregorian calendar
     */
    //
    getFestival: function (month, day) {
        var text = day;
        if (parseInt(month, 10) < 10) {
            month = '0' + month;
        }
        if (parseInt(day, 10) < 10) {
            day = '0' + day;
        }
        var key = month + '' + day;
        var festival = [{
            date: '0101',
            text: '元旦'
        }, {
            date: '0214',
            text: '情人节'
        }, {
            date: '0308',
            text: '妇女节'
        }, {
            date: '0401',
            text: '愚人节'
        }, {
            date: '0501',
            text: '劳动节'
        }, {
            date: '0601',
            text: '儿童节'
        }, {
            date: '0701',
            text: '建党节'
        }, {
            date: '0801',
            text: '建军节'
        }, {
            date: '0910',
            text: '教师节'
        }, {
            date: '1001',
            text: '国庆节'
        }, {
            date: '1225',
            text: '圣诞节'
        }];
        for (var i = 0; i < festival.length; i++) {
            if (festival[i].date === key) {
                text = festival[i].text;
            }
        }
        return text;
    },
    /**
     * startDay
     *
     * @param {object} date startdate是日期
     * @param date 传入当前日期日期对象
     * @return {number} 返回日期的周几和今天和明天
     */
    startDay: function (date, startdate) {
        let starDay = '';
        let weekDays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
        let now = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        let select = new Date(startdate.year, startdate.month - 1, startdate.day);
        let delta = select.getTime() - now.getTime();
        if (delta === 0) {
            starDay = '今天';
        } else if (delta === (24 * 60 * 60 * 1000)) {
            starDay = '明天';
        } else if (delta === (2 * 24 * 60 * 60 * 1000)) {
            starDay = '后天';
        } else {
            starDay = weekDays[startdate.week];
        }
        return starDay;
    },
    /**
     * tomorowDay
     *
     * @param {object} 时间戳
     * @return {number} 返回日期的周几和今天和明天
     */
    tomorowDay: function (time) {
        let starDay = '';
        let weekDays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
        let delta = time - new Date().getTime();
        if (delta === 0) {
            starDay = '今天';
        } else if (delta === (24 * 60 * 60 * 1000)) {
            starDay = '明天';
        } else if (delta === (2 * 24 * 60 * 60 * 1000)) {
            starDay = '后天';
        } else {
            starDay = weekDays[new Date(time).getDay()];
        }
        return starDay;
    },
    /**
     * getFloorPrice
     *
     * @param {Array} prices 九十天底价数组
     * @param {Date} date 传入日期对象
     * @return {number} 返回传入日期的底价，不在九十天范围内返回空串
     */
    getFloorPrice: function (prices, date) {
        var curDate = new Date();
        var now = new Date(parseInt(curDate.getFullYear(), 10), parseInt(curDate.getMonth(), 10),
            parseInt(curDate.getDate(), 10));
        // console.log('curDate=' + now.getTime() + 'date=' + date.getTime());
        var deltaTime = date.getTime() - now.getTime();
        // console.log('deltaTime=' + deltaTime);
        var price = '';
        var days;
        if (deltaTime >= 0) {
            days = parseInt(deltaTime / (24 * 60 * 60 * 1000), 10);
        }

        if (days >= 0 && days < 90) {
            // console.log(days);
            if (prices && prices.length === 90 && prices[days].price > 0) {
                price = prices[days].price;
            }
        }
        return price;
    },

    /**
     * 由时间戳变为2 23 周二 显示形式
     *
     * @param {Date} date 时间戳格式的时间
     * @return {string} 如 2 23 周二 2016
     */
    obtainDateNum: function (date) {
        var dateStr = '';
        var d = new Date(date);
        dateStr += d.getMonth() + 1;
        dateStr += ' ' + d.getDate();
        var dayArr = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
        dateStr += ' ' + dayArr[d.getDay()];
        dateStr += ' ' + d.getFullYear();

        return dateStr;
    },
    /**
     * 由时间戳变为2月23日 周二 显示形式
     *
     * @param {Date} date 时间戳格式的时间
     * @return {string} 如 2月23日 周二
     */
    changetoDateString: function (date) {
        var dateStr = '';
        var d = new Date(date);
        dateStr += d.getMonth() + 1;
        dateStr += '月';
        dateStr += d.getDate();
        dateStr += '日 ';

        var dayArr = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
        dateStr += dayArr[d.getDay()];

        return dateStr;
    },

    /**
     * 由时间戳变为02-23 周二 显示形式
     *
     * @param {Date} date 时间戳格式的时间
     * @return {string} 如 02-23 周二
     */
    changetoDateNum: function (date) {
        var dateStr = '';
        var d = new Date(date);
        if (d.getMonth() + 1 < 10) {
            dateStr += '0';
        }
        dateStr += d.getMonth() + 1;
        dateStr += '-';
        if (d.getDate() < 10) {
            dateStr += '0';
        }
        dateStr += d.getDate();
        dateStr += ' ';

        var dayArr = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
        dateStr += dayArr[d.getDay()];

        return dateStr;
    },
    /**
     * 由时间戳变为2016-06-01 显示形式
     *
     * @param {Date} date 时间戳格式的时间
     * @return {string} 如 2016-06-01
     */
    changetoFullDate: function (date) {

        let year = new Date(date).getFullYear();
        let month = new Date(date).getMonth() + 1;
        let day = new Date(date).getDate();
        let time = year + '-' + fillTwo(month) + '-' + fillTwo(day);

        function fillTwo(num) {
            if (num < 10) {
                num = '0' + num;
            }
            return num;
        }
        return time;
    },
    /* 
     * 计算时间跨度，返回天数
     *  
     */
    getTotalDays: function (startY, startM, startD, endY, endM, endD) {
        let start = +new Date(startY, startM, startD);
        let end = +new Date(endY, endM, endD);
        return Math.floor((end - start) / (1000 * 60 * 60 * 24));
    },
    /*新加计算时间，返回天数*/
    getIntvelDays: function (startY, startM, startD, endY, endM, endD) {
        let start = new Date(startY+ '/' + startM + '/' + startD).getTime();
        let end = new Date(endY + '/' + endM + '/' + endD).getTime();
        return Math.floor((end - start) / (1000 * 60 * 60 * 24));
    },
    /* 
     * 检测对象是否是空对象(不包含任何可读属性)。 
     * 方法既检测对象本身的属性，也检测从原型继承的属性(因此没有使hasOwnProperty)。 
     */
    isEmptyObject: function (obj) {
        for (var name in obj) {
            return false;
        }
        return true;
    },
    dayTwo(num) {
        if (num < 10) {
            num = '0' + num;
        }
        return num;
    }

};
