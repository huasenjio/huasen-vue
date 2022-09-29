/*
 * @Autor: huasenjio
 * @Date: 2021-08-25 01:53:35
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-30 00:15:58
 * @Description: 常量文件
 */

export default {
  // 图片地址
  baseURL: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:3000/' : '/server/',
  // 根节点的最小宽度
  appMinWidth: 435,
};
