<template>
  <div class="index">
    <el-row class="tac">
  <el-col :span="12">
    <el-menu default-active="1-4">
      <el-submenu index="1" v-for='(item,index) in vboxList' :key="index">
        <div slot="title">
          <i class="el-icon-location"></i>
          <span>{{vboxList.vboxName}}</span>
        </div>
        <el-menu-item-group>
          <el-menu-item index="1-1" v-for="(items,indexs) in vboxList.vboxMonitorList" :key="indexs">{{items.indexName}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>

  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      vboxList: [
        {
          vboxName: "vbox4019",
          vboxMonitorList: [
            {
              indexName: "aaaa"
            },
            {
              indexName: "bbbb"
            },
            {
              indexName: "cccc"
            },
            {
              indexName: "dddd"
            }
          ]
        },
         {
          vboxName: "vbox4020",
          vboxMonitorList: [
            {
              indexName: "aaaa"
            },
            {
              indexName: "bbbb"
            },
            {
              indexName: "cccc"
            },
            {
              indexName: "dddd"
            }
          ]
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>
