(function(t){function e(e){for(var n,o,r=e[0],l=e[1],c=e[2],f=0,g=[];f<r.length;f++)o=r[f],a[o]&&g.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(g.length)g.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,r=1;r<i.length;r++){var l=i[r];0!==a[l]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},a={app:0},s=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("fb18"),a=i.n(n);a.a},"47f6":function(t,e,i){"use strict";var n=i("ab85"),a=i.n(n);a.a},"4a74":function(t,e,i){t.exports=i.p+"media/xinzhinilin.ea0ff946.mp3"},"55e3":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("3a0f"),i("a3a3"),i("4d0b");var n=i("329b"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[t.isRouterAlive?i("router-view"):t._e()],1)},s=[],o={name:"App",provide:function(){return{reload:this.reload}},data:function(){return{isRouterAlive:!0}},methods:{reload:function(){var t=this;this.isRouterAlive=!1,this.$nextTick(function(){t.isRouterAlive=!0})}}},r=o,l=(i("034f"),i("048f")),c=Object(l["a"])(r,a,s,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,f=i("081a"),g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("p",[t._v("\n    "+t._s(t.note)+"\n  ")])])},h=[],d={name:"Home",inject:["reload"],data:function(){return{note:"那美好的仗我已经打完了，应行的路我已行尽了，当守的道我守住了。从此以后，有公义的冠冕为你留存"}}},p=d,v=(i("e5c1"),Object(l["a"])(p,g,h,!1,null,"537cff44",null));v.options.__file="index.vue";var m=v.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fan-ling",style:{width:t.width,height:t.height}},[t.view.viewBool?n("el-row",[n("el-row",{staticClass:"top",attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("div",{staticClass:"logo"},[n("img",{class:{active:t.changeLogoBool},attrs:{src:i("a52e")},on:{click:t.changeLogo}})])]),n("el-col",{attrs:{span:12}},[t.isBirth?n("div",{staticClass:"title"},[t._v("生日是谁，我不管它快不快乐，我只希望你快乐")]):n("div",{staticClass:"title"},[t._v("today is not your birthday~")])])],1),n("el-row",{staticClass:"middle"},[n("el-col",{attrs:{span:24}},[n("div",[t._v("哈哈 还是祝你：")]),n("div",{staticClass:"text-in"},[t._v("越长越帅")]),n("div",{staticClass:"text-in"},[t._v("像个250")]),n("div",{staticClass:"text-in"},[t._v("多读书,多看报,少吃零食,多睡觉")]),n("div",{staticClass:"text-in"},[t._v("幸运常伴你左右")]),n("div",{staticClass:"text-in"},[t._v("是披荆斩棘的女英雄，也是被人疼爱的小朋友")]),n("div",{staticClass:"text-in"},[t._v("......")]),n("div",[t._v("以上。")])])],1),n("el-row",{staticClass:"middle"},[n("el-col",{attrs:{span:24}},[n("img",{attrs:{src:i("d7ec"),alt:""}})])],1)],1):t._e(),n("el-dialog",{attrs:{title:"请输入密码",visible:t.view.isShow,width:"30%"},on:{"update:visible":function(e){t.$set(t.view,"isShow",e)}}},[n("el-input",{model:{value:t.view.password,callback:function(e){t.$set(t.view,"password",e)},expression:"view.password"}}),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:t.checkPassword}},[t._v("确 定")])],1)],1)],1)},S=[],k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"k-button"},[i("div",{staticClass:"item"},[i("span",[t._v(t._s(t.message))]),i("span",{staticClass:"arrow"},[t._v(">")])])])},w=[],E={name:"kButton",props:{message:{default:""}}},Q=E,C=(i("47f6"),Object(l["a"])(Q,k,w,!1,null,"25278fef",null));C.options.__file="k_button.vue";var B=C.exports,I={name:"fanLing",components:{kButton:B},data:function(){return{view:{viewBool:!0,isShow:!1,password:""},width:null,height:null,timer:!0,isBirth:!1,arrList:[],changeLogoBool:!1}},created:function(){this.getWidthheight(),this.getDate()},mounted:function(){var t=this;window.onresize=function(){t.getWidthheight()}},methods:{getWidthheight:function(){var t=this;if(this.timer){this.timer=!1;var e=document.querySelector("body").clientWidth,i=document.querySelector("body").clientHeight;this.width=e+"px",this.height=i+"px",setTimeout(function(){t.timer=!0},400)}},getDate:function(){var t=new Date,e=t.getMonth()+1>10?t.getMonth()+1:"0"+(t.getMonth()+1),i=t.getDate()>10?t.getDate():"0"+t.getDate(),n=e+"-"+i;this.isBirth="11-27"===n},changeLogo:function(){this.changeLogoBool=!this.changeLogoBool},checkPassword:function(){"fl"===this.view.password?(this.view.isShow=!1,this.view.viewBool=!0):this.$message({message:"输入错误了哦~",type:"warning"})}}},x=I,b=(i("a3ee"),Object(l["a"])(x,A,S,!1,null,"0d934ad4",null));b.options.__file="index.vue";var y=b.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"myself",style:{width:t.width,height:t.height}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:i("adac"),alt:""}})]),n("div",{staticClass:"message"},[t._v("\n        变强"),n("br"),t._v("\n        寻找灵性\n      ")])]),n("el-col",{attrs:{span:12}},[n("div",{staticClass:"all-music-logo"},[n("img",{class:{"active-1":t.animateBool},attrs:{src:i("d82e")}}),n("img",{class:{"active-2":t.animateBool},attrs:{src:i("de9b")}}),n("img",{class:{"active-1":t.animateBool},attrs:{src:i("d82e")}}),n("img",{class:{"active-2":t.animateBool},attrs:{src:i("de9b")}}),n("img",{class:{"active-1":t.animateBool},attrs:{src:i("d82e")}}),n("img",{class:{"active-2":t.animateBool},attrs:{src:i("de9b")}})]),n("div",{staticClass:"all-button"},[n("img",{attrs:{src:i("df84"),alt:"播放"},on:{click:t.play}}),n("img",{attrs:{src:i("e7e7"),alt:"暂停"},on:{click:t.pause}}),n("img",{attrs:{src:i("ffc4"),alt:"暂停"},on:{click:t.reset}})])])],1),n("audio",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"xznl"},[n("source",{attrs:{src:i("4a74"),type:"audio/mpeg"}})])],1)},M=[],K={name:"myself",data:function(){return{width:null,height:null,timer:!0,animateBool:!1}},created:function(){this.getWidthheight()},mounted:function(){var t=this;window.onresize=function(){t.getWidthheight()}},methods:{play:function(){this.$refs.xznl.play(),this.animateBool=!0},pause:function(){this.$refs.xznl.pause(),this.animateBool=!1},reset:function(){this.$refs.xznl.currentTime=0,this.$refs.xznl.play(),this.animateBool=!0},getWidthheight:function(){var t=this;if(this.timer){this.timer=!1;var e=window.innerWidth,i=window.innerHeight;this.width=e+"px",this.height=i+"px",setTimeout(function(){t.timer=!0},400)}}}},R=K,j=(i("a1ed"),Object(l["a"])(R,J,M,!1,null,"2c0f555e",null));j.options.__file="index.vue";var H=j.exports;n["default"].use(f["a"]);var Z=new f["a"]({routes:[{path:"/",name:"home",component:m},{path:"/fan-ling",name:"fanLing",component:y},{path:"/liao-hang",name:"myself",component:H}]}),T=i("f2de");n["default"].use(T["a"]);var W=new T["a"].Store({state:{},mutations:{},actions:{}}),z=i("4587"),L=i.n(z);i("55e3");n["default"].use(L.a);i("66b8");n["default"].config.productionTip=!1,new n["default"]({router:Z,store:W,render:function(t){return t(u)}}).$mount("#app")},"66b8":function(t,e,i){},"7ef6":function(t,e,i){},a1ed:function(t,e,i){"use strict";var n=i("d6b7"),a=i.n(n);a.a},a3ee:function(t,e,i){"use strict";var n=i("7ef6"),a=i.n(n);a.a},a52e:function(t,e,i){t.exports=i.p+"img/avatar_fl.ede0fd32.jpg"},ab85:function(t,e,i){},adac:function(t,e,i){t.exports=i.p+"img/avatar_lh.fb583763.jpg"},d6b7:function(t,e,i){},d7ec:function(t,e,i){t.exports=i.p+"img/birth.ca5500f2.png"},d82e:function(t,e,i){t.exports=i.p+"img/music-1.c4240aad.png"},ddde:function(t,e,i){},de9b:function(t,e){t.exports="data:image/png;base64,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"},df84:function(t,e,i){t.exports=i.p+"img/play.baadacb4.png"},e5c1:function(t,e,i){"use strict";var n=i("ddde"),a=i.n(n);a.a},e7e7:function(t,e,i){t.exports=i.p+"img/stop.0eb0bc3e.png"},fb18:function(t,e,i){},ffc4:function(t,e,i){t.exports=i.p+"img/reset.079598d6.png"}});
//# sourceMappingURL=app.fecb476f.js.map