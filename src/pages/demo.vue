<template>
  <div class="demo">
    <my-header></my-header>
    <button @click="add('a-demo', '我是A')">添加A组件</button>
    <component :is="item.component" :text="item.text" v-for="(item,index) in items" @click="minus" :key="index" v-on:mousedown="mousedown($event)" v-on:mouseup="mouseup($event)" v-model="item.observing"></component>
  </div>
</template>
<script>
import aDemo from "../components/aComponent";
import cDemo from "../components/cComponent";
import myHeader from '../components/header';

export default {
  name: "Demo",
  components: {
    aDemo,
    myHeader,
  },
  data() {
    return {
      items: [],
      allComponents: [],
      searchText:''
    }
  },
  methods: {
    add(name, text) {
      this.items.push({
        component: name,
        text: text
      })
    },
    mousedown(event) {
      this.startData = Xindex[0].axisValue;
    },
    mouseup(event) {
      this.endData = Xindex[0].axisValue;
      if (this.startData === this.endData) return;
      this.option.xAxis.data = ['Tue', 'Wed', 'Thu', 'Fri'];
      this.option.series.data = [100, 200, 300, 200];
      this.getData();
    },
    minus() {

    }
  }
}

</script>
<style scoped>


</style>
