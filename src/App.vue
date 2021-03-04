<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <Time />
  <ErrButtom text="设定" />
  <SlowOut :text="slowTxt">
    <!-- 组件接收一个数组作为显示文本 -->
    <!-- 插槽-传递二级元素 -->
    <!-- <p class="footer">ahgioangioasngiasnbgi</p> -->
    <div class="footer">
      <SearchInput />
    </div>
  </SlowOut>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Time from "./components/Time.vue";
import ErrButtom from "./components/ErrButtom.vue";
import SlowOut from "./components/SlowOut.vue";
import SearchInput from "./components/SearchInput.vue";

export default defineComponent({
  name: "App",
  setup: () => {
    const slowTxt: string[] = [
      "What",
      "needs",
      "to",
      "be",
      "queried",
      "?",
      '欢',
      '迎',
      '光',
      // '临',
      // 'ag',
      // '你好'
    ];
    return {
      slowTxt,
    };
  },
  components: {
    Time, //时间
    ErrButtom, //故障按钮
    SlowOut, //文字渐出
    SearchInput,
  },
});
</script>

<style>
#app {
  background: greenyellow;
  height: 100vh;
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
html,
body,
div,
span,
applet,
object,
iframe,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-family: Helvetica, sans-serif, Arial;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
  font-family: Helvetica, sans-serif, Arial;
}

body {
  line-height: 1;
  /* background-color: #EFEEEE; */
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>