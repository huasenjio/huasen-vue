# huasen-vue

> Github：https://github.com/huasenjio/huasen-vue.git



## 📌 关于

花森生态工具系列添新成员，（huasen-vue）官方仓库，基于 huasen-cli 脚手架定制的 Vue.js（2.6.11）项目模版。



## 💪 开源列表

✅ 花森门户容器版（huasenjio-compose）

✅ 花森门户静态版（huasen-protal）

✅ 花森脚手架（huasen-cli）

☑️ 花森低代码平台 （预研）

☑️ 花森流程引擎（预研）



## 🤩 在线体验

由于服务器配置过于垃圾，首次访问较慢，请耐心等待，如果加载卡死，则重新刷新网页。不是代码写得烂，相反我已进行性能优化，并且经过实践验证，服务器配置较好的情况下，访问速度很快！

1.[网址导航](http://n.huasen.cc/)

2.[博客](http://n.huasen.cc/#/article)

3.[个人引导页](http://huasen.cc/)



## 💡 平台简介

本仓库模版需要配合 huasen-cli 使用，实现命令行创建项目、添加页面、自动配置路由、删除路由操作。模版内置指令、模块、工具、常见方案，调优 ElementUI、Echarts、Tailwindcss、Mockjs2 加强开发使用体验，实现快速构建标准化的企业级前端项目。



## 📙 内置功能

✅ 可数据模拟的低耦合网络请求；

✅ 菜单权限管理，统一配置 404、403、500 页面；

✅ 命令行添加页面、删除页面、自动配置路由；

✅ 支持切换明亮模式和暗夜模式的方案；

✅ 移动端缩放自适应；

✅ 雪碧图自动合成；

✅ 水印；

✅ 支持 prettier + eslint 规范代码格式；

✅ 可视化大屏适配指令方案；

✅ 万能 Mutations 方法；

☑️ 数据加密传输；

☑️ ......



## 🐛 开发者指南

### 目录结构

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

### 本地开发

> ⚠️ 默认已经全局安装 huasen-cli

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



## ❌ 声明

仅供学习参考，未经授权，禁止商业使用！



## 🥳 联系我们

由于涉及知识面较广，文字讲解篇幅过大，可以关注我的 Bilibili 账号，后续更新视频教程，感兴趣的小伙伴可以添加站长微信 ，进入前端技术交流群！

🐧企鹅QQ：184820911

😸微信 ：huasencc（站长邀请进入前端交流群）

📮邮箱 ：[184820911@qq.com](https://github.com/huasenjio/huasen-compose/blob/main/184820911@qq.com)

📺哔哩哔哩：[花森酱 JioJio](https://space.bilibili.com/241546158)
