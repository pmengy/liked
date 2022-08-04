<template>
  <button
    :style="{ background: background, color: color }"
    class="myButton"
    @click="$emit('click')"
  >
    <slot>按钮</slot>
  </button>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    background: {
      type: String,
      default: "#5f84ff",
    },
    color: {
      type: String,
      default: "#fff",
    },
  },
  created() {},

  methods: {},
};
</script>
<style scoped lang="scss">
.myButton {
  width: 80px;
  height: 36px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
}
</style>
