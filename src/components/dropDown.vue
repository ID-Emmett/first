<template>
  <teleport to="#popUp">
    <div id="center">
      <!-- <h1>666</h1> -->
      <div id="editor"></div>
    </div>
  </teleport>
</template>

<script lang='ts'>
import { defineComponent, onMounted } from "vue";
import E from "wangeditor";

export default defineComponent({
  props: {
    status: {
      type: String || Boolean,
      default: null,
    },
  },
  name: "dropDown",
  setup: (props) => {
    const editor = new E("#editor");
    console.log(props.status);
    onMounted(() => {
      editor.config.historyMaxSize = 50; // 修改为 50 步
      editor.highlight = (window as any).hljs;
      const morentxt = localStorage.getItem("editor_txt");
      editor.config.menus = [
        "head",
        "bold",
        "fontSize",
        "fontName",
        "italic",
        "underline",
        "strikeThrough",
        "indent",
        "lineHeight",
        "foreColor",
        "backColor",
        "link",
        "list",
        "todo",
        "justify",
        "quote",
        "emoticon",
        "image",
        "video",
        "table",
        "code",
        "splitLine",
        "undo",
        "redo",
      ];
      // 编辑器聚焦
      editor.config.focus = false;
      editor.config.placeholder = "save message";
      editor.create();
      console.log(1);

      //取值html 渎text
      editor.txt.text(morentxt || "");
    });
    return {};
  },
  components: {},
});
</script>

<style>
#center {
  position: fixed;
  bottom: -100vh;
  /* bottom: 0vh; */
  left: 0;
  height: 100vh;
  width: 100vw;
  background: red;
  animation: 1s identifier forwards;
  /* opacity:0.5 */
}
@keyframes identifier {
  to {
    background: yellow;
    bottom: 0;
  }
}
.w-e-text-container {
  height: calc(100vh - 66px) !important;
}
</style>