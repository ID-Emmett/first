<template>
  <!-- <input type="text"  v-focus='10'> -->
  <div class="search-tab">
    <div class="seTab-item">
      <span
        class="iconfont search-style"
        v-for="(item, index) in searList"
        :key="index"
        :class="item.icon"
        :style="{
          color: item.color,
          opacity: [index === iconBottom ? '1' : ''],
        }"
        @click.prevent="iconIndex(index)"
        @dblclick.prevent="dbIconIndex"
      ></span>
    </div>
    <div
      class="tab-bottom"
      :style="{
        'margin-left': iconBottom * 40 + 'px',
        background: searList[iconBottom].color,
      }"
    ></div>
  </div>
  <div class="searchBox">
    <div class="row" :class="[modInput ? 'w80' : '']">
      <input
        v-focus="{ status: statusFocus }"
        type="search"
        v-model="modInput"
        @blur="outInput"
        @keyup.enter="goto"
        @keyup.tab.capture="keyTab"
        id="search"
        placeholder=" "
        :style="{ border: '1px solid' + searList[iconBottom].color }"
      />
      <label for="search">{{ searList[iconBottom].name }}</label>
    </div>
    <a
      :title="`以${searList[iconBottom].name}进行检索`"
      class="moren-btn"
      :class="[modInput ? 'moren-show' : '']"
      @click.prevent="goto"
      :style="{ border: '1px solid' + searList[iconBottom].color }"
    >
      <span
        class="iconfont icon-search search-style"
        :style="{ color: searList[iconBottom].color }"
      ></span>
    </a>
  </div>
  <!-- <div v-html="strhtml"></div> -->

  <div id="editor"></div>
</template>

<script lang='ts'>
import {
  defineComponent,
  ref,
  onMounted,
  reactive,
  toRefs,
  computed,
  watchEffect,
} from "vue";
import E from "wangeditor";
export default defineComponent({
  name: "SearchInput",
  props: {
    status: {
      type: Boolean,
      default: true,
    },
  },
  setup: (props) => {
    // console.log(localStorage.getItem('search_engine'));
    // const search_engine = Number(localStorage.getItem("search_engine")) || 0;
    const statusFocus = ref(true);
    // console.log(statusFocus);
    const editor = new E("#editor");

    const modInput = ref("");
    const searList = [
      {
        name: "百度",
        icon: "icon-baidu",
        color: "#6495ED",
        url: "https://www.baidu.com/s?wd=",
      },
      { name: "Google", icon: "icon-google", color: "#4285F4", url: "" },
      {
        name: "GitHub",
        icon: "icon-github",
        color: "#222427",
        url: "https://github.com/search?q=",
      },
      {
        name: "CSDN",
        icon: "icon-csdn",
        color: "#FF4201",
        url: "https://so.csdn.net/so/search/all?q=",
      },
      {
        name: "必应",
        icon: "icon-biying",
        color: "#22DAFF",
        url: "https://cn.bing.com/search?q=",
      },
      { name: "维基百科", icon: "icon-weijibaike", color: "#333333", url: "" },
      {
        name: "360搜索",
        icon: "icon--",
        color: "#04C9A9",
        url: "https://www.so.com/s?q=",
      },
    ];
    const goto = () => {
      let val = modInput.value.trim();
      console.log("搜索关键字:" + val);
      if (val === "") return;
      if (val.substring(0, 4) === "http" && val.length > 10) {
        window.location.href = val;
      } else {
        window.location.href = searList[iconBottom.value].url + val;
      }
      modInput.value = "";
    };
    const iconBottom = ref(0);
    // const setData = reactive({
    //   color: "",
    // });

    const iconIndex = (i: number) => {
      iconBottom.value = i;
    };
    const keyTab = () => {
      if (iconBottom.value >= searList.length - 1) {
        iconBottom.value = 0;
      } else {
        iconBottom.value++;
      }
    };

    const strhtml: any = ref("");
    const dbIconIndex = () => {
      // console.log(editor.txt.text());
      console.log(editor.txt.html());
      localStorage.setItem("editor_txt", editor.txt.html() || "");
      strhtml.value = editor.txt.html();
      let aaa: any = editor.txt.html();
      setTimeout(() => {
        editor.txt.html(aaa);
        console.log(editor.txt.html());
      }, 1000 * 10);

      statusFocus.value = true;
    };
    const outInput = () => {
      //自定义指令自动聚焦失效
      statusFocus.value = false;
      // console.log("移除keydown事件");
      // 移除keydown事件
      window.removeEventListener("keydown", (e) => keyeven(e), true);
    };
    const keyeven = (e: any) => {
      // 阻止tab键默认行为
      // console.log(e);
      if (e.code === "Tab" || e.key === "Tab") {
        e.preventDefault();
      }
    };
    onMounted(() => {
      editor.config.historyMaxSize = 50; // 修改为 50 步
      editor.highlight = (window as any).hljs;
      const morentxt = localStorage.getItem("editor_txt");
      strhtml.value = morentxt;
      //取值html 渎text
      editor.txt.text(morentxt || "");
      // 监听keydown事件
      window.addEventListener("keydown", (e) => keyeven(e), false);
      setTimeout(() => {
        iconBottom.value = Number(localStorage.getItem("search_engine")) || 0;
      }, 1200);
    });
    watchEffect(() => {
      // 计算底边颜色
      statusFocus.value = props.status;
    });
    return {
      statusFocus,
      modInput,
      searList,
      goto,
      keyTab,
      outInput,
      iconIndex,
      iconBottom,
      dbIconIndex,
      strhtml,
      // ...toData,
    };
  },
  directives: {
    focus: {
      // 组件指令的定义 聚焦
      mounted(el, val) {
        setTimeout(() => el.focus(), 1200);
      },
      updated(el, val) {
        // console.log(val);
        if (val.value.status) {
          el.focus();
        }
      },
    },
  },
});
</script>
<style scoped>
@import "../assets/style/Icon.css";
.searchBox {
  /* margin-top: 10px; */
  font-size: 20px;
  display: flex;
  width: 100%;
  font-family: Helvetica, sans-serif;
  /* background: #03c9a9; */
}
.search-tab {
  margin-top: 60px;
}
.tab-bottom {
  margin: 4px;
  border-radius: 10px;
  width: 30px;
  height: 4px;
  margin-left: 40px;
  background: rgb(66, 117, 184);
  transition: ease-out 0.3s all;
}
.seTab-item span {
  padding-right: 10px;
  font-size: 30px;
  cursor: pointer;
  transition: ease-out 0.3s all;
  opacity: 0.3;
}
.seTab-item span:hover {
  opacity: 1;
  transition: ease-out 0.3s all;
}
.seTab-item span:last-child {
  padding-right: 0px;
}
.moren-btn {
  /* width: calc(20% - 4px); */
  width: 56px;
  border: 1px solid #03c9a9;
  box-shadow: 0px 1px 2px rgba(90, 63, 63, 0.25);
  border-radius: 4px;
  opacity: 0;
  transition: 0.5s all;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
}
.moren-show {
  opacity: 1;
  cursor: pointer;
  margin-left: 4px;
  transition: all ease-in-out 0.2s;
}
.search-style {
  transition: all ease-in-out 0.2s;
}
.row {
  width: 90%;
  position: relative;
  transition: 0.5s all;
}
.w80 {
  width: calc(90% - 60px);
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
  /* border: 10px solid #1ba39c; */
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
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