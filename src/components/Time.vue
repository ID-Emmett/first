<template>
  <div>
    <span class="time-font">{{ timeCount }}</span>
    <!-- <button @click.prevent="timeStart">启动</button>
    <button @click.prevent="timeEnd">关闭</button> -->
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, onUnmounted } from "vue";
export default defineComponent({
  name: "Time",
  setup: () => {
    const timeCount = ref("00:00:00");
    const Timer: any = ref(null);
    const timeStart = () => {
      const nowTime = setInterval(() => {
        const now: Date = new Date();
        const Hours =
          now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
        const Minutes =
          now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
        const Seconds =
          now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
        const Time = Hours + ":" + Minutes + ":" + Seconds;
        // console.log(Time);
        timeCount.value = Time;
      }, 1000);
      Timer.value = nowTime;
    };
    const timeEnd = () => {
      clearInterval(Timer.value);
    };
    onMounted(() => {
      timeStart();
    });
    onUnmounted(() => {
      timeEnd();
    });
    return { timeCount, timeStart, timeEnd };
  },
});
</script>

<style scoped>
.time-font {
  font-family: "Times New Roman", Times, serif;
  font-size: 50px;
  font-weight: bold;
  background: linear-gradient(to right, red, rgb(85, 85, 200));
  -webkit-background-clip: text;
  background-clip: text;
  text-shadow: 5px 5px 5px #9e9191;
  
  color: transparent;


}
</style>
