import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

// 注册一个全局自定义指令 `v-focus`
// app.directive("focus", {
//   // 当被绑定的元素挂载到 DOM 中时……
//   mounted(el: any) {
//     // 聚焦元素
//     el.focus();
//   },
// });
app.mount("#app");
