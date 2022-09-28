/*
 * @Autor: huasenjio
 * @Date: 2021-08-25 01:53:35
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-29 00:47:40
 * @Description: 注册全局指令
 */

import Vue from 'vue';
import store from '@/store/index.js';
import router from '@/router/index.js';
import RightMenu from '@/components/content/rightMenu/RightMenu.vue';

import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';

// 右键菜单
Vue.directive('rightMenu', function(el, binding) {
  // 解析参数
  let bindingData = binding.value;
  let { id, menuId, cpn } = bindingData;
  el.id = id;
  // 注册监听事件
  el.addEventListener('contextmenu', e => {
    // 屏蔽移动端
    if ('ontouchstart' in document.documentElement) return false;

    // 阻止默认事件
    e.preventDefault();
    e.stopPropagation();
    // 移除选中效果
    handleRightMenuShadow();
    el.classList.add('hs-right-menu-shadow');

    // 传递默认参数
    menuId = menuId || 'right-menu-id9527';

    // 移除旧的菜单面板
    let node = document.getElementById(menuId);
    if (node) {
      document.body.removeChild(node);
    }
    // 生成挂载节点
    let dom = document.createElement('div');
    let MenuCreate = Vue.extend({
      // 解析模版
      template: `<RightMenu :menuId="menuId" :clientX="clientX" :clientY="clientY"><cpn :bindingData="bindingData"></cpn></RightMenu>`,
      // 定义响应式数据
      data: function() {
        return {
          menuId: menuId,
          clientX: e.clientX,
          clientY: e.clientY,
          bindingData: bindingData,
        };
      },
      // 注册组件
      components: {
        RightMenu,
        cpn,
      },
      // 挂载仓库实例
      store,
      // 挂载路由实例
      router,
    });
    // 创建Vue实例
    let Menu = new MenuCreate().$mount(dom);
    // 加入到文档流中
    document.body.appendChild(Menu.$el);
  });

  // 菜单外任意位置隐藏菜单
  document.addEventListener('click', event => {
    // 兼容safari和火狐浏览器不存在path情况
    let domPath = event.path || (event.composedPath && event.composedPath()) || [];
    // 一真则真
    let inPath = [...domPath].some(el => {
      return el.id === menuId;
    });
    let menuDOM = document.getElementById(menuId);
    if (!inPath && menuDOM) {
      // 移除特效
      handleRightMenuShadow();
      // 移除菜单面板
      document.body.removeChild(menuDOM);
    }
  });
});

// 移除选中菜单效果
function handleRightMenuShadow() {
  let effectDoms = document.getElementsByClassName('hs-right-menu-shadow');
  for (let i = 0; i < effectDoms.length; i++) {
    effectDoms[i].classList.remove('hs-right-menu-shadow');
  }
}

// markdown代码高亮
Vue.directive('highlight', function(el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach(block => {
    hljs.highlightBlock(block);
  });
});

// 自动获取焦点指令
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中会获得焦点
  inserted: function(el) {
    // 聚焦元素
    el.focus();
  },
});

// 生成随机背景指令
Vue.directive('randomColor', function(el) {
  let colors = ['#fd7e14', '#ffc107', '#33b86c', '#007bff', '#17a2b8', '#e83e8c'];
  let tempIndex = Math.floor(Math.random() * colors.length);
  el.style.backgroundColor = colors[tempIndex];
});

// 子元素依靠排队容器指令
Vue.directive('balance', {
  inserted: function(el) {
    el.style.display = 'flex';
    el.style.flexWrap = 'wrap';
    if (el.childElementCount != 0) {
      handleBalance(el);
    }
    addresize(el, handleBalance);
  },
  componentUpdated(el) {
    handleBalance(el);
  },
});

// 根据可视窗口缩放大小指令
Vue.directive('autoScale', {
  inserted: function(el) {
    el.style.transformOrigin = 'left top';
    // 执行立即缩放
    handleScale(el);
    // 增加缩放监听
    addresize(el, handleScale);
  },
  componentUpdated(el) {
    // 组件更新时缩放
    handleScale(el);
  },
});

// 拖拽指令
Vue.directive('drag', {
  inserted: function(el) {
    el.onmousedown = function(e) {
      const disx = e.pageX - el.offsetLeft;
      const disy = e.pageY - el.offsetTop;
      document.onmousemove = function(event) {
        el.style.left = event.pageX - disx + 'px';
        el.style.top = event.pageY - disy + 'px';
      };
      document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
        const resizeEvent = new Event('resize');
        window.dispatchEvent(resizeEvent);
      };
    };
  },
});

// 指令辅助函数
function addresize(dom, fn) {
  var w = dom.offsetWidth,
    h = dom.offsetHeight,
    oldfn = window.onresize;
  if (oldfn) {
    window.onresize = function() {
      // 若resize回调存在，则调用绑定window上下午，直接执行一遍
      oldfn.call(window);
      if (dom.offsetWidth != w || dom.offsetHeight != h) {
        w = dom.offsetWidth;
        h = dom.offsetHeight;
        // 执行回调方法
        fn.call(dom, dom);
      }
    };
  } else {
    window.onresize = function() {
      if (dom.offsetWidth != w || dom.offsetHeight != h) {
        w = dom.offsetWidth;
        h = dom.offsetHeight;
        // 执行回调方法
        fn.call(dom, dom);
      }
    };
  }
}

function handleBalance(el) {
  // 排除不存在子节点的问题
  if (el.childElementCount === 0) return;
  // 获取所有的子节点，并且转换成为数组
  let childs = [...el.childNodes];
  let pWidth = el.clientWidth;
  // 找出子节点中最大的宽度
  let childMaxWidth = childs.reduce((pre, cur) => {
    return pre > cur.clientWidth ? pre : cur.clientWidth;
  }, 0);
  // 当父容器或子容器没有宽度时不操作
  if (pWidth <= 0 || childMaxWidth <= 0) return;
  let rowCount = 0;
  // 进入无限循环
  // eslint-disable-next-line no-constant-condition
  while (true) {
    let totalWidth = childMaxWidth * rowCount; // 子的宽度之和
    let residue = pWidth - totalWidth; // 相减后余下的宽度
    if (residue > 0 && childMaxWidth <= residue) {
      rowCount++;
    } else {
      // 没有剩余空间或者剩余空间不足塞入一个
      break;
    }
  }
  // 当rowCount为零时，代表父容器宽度不足以容纳一个子元素，所以不需要调整间距
  if (!rowCount) return;
  let space = pWidth - rowCount * childMaxWidth;
  let margin = Number((space / rowCount / 2).toFixed(2));
  childs.forEach(item => {
    item.style.marginLeft = `${margin}px`;
    item.style.marginRight = `${margin}px`;
  });
}

// 默认认为屏幕尺寸为1920*1080
function handleScale(el) {
  let width = document.body.clientWidth;
  let height = document.body.clientHeight;
  // 台式电脑分辨率
  el.style.transform = `scale(${width / 1920}, ${height / 1080})`;
  // mac电脑屏幕分辨率
  // el.style.transform = `scale(${width / 1440}, ${height / 820})`
}
