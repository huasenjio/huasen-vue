<!--
 * @Autor: huasenjio
 * @Date: 2021-08-25 01:53:35
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-30 00:12:25
 * @Description: 入口文件
-->
<template>
  <div id="app" :style="appStyle">
    <BrowserTips v-if="!isSupport"></BrowserTips>
    <Wrap v-else> </Wrap>
  </div>
</template>

<script>
import Wrap from '@/components/content/wrap/Wrap.vue';
import BrowserTips from '@/components/content/browserTips/BrowserTips.vue';

import { watermark } from '@/plugin/watermark.js';
import { initScaleDocument, destoryScaleDocument } from '@/plugin/scale-document.js';

export default {
  name: 'App',
  components: { Wrap, BrowserTips },
  computed: {
    // 检查浏览器支持
    isSupport() {
      let temp = this.TOOL.judgeIE();
      console.log('浏览器信息：' + temp);
      if (temp === -1 || temp === 'edge') {
        return true;
      } else {
        return false;
      }
    },
    // 设置最小宽度
    appStyle() {
      return {
        minWidth: `${this.CONSTANT.appMinWidth}px`,
      };
    },
  },
  created() {
    // 组件挂载完成后，移除loading
    this.removeLoading();
    // 调整文档大小，避免网站在移动端网页中，无法适应屏幕的问题
    initScaleDocument();
  },
  mounted() {
    // 绘制网站水印
    watermark();
  },
  destroyed() {
    // 移除文档大小的监听
    destoryScaleDocument();
  },
  methods: {
    removeLoading() {
      let loading = document.getElementById('loading-id9527');
      if (loading) {
        document.body.removeChild(loading);
      }
    },
  },
};
</script>

<style lang="scss">
@import url('./assets/css/index.css');
#app {
  position: relative;
  width: 100vw;
  height: 100vh;
}
</style>
