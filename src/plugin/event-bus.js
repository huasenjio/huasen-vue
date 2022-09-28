/*
 * @Autor: huasenjio
 * @Date: 2022-09-26 23:34:05
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-29 00:48:14
 * @Description: 二次封装事件总线
 */

import Vue from 'vue';

class EventBusTool {
  constructor() {
    this.$eventBus = new Vue();
  }
  pubEv(name, data) {
    this.$eventBus.$emit(name, data);
  }
  subEv(name, call) {
    this.$eventBus.$on(name, call);
  }
  subOnceEv(name, call) {
    this.$eventBus.$once(name, call);
  }
  unSubEv(name) {
    this.$eventBus.$off(name);
  }
}

export default new EventBusTool();
