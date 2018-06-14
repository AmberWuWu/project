<template>
  <div class="ademo">
    <p>A Component: {{ text }}</p>
    <input v-bind:value="searchText" v-on:input="searchText = $event.target.value">
  </div>
</template>
<script>
export default {
  name: "aDemo",
  data() {
    return {};
  },
  props: {
    text: {},
    searchText:''
  },
  mounted() {
  },
  methods: {
    write() {
      console.log('触发了组件A的write事件' + this._uid)
    }
  }
};

</script>
