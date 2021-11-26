# 大屏自适配组件

## Status: Alpha.

## Install

```bash
$ npm install self-adaptation-comp -S
```

## Usage

```js
import Vue from 'vue'
import App from './App.vue'

import MyPlugin from 'self-adaptation-comp'
// 全局注册了两个组件
// AutoFitContainer、RectPanel
Vue.use(MyPlugin)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
```
