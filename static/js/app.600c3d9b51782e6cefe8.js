webpackJsonp([1],{NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},s,!1,function(e){a("Odbf")},null,null).exports,l=a("/ocq"),i=[{id:"1",name:"1-1",detail:"1-1-1",level:1,showDetail:!1},{id:"2",name:"1-2",detail:"2-2-2",level:1,showDetail:!0},{id:"3",name:"2-3",detail:"3-3-3",level:2,showDetail:!1},{id:"4",name:"2-4",detail:"3-3-3",level:2,showDetail:!1},{id:"5",name:"2-5",detail:"3-3-3",level:2,showDetail:!1}],c={name:"MyCard",data:function(){return{msg:"记忆卡片",address:[],allAddress:[]}},mounted:function(){var e=this.randomAddress(i);this.allAddress=e,this.address=e},methods:{randomAddress:function(e){for(var t=e.length,a=0;a<t-1;a++){var n=Math.floor(Math.random()*(t-a)),s=e[n];e[n]=e[t-a-1],e[t-a-1]=s}return e},selectAddress:function(e){this.allAddress.forEach(function(e,t){e.showDetail=!1}),this.address=this.allAddress.filter(function(t,a){return t.level===e||3===e})},handleDetail:function(e){e.showDetail=!e.showDetail},changeCarousel:function(){this.address.forEach(function(e,t){e.showDetail=!1})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"my-card"},[a("el-card",{staticClass:"box-card"},[a("h1",[e._v(e._s(e.msg))]),e._v(" "),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-button",{attrs:{icon:"el-icon-search",circle:""},on:{click:function(t){return e.selectAddress(1)}}},[e._v("必备")])],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-button",{attrs:{icon:"el-icon-search",circle:""},on:{click:function(t){return e.selectAddress(2)}}},[e._v("背会")])],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-button",{attrs:{icon:"el-icon-search",circle:""},on:{click:function(t){return e.selectAddress(3)}}},[e._v("全部")])],1)],1)],1),e._v(" "),a("el-carousel",{staticClass:"my-carousel",attrs:{interval:5e3,arrow:"always",autoplay:!1,height:"560px"},on:{change:e.changeCarousel}},e._l(e.address,function(t){return a("el-carousel-item",{key:t.id},[a("div",{staticClass:"card-item"},[a("h3",[e._v(e._s(t.showDetail?t.detail:t.name))]),e._v(" "),a("el-button",{attrs:{icon:"el-icon-search",circle:""},on:{click:function(a){return e.handleDetail(t)}}},[e._v("详细")])],1)])}),1)],1)},staticRenderFns:[]};var d=a("VU/8")(c,o,!1,function(e){a("s4Kf")},"data-v-15dfdb81",null).exports;n.default.use(l.a);var u=new l.a({routes:[{path:"/",name:"MyCard",component:d}]}),f=a("zL8q"),h=a.n(f);a("tvR6");n.default.config.productionTip=!1,n.default.use(h.a),new n.default({el:"#app",router:u,components:{App:r},template:"<App/>"})},Odbf:function(e,t){},s4Kf:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.600c3d9b51782e6cefe8.js.map