<template>
  <!-- <Time />
  <ErrButtom text="设定" /> -->
  <Content />
  <transition appear name="fade">
    <Bottom />
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Time from "./components/Time.vue";
import ErrButtom from "./components/ErrButtom.vue";
import Content from "./components/Content.vue";
import Bottom from "./components/Bottom.vue";

export default defineComponent({
  name: "App",
  setup: () => {},
  components: {
    Time, //时间
    ErrButtom, //故障按钮
    Content, //主体内容
    Bottom, //底部
  },

  directives: {
    drag: {
      // 指令的定义
      mounted(el) {
        let isDown = false;
        var elwidth: number;
        const clipboard: any = document.querySelector(".clip-board");
        // console.log(clipboard);
        //鼠标按下事件
        el.onmousedown = function (e: any) {
          elwidth = clipboard.clientWidth - e.clientX;
          isDown = true;
        };
        //鼠标移动
        window.onmousemove = function (e: any) {
          if (isDown === false) return;
          let nx = e.clientX;
          clipboard.style.width = nx + elwidth + "px";
        };
        //鼠标抬起事件
        el.onmouseup = function (e: any) {
          console.log("鼠标抬起", e);
          //开关关闭
          isDown = false;
        };
      },
    },
  },
});
</script>

<style>
@import "../src/assets/style/init.css";
@import "../src/assets/style/Icon.css";
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>