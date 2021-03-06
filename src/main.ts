import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

// 注册一个全局自定义指令 `v-focus`
// app.directive("focus", {
//   // 当被绑定的元素挂载到 DOM 中时……
//     // 指令的定义 聚焦
//     mounted(el, val) {
//       // console.log(el);
//       // console.log(val);
//       setTimeout(() => el.focus(), 1200);
//   },
// });
app.mount("#app");
