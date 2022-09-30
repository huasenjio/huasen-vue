# huasen-vue

🎉 huasen 系列内容增添新成员，（huasen-vue）官方仓库，基于 huasen-cli 脚手架定制的 Vue.js（2.6.11）项目模版。

## 仓库简介

配合 huasen-cli，实现命令行创建项目、添加页面、自动配置路由、删除路由操作。模版内置指令、模块、工具、常见方案，定制调优 ElementUI、Echarts、Tailwindcss、Mockjs2 加强开发使用体验，实现快速构建标准化的企业级前端项目。

## 内置功能

1. 可数据模拟的低耦合网络请求；

2. 菜单权限管理，统一配置 404、403、500 页面；

3. 命令行添加页面、删除页面、自动配置路由；

4. 支持切换明亮模式和暗夜模式的方案；

5. 移动端缩放自适应；

6. 调教整合 TailwindCss 和 ElementUI；

7. 图标雪碧图自动合成；

8. 万能 Mutations 方法；

9. 支持定制项目水印；

10. 支持 prettier + eslint 规范代码格式；

11. 可视化大屏适配指令方案；

## 目录结构

```txt
├── .tailwind.config.js // tailwindcss 配置文件
├── .spritesmith.config.js // 雪碧图合成配置
├── .prettierrc // 代码格式化配置
├── public
└── src
  ├── assets // 静态资源目录
  ├── components // 公共组件和业务组件
  ├── config // 项目配置
  ├── constant // 项目常量
  ├── network // 网络模块
  ├── plugin // 插件拓展库目录
  ├── router // 路由逻辑
  ├── store // vuex
  ├── utils // 工具集
  └── views // 页面
```

## 安装教程

> 默认已经全局安装 huasen-cli：npm install huasen -g

创建项目

`hs create 项目名`

安装依赖

`npm install`

运行项目

`npm run serve`

添加页面

`hs page`

移除页面

`hs remove`

打包项目

`npm run build`
