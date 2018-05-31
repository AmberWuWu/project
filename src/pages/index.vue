<template>
  <div class="index">
    <div class="analyze-container">
      <!-- 可以加上transition 优化视觉   -->
      <div class="side-bar" ref="sideBar" :class="searchBarFixed?'fixed':''">
        <div class="navMenu" id="searchBar">
          <div class="menu-tit">监控系统</div>
          <div class="menu-group">
            <div><span class="icon"></span>直传总数</div>
            <div><span class="icon"></span>调图总数</div>
            <div><span class="icon"></span>V盒在线数</div>
          </div>
          <div class="menu-tit">v盒监控</div>
          <div class="menu-search">
            <input type="text" placeholder="请输入..." v-model="searchContent" @keyup.enter="search">
            <span class="search-btn" @click="search"></span>
            <div class="scroll-box">
              <el-scrollbar class="live-scroll">
                <el-menu :default-active="activeNum">
                  <el-submenu :index="index.toString()" v-for='(item,index) in vboxList' :key="index">
                    <div slot="title">
                      <span>{{item.vboxName}}</span>
                    </div>
                    <el-menu-item-group>
                      <el-menu-item :index="index.toString()+'-'+indexs.toString()" v-for="(items,indexs) in item.vboxMonitorList" :key="indexs"><i class="icon icon1"></i>{{items.indexName}}</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                </el-menu>
              </el-scrollbar>
            </div>
          </div>
        </div>
      </div>
      <div class="panel-box">
        <div class="right">
          <div class="tools">
            <ul>
              <li @click="swith(3)" v-bind:class="{pitch:switchnum===3}">三列</li>
              <li>|</li>
              <li @click="swith(2)" v-bind:class="{pitch:switchnum===2}">两列</li>
              <li>|</li>
              <li @click="swith(1)" v-bind:class="{pitch:switchnum===1}">单列</li>
            </ul>
            <span class="start"></span>
            <span class="stop"></span>
          </div>
          <div v-bind:class="[{ three: switchnum===3 }, { two: switchnum===2 }, { one: switchnum===1 }]">
            <div class="close"></div>
            <div class="chart" ref="myCharts" v-on:mousedown="mousedown($event)" v-on:mouseup="mouseup($event)"></div>
            <span class="start"></span>
            <span class="stop"></span>
            <span class="minus">-</span>
          </div>
          <div v-bind:class="[{ three: switchnum===3 }, { two: switchnum===2 }, { one: switchnum===1 }]">2</div>
          <div v-bind:class="[{ three: switchnum===3 }, { two: switchnum===2 }, { one: switchnum===1 }]">3</div>
          <div v-bind:class="[{ three: switchnum===3 }, { two: switchnum===2 }, { one: switchnum===1 }]">5</div>
          <div v-bind:class="[{ three: switchnum===3 }, { two: switchnum===2 }, { one: switchnum===1 }]">6</div>
          <div v-bind:class="[{ three: switchnum===3 }, { two: switchnum===2 }, { one: switchnum===1 }]">7</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Index",
  data() {
    return {
      vboxList: [{
          vboxName: "vbox4019",
          vboxMonitorList: [{
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
          vboxMonitorList: [{
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
          vboxMonitorList: [{
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
          vboxMonitorList: [{
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
      ],
      tableData: [{
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
      ],
      currentRow: null
    };
  },
  mounted() {
    let num = [1, 4, -5, 10].findIndex((value, index, arr) => value === 10); // 2
    console.log(num);
  },
  methods: {
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    }
  }
};

</script>
<style scoped>


</style>
