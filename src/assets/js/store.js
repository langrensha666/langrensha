/* eslint-disable */
/**
 * @file: 跨页面/路由数据
 * @Author: maruiqiong
 * @Date:   2016-05-16
 */

let tainfo = {
    'passenger': '张冰冰',
    'identity': '410482198610290519',
    'contact': '张冰冰',
    'phone': '13798097890',
    'taid': '7829372310',
    'id_card_type': 'ID',
    'standard': '3'
};

function getter(key) {
    return tainfo[key];
}

function setter(key, value) {
    tainfo[key] = value;
}

export default {
    getter,
    setter
};
