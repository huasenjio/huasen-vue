/**
 * 生成范围内的随机数
 * @param {Number} start 开始位置 例如：0
 * @param {Number} end   结束为止 例如：10
 * @returns {Number} 0-10之间的随机数
 */
export function randomInt(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}
