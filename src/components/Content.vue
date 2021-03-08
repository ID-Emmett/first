<template>
  <div class="content-box">
    <div class="sidebar" :class="{ 'list-show': !statusBack }">
      <div class="button-back ifas xs" @click.prevent="but_back">
        <span class="iconfont icon-cebianlan-shouqi"></span>
        <span class="iconfont icon-guanbianniu"></span>
      </div>
      <Sidebar />
    </div>
    <SlowOut :text="slowTxt" class="slow-out">
      <!-- 插槽-传递二级元素 -->
      <div class="footer">
        <SearchInput :status='!statusBack' />
      </div>
    </SlowOut>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
import Sidebar from "../components/Sidebar.vue";
import SlowOut from "../components/SlowOut.vue";
import SearchInput from "../components/SearchInput.vue";

export default defineComponent({
  name: "Content",
  setup() {
    // 按钮收回列表
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
    ];
    const statusBack = ref(false);
    const but_back = () => {
      statusBack.value = !statusBack.value;
      localStorage.setItem("search_engine", "3");
    };
    return {
      slowTxt,//渐出文本
      statusBack, //回退状态
      but_back, //回退列表事件
    };
  },
  components: {
    Sidebar,
    SlowOut,
    SearchInput,
  },
});
</script>

<style  scoped>
.content-box {
  display: flex;
  height: calc(100vh - 24px);
}

.sidebar {
  width: 300px;
  min-width: 300px;
  /* margin-left: -200px;  */
  transition: 0.3s all;
  position: relative;
}
.list-show {
  margin-left: -300px;
}
.button-back {
  position: absolute;
  top: -30px;
  right: -30px;
  transition: 0.3s all;
  opacity: 0.5;
}
.list-show .ifas {
  transform: rotate(180deg);
  right: -22px;
}
.icon-cebianlan-shouqi {
  display: block;
  color: rgb(200, 188, 188);
  font-size: 30px;
  border-radius: 4px;
  transition: 0.2s all;
}
.icon-cebianlan-shouqi:hover {
  transform: scaleY(1.2);
  transition: 0.2s all;
}
.icon-guanbianniu {
  display: block;
  font-size: 30px;
  color: rgb(131, 40, 40);
  transition: 0.2s all;
}
.icon-guanbianniu:hover {
  transform: rotate(90deg);
  color: red;
  transition: ease-out 0.2s all;
}
.slow-out {
  flex: 1;
  padding: 80px;
  padding-right: 0;
  max-width: 800px;
  margin: auto;
  margin-top: 100px;
}
</style>