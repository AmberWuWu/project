<template>
  <div class="ademo">
    <div class="demo">{{icon}}{{text}}</div>
    <input @focus="aaa()" @blur="bbb()" :placeholder="placeholder" v-model="_value">
  </div>
</template>
<script>
export default {
  name: "inputComponent",
  data() {
    return {
      text: '失焦啦',
    };
  },
  props: {
    placeholder: {
      required: true,
    },
    value: {
      required: true,
    },
    icon: {
      required: true,
    },
  },
  watch: {},
  mounted() {},
  computed: {
    _value: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit('input', v);
      }
    }
  },
  methods: {
    aaa() {
      this.text = "聚焦啦"
    },
    bbb() {
      this.text = "失焦啦"
    }
  }
};

</script>
