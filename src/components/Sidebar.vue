<template>
  <div id="Sidebar-box">
    <!-- <div>插槽-传递二级元素插槽-传递二级元素插槽-传递二级元素</div>
    <input type="text" />输入框 -->
    <div class="text" @click="changeJumpMode">切换跳转方式: {{ text ? '外' : '内' }}</div>
    <div class="text" @click="changeFocusMode">持续聚焦: {{ focus ? '是' : '否' }}</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, watch } from 'vue'
export default defineComponent({
  name: 'Sidebar',
  setup: () => {
    const text = ref(!!localStorage.getItem('JumpMode'))
    const changeJumpMode = () => {
      text.value = !text.value
      localStorage.setItem('JumpMode', text.value ? '1' : '')
    }

    const focus = ref(!!localStorage.getItem('FocusMode'))
    const changeFocusMode = () => {
      focus.value = !focus.value
      localStorage.setItem('FocusMode', focus.value ? '1' : '')
    }
    return { text, changeJumpMode, focus, changeFocusMode }
  }
})
</script>

<style scoped>
#Sidebar-box {
  background: rgba(49, 190, 5, 0.5);
  width: 100%;
  height: 100%;
  position: relative;
}
.text {
  padding: 30px 30px 0 30px;
}
</style>