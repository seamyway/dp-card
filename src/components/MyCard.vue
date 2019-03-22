<template>
  <div class="my-card">
    <el-card class="box-card">
      <h1>{{msg}}</h1>
    </el-card>

    <el-carousel :interval="5000"
                 arrow="always"
                 :autoplay="false"
                 class='my-carousel'
                 height='600px'>
      <el-carousel-item v-for="item in address"
                        :key="item">
        <div class='card-item'>
          <h3>{{ item.showDetail?item.detail:item.name }}</h3>
          <el-button icon="el-icon-search"
                     circle
                     @click='handleDetail(item)'>详细</el-button>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'MyCard',
  data () {
    return {
      msg: '记忆卡片',
      address: [{
        id: '1',
        name: '1',
        detail: '1-1-1',
        showDetail: false
      }, {
        id: '2',
        name: '2',
        detail: '2-2-2',
        showDetail: true
      }, {
        id: '3',
        name: '3',
        detail: '3-3-3',
        showDetail: false
      }]
    }
  },
  methods: {
    handleDetail (item) {
      item.showDetail = !item.showDetail;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-card {
  margin: 0 auto;
  width: 400px;
  height: 750px;
}
.box-card {
}
.my-carousel {
}
.el-carousel {
  padding: 5px;
}
.el-carousel__container {
  height: 600px;
}
.el-carousel__item h3 {
  color: #000;
  font-size: 18px;
  opacity: 0.75;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
