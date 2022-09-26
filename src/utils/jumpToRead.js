/*
 * @Autor: huasenjio
 * @Date: 2022-04-16 13:20:47
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-04-16 15:25:07
 * @Description: 携带文章的_id，跳转至阅读页面
 */

export function jumpToRead(_vm, _id) {
  _vm.$router.push({ path: `/read/${_id}` });
}