<template>
  <div id="Sidebar-box">
    <div>插槽-传递二级元素插槽-传递二级元素插槽-传递二级元素</div>
    <input type="text" />输入框
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Sidebar",
  setup: () => {
    return {};
  },
});
</script>

<style scoped>
#Sidebar-box {
  background: rgb(190, 181, 181);
  width: 100%;
  height: 100%;
  position: relative;
}

</style>