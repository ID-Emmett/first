<template>
  <footer class="bottom">
    <div
      class="e-input"
      @click="eInput = !eInput"
      :class="[eInput ? 'e-input-da' : '']"
    >
      按钮
    </div>
    <!-- <transition-group name="dropanim"> -->
      <DropDown status="瞬移组件拿到的值" v-if="eInput" />
    <!-- </transition-group> -->
    <Time class="com-time" color="" />
    <p class="area-number" title="存储区字符数">{{ areaValue.length }}</p>
    <div class="area-lable">
      <span
        :title="[statusSave ? '未保存' : '已保存']"
        class="area-icon xs"
        @click.prevent="areaSave"
        :style="{ color: statusSave ? '#F9CF25' : '#fff' }"
      >
        <i class="iconfont icon-baocun"></i>
      </span>
      <span title="扩展" class="area-icon xs" @click.prevent="inputB = !inputB">
        <i class="iconfont icon-008pingmufangda"></i>
      </span>
    </div>
    <textarea
      placeholder="Data storage"
      class="win-but"
      :class="[inputB ? 'win-but-go' : '']"
      @dblclick="inputB = !inputB"
      v-model="areaValue"
    ></textarea>
  </footer>
</template>

<script lang='ts'>
import { defineComponent, ref, watch, onMounted } from "vue";
import Time from "../components/Time.vue";
import DropDown from "../components/dropDown.vue";
export default defineComponent({
  name: "Bottom",
  data() {
    return {
      inputB: false,
      eInput: false,
    };
  },
  setup() {
    const areaValue: any = ref("");
    const statusSave = ref(false);
    let temporaryData: any = "";
    const areaSave = () => {
      if (!statusSave.value) return console.log("节流控制,!statusSave");
      try {
        if (areaValue.value.length > 20000) {
          console.log("编辑框内超过两万字符将容易出现卡顿现象");
        }
        localStorage.setItem("area_value", areaValue.value);
        temporaryData = areaValue.value;
        statusSave.value = false;
      } catch {
        console.log("储存失败");
      }
    };
    onMounted(() => {
      setTimeout(() => {
        const areaHistory = localStorage.getItem("area_value") || "";
        areaValue.value = areaHistory;
        temporaryData = areaHistory;
      }, 2000);
    });
    watch(areaValue, (count, prevCount) => {
      if (temporaryData !== count) {
        statusSave.value = true;
      } else {
        statusSave.value = false;
      }
    });
    return {
      areaValue,
      areaSave,
      statusSave,
    };
  },
  components: {
    Time,
    DropDown,
  },
});
</script>

<style scoped>
.bottom {
  height: 24px;
  width: 100%;
  z-index: 999;
  backdrop-filter: saturate(180%) blur(20px);
  background-color: #21252b;
  position: relative;
  display: flex;
  align-items: center;
}
.com-time {
  position: absolute;
  right: 0;
}
.win-but {
  border-radius: 2px;
  position: fixed;
  bottom: 2px;
  right: 100px;
  z-index: 1;
  width: 60px;
  height: 18px;
  color: antiquewhite;
  background: #21252b;
  font-size: 18px;
  padding: 0;
  transition: 0.3s ease-out;
}
.win-but:focus {
  outline: none !important;
  border-color: #719ece;
  box-shadow: 0 0 10px #719ece;
}
.win-but-go:focus {
  border-color: #000000;
  box-shadow: 0 0 10px #000000;
}
.win-but-go {
  width: calc(100vw - 60px);
  height: calc(100vh - 82px);
  padding: 30px;
  color: #21252b;
  font-size: 20px;
  background: rgb(229, 230, 226);
  bottom: 22px;
  right: 0;
  border-radius: 0;
  line-height: 1.2;
  transition: 0.3s ease-out;
  cursor: Default;
  border: none;
}
.win-but::-webkit-scrollbar {
  width: 0px;
}
.win-but-go::-webkit-scrollbar {
  width: 16px;
  height: 6px;
}
/*滚动条滑块*/
.win-but-go::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px #d8d8d8;
  background: #5096fa;
}
/*滚动条轨道*/
.win-but-go::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  background: transparent;
  /* background-color: #5096fa; */
}
.area-number {
  position: fixed;
  right: 220px;
  bottom: 0px;
  min-width: 10px;
  height: 24px;
  display: flex;
  align-items: center;
  line-height: 1.1;
  /* background: #5096fa; */
  justify-content: flex-end;
  color: #fff;
}
/* 存储icon */
.area-lable {
  position: fixed;
  right: 170px;
  bottom: 0px;
  width: 38px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
}
.area-icon:hover {
  color: rgb(55, 180, 202);
  transition: all 0.4s;
}
.area-icon {
  transition: all 0.4s;
}
/* 富文本按钮 */
.e-input {
  width: 50px;
  height: 100%;
  background: #5096fa;
}
.e-input-da {
  width: 100px;
  height: 100%;
  background: rgb(143, 82, 82);
}

.dropanim-enter-active,
.dropanim-leave-active {
  transition: opacity 2s ease;
}

.dropanim-enter-from,
.dropanim-leave-to {
  opacity: 0;
}
</style>