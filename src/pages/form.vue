<template>
  <div class="form">
    <my-header></my-header>
    <my-input placeholder='请输入手机号' v-model="phone" icon='icon1'></my-input>
    <my-input placeholder='请输入密码' v-model="pwd" icon='icon2'></my-input>
    <button @click="login">登录啦</button>
  </div>
</template>
<script>
import myHeader from '../components/header';
import myInput from '../components/inputComponent';
export default {
  name: "Form",
  data() {
    return {
      text: '',
      phone: '',
      pwd: '',
    };
  },
  components: {
    myHeader,
    myInput
  },
  mounted() {},
  methods: {
    login() {
      alert('手机号：' + this.phone+'  _  '+'密码：' + this.pwd);
    }
  },
};

</script>
<style scoped>


</style>
