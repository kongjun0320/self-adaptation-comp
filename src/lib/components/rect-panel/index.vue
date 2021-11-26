<template>
  <div class="rect-panel" :style="rectStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "RectPanel",
  props: {
    top: { type: Number, require: true },
    left: { type: Number, require: true },
    width: { type: Number, require: true },
    height: { type: Number, require: true },
    zIndex: { type: Number, default: 0 },
  },
  computed: {
    rectStyle() {
      return {
        top: `${this.top}px`,
        left: `${this.left}px`,
        width: `${this.width}px`,
        height: `${this.height}px`,
        zIndex: this.zIndex,
      };
    },
  },
  methods: {},
};
</script>

<style scope>
.rect-panel {
  position: absolute;
}
</style>
