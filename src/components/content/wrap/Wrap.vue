<!--
 * @Autor: huasenjio
 * @Date: 2022-07-31 21:51:50
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-29 00:38:35
 * @Description: 页面骨架文件
-->

<template>
  <div class="hs-wrap">
    <WrapLeft></WrapLeft>
    <WrapRight></WrapRight>
  </div>
</template>

<script>
import navs from '@/config/nav.config.js';
import WrapLeft from './left/WrapLeft.vue';
import WrapRight from './right/WrapRight.vue';

export default {
  name: 'HsWrap',
  components: { WrapLeft, WrapRight },
  data() {
    return {
      navs,
    };
  },
};
</script>

<style lang="scss" scoped>
.hs-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
}
</style>
