(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-766f0675"],{"0810":function(e,t,n){"use strict";var o=n("172d"),r=n.n(o);r.a},"172d":function(e,t,n){},"515c":function(e,t,n){"use strict";var o=n("b536"),r=n.n(o);r.a},b536:function(e,t,n){},bb51:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Header"),n("div",{staticClass:"content"},[n("router-view")],1)],1)},r=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[e._m(0),n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex,mode:"horizontal",router:!0,"background-color":"#545c64","text-color":"#ccc","active-text-color":"#ffd04b"},on:{select:e.handleSelect}},[n("el-menu-item",{attrs:{index:"1",route:"/data/view"}},[e._v("ECHARTS")]),n("el-menu-item",{attrs:{index:"2",route:"/home/test"}},[e._v("DEMO")]),n("el-menu-item",{attrs:{index:"3",route:"/list/table"}},[e._v("TABLE")])],1),n("el-popover",{attrs:{placement:"bottom"}},[n("el-button-group",[n("el-button",[e._v(e._s(e.isZh?"英文":"中文"))])],1),n("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v(e._s(e.isZh?"中文":"英文"))])],1),n("div",{staticClass:"user"},[n("el-image",{staticStyle:{width:"40px",height:"40px"},attrs:{src:e.user.imgSrc,fit:"fill"}}),n("el-dropdown",{on:{command:e.handleCommand}},[n("span",{staticClass:"el-dropdown-link"},[e._v("\n        "+e._s(e.user.name)),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{staticStyle:{width:"128px","text-align":"center"},attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"logout"}},[e._v("退出")])],1)],1)],1)],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("strong",[e._v("IFLYTEK DESIGN")])])}],c=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),i=n("2f62");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach(function(t){Object(c["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var d=Object(i["a"])("login"),m=d.mapState,p=d.mapMutations,f={name:"Header",props:{},components:{},data:function(){return{user:{imgSrc:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",name:"admin"},isZh:!0}},computed:u({},m(["activeIndex"])),methods:u({},p(["setUser","setMenuIndex"]),{handleSelect:function(e){this.setMenuIndex(e)},handleCommand:function(e){var t=this;console.log(e),"logout"===e&&this.$confirm("是否确认退出?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$message({type:"success",message:"退出成功"}),t.setUser({id:"",name:"lywu6",password:"123456"}),t.$router.push({path:"/login"})}).catch(function(){t.$message({type:"info",message:"取消退出"})})}}),created:function(){}},h=f,v=(n("0810"),n("2877")),b=Object(v["a"])(h,s,a,!1,null,"67752054",null),g=b.exports,w=n("78c1"),O={name:"home",props:{},components:{Header:g,Test:w["default"]},data:function(){return{}},computed:{},methods:{},created:function(){}},_=O,x=(n("515c"),Object(v["a"])(_,o,r,!1,null,"40e5bd04",null));t["default"]=x.exports}}]);
//# sourceMappingURL=chunk-766f0675.15b01f51.js.map