/*
 * @Autor: huasenjio
 * @Date: 2021-08-25 01:53:35
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-29 00:26:12
 * @Description: 约定请求接口，统一挂载到Vue原型上，方便使用。
 */

// 引入mockjs2
import Mock from 'mockjs2';
// 封装的请求方法
import { get, post } from './request.js';

// mock功能
const mock = get('/mock/test', {
  // 随机5-10个对象的集合
  'persons|5-10': [
    {
      // “花” 随机重复 1-3
      'name|1-3': '花',
      // 随机返回true 或 false
      'status|1': true,
      // 由 1 为底依次递加 1
      'key|+1': 1,
      // 数组中选择其一返回
      'type|1': ['在线', '离线'],
      // 50*50 像素的图片
      'headIcon|': Mock.Random.image('50x50', '#ec7168', '花森'),
      // 随机生成119.36xxxxxx
      'longitude|119.8': 1.36,
      // 随机生成26.03xxxxxx
      'latitude|26.8': 1.03,
    },
  ],
});

export default {};
