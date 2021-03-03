<template>
  <div>
    <h1>{{timeCount}}</h1>
    <button @click.prevent="timeStart">启动</button>
    <button @click.prevent="timeEnd">关闭</button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, onUnmounted } from "vue";
export default defineComponent({
  name: "Time",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const timeCount = ref('00:00:00');
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
        timeCount.value = Time
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
/* a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
} */
</style>
