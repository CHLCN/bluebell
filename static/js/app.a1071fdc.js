(function(t){function s(s){for(var a,n,l=s[0],c=s[1],r=s[2],m=0,d=[];m<l.length;m++)n=l[m],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(s);while(d.length)d.shift()();return o.push.apply(o,r||[]),e()}function e(){for(var t,s=0;s<o.length;s++){for(var e=o[s],a=!0,l=1;l<e.length;l++){var c=e[l];0!==i[c]&&(a=!1)}a&&(o.splice(s--,1),t=n(n.s=e[0]))}return t}var a={},i={app:0},o=[];function n(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=a,n.d=function(t,s,e){n.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,s){if(1&s&&(t=n(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)n.d(e,a,function(s){return t[s]}.bind(null,a));return e},n.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(s,"a",s),s},n.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=s,l=l.slice();for(var r=0;r<l.length;r++)s(l[r]);var u=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"02ea":function(t,s,e){},"18de":function(t,s,e){"use strict";e("5c31")},"2fad":function(t,s,e){},"36dd":function(t,s,e){"use strict";e("2fad")},"3ce3":function(t,s,e){"use strict";e("6c07")},"4a40":function(t,s,e){"use strict";e("9d30")},"56d7":function(t,s,e){"use strict";e.r(s);var a=e("2b0e"),i=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"page"},[s("HeadBar"),s("router-view")],1)])},o=[],n=function(){var t=this,s=t._self._c;return s("header",{staticClass:"header"},[s("span",{staticClass:"logo",on:{click:t.goIndex}},[t._v("bluebell")]),t._m(0),s("div",{staticClass:"btns"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLogin,expression:"!isLogin"}]},[s("a",{staticClass:"login-btn",on:{click:t.goLogin}},[t._v("登录")]),s("a",{staticClass:"login-btn",on:{click:t.goSignUp}},[t._v("注册")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isLogin,expression:"isLogin"}],staticClass:"user-box"},[s("span",{staticClass:"user"},[t._v(t._s(t.currUsername))]),s("div",{staticClass:"dropdown-content"},[s("a",{on:{click:t.goLogout}},[t._v("登出")])])])])])},l=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"search"},[s("label",{staticClass:"s-logo"}),s("input",{staticClass:"s-input",attrs:{type:"text",placeholder:"搜索"}})])}],c=(e("14d9"),{name:"HeadBar",created(){this.$store.commit("init")},computed:{isLogin(){return this.$store.getters.isLogin},currUsername(){return console.log(this.$store.getters.username),this.$store.getters.username}},methods:{goIndex(){this.$router.push({name:"Home"})},goLogin(){this.$router.push({name:"Login"})},goSignUp(){this.$router.push({name:"SignUp"})},goLogout(){this.$store.commit("logout")}}}),r=c,u=(e("3ce3"),e("2877")),m=Object(u["a"])(r,n,l,!1,null,"75d7d08c",null),d=m.exports,p={components:{HeadBar:d}},v=p,h=(e("18de"),Object(u["a"])(v,i,o,!1,null,null,null)),g=h.exports,f=e("8c4f"),C=function(){var t=this,s=t._self._c;return s("div",{staticClass:"content"},[s("div",{staticClass:"left"},[s("div",{staticClass:"c-l-header"},[s("div",{staticClass:"new btn-iconfont",class:{active:t.timeOrder},on:{click:function(s){return t.selectOrder("time")}}},[s("i",{staticClass:"iconfont icon-polygonred"}),t._v("New ")]),s("div",{staticClass:"top btn-iconfont",class:{active:t.scoreOrder},on:{click:function(s){return t.selectOrder("score")}}},[s("i",{staticClass:"iconfont icon-top"}),t._v("Score ")]),s("button",{staticClass:"btn-publish",on:{click:t.goPublish}},[t._v("发表")])]),s("ul",{staticClass:"c-l-list"},t._l(t.postList,(function(e){return s("li",{key:e.id,staticClass:"c-l-item"},[s("div",{staticClass:"post"},[s("a",{staticClass:"vote"},[s("span",{staticClass:"iconfont icon-up",on:{click:function(s){return t.vote(e.id,"1")}}})]),s("span",{staticClass:"text"},[t._v(t._s(e.vote_num))]),s("a",{staticClass:"vote"},[s("span",{staticClass:"iconfont icon-down",on:{click:function(s){return t.vote(e.id,"-1")}}})])]),s("div",{staticClass:"l-container",on:{click:function(s){return t.goDetail(e.id)}}},[s("h4",{staticClass:"con-title"},[t._v(t._s(e.title))]),s("div",{staticClass:"con-memo"},[s("p",[t._v(t._s(e.content))])])])])})),0)]),t._m(0)])},_=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"right"},[s("div",{staticClass:"communities"},[s("h2",{staticClass:"r-c-title"},[t._v("今日火热频道排行榜")]),s("ul",{staticClass:"r-c-content"},[s("li",{staticClass:"r-c-item"},[s("span",{staticClass:"index"},[t._v("1")]),s("i",{staticClass:"icon"}),t._v(" b/coding ")]),s("li",{staticClass:"r-c-item"},[s("span",{staticClass:"index"},[t._v("2")]),s("i",{staticClass:"icon"}),t._v(" b/tree_hole ")]),s("li",{staticClass:"r-c-item"},[s("span",{staticClass:"index"},[t._v("3")]),s("i",{staticClass:"icon"}),t._v(" b/job ")])]),s("button",{staticClass:"view-all"},[t._v("查看所有")])]),s("div",{staticClass:"r-trending"},[s("h2",{staticClass:"r-t-title"},[t._v("持续热门频道")]),s("ul",{staticClass:"rank"},[s("li",{staticClass:"r-t-cell"},[s("div",{staticClass:"r-t-cell-info"},[s("div",{staticClass:"avatar"}),s("div",{staticClass:"info"},[s("span",{staticClass:"info-title"},[t._v("b/Book")]),s("p",{staticClass:"info-num"},[t._v("7.1k members")])])]),s("button",{staticClass:"join-btn"},[t._v("JOIN")])]),s("li",{staticClass:"r-t-cell"},[s("div",{staticClass:"r-t-cell-info"},[s("div",{staticClass:"avatar"}),s("div",{staticClass:"info"},[s("span",{staticClass:"info-title"},[t._v("b/coding")]),s("p",{staticClass:"info-num"},[t._v("3.2k members")])])]),s("button",{staticClass:"join-btn"},[t._v("JOIN")])]),s("li",{staticClass:"r-t-cell"},[s("div",{staticClass:"r-t-cell-info"},[s("div",{staticClass:"avatar"}),s("div",{staticClass:"info"},[s("span",{staticClass:"info-title"},[t._v("b/job")]),s("p",{staticClass:"info-num"},[t._v("2.5k members")])])]),s("button",{staticClass:"join-btn"},[t._v("JOIN")])])])])])}],b={name:"Home",components:{},data(){return{order:"time",page:1,postList:[]}},methods:{selectOrder(t){this.order=t,this.getPostList()},goPublish(){this.$router.push({name:"Publish"})},goDetail(t){this.$router.push({name:"Content",params:{id:t}})},getPostList(){this.$axios({method:"get",url:"/posts2",params:{page:this.page,order:this.order}}).then(t=>{console.log(t.data,222),1e3==t.code?this.postList=t.data:console.log(t.msg)}).catch(t=>{console.log(t)})},vote(t,s){this.$axios({method:"post",url:"/vote",data:JSON.stringify({post_id:t,direction:s})}).then(t=>{1e3==t.code?console.log("vote success"):console.log(t.msg)}).catch(t=>{console.log(t)})}},mounted:function(){this.getPostList()},computed:{timeOrder(){return"time"==this.order},scoreOrder(){return"score"==this.order}}},w=b,y=(e("36dd"),Object(u["a"])(w,C,_,!1,null,"2baf73fc",null)),x=y.exports,O=function(){var t=this,s=t._self._c;return s("div",{staticClass:"content"},[s("div",{staticClass:"left"},[s("div",{staticClass:"container"},[t._m(0),s("div",{staticClass:"l-container"},[s("h4",{staticClass:"con-title"},[t._v(t._s(t.post.title))]),s("div",{staticClass:"con-info"},[t._v(t._s(t.post.content))]),t._m(1)])])]),s("div",{staticClass:"right"},[s("div",{staticClass:"topic-info"},[s("h5",{staticClass:"t-header"}),s("div",{staticClass:"t-info"},[s("a",{staticClass:"avatar"}),s("span",{staticClass:"topic-name"},[t._v("b/"+t._s(t.post.community_name))])]),s("p",{staticClass:"t-desc"},[t._v("树洞 树洞 无限树洞的树洞")]),t._m(2),s("div",{staticClass:"date"},[t._v("Created Apr 10, 2008")]),s("button",{staticClass:"topic-btn"},[t._v("JOIN")])])])])},L=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"post"},[s("a",{staticClass:"vote"},[s("span",{staticClass:"iconfont icon-up"})]),s("span",{staticClass:"text"},[t._v("50.2k")]),s("a",{staticClass:"vote"},[s("span",{staticClass:"iconfont icon-down"})])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"user-btn"},[s("span",{staticClass:"btn-item"},[s("i",{staticClass:"iconfont icon-comment"}),t._v("comment ")])])},function(){var t=this,s=t._self._c;return s("ul",{staticClass:"t-num"},[s("li",{staticClass:"t-num-item"},[s("p",{staticClass:"number"},[t._v("5.2m")]),s("span",{staticClass:"unit"},[t._v("Members")])]),s("li",{staticClass:"t-num-item"},[s("p",{staticClass:"number"},[t._v("5.2m")]),s("span",{staticClass:"unit"},[t._v("Members")])])])}],k={name:"Content",data(){return{post:{}}},methods:{getPostDetail(){this.$axios({method:"get",url:"/post/"+this.$route.params.id}).then(t=>{console.log(1,t.data),1e3==t.code?this.post=t.data:console.log(t.msg)}).catch(t=>{console.log(t)})}},mounted:function(){this.getPostDetail()}},P=k,S=(e("d706"),Object(u["a"])(P,O,L,!1,null,"4466eba1",null)),$=S.exports,j=function(){var t=this,s=t._self._c;return s("div",{staticClass:"content"},[s("div",{staticClass:"left"},[s("div",{staticClass:"post-name"},[t._v("我好想写点什么")]),s("div",{staticClass:"post-type"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectCommunity.name,expression:"selectCommunity.name"}],staticClass:"post-type-value",attrs:{type:"text",placeholder:"选择一个频道"},domProps:{value:t.selectCommunity.name},on:{click:function(s){return t.showCommunity()},input:function(s){s.target.composing||t.$set(t.selectCommunity,"name",s.target.value)}}}),s("ul",{directives:[{name:"show",rawName:"v-show",value:t.showCommunityList,expression:"showCommunityList"}],staticClass:"post-type-options"},t._l(t.communityList,(function(e,a){return s("li",{key:e.id,staticClass:"post-type-cell",on:{click:function(s){return t.selected(a)}}},[t._v(" "+t._s(e.name)+" ")])})),0),s("i",{staticClass:"p-icon"})]),s("div",{staticClass:"post-content"},[t._m(0),s("div",{staticClass:"post-sub-container"},[s("div",{staticClass:"post-sub-header"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"post-title",attrs:{id:"",cols:"30",rows:"10",placeholder:"标题"},domProps:{value:t.title},on:{input:function(s){s.target.composing||(t.title=s.target.value)}}}),s("span",{staticClass:"textarea-num"},[t._v("0/300")])]),s("div",{staticClass:"post-text-con"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"post-content-t",attrs:{id:"",cols:"30",rows:"10",placeholder:"内容"},domProps:{value:t.content},on:{input:function(s){s.target.composing||(t.content=s.target.value)}}})])]),s("div",{staticClass:"post-footer"},[s("div",{staticClass:"btns"},[s("button",{staticClass:"btn"},[t._v("取消")]),s("button",{staticClass:"btn",on:{click:function(s){return t.submit()}}},[t._v("发表")])])])])]),t._m(1)])},N=[function(){var t=this,s=t._self._c;return s("ul",{staticClass:"cat"},[s("li",{staticClass:"cat-item active"},[s("i",{staticClass:"iconfont icon-edit"}),t._v("post ")]),s("li",{staticClass:"cat-item"},[s("i",{staticClass:"iconfont icon-image"}),t._v("image/video ")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"right"},[s("div",{staticClass:"post-rank"},[s("h5",{staticClass:"p-r-title"},[s("i",{staticClass:"p-r-icon"}),t._v("发帖规范 ")]),s("ul",{staticClass:"p-r-content"},[s("li",{staticClass:"p-r-item"},[t._v("1.网络不是法外之地")]),s("li",{staticClass:"p-r-item"},[t._v("2.网络不是法外之地")]),s("li",{staticClass:"p-r-item"},[t._v("3.网络不是法外之地")])])])])}],R={name:"Publish",data(){return{title:"",content:"",showCommunityList:!1,selectCommunity:{},communityList:[]}},methods:{submit(){this.$axios({method:"post",url:"/post",data:JSON.stringify({title:this.title,content:this.content,community_id:this.selectCommunity.id})}).then(t=>{console.log(t.data),1e3==t.code?this.$router.push({path:this.redirect||"/"}):console.log(t.msg)}).catch(t=>{console.log(t)})},getCommunityList(){this.$axios({method:"get",url:"/community"}).then(t=>{console.log(t.data),1e3==t.code?this.communityList=t.data:console.log(t.msg)}).catch(t=>{console.log(t)})},showCommunity(){this.showCommunityList=!this.showCommunityList},selected(t){this.selectCommunity=this.communityList[t],this.showCommunityList=!1,console.log(this.selectCommunity)}},mounted:function(){this.getCommunityList()}},I=R,J=(e("af7a"),Object(u["a"])(I,j,N,!1,null,"6236a644",null)),U=J.exports,H=function(){var t=this,s=t._self._c;return s("div",{staticClass:"main"},[s("div",{staticClass:"container"},[s("h2",{staticClass:"form-title"},[t._v("登录")]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"name"}},[t._v("用户名")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",name:"name",id:"name",placeholder:"用户名"},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"pass"}},[t._v("密码")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",name:"pass",id:"pass",placeholder:"密码"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),s("div",{staticClass:"form-btn"},[s("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:t.submit}},[t._v("提交")])])])])},M=[],B={name:"Login",data(){return{username:"",password:"",submitted:!1}},computed:{},created(){},methods:{submit(){this.$axios({method:"post",url:"/login",data:JSON.stringify({username:this.username,password:this.password})}).then(t=>{console.log(t.data),1e3==t.code?(localStorage.setItem("loginResult",JSON.stringify(t.data)),this.$store.commit("login",t.data),this.$router.push({path:this.redirect||"/"})):console.log(t.msg)}).catch(t=>{console.log(t)})}}},D=B,A=(e("4a40"),Object(u["a"])(D,H,M,!1,null,"5d78ac92",null)),T=A.exports,q=function(){var t=this,s=t._self._c;return s("div",{staticClass:"main"},[s("div",{staticClass:"container"},[s("h2",{staticClass:"form-title"},[t._v("注册")]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"name"}},[t._v("用户名")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",name:"name",id:"name",placeholder:"用户名"},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"pass"}},[t._v("密码")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",name:"pass",id:"pass",placeholder:"密码"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"re_pass"}},[t._v("确认密码")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.re_password,expression:"re_password"}],staticClass:"form-control",attrs:{type:"password",name:"re_pass",id:"re_pass",placeholder:"确认密码"},domProps:{value:t.re_password},on:{input:function(s){s.target.composing||(t.re_password=s.target.value)}}})]),s("div",{staticClass:"form-btn"},[s("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:t.submit}},[t._v("提交")])])])])},z=[],E={name:"SignUp",data(){return{username:"",password:"",re_password:"",submitted:!1}},computed:{},created(){},methods:{submit(){this.$axios({method:"post",url:"/signup",data:JSON.stringify({username:this.username,password:this.password,re_password:this.re_password})}).then(t=>{console.log(t.data),1e3==t.code?(console.log("signup success"),this.$router.push({name:"Login"})):console.log(t.msg)}).catch(t=>{console.log(t)})}}},F=E,G=(e("fdba"),Object(u["a"])(F,q,z,!1,null,"326a7a12",null)),K=G.exports;const Q=f["a"].prototype.push;f["a"].prototype.push=function(t){return Q.call(this,t).catch(t=>t)},a["a"].use(f["a"]);const V=[{path:"/",name:"Home",component:x},{path:"/post/:id",name:"Content",component:$},{path:"/publish",name:"Publish",component:U,meta:{requireAuth:!0}},{path:"/login",name:"Login",component:T},{path:"/signup",name:"SignUp",component:K}],W=new f["a"]({mode:"history",base:"/",routes:V});var X=W,Y=e("2f62");a["a"].use(Y["a"]);const Z={token:null,user_id:null,user_name:null};var tt=new Y["a"].Store({state:{isLogin:!1,loginResult:Z},mutations:{init(t){let s=JSON.parse(localStorage.getItem("loginResult"));console.log(localStorage.getItem("loginResult")),null!=s&&(t.loginResult=s)},login(t,s){t.loginResult=s},logout(t){localStorage.removeItem("loginResult"),t.loginResult=Z}},actions:{},getters:{isLogin:t=>null!==t.loginResult.user_id,userID:t=>t.loginResult.user_id,username:t=>t.loginResult.user_name,accessToken:t=>t.loginResult.token}}),st=e("bc3a"),et=e.n(st);et.a.defaults.baseURL="/api/v1/",et.a.interceptors.request.use(t=>{let s=JSON.parse(localStorage.getItem("loginResult"));if(s){const e=s.token;t.headers.Authorization="Bearer "+e}return t},t=>Promise.reject(t)),et.a.interceptors.response.use(t=>200===t.status?Promise.resolve(t.data):Promise.reject(t.data),t=>{console.log("error",t)});var at=et.a;a["a"].prototype.$axios=at,a["a"].config.productionTip=!1,X.beforeEach((t,s,e)=>{console.log(t),console.log(s),t.meta.requireAuth?localStorage.getItem("loginResult")||"/login"===t.path?e():e({path:"/login"}):e(),"/login"==t.fullPath&&(localStorage.getItem("loginResult")?e({path:s.fullPath}):e())}),new a["a"]({router:X,store:tt,render:t=>t(g)}).$mount("#app")},"5c31":function(t,s,e){},"6c07":function(t,s,e){},"9d30":function(t,s,e){},af7a:function(t,s,e){"use strict";e("02ea")},d706:function(t,s,e){"use strict";e("deda")},deda:function(t,s,e){},f7ef:function(t,s,e){},fdba:function(t,s,e){"use strict";e("f7ef")}});
//# sourceMappingURL=app.a1071fdc.js.map