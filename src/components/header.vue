<template>
  <div class="header">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <router-link to='/'>主页</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to='/drag'>拖拽demo</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to='/demo'>动态添加组件</router-link>
      </el-menu-item>
      <el-menu-item index="4" disabled>订单管理</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "myHeader",
  data() {
    return {};
  },
  mounted() {},
  methods: {}
}

</script>
