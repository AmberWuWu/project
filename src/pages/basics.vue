<template>
  <div class="basics">
    <my-header></my-header>
  </div>
</template>
<script>
import myHeader from '../components/header';
export default {
  name: "Basics",
  data() {
    return {

    };
  },
  components: {
    myHeader,
  },
  mounted() {
    this.bibao();

  },
  methods: {
    constF() {
      // ES6 const 定义常量值，不可以重新赋值，但是如果值是一个对象，可以改变对象里的属性值
      const OBJ = { "a": 1, "b": 2 };
      OBJ.a = 3;
      // OBJ = {}; // 重新赋值，报错！
      console.log(OBJ.a); // 3
    },
    ifArrary() {
      var a = [1, 2, 3, 4];
      // 1.基于instanceof 
      console.log(a instanceof Array)
      // 2.基于constructor 
      console.log(a.constructor === Array)
      // 3.基于Object.prototype.isPrototypeOf 
      console.log(Array.prototype.isPrototypeOf(a))
      // 4.基于getPrototypeOf 
      console.log(Object.getPrototypeOf(a) === Array.prototype)
      // 5.基于Object.prototype.toString 
      console.log(Object.prototype.toString.apply(a) === '[object Array]')
      // 6.Array.isArray
      console.log(Array.isArray([])) // true
    },
    bibao() {
      var f = this.foo();
      // f 可以直接访问这个 num
      var res1 = f();
      var res2 = f();
      console.log(res1)
      console.log(res2)
    },
    foo() {
      var num = Math.random();
      function func() {
        return num;
      }
      return func;
    },
  },
};

</script>
<style scoped>


</style>
