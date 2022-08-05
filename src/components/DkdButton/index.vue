<template>
  <button
    :style="{ background: background, color: color }"
    class="myButton"
    :disabled="disabled"
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
    disabled: {
      type: Boolean,
      default: false,
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
  &:disabled {
    cursor: not-allowed;
    background-color: #edf0f9 !important;
    color: #d8dde3 !important;
  }
}
</style>
