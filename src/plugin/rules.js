/*
 * @Autor: huasenjio
 * @Date: 2022-09-06 01:15:28
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-29 01:02:01
 * @Description: element登陆相关的校验
 */

import { checkParamsByRules } from '@/plugin/strategy.js';

const checkId = (rule, value, callback) => {
  check(
    [
      {
        strategy: 'isNoEmpty',
        errMsg: '必填项',
      },
      {
        strategy: 'minLength:5',
        errMsg: '邮箱长度不能小于5',
      },
      {
        strategy: 'maxLength:20',
        errMsg: '邮箱长度不能大于20',
      },
      {
        strategy: 'isEmail',
        errMsg: '请输入邮箱登陆',
      },
    ],
    value,
    callback,
  );
};

// 定义校验策略，减少代码冗余
function check(rules, value, callback) {
  let errText = checkParamsByRules([
    {
      value,
      rules,
    },
  ]);
  // 存在错误
  if (errText) {
    callback(new Error(errText));
  } else {
    callback();
  }
}

export { checkId };
