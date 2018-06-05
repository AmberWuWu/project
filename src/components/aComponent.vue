<template>
  <div class="ademo">
    <p>A Component: {{ text }}</p>
  </div>
</template>
<script>
export default {
  name: "aDemo",
  data() {
    return {
      // text: ""
    };
  },
  props:{
    text:{
      // default
      // required
    },
  },
  mounted() {
    console.log(this.text);
  },
  methods: {}
};

</script>
