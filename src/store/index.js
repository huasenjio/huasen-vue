/*
 * @Autor: huasenjio
 * @Date: 2022-09-26 23:34:05
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-29 01:44:38
 * @Description: vuex
 */

import Vue from 'vue';
import Vuex from 'vuex';

import state from './state/state';
import mutations from './mutations/mutations';
import actions from './actions/actions';
import modules from './modules/module';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
});
