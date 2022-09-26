# huasen-vue

🎉 huasen 系列内容增添新成员，（huasen-vue）官方仓库，基于 huasen-cli 脚手架定制的 Vue.js（2.6.11）项目模版。

## 仓库简介

配合 huasen-cli，支持命令行创建项目、添加页面、自动配置路由、删除路由操作。模版内置菜单权限管理、可模拟数据的网络模块、移动端自适应、多语言、雪碧图合成、右键菜单指令等功能。集成定制调优 ElementUI、Echarts、Tailwindcss、Mockjs2，加强开发使用体验。模版架构综合考虑多种场景，便于团队协作并行，借助 prettier + eslint 规范编码习惯，实现快速构建标准化的企业级前端项目。

## 目录结构

```javascript
├── .tailwind.config.js // tailwindcss配置文件
├── .spritesmith.config.js // 雪碧图合成方法
├── .prettierrc // 代码格式化
├── public
│   ├── css
│   └── img
└── src
    ├── assets
    ├── components // 公共组件和业务组件
    ├── config // 多语言配置、
    ├── constant // 常亮配置
    ├── network // 网络模块
    ├── plugin // 第三方库、自定义指令、事件总线、校验规则库、自定义过滤器...
    ├── router // 路由逻辑
    ├── store // vuex
    ├── utils // 工具库
    └── views // 页面

```

## 内置功能

待更新

## 安装教程

安装依赖

`npm install`

运行项目

`npm run serve`

打包项目

`npm run build`
