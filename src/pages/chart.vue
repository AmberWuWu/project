<template>
  <div class="chart">
    <my-header></my-header>
    <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%">
    <el-table-column type="selection" width="55"></el-table-column>
    <el-table-column label="日期" width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="120">
    </el-table-column>
    <el-table-column prop="address" label="地址" show-overflow-tooltip>
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <!-- <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button> -->
    <el-button @click="toggleSelection(1)">取消选择</el-button>
    <el-button @click="toggleSelection(2)">全选</el-button>
  </div>
  </div>
</template>
<script>
import myHeader from "../components/header";

const echarts = require("echarts");
export default {
  name: "Chart",
  data() {
    return {
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: []
    };
  },
  components: {
    myHeader
  },
  mounted() {},
  methods: {
    toggleSelection(n) {
      if (n === 1) {
        // 取消全选
        this.$refs.multipleTable.clearSelection();
      }
      if (n === 2) {
        // 全选
        this.$refs.multipleTable.clearSelection();
        this.tableData3.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      }
    },
  }
};
</script>
<style scoped>
.chart {
  width: 100%;
  height: 400px;
}
</style>
