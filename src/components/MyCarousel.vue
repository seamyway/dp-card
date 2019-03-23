<template>
  <el-carousel :interval="5000"
               arrow="always"
               :autoplay="false"
               class='my-carousel'
               height='560px'
               @change='changeCarousel'
               ref='carousel'
               indicator-position='none'>
    <el-carousel-item v-for="item in address"
                      :key="item.id">
      <div class='card-item'>
        <h3 :class="{'card-primary':item.level==1 ,'card-normal':item.level==2}">{{ item.name }}</h3>
        <h4 v-if='item.showDetail'>{{Police[item.police]}} {{City[item.city]}}</h4>
        <el-button icon="el-icon-search"
                   plain
                   @click='handleDetail(item)'>详细</el-button>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
import { City } from '../address/City.js'
import { Police } from '../address/Police.js'
export default {
  props: { address: Array },
  data () {
    return {
      City: {},
      Police: {},
    }
  },
  computed: {

  },
  mounted: function () {
    console.info("son mounted")
    this.City = City;
    this.Police = Police;
  },
  methods: {
    changeCarousel () {
      this.address.forEach((item, index) => {
        item.showDetail = false
      })
    },
    handleDetail (item) {
      item.showDetail = !item.showDetail;
    }
  }
}
</script>

<style>
.my-carousel {
  margin-top: 10px;
  border: 1px solid #ebeef5;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.el-carousel {
  padding: 5px;
}
.el-carousel__container {
  height: 600px;
}
.card-primary {
  color: #f56c6c;
}
.card-normal {
  color: #409eff;
}
.el-carousel__item h3 {
  font-size: 40px;
  font-weight: bold;
  margin: 0;
}
.card-item {
  height: 100px;
  margin-top: 200px;
}
</style>
