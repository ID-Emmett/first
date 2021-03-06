<template>
  <!-- <Time />
  <ErrButtom text="设定" /> -->

  <div class="content-box">
    <div class="clip-board" :class="{'list-show':!statusBack}">
      <div class="button-back" @click.prevent="but_back">按钮</div>
      <Clipboard />
    </div>

    <!-- <div class="center-line" v-drag></div> -->
    <SlowOut :text="slowTxt" class="slow-out">
      <!-- 插槽-传递二级元素 -->
      <div class="footer">
        <SearchInput />
      </div>
    </SlowOut>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Time from "./components/Time.vue";
import ErrButtom from "./components/ErrButtom.vue";
import SlowOut from "./components/SlowOut.vue";
import SearchInput from "./components/SearchInput.vue";
import Clipboard from "./components/Clipboard.vue";

export default defineComponent({
  name: "App",
  setup: () => {
    const slowTxt: string[] = [
      "非",
      "淡泊",
      "无以",
      "明志",
      ",",
      "非",
      "宁静",
      "无以",
      "致远!",
      // '临',
      // 'ag',
      // '你好'
    ];
    // 按钮收回列表
    const statusBack = ref(false);
    const but_back = () => {
      statusBack.value = !statusBack.value;
      localStorage.setItem('search_engine','3')
    };
    return {
      slowTxt,
      statusBack,//回退状态
      but_back, //回退列表事件
    };
  },
  components: {
    Time, //时间
    ErrButtom, //故障按钮
    SlowOut, //文字渐出
    SearchInput, //搜索框
    Clipboard, //剪切板
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
.content-box {
  display: flex;
  min-height: 100vh;
}

.clip-board {
  width: 200px;
  min-width: 200px;
  /* margin-left: -200px;  */
  transition: 0.3s all;
  position: relative;
}
.list-show{
  margin-left: -200px;
}
.button-back {
  position: absolute;
  top: 0;
  right: -32px;
}
/* .center-line {
  width: 10px;
  height: 100vh;
  background-color: rgb(3, 11, 8);
} */
.slow-out {
  flex: 1;
  padding: 80px;
  padding-right: 0;
  max-width: 800px;
  margin: auto;
  margin-top: 100px;
}
</style>