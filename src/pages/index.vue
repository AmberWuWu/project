<template>
  <div class="index">
    <el-row class="tac">
  <el-col :span="12">
    <el-menu default-active="1-1">
      <el-submenu :index="index.toString()" v-for='(item,index) in vboxList' :key="index">
        <div slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.vboxName}}不不不{{index.toString()}}</span>
        </div>
        <el-menu-item-group>
          <el-menu-item :index="index.toString()+'-'+indexs.toString()" v-for="(items,indexs) in item.vboxMonitorList" :key="indexs">{{items.indexName}}啊啊啊{{index.toString()+'-'+indexs.toString()}}</el-menu-item>
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
              indexName: "cpu监控"
            },
            {
              indexName: "网络延迟"
            },
            {
              indexName: "sd卡写入"
            },
            {
              indexName: "直传数量"
            }
          ]
        },
        {
          vboxName: "vbox4020",
          vboxMonitorList: [
            {
              indexName: "cpu监控"
            },
            {
              indexName: "网络延迟"
            },
            {
              indexName: "sd卡写入"
            },
            {
              indexName: "直传数量"
            }
          ]
        },
        {
          vboxName: "vbox4021",
          vboxMonitorList: [
            {
              indexName: "cpu监控"
            },
            {
              indexName: "网络延迟"
            },
            {
              indexName: "sd卡写入"
            },
            {
              indexName: "直传数量"
            }
          ]
        },
        {
          vboxName: "vbox40202",
          vboxMonitorList: [
            {
              indexName: "cpu监控"
            },
            {
              indexName: "网络延迟"
            },
            {
              indexName: "sd卡写入"
            },
            {
              indexName: "直传数量"
            }
          ]
        }
      ]
    };
  },
  mounted() {
    let num = [1, 4, -5, 10].findIndex((value, index, arr) => value === 10); // 2
    console.log(num);
  },
  methods: {}
};
</script>

<style scoped>
</style>
