<template>
  <div class="card-list">
    <el-card class="box-card">
      <h1>详细信息</h1>
      <el-button icon="el-icon-arrow-right"
                 plain
                 size="mini"
                 @click='backCard()'
                 class='card-back'>返回</el-button>

      <el-input placeholder="输入关键字进行过滤"
                v-model="filterText">
      </el-input>

      <!-- default-expand-all -->
      <el-tree class="filter-tree"
               :data="data"
               accordion
               :filter-node-method="filterNode"
               ref="tree">
      </el-tree>
    </el-card>
  </div>
</template>
<script>
import { Address } from '../address/index.js'
import { City } from '../address/City.js'
import { Police } from '../address/Police.js'
export default {
  data () {
    return {
      filterText: '',
      allAddress: Address,
      data: []
    };
  },
  watch: {
    filterText (val) {
      this.$refs.tree.filter(val);
    }
  },
  methods: {
    filterNode (value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    buildCardList () {
      let cityMap = {}
      let policeMap = {}
      this.allAddress.forEach((address, index) => {
        let city = address.city;
        let police = address.police;
        let name = address.name;
        let policeSet = cityMap[city] || new Set()
        policeSet.add(police)
        cityMap[city] = policeSet;

        let addressArray = policeMap[police] || []
        addressArray.push(address)
        policeMap[police] = addressArray;
      })
      let id = 1;
      for (let city in cityMap) {
        let policeSet = cityMap[city];
        let cityData = {};
        cityData.id = id++;
        cityData.label = City[city];
        cityData.children = [];
        for (let police of policeSet.keys()) {
          let addressArray = policeMap[police];
          let policeData = {}
          policeData.id = id++;
          policeData.label = Police[police];
          policeData.children = []
          addressArray.forEach((address, index) => {
            let addressData = {}
            addressData.id = id++;
            addressData.label = address.name;
            policeData.children.push(addressData);
          })
          cityData.children.push(policeData);
        }
        this.data.push(cityData)
      }
    },
    backCard () {
      this.$router.push({ path: '/' })
    }
  },
  mounted: function () {
    console.info('cardlist mounted:' + Address.length)
    console.info('cardlist mounted:' + City)
    console.info('cardlist mounted:' + Police)
    this.buildCardList();
  }
}
</script>
<style>
.box-card {
  height: 736px;
  position: relative;
}
.card-back {
  position: absolute;
  top: 10px;
  left: 10px;
}
.el-tree-node.is-expanded > .el-tree-node__children {
  max-height: 500px;
  overflow-y: auto !important;
}
</style>

