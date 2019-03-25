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
      <el-button icon="el-icon-arrow-right"
                 plain
                 size="mini"
                 @click='openCardList()'
                 class='card-list'>详细列表</el-button>

      <el-row>
        <el-col :span='6'>
          <el-button icon="el-icon-search"
                     plain
                     @click='selectAddress(1)'
                     :class="{'button-selected-primary':type==1}">必备</el-button>
        </el-col>
        <el-col :span='6'>
          <el-button icon="el-icon-search"
                     plain
                     @click='selectAddress(2)'
                     :class="{'button-selected-normal':type==2}">背会</el-button>
        </el-col>
        <el-col :span='6'>
          <el-button icon="el-icon-search"
                     plain
                     @click='selectAddress(4)'
                     :class="{'button-selected-normal':type==4}">村</el-button>
        </el-col>
        <el-col :span='6'>
          <el-button icon="el-icon-search"
                     plain
                     @click='selectAddress(3)'
                     :class="{'button-selected':type==3}">全部</el-button>

        </el-col>
      </el-row>
    </el-card>
    <MyCarousel :key='addressLength'
                :address='address'></MyCarousel>
  </div>
</template>

<script>
import { Address } from '../address/index.js'
import MyCarousel from './MyCarousel.vue'
export default {
  name: 'MyCard',
  data () {
    return {
      msg: '记忆卡片',
      address: [],
      allAddress: [],
      type: "3",
      addressLength: 0
    }
  },
  components: { MyCarousel },
  mounted: function () {
    console.info('mounted:' + Address.length)
    let newAddress = this.dealAddress(Address)
    newAddress = this.randomAddress(newAddress)
    this.allAddress = newAddress;
    this.address = newAddress;
  },
  methods: {
    dealAddress (oldAddress) {
      return oldAddress;
    },
    dealAddress2 (oldAddress) {
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
      this.type = type;
      this.allAddress.forEach((item, index) => {
        item.showDetail = false
      });
      let filterAddress = []
      if (type < 4) {
        filterAddress = this.allAddress.filter((item, index) => type == 1 && item.level === 1 || type == 2 && item.level <= 2
          || type == 3 && item.level <= 3);
      } else {
        filterAddress = this.allAddress.filter((item, index) => item.name.indexOf("村") != -1);
      }
      this.address = this.randomAddress(filterAddress);
      this.addressLength = this.address.length;
      console.info('selectAddress:' + this.address.length)
      console.info('selectAddress:' + this.address.length)
    },
    openCardList () {
      this.$router.push({ path: '/list' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.my-card {
  margin: 0 auto;
  width: 400px;
  height: 736px;
}
.box-card {
  height: 166px;
  position: relative;
}

.my-card .button-selected-primary,
.button-selected-primary:focus,
.button-selected-primary:hover {
  background: #fff;
  border-color: #f56c6c;
  color: #f56c6c;
}

.my-card .button-selected-normal,
.button-selected-normal:focus,
.button-selected-normal:hover {
  background: #fff;
  border-color: #409eff;
  color: #409eff;
}

.my-card .button-selected,
.button-selected:focus,
.button-selected:hover {
  background: #fff;
  border-color: #000;
  color: #000;
}

.my-card .el-button.is-plain:focus,
.el-button.is-plain:hover {
}
.card-list {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
