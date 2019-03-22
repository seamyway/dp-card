Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@seamyway Sign out
0
0 0 seamyway/dp-card
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights  Settings
dp-card/src/components/MyCard.vue
@seamyway seamyway m
bee2b8d 7 minutes ago
We found a potential security vulnerability in one of your dependencies.
Only the owner of this repository can see this message. 
Manage your notification settings or learn more about vulnerability alerts.

136 lines (131 sloc)  3.02 KB
    
<template>
  <div class="my-card">
    <el-card class="box-card">
      <h1>{{msg}}</h1>
      <el-row>
        <el-col :span='8'>
          <el-button icon="el-icon-search"
                     circle
                     @click='selectAddress(1)'>必备</el-button>
        </el-col>
        <el-col :span='8'>
          <el-button icon="el-icon-search"
                     circle
                     @click='selectAddress(2)'>背会</el-button>
        </el-col>
        <el-col :span='8'>
          <el-button icon="el-icon-search"
                     circle
                     @click='selectAddress(3)'>全部</el-button>
        </el-col>
      </el-row>
    </el-card>

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
          <h3>{{ item.name }}</h3>
          <h4 v-if='item.showDetail'>{{Police[item.police]}} {{City[item.city]}}</h4>
          <el-button icon="el-icon-search"
                     circle
                     @click='handleDetail(item)'>详细</el-button>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { Address, City, Police } from '../address/index.js'
export default {
  name: 'MyCard',
  data () {
    return {
      msg: '记忆卡片',
      address: [],
      allAddress: [],
      City: {},
      Police: {}
    }
  },
  mounted: function () {
    let newAddress = this.dealAddress(Address)
    newAddress = this.randomAddress(newAddress)
    this.allAddress = newAddress;
    this.address = newAddress;
    this.City = City;
    this.Police = Police;
  },
  methods: {
    dealAddress (oldAddress) {
      let newAddress = [];
      for (let city in oldAddress) {
        let polices = oldAddress[city];
        for (let police in polices) {
          let addressArray = polices[police];
          addressArray.forEach((address, index) => {
            address.city = city;
            address.police = police;
            address.showDetail = false;
            newAddress.push(address)
          })
        }
      }
      console.info(newAddress)
      return newAddress;
    },
    randomAddress (oldAddress) {
      let len = oldAddress.length;
      for (let i = 0; i < len - 1; i++) {
        let idx = Math.floor(Math.random() * (len - i));
        let temp = oldAddress[idx];
        oldAddress[idx] = oldAddress[len - i - 1];
        oldAddress[len - i - 1] = temp;
      }
      return oldAddress;
    },
    selectAddress (type) {
      this.allAddress.forEach((item, index) => {
        item.showDetail = false
      });

      let filterAddress = this.allAddress.filter((item, index) => type == 1 && item.level === 1 || type == 2 && item.level <= 2
        || type === 3);
      this.address = this.randomAddress(filterAddress);
      this.$refs.carousel.setActiveItem(0);
      console.info(this.address)
      console.info('selectAddress:' + this.address.length)
      console.info('selectAddress:' + this.address.length)
    },
    handleDetail (item) {
      item.showDetail = !item.showDetail;
    },
    changeCarousel () {
      this.address.forEach((item, index) => {
        item.showDetail = false
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-card {
  margin: 0 auto;
  width: 400px;
  height: 736px;
}
.box-card {
  height: 166px;
}
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
.el-carousel__item h3 {
  color: #000;
  font-size: 40px;
  font-weight: bold;
  margin: 0;
}
.card-item {
  height: 100px;
  margin-top: 250px;
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
