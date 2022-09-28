/*
 * @Autor: huasenjio
 * @Date: 2022-09-03 17:19:18
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-29 00:49:43
 * @Description: 全局过滤器
 */

import Vue from 'vue';

// 空提示
Vue.filter('emptyTips', function(value) {
  if (value === '' || value === undefined || value === null) {
    return '--';
  } else {
    return value;
  }
});
