(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{264:function(e,t,r){var content=r(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(89).default)("01b7e57e",content,!0,{sourceMap:!1})},297:function(e,t,r){"use strict";r(264)},298:function(e,t,r){var n=r(88)(!1);n.push([e.i,"canvas[data-v-9dcde37c]{image-rendering:crisp-edges}",""]),e.exports=n},321:function(e,t,r){"use strict";r.r(t);var n=r(7),o=r(258),c=n.default.extend({props:{data:String,qrOptions:Object,svgOptions:Object},mounted:function(){this.generate()},data:function(){return{error:""}},watch:{data:function(){this.generate()},qrOptions:function(){this.generate()},svgOptions:function(){this.generate()}},methods:{generate:function(){this.error="";try{var e=o.generate(this.data,this.qrOptions),svg=this.$refs.svg,t=e.drawToSvg(svg,this.svgOptions);this.$emit("input",{qrcode:e,drawer:t,svg:svg})}catch(e){console.log(e),this.error=e.message}}}}),d=(r(297),r(65)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[""!==e.error?r("div",{staticClass:"alert alert-danger"},[e._v(e._s(e.error))]):e._e(),e._v(" "),r("svg",{directives:[{name:"show",rawName:"v-show",value:""===e.error,expression:"error === ''"}],ref:"svg"})])}),[],!1,null,"9dcde37c",null);t.default=component.exports}}]);