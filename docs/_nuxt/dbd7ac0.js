(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{295:function(t,e,n){var content=n(351);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(96).default)("1b7833da",content,!0,{sourceMap:!1})},296:function(t,e,n){var content=n(353);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(96).default)("1d29cc9f",content,!0,{sourceMap:!1})},297:function(t,e,n){var content=n(355);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(96).default)("109d5866",content,!0,{sourceMap:!1})},310:function(t,e,n){"use strict";n.r(e);n(13);var o=n(10).default.extend({props:{label:String,value:[String,Number],options:Array,id:String,small:{type:String,default:""}},data:function(){return{selected:this.value}}}),r=n(66),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-form-group",[n("b-row",[n("b-col",{attrs:{sm:"3"}},[n("label",{staticClass:"col-form-label",attrs:{for:t.id}},[t._v(t._s(t.label))])]),t._v(" "),n("b-col",{attrs:{sm:"9"}},[n("b-form-select",{attrs:{id:t.id,options:t.options},on:{input:function(e){return t.$emit("input",t.selected)}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t._v(" "),t.small?n("small",{staticClass:"text-muted"},[t._v(t._s(t.small))]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},311:function(t,e,n){"use strict";n.r(e);var o=n(10).default.extend({props:{label:String,value:String,id:String},data:function(){return{newVal:this.value}}}),r=n(66),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-form-group",[n("b-row",[n("b-col",{attrs:{sm:"3"}},[n("label",{staticClass:"col-form-label",attrs:{for:t.id}},[t._v(t._s(t.label))])]),t._v(" "),n("b-col",{attrs:{sm:"9"}},[n("b-form-input",{attrs:{id:t.id},on:{input:function(e){return t.$emit("input",t.newVal)}},model:{value:t.newVal,callback:function(e){t.newVal=e},expression:"newVal"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},350:function(t,e,n){"use strict";var o=n(295);n.n(o).a},351:function(t,e,n){(e=n(95)(!1)).push([t.i,".qr canvas,.qr svg{background:linear-gradient(45deg,rgba(0,0,0,.08) 25%,transparent 0),linear-gradient(45deg,transparent 75%,rgba(0,0,0,.08) 0),linear-gradient(45deg,rgba(0,0,0,.08) 25%,transparent 0),linear-gradient(45deg,transparent 75%,rgba(0,0,0,.08) 0),#fff;background-position:0 0,10px 10px,10px 10px,20px 20px;background-size:20px 20px}",""]),t.exports=e},352:function(t,e,n){"use strict";var o=n(296);n.n(o).a},353:function(t,e,n){(e=n(95)(!1)).push([t.i,"canvas[data-v-54171ca8]{image-rendering:crisp-edges}",""]),t.exports=e},354:function(t,e,n){"use strict";var o=n(297);n.n(o).a},355:function(t,e,n){(e=n(95)(!1)).push([t.i,"canvas[data-v-72a72a78]{image-rendering:crisp-edges}",""]),t.exports=e},356:function(t,e,n){"use strict";n.r(e);n(15),n(25);var o=n(10),r=o.default.extend({props:{value:Object},data:function(){return{name:this.value.name||"",kana:this.value.kana||"",tel:this.value.tel||"",email:this.value.email||"",carrier:this.value.carrier||"",carriers:[{value:"docomo",text:"docomo"},{value:"other",text:"au & SoftBank"}]}},methods:{getModel:function(){var t="";return"docomo"===this.carrier?(t+="MECARD:",this.name&&(t+="N:".concat(this.name,";")),this.kana&&(t+="SOUND:".concat(this.kana,";")),this.tel&&(t+="TEL:".concat(this.tel,";")),this.email&&(t+="EMAIL:".concat(this.email,";"))):(t+="MEMORY:".concat("\r\n"),this.name&&(t+="NAME1:".concat(this.name).concat("\r\n")),this.kana&&(t+="NAME2:".concat(this.kana).concat("\r\n")),this.tel&&(t+="TEL1:".concat(this.tel).concat("\r\n")),this.email&&(t+="MAIL1:".concat(this.email).concat("\r\n"))),{name:this.name,kana:this.kana,tel:this.tel,email:this.email,carrier:this.carrier,text:t}}}}),l=n(66),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("InputField",{attrs:{label:t.$t("contact.name"),id:"cardName"},on:{input:function(e){t.$emit("input",t.getModel())}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("InputField",{attrs:{label:t.$t("contact.kana"),id:"cardNameKane"},on:{input:function(e){t.$emit("input",t.getModel())}},model:{value:t.kana,callback:function(e){t.kana=e},expression:"kana"}}),t._v(" "),n("InputField",{attrs:{label:t.$t("contact.tel"),id:"cardTel"},on:{input:function(e){t.$emit("input",t.getModel())}},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}}),t._v(" "),n("InputField",{attrs:{label:t.$t("contact.email"),id:"cardEmail"},on:{input:function(e){t.$emit("input",t.getModel())}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("ChoiceField",{attrs:{label:t.$t("contact.carrier"),id:"cardCarrier",options:t.carriers},on:{input:function(e){t.$emit("input",t.getModel())}},model:{value:t.carrier,callback:function(e){t.carrier=e},expression:"carrier"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{InputField:n(311).default,ChoiceField:n(310).default})},357:function(t,e,n){"use strict";n.r(e);n(25);var o={props:{value:Object},data:function(){return{bmName:this.value.name||"",bmUrl:this.value.url||""}},methods:{getModel:function(){var t="";return t+="MEBKM:",this.bmName&&(t+="TITLE:".concat(this.bmName,";")),this.bmUrl&&(t+="URL:".concat(this.bmUrl,";")),t+=";",{name:this.bmName,url:this.bmUrl,text:t}}}},r=n(66),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("InputField",{attrs:{label:t.$t("bookmark.title"),id:"bmName"},on:{input:function(e){t.$emit("input",t.getModel())}},model:{value:t.bmName,callback:function(e){t.bmName=e},expression:"bmName"}}),t._v(" "),n("InputField",{attrs:{label:t.$t("bookmark.url"),id:"bmUrl"},on:{input:function(e){t.$emit("input",t.getModel())}},model:{value:t.bmUrl,callback:function(e){t.bmUrl=e},expression:"bmUrl"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{InputField:n(311).default})},358:function(t,e,n){"use strict";n.r(e);n(13);var o=n(10).default.extend({props:{label:String,value:[String,Number],min:[String,Number],max:[String,Number],id:String,small:{type:String,default:""}},data:function(){return{newValue:this.value}}}),r=n(66),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-form-group",[n("b-row",[n("b-col",{attrs:{sm:"3"}},[n("label",{staticClass:"col-form-label",attrs:{for:t.id}},[t._v(t._s(t.label))])]),t._v(" "),n("b-col",{attrs:{sm:"9"}},[n("b-form-input",{attrs:{id:t.id,type:"range",min:t.min,max:t.max},on:{input:function(e){return t.$emit("input",t.newValue)}},model:{value:t.newValue,callback:function(e){t.newValue=e},expression:"newValue"}}),t._v(" "),t.small?n("small",{staticClass:"text-muted"},[t._v(t._s(t.small))]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},359:function(t,e,n){"use strict";n.r(e);var o=n(10).default.extend({props:{labelForeground:String,labelBackground:String,labelInverse:String,value:Object,idPrefix:String},data:function(){return{foreground:this.value.foreground,background:this.value.background}},methods:{newValue:function(){return{foreground:this.foreground,background:this.background}},inverse:function(){var t=this.background;this.background=this.foreground,this.foreground=t}}}),r=n(66),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-form-group",[n("b-row",[n("b-col",{attrs:{sm:"3"}},[n("label",{staticClass:"col-form-label",attrs:{for:t.idPrefix+"Foreground"}},[t._v(t._s(t.labelForeground))])]),t._v(" "),n("b-col",{attrs:{sm:"6"}},[n("b-form-input",{attrs:{type:"color",id:t.idPrefix+"Foreground"},on:{input:function(e){t.$emit("input",t.newValue())}},model:{value:t.foreground,callback:function(e){t.foreground=e},expression:"foreground"}})],1)],1)],1),t._v(" "),n("b-form-group",[n("b-row",[n("b-col",{attrs:{sm:"3"}},[n("label",{staticClass:"col-form-label",attrs:{for:t.idPrefix+"Background"}},[t._v(t._s(t.labelBackground))])]),t._v(" "),n("b-col",{attrs:{sm:"6"}},[n("b-form-input",{attrs:{type:"color",id:t.idPrefix+"Background"},on:{input:function(e){t.$emit("input",t.newValue())}},model:{value:t.background,callback:function(e){t.background=e},expression:"background"}})],1),t._v(" "),n("b-col",{attrs:{sm:"3"}},[n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){t.inverse(),t.$emit("input",t.newValue())}}},[t._v(t._s(t.labelInverse))])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},360:function(t,e,n){"use strict";n.r(e);var o=n(10),r=n(292),l=o.default.extend({props:{data:String,qrOptions:Object,canvasOptions:Object},mounted:function(){this.generate()},data:function(){return{error:""}},watch:{data:function(){this.generate()},qrOptions:function(){this.generate()},canvasOptions:function(){this.generate()}},methods:{generate:function(){this.error="";try{var t=r.generate(this.data,this.qrOptions),canvas=this.$refs.canvas,e=t.drawToCanvas(canvas,this.canvasOptions);this.$emit("input",{qrcode:t,drawer:e,canvas:canvas,supportBlob:void 0!==canvas.toBlob})}catch(t){console.log(t),this.error=t.message}}}}),c=(n(352),n(66)),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[""!==this.error?e("div",{staticClass:"alert alert-danger"},[this._v(this._s(this.error))]):this._e(),this._v(" "),e("canvas",{directives:[{name:"show",rawName:"v-show",value:""===this.error,expression:"error === ''"}],ref:"canvas"})])}),[],!1,null,"54171ca8",null);e.default=component.exports},361:function(t,e,n){"use strict";n.r(e);var o=n(10),r=n(292),l=o.default.extend({props:{data:String,qrOptions:Object,svgOptions:Object},mounted:function(){this.generate()},data:function(){return{error:""}},watch:{data:function(){this.generate()},qrOptions:function(){this.generate()},svgOptions:function(){this.generate()}},methods:{generate:function(){this.error="";try{var t=r.generate(this.data,this.qrOptions),svg=this.$refs.svg,e=t.drawToSvg(svg,this.svgOptions);this.$emit("input",{qrcode:t,drawer:e,svg:svg})}catch(t){console.log(t),this.error=t.message}}}}),c=(n(354),n(66)),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[""!==this.error?e("div",{staticClass:"alert alert-danger"},[this._v(this._s(this.error))]):this._e(),this._v(" "),e("svg",{directives:[{name:"show",rawName:"v-show",value:""===this.error,expression:"error === ''"}],ref:"svg"})])}),[],!1,null,"72a72a78",null);e.default=component.exports},362:function(t,e,n){"use strict";n.r(e);n(35),n(22),n(27),n(50),n(55),n(312);var o=n(292),r=n(10).default.extend({data:function(){for(var t=[],e=o.TYPE_MIN;e<=o.TYPE_MAX;e++)t.push({value:e,text:1===e?this.$t("auto"):e});var data={isIe:-1!==window.navigator.userAgent.toLowerCase().indexOf("trident"),mode:"text",modes:[{text:this.$t("mode.text"),value:"text"},{text:this.$t("mode.contact"),value:"card"},{text:this.$t("mode.bookmark"),value:"bm"}],text:this.$t("examples").toString(),card:{name:"",kana:"",tel:"",email:"",carrier:"docomo",text:" "},bm:{name:"",url:"",text:" "},type:1,types:t,level:o.EccLevel.L,levels:[{value:o.EccLevel.L,text:"L - "+this.$t("options.levelLow")},{value:o.EccLevel.M,text:"M"},{value:o.EccLevel.Q,text:"Q"},{value:o.EccLevel.H,text:"H - "+this.$t("options.levelHigh")}],division:1,divisions:[{value:1,text:this.$t("options.divisionOne")},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:9,text:"9"},{value:16,text:"16"}],thickness:"3",thicknesses:[{value:"1",text:"1"},{value:"2",text:"2"},{value:"3",text:"3"},{value:"4",text:"4"},{value:"5",text:"5"},{value:"6",text:"6"},{value:"7",text:"7"}],color:{foreground:"#000000",background:"#ffffff"},encoding:"utf8",encodings:[{value:"utf8",text:"UTF-8"},{value:"shiftjis",text:"Shift_JIS"}],masking:-1,maskings:[{value:-1,text:this.$t("auto")},{value:0,text:"0"},{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"},{value:6,text:"6"},{value:7,text:"7"}],output:"canvas",outputs:[{value:"canvas",text:"Canvas"},{value:"svg",text:"SVG"}],flipHorizontal:!1,useEci:!1,transparent:!1,debug:!1,qrcode:{drawer:{},canvas:{},supportBlob:!1},qrcodeSvg:{drawer:{},svg:{}},dataUri:"",blobUri:"",dataUriSvg:"",svgBlob:{}};return data},computed:{dataStr:function(){switch(this.mode){case"card":return this.card.text;case"bm":return this.bm.text;default:return this.text}},qrOptions:function(){var t={type:this.type,level:this.level,division:this.division,encoder:{charset:this.encoding,useEci:this.useEci},debug:this.debug};return-1!==this.masking&&(t.mask=this.masking),t},canvasOptions:function(){return{thickness:parseInt(this.thickness),color:this.color.foreground,autoResize:void 0,debug:this.debug,backgroundColor:this.color.background,flipHorizontal:this.flipHorizontal,transparent:this.transparent}},svgOptions:function(){return{thickness:parseInt(this.thickness),color:this.color.foreground,backgroundColor:this.color.background,flipHorizontal:this.flipHorizontal,transparent:this.transparent}}},watch:{qrcode:function(){var t=this;if(this.qrcode.drawer){var e=this.qrcode.drawer;if(this.qrcode.supportBlob)this.qrcode.canvas.toBlob((function(e){null!==e&&(t.blobUri&&URL.revokeObjectURL(t.blobUri),t.blobUri=URL.createObjectURL(e))})),e.toDataUri().then((function(e){null!==e&&(t.dataUri=e)}))}},qrcodeSvg:function(){if(this.qrcodeSvg.drawer){var t=this.qrcodeSvg.drawer;this.svgBlob=t.toBlob(),this.dataUriSvg&&URL.revokeObjectURL(this.dataUriSvg),this.dataUriSvg=URL.createObjectURL(this.svgBlob)}}}}),l=(n(350),n(66)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-container",{staticClass:"mb-4 mt-2"},[n("h1",[n("a",{attrs:{href:"https://github.com/zu-min-g/qrcode"}},[t._v(t._s(t.$t("title")))]),t._v(" — "+t._s(t.$t("subTitle")))])]),t._v(" "),n("b-container",{staticClass:"mb-4"},[n("nuxt-link",{attrs:{to:t.switchLocalePath("en")}},[t._v("English")]),t._v(" / \n        "),n("nuxt-link",{attrs:{to:t.switchLocalePath("ja")}},[t._v("日本語")])],1),t._v(" "),n("b-container",[n("b-row",[n("b-col",{attrs:{md:"6"}},[n("b-form-group",[n("b-form-radio-group",{attrs:{name:"mode",value:"text",options:t.modes},model:{value:t.mode,callback:function(e){t.mode=e},expression:"mode"}})],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"text"===t.mode,expression:"mode === 'text'"}]},[n("b-form-textarea",{attrs:{rows:"3","max-rows":"10"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"card"===t.mode,expression:"mode === 'card'"}]},[n("p",[n("small",{staticClass:"text-muted"},[t._v(t._s(t.$t("noteFunctionsForLegacy")))])]),t._v(" "),n("CardForm",{model:{value:t.card,callback:function(e){t.card=e},expression:"card"}})],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"bm"===t.mode,expression:"mode === 'bm'"}]},[n("p",[n("small",{staticClass:"text-muted"},[t._v(t._s(t.$t("noteFunctionsForLegacy")))])]),t._v(" "),n("BookmarkForm",{model:{value:t.bm,callback:function(e){t.bm=e},expression:"bm"}})],1),t._v(" "),n("hr"),t._v(" "),n("b-container",[n("ChoiceField",{attrs:{label:t.$t("options.type"),id:"qrType",options:t.types,small:t.$t("options.autoExpandsType")},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}}),t._v(" "),n("ChoiceField",{attrs:{label:t.$t("options.eccLevel"),id:"eccLevel",options:t.levels},model:{value:t.level,callback:function(e){t.level=e},expression:"level"}}),t._v(" "),n("ChoiceField",{attrs:{label:t.$t("options.division"),id:"qrDivision",options:t.divisions,small:t.$t("options.noteDivisions")},model:{value:t.division,callback:function(e){t.division=e},expression:"division"}}),t._v(" "),n("RangeField",{attrs:{label:t.$t("options.thickness"),id:"qrThickness",min:"1",max:"7"},model:{value:t.thickness,callback:function(e){t.thickness=e},expression:"thickness"}}),t._v(" "),n("ColorField",{attrs:{labelForeground:t.$t("options.foreground"),labelBackground:t.$t("options.background"),labelInverse:t.$t("options.reverse"),idPrefix:"qrColor"},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}}),t._v(" "),n("ChoiceField",{attrs:{label:t.$t("options.encoding"),id:"qrEncoding",options:t.encodings},model:{value:t.encoding,callback:function(e){t.encoding=e},expression:"encoding"}}),t._v(" "),n("ChoiceField",{attrs:{label:t.$t("options.mask"),id:"qrMasking",options:t.maskings},model:{value:t.masking,callback:function(e){t.masking=e},expression:"masking"}}),t._v(" "),n("b-form-group",[n("b-row",[n("b-col",{attrs:{sm:"3"}},[n("label",{staticClass:"col-form-label"},[t._v(t._s(t.$t("options.output")))])]),t._v(" "),n("b-col",{attrs:{sm:"9"}},[n("b-form-radio-group",{attrs:{name:"output",value:"text",options:t.outputs},model:{value:t.output,callback:function(e){t.output=e},expression:"output"}})],1)],1)],1),t._v(" "),n("b-form-group",[n("b-row",[n("b-col",{attrs:{sm:"3"}},[n("label",{staticClass:"col-form-label"},[t._v(t._s(t.$t("options.options")))])]),t._v(" "),n("b-col",{attrs:{sm:"9"}},[n("b-form-checkbox",{model:{value:t.flipHorizontal,callback:function(e){t.flipHorizontal=e},expression:"flipHorizontal"}},[t._v(t._s(t.$t("options.flipHorizontal")))]),t._v(" "),n("b-form-checkbox",{model:{value:t.useEci,callback:function(e){t.useEci=e},expression:"useEci"}},[t._v(t._s(t.$t("options.useEciHeader"))+" "),n("small",{staticClass:"text-muted"},[t._v(t._s(t.$t("options.someDeviceNotSupportEci")))])]),t._v(" "),n("b-form-checkbox",{model:{value:t.transparent,callback:function(e){t.transparent=e},expression:"transparent"}},[t._v(t._s(t.$t("options.transparent")))]),t._v(" "),n("b-form-checkbox",{model:{value:t.debug,callback:function(e){t.debug=e},expression:"debug"}},[t._v(t._s(t.$t("options.debug")))])],1)],1)],1)],1)],1),t._v(" "),n("b-col",{staticClass:"text-center",attrs:{md:"6"}},["canvas"==t.output?n("div",[n("p",[n("QrCanvas",{staticClass:"qr",attrs:{data:t.dataStr,qrOptions:t.qrOptions,canvasOptions:t.canvasOptions},model:{value:t.qrcode,callback:function(e){t.qrcode=e},expression:"qrcode"}})],1),t._v(" "),t.qrcode.supportBlob?n("div",[n("p",[n("a",{staticClass:"btn btn-primary",attrs:{href:t.dataUri,download:"qr.png"}},[t._v(t._s(t.$t("download")))])]),t._v(" "),n("p",[n("b-textarea",{staticClass:"text-muted",model:{value:t.dataUri,callback:function(e){t.dataUri=e},expression:"dataUri"}})],1)]):t._e()]):t._e(),t._v(" "),"svg"==t.output?n("div",[n("p",[n("QrSvg",{staticClass:"qr",attrs:{data:t.dataStr,qrOptions:t.qrOptions,svgOptions:t.svgOptions},model:{value:t.qrcodeSvg,callback:function(e){t.qrcodeSvg=e},expression:"qrcodeSvg"}})],1),t._v(" "),t.isIe?t._e():n("p",[n("a",{staticClass:"btn btn-primary",attrs:{href:t.dataUriSvg,download:"qr.svg"}},[t._v(t._s(t.$t("download")))])])]):t._e()])],1)],1),t._v(" "),n("b-container",[n("b-row",[n("b-col",[n("small",{staticClass:"text-muted"},[t._v(t._s(t.$t("trademark")))])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardForm:n(356).default,BookmarkForm:n(357).default,ChoiceField:n(310).default,RangeField:n(358).default,ColorField:n(359).default,QrCanvas:n(360).default,QrSvg:n(361).default})}}]);