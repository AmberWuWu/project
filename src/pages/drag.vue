<template>
  <div>
    <my-header></my-header>
    <div class='drag-content' id="dragCon">
      <div class='project-content'>
        <div class='select-item' draggable='true' @dragstart='drag($event)' v-for="pjdt in projectdatas">
          <div class="" draggable='false' >{{pjdt.name}}</div>
        </div>
      </div>
      <div class='people-content'>
        <div class='drag-div' v-for="ppdt in peopledata" @drop='drop($event)' @dragover='allowDrop($event)'>
          <div class='select-project-item'>
            <label class='drag-people-label'>{{ppdt.name}}:</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
var dom;
import myHeader from '../components/header';

export default {
  name: "Drag",
  components: {
    myHeader,
  },
  data() {
    return {
      projectdatas: [{
        id: 1,
        name: '西瓜'
      }, {
        id: 2,
        name: '芒果'
      }, {
        id: 3,
        name: '木瓜'
      }, {
        id: 4,
        name: '樱桃'
      }],
      peopledata: [{
        id: 1,
        name: '小W'
      }, {
        id: 2,
        name: '小P'
      }, {
        id: 3,
        name: '爸爸妈妈 '
      }, {
        id: 3,
        name: '爸爸妈妈'
      }]
    }
  },
  mounted: function() {
    this.$nextTick(function() {})
  },
  watch: {
    projectdatas: {
      handler: function(val, oldval) {},
      deep: true
    },
    peopledata: {
      handler: function(val, oldval) {},
      deep: true
    }
  },
  methods: {
    drag: function(event) {
      dom = event.currentTarget
    },
    drop: function(event) {
      event.preventDefault();
      event.target.appendChild(dom);
    },
    allowDrop: function(event) {
      event.preventDefault();
    }
  }

}

</script>
<style scoped>
.select-item {
  background-color: #5bc0de;
  display: inline-block;
  text-align: center;
  border-radius: 3px;
  margin-right: 10px;
  cursor: pointer;
  padding: 6px 20px;
  color: #fff;
}

.select-item div {
  background: red;
  padding: 20px;
}

.cursored {
  cursor: default;
}

.project-content,
.people-content {
  margin: 30px 50px;
}

.people-content {
  margin-top: 30px;
}

.drag-div {
  border: 1px solid #5bc0de;
  padding: 10px;
  margin-bottom: 10px;
  width: 800px;
  cursor: pointer;
}

.select-project-item {
  display: inline-block;
  text-align: center;
  border-radius: 3px;
}

.drag-people-label {
  margin-bottom: 0;
  padding-right: 10px;
}

[v-cloak] {
  display: none;
}

</style>
