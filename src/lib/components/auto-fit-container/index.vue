<template>
  <div id="autoFitContainer" :style="style">
    <slot></slot>
  </div>
</template>

<script>
import { debounce } from "../../helpers/utils";

export default {
  name: "AutoFitContainer",
  data() {
    return {
      releaseListenerFn: () => {},
    };
  },
  props: {
    viewportWidth: {
      type: Number,
      default: 1920,
    },
    viewportHeight: {
      type: Number,
      default: 1080,
    },
    zIndex: { type: Number, default: 0 },
  },
  computed: {
    style() {
      return {
        zIndex: this.zIndex,
      };
    },
  },
  mounted() {
    this.releaseListenerFn = this.handleBodyResize();
  },
  beforeDestroy() {
    this.releaseListenerFn();
  },
  methods: {
    fitViewport() {
      const autoFitContainer = document.getElementById("autoFitContainer");

      const INNER_HEIGHT = window.innerHeight;
      const INNER_WIDTH = window.innerWidth;
      if (!autoFitContainer) {
        return;
      }
      autoFitContainer.style.transform = `scale(${
        INNER_WIDTH / this.viewportWidth
      },${INNER_HEIGHT / this.viewportHeight})`;
    },
    handleBodyResize() {
      const { fitViewport } = this;

      if (
        window.innerWidth !== this.viewportWidth ||
        window.innerHeight !== this.viewportHeight
      ) {
        fitViewport();
      }

      const delayCallback = debounce(fitViewport, 200);

      window.addEventListener("resize", delayCallback);

      return () => {
        window.removeEventListener("resize", delayCallback);
      };
    },
  },
};
</script>

<style scope>
#autoFitContainer {
  height: 0px;
  width: 0px;
  overflow: visible;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
