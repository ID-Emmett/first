<template>
  <div style="font-size: 32px">
    <div id="slow-out">
      <h1 class="slow-txt">
        <span v-for="(item, index) in text" :key="index">
          <i>{{ item }}</i>
        </span>
      </h1>
      <!-- <p>
        Create, prototype, collaborate, and bring your ideas to life with the
        design platform used by over one million people — from freelancers, to
        the world’s largest teams.
      </p> -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "SlowOut",
  props: {
    text: Array,
  },
  setup: (props) => {
    return {
      text: props.text,
    };
  },
});
</script>

<style >
#slow-out {
  width: 600px;
  margin: 0 auto;
}
.slow-txt {
  margin: 0;
  letter-spacing: -2px;
}
.footer {
  height: 100px;
  width: 500px;
  background-color: aqua;
  position: relative;
  top: 0.8em;
  opacity: 0;
  animation: 0.5s swift-up ease-out forwards, 0.5s fade-in ease-out forwards;
  animation-delay: 0.9s;
}
p {
  font-size: 0.9em;
  color: #666;
  line-height: 1.3em;
  position: relative;
  top: 0.8em;
  opacity: 0;
  animation: 0.5s swift-up ease-out forwards, 0.5s fade-in ease-out forwards;
  animation-delay: 0.9s;
}
@keyframes fade-in {
  to {
    opacity: 1;
  }
}
.slow-txt > span {
  display: inline-block;
  overflow: hidden;
  position: relative;
  top: 0.8em;
  animation: 0.6s swift-up ease-in-out forwards;
}

.slow-txt > span > i {
  font-style: normal;
  position: relative;
  margin: 0 0.1em;
  top: 2em;
  animation: 0.8s swift-up ease-in-out forwards;
}
@keyframes swift-up {
  to {
    top: 0em;
  }
}

.slow-txt > span:nth-of-type(1) i {
  animation-delay: 0s;
}

.slow-txt > span:nth-of-type(2) i {
  animation-delay: 0.1s;
}

.slow-txt > span:nth-of-type(3) i {
  animation-delay: 0.2s;
}

.slow-txt > span:nth-of-type(4) i {
  animation-delay: 0.3s;
}

.slow-txt > span:nth-of-type(5) i {
  animation-delay: 0.4s;
}
.slow-txt > span:nth-of-type(6) i {
  animation-delay: 0.5s;
}
.slow-txt > span:nth-of-type(7) i {
  animation-delay: 0.6s;
}
.slow-txt > span:nth-of-type(8) i {
  animation-delay: 0.7s;
}
.slow-txt > span:nth-of-type(9) i {
  animation-delay: 0.8s;
}
.slow-txt > span:nth-of-type(10) i {
  animation-delay: 0.9s;
}

.slow-txt > span:nth-of-type(1) {
  animation-delay: 0s;
}

.slow-txt > span:nth-of-type(2) {
  animation-delay: 0.1s;
}

.slow-txt > span:nth-of-type(3) {
  animation-delay: 0.2s;
}

.slow-txt > span:nth-of-type(4) {
  animation-delay: 0.3s;
}

.slow-txt > span:nth-of-type(5) {
  animation-delay: 0.4s;
}

.slow-txt > span:nth-of-type(6) {
  animation-delay: 0.5s;
}
.slow-txt > span:nth-of-type(7) {
  animation-delay: 0.6s;
}
.slow-txt > span:nth-of-type(8) {
  animation-delay: 0.7s;
}
.slow-txt > span:nth-of-type(9) {
  animation-delay: 0.8s;
}
.slow-txt > span:nth-of-type(10) {
  animation-delay: 0.9s;
}
</style>
