(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{217:function(t,e,l){"use strict";l.r(e);var n=l(1).default.extend({props:{label:String,value:[String,Number],options:Array,id:String,small:{type:String,default:""}},data(){return{selected:this.value}}}),r=l(39),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("b-form-group",[l("b-row",[l("b-col",{attrs:{sm:"3"}},[l("label",{staticClass:"col-form-label",attrs:{for:t.id}},[t._v(t._s(t.label))])]),t._v(" "),l("b-col",{attrs:{sm:"9"}},[l("b-form-select",{attrs:{id:t.id,options:t.options},on:{input:function(e){return t.$emit("input",t.selected)}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t._v(" "),t.small?l("small",{staticClass:"text-muted"},[t._v(t._s(t.small))]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);