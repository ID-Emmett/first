<template>
      <input type="text"  v-focus='10'>

  <div class="searchBox">
    <div class="row" :class="[modInput ? 'w80' : '']">
      <input
        v-focus='20'
        type="search"
        v-model="modInput"
        @keyup.enter="goto"
        id="search"
        placeholder=" "
      />
      <label for="search">搜索</label>
    </div>
    <a
      title="以 百度 进行搜索"
      class="moren-btn"
      :class="[modInput ? 'moren-show' : '']"
      @click.prevent="goto"
    >
      <span class="iconfont icon-search search-style"></span>
    </a>
  </div>

</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "SearchInput",
  setup: () => {
    const modInput = ref("");
    const goto = () => {
      console.log("搜索关键字:" + modInput.value);
      if (modInput.value.trim() !== "") {
        if (
          modInput.value.trim().substring(0, 4) === "http" &&
          modInput.value.length > 10
        ) {
          window.location.href = modInput.value;
        } else {
          window.location.href = `https://www.baidu.com/s?wd=${modInput.value}`;
        }
        modInput.value = "";
      }
    };
    return {
      modInput,
      goto,
    };
  },
  directives: {
    focus: {
      // 指令的定义 聚焦
      mounted(el,val) {
        console.log(el);
        console.log(val);
        
        
        setTimeout(()=>el.focus(), 1200);
      },
    },
  },
});
</script>
<style scoped>
@import "../assets/style/Icon.css";
.searchBox {
  margin-top: 80px;
  font-size: 20px;
  display: flex;
  width: 100%;
  font-family: Helvetica, sans-serif;
}
.moren-btn {
  width: calc(20% - 12px);
  border: 1px solid #03c9a9;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-right: calc(-20% + 12px);
  opacity: 0;
  transition: 0.5s all;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}
.moren-show {
  opacity: 1;
  cursor: pointer;
  margin-left: 12px;
}
.search-style {
  color: #03c9a9;
}
.row {
  width: 100%;
  position: relative;
  transition: 0.5s all;
}
.w80 {
  width: 80%;
  transition: 0.5s all;
}
.row input {
  font-size: 1em;
  border: 1px solid #03c9a9;
  border-radius: 4px;
  margin: 0;
  padding: 0.5em 1em;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  width: 100%;
  box-sizing: border-box;
  color: #2e3131;
  outline: none;
  transition: all ease-in-out 0.2s;
  /* background: transparent; */
}

.row label {
  position: absolute;
  left: 1em;
  top: 0.7em;
  color: #ccc;
  transition: all ease-in-out 0.2s;
  cursor: text;
}

.row input:focus {
  border: 1px solid #1ba39c;
}

.row input:focus + label {
  transform: translateX(calc(-100% - 2.5em));
  color: #1d5252;
}

input:not(:focus):not(:placeholder-shown) + label {
  color: rgba(0, 0, 0, 0);
}

/* .row input[type="search"]:not(:placeholder-shown) ~ .moren-btn {
  display: inline-block;
} */
</style>