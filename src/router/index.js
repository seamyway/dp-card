import Vue from 'vue'
import Router from 'vue-router'
import MyCard from '@/components/MyCard'
import InputCard from '@/components/InputCard'
import CardList from '@/components/CardList'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'MyCard',
    component: MyCard
  }, {
    path: '/input',
    name: 'inputCard',
    component: InputCard
  }, {
    path: '/list',
    name: 'cardList',
    component: CardList
  }]
})
