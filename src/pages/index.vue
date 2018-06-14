<template>
  <div class="index">
    <my-header></my-header>
    <!--  <div class="img img1">360°旋转 </div>
    <div class="img img2">放大</div>
    <div class="img img3">旋转放大</div>
    <div class="img img4">上下左右移动 </div>-->
    <p style="font-size:14px;line-height: 20px;"><span style="display: inline-block;width: 5px;height: 5px;border-radius: 50%;background: #4492e2;margin: 0 5px;vertical-align: top;margin-top: 8px;"></span>2019-10-21 9:00 18</p>
    <p style="font-size:14px;line-height: 20px;"><span style="display: inline-block;width: 5px;height: 5px;border-radius: 50%;background: #4492e2;margin: 0 5px;vertical-align: top;margin-top: 8px;"></span>2019-10-21 9:00 19</p>
  </div>
</template>
<script>
import myHeader from '../components/header';
export default {
  name: "Index",
  data() {
    return {
      text: ''
    };
  },
  components: {
    myHeader,
  },
  mounted() {},
  methods: {
    aaa() {
      this.text = "聚焦啦"
    },
    bbb() {
      this.text = "失焦啦"
    }
  },
};

</script>
<style scoped>
.demo {
  width: 100px;
  height: 100px;
  background: red;
}

.demo:hover {
  opacity: 0.9;
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
}

.img {
  width: 120px;
  height: 120px;
  line-height: 120px;
  margin: 20px;
  background-color: #5cb85c;
  float: left;
  font-size: 12px;
  text-align: center;
  color: #000;
}






/*效果一：360°旋转 修改rotate(旋转度数)*/

.img1 {
  transition: All 0.4s ease-in-out;
  -webkit-transition: All 0.4s ease-in-out;
  -moz-transition: All 0.4s ease-in-out;
  -o-transition: All 0.4s ease-in-out;
}

.img1:hover {
  transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
}






/*效果二：放大 修改scale(放大的值)*/

.img2 {
  transition: All 0.4s ease-in-out;
  -webkit-transition: All 0.4s ease-in-out;
  -moz-transition: All 0.4s ease-in-out;
  -o-transition: All 0.4s ease-in-out;
}

.img2:hover {
  transform: scale(1.2);
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  -ms-transform: scale(1.2);
}






/*效果三：旋转放大 修改rotate(旋转度数) scale(放大值)*/

.img3 {
  transition: All 0.4s ease-in-out;
  -webkit-transition: All 0.4s ease-in-out;
  -moz-transition: All 0.4s ease-in-out;
  -o-transition: All 0.4s ease-in-out;
}

.img3:hover {
  transform: rotate(360deg) scale(1.2);
  -webkit-transform: rotate(360deg) scale(1.2);
  -moz-transform: rotate(360deg) scale(1.2);
  -o-transform: rotate(360deg) scale(1.2);
  -ms-transform: rotate(360deg) scale(1.2);
}






/*效果四：上下左右移动 修改translate(x轴,y轴)*/

.img4 {
  transition: All 0.4s ease-in-out;
  -webkit-transition: All 0.4s ease-in-out;
  -moz-transition: All 0.4s ease-in-out;
  -o-transition: All 0.4s ease-in-out;
}

.img4:hover {
  transform: translate(0, -10px);
  -webkit-transform: translate(0, -10px);
  -moz-transform: translate(0, -10px);
  -o-transform: translate(0, -10px);
  -ms-transform: translate(0, -10px);
}

</style>
