<template>
  <el-row class="input-card">
    <el-col :span='12'
            class="inputPanel">
      <el-card class="box-card">
        <el-row>
          <el-col :span='8'>街道名：</el-col>
          <el-col :span='16'>
            <el-input v-model='name'>
              <template slot='prepend'>
              </template>
            </el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span='8'>街道ID：</el-col>
          <el-col :span='16'>
            <el-input v-model='id'>
              <template slot='prepend'>
              </template>
            </el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span='8'>区域名：</el-col>
          <el-col :span='16'>
            <el-select v-model='city'>
              <el-option v-for='item in CityModule'
                         :key="item"
                         :label='CityModule[item]'
                         :value='item'>

              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span='8'>派出所：</el-col>
          <el-col :span='16'>
            <el-select v-model='police'>
              <el-option v-for='item in PoliceModule'
                         :key="item"
                         :label='PoliceModule[item]'
                         :value='item'>
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span='8'>标记级：</el-col>
          <el-col :span='16'>
            <el-select v-model='level'>
              <el-option v-for='item in [1,2,3]'
                         :key="item"
                         :label='item'
                         :value='item'>
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-button icon="el-icon-search"
                   @click='addAddress()'>添加</el-button>
      </el-card>
    </el-col>
    <el-col :span='12'
            class="showPanel">
      <el-card class="box-card">
        <span>{{addressData}}</span>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
import { Address } from '../address/index.js'
import { City } from '../address/City.js'
import { Police } from '../address/Police.js'
export default {
  data () {
    return {
      id: '',
      name: '',
      city: '',
      police: '',
      level: '',
      CityModule: City,
      PoliceModule: Police,
      addressData: []
    }
  },
  methods: {
    addAddress () {
      let address = {
        id: this.id,
        name: this.name,
        police: this.police,
        city: this.city,
        level: this.level,
        showDetail: false
      };
      this.addressData.push(address);
      //清空
      this.id = '';
      this.name = '';
    }
  }

}
</script>
<style>
.input-card {
  display: flex;
}
.box-card {
  height: 400px;
}
.el-input,
.el-select {
  width: 300px;
}
</style>


