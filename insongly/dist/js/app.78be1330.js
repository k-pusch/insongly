(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)i=s[l],o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var p=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},2:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("14c6"),n("08c1"),n("4842"),n("d9fc");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v(" BE EXCELLENT TO EACHOTHER ")]),n("b",{staticStyle:{display:"block"}},[e._v(" lets hack insongly! ")]),n("h6",[e._v(" made with 🤝 by paulina kevin and kristina ")]),n("div",[n("canvas",{attrs:{id:"paper"}})])])}],i=n("bc3a"),s=n.n(i),c=n("2222"),u=n("be8d"),p={name:"app",data:function(){return{paper:null,spotify:null,kevinsId:"1142850619",clientId:"ab9932d6575b4af28b33bf66c439a60e",accessToken:"BQDf2BGl1VDlFyykoMvCNsaprTe7BTzb9vfmRTa1JFXTA43vk5YKhtq5J-vq3IXnkhxjXZt-tMnk84skPJcxyhWszgsOQ0J9OdWjL2GDCh96W3zw8bckxDgPv_QpfI2jqqsSxvMOaqH24T2wD6sgKelVWgUYrfz2gBbb2co5LwRcexQYYCGyNiZT7dKnF6BCQZaPdrqyt3xE"}},methods:{},components:{},mounted:function(){this.spotify=new u,this.paper=c["setup"](document.getElementById("paper"));var e=new this.paper.Path;e.strokeColor="red",e.moveTo(new this.paper.Point(200*Math.random(),200*Math.random())),e.lineTo(new this.paper.Point(200*Math.random(),200*Math.random())),this.paper.view.draw(),s.a.get("https://accounts.spotify.com/authorize?client_id=".concat(this.clientId,"&response_type=code&")).then(function(e){console.log(e)}),this.spotify.setAccessToken(this.accessToken),this.spotify.getUserPlaylists("puschmaster").then(function(e){console.log("User playlists",e)},function(e){console.error(e)})}},l=p,f=(n("5c0b"),n("2877")),d=Object(f["a"])(l,o,a,!1,null,null,null),h=d.exports,v=n("2f62");r["a"].use(v["a"]);var b=new v["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({store:b,render:function(e){return e(h)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){}});
//# sourceMappingURL=app.78be1330.js.map