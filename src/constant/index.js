/*
 * @Autor: huasenjio
 * @Date: 2021-08-25 01:53:35
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-29 01:03:16
 * @Description: 常量文件
 */

export default {
  // 图片地址
  baseURL: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:3000/' : '/server/',
  // Vue的根节点App的最小宽度
  appMinWidth: 435,
};
