(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{10:function(e,t,n){"use strict";t.a={FETCH_TREE_DATA:"fetchTreeData",SET_TREE_DATA:"setTreeData"}},112:function(e,t,n){"use strict";var r=n(19),a=n(53),o=(n(180),n(0)),i=Object(o.a)(a.a,r.render,r.staticRenderFns,!1,null,"322e5b2e",null),s=n(5);s.install(n(1)),s.compatible&&(e.hot.accept(),e.hot.data?s.reload("322e5b2e",i.options):s.createRecord("322e5b2e",i.options),e.hot.accept(19,function(e){r=n(19),s.rerender("322e5b2e",{render:r.render,staticRenderFns:r.staticRenderFns})})),i.options.__file="src/components/Common/Tree/TreeItem.vue",t.a=i.exports},13:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"BaseDialog"},[n("div",{staticClass:"BaseDialog_HeaderBtn"},[e.disableCloseButton?e._e():n("button",{staticClass:"BaseDialog_CloseBtn",attrs:{"data-test":"closeBtn"},on:{click:e.close}},[n("FontAwesomeIcon",{attrs:{icon:"close",size:"1x"}})],1)]),e._v(" "),n("div",{ref:"wrapper",staticClass:"BaseDialog_Wrapper"},[e.$slots.header?n("div",{staticClass:"BaseDialog_Header",attrs:{"data-test":"headerSlot"}},[e._t("header")],2):e._e(),e._v(" "),e.$slots.main?n("div",{staticClass:"BaseDialog_Main",class:{_overflowScroll:e.overflowScroll},attrs:{"data-test":"mainSlot"}},[e._t("main")],2):e._e(),e._v(" "),e.$slots.footer?n("div",{staticClass:"BaseDialog_Footer",attrs:{"data-test":"footerSlot"}},[e._t("footer")],2):e._e()])])},a=[];r._withStripped=!0,n.d(t,"render",function(){return r}),n.d(t,"staticRenderFns",function(){return a})},14:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"Tree"},[t("div",[t("input",{staticClass:"Tree_FilterInput",attrs:{type:"text"},on:{keyup:this.onKeyUpFilter}})]),this._v(" "),t("ul",{staticClass:"Tree_List"},[t("TreeItem",{staticClass:"Tree_Item",attrs:{opened:!0,filterWord:this.filterWord,treeData:this.treeData}})],1)])},a=[];r._withStripped=!0,n.d(t,"render",function(){return r}),n.d(t,"staticRenderFns",function(){return a})},16:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[n("section",{staticClass:"OverlayScreen",class:{_transparent:e.transparent},on:{click:function(t){return t.target!==t.currentTarget?null:e.close(t)}}},[e._t("default")],2)])},a=[];r._withStripped=!0,n.d(t,"render",function(){return r}),n.d(t,"staticRenderFns",function(){return a})},17:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"TheHeader"},[t("nav",{staticClass:"TheHeader_MainNav"},[t("button",{staticClass:"TheHeader_IconButton",on:{click:this.openTreeDialog}},[t("FontAwesomeIcon",{attrs:{icon:"search",size:"lg"}})],1),this._v(" "),t("a",{staticClass:"TheHeader_IconLink",attrs:{href:"/"}},[t("FontAwesomeIcon",{attrs:{icon:"home",size:"lg"}})],1)]),this._v(" "),t("span",{staticClass:"TheHeader_PageTitle"},[this._v("\n    "+this._s(this.title)+"\n  ")])])},a=[];r._withStripped=!0,n.d(t,"render",function(){return r}),n.d(t,"staticRenderFns",function(){return a})},176:function(e,t,n){"use strict";var r=n(36);n.n(r).a},177:function(e,t,n){"use strict";var r=n(37);n.n(r).a},178:function(e,t,n){"use strict";var r=n(38);n.n(r).a},18:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this.$createElement;return(this._self._c||e)("FAIcon",{attrs:{icon:this.faIcon,size:this.size,spin:this.spin,pulse:this.pulse}})},a=[];r._withStripped=!0,n.d(t,"render",function(){return r}),n.d(t,"staticRenderFns",function(){return a})},180:function(e,t,n){"use strict";var r=n(39);n.n(r).a},181:function(e,t,n){"use strict";var r=n(40);n.n(r).a},19:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"TreeItem"},[n("div",{staticClass:"TreeItem_Toggle",on:{click:e.toggle}},[e.isDir?n("span",{staticClass:"TreeItem_DirIcon"},[n("FontAwesomeIcon",{directives:[{name:"show",rawName:"v-show",value:!e.open,expression:"!open"}],attrs:{icon:"plus-square",size:"1x"}}),e._v(" "),n("FontAwesomeIcon",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],attrs:{icon:"minus-square",size:"1x"}})],1):n("span",{staticClass:"TreeItem_NodeIcon"},[e._v("└")]),e._v(" "),n("a",{staticClass:"TreeItem_Title",class:{_match:!e.matchFilter},attrs:{href:e.treeData.rootPath}},[e._v("\n      "+e._s(e.treeData.title)+"\n    ")])]),e._v(" "),e.isDir?n("ul",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],staticClass:"TreeItem_List"},e._l(e.treeDataChildren,function(t,r){return n("TreeItem",{key:r,staticClass:"item",attrs:{filterWord:e.filterWord,treeData:t},on:{expand:e.onExpand}})})):e._e()])},a=[];r._withStripped=!0,n.d(t,"render",function(){return r}),n.d(t,"staticRenderFns",function(){return a})},2:function(e,t,n){"use strict";t.a={INIT_PAGE:"INIT_PAGE",FETCH_MARKDOWN:"FETCH_MARKDOWN",SET_MARKDOWN:"SET_MARKDOWN",UPLOAD_IMAGE:"UPLOAD_IMAGE",WRITE_MARKDOWN:"WRITE_MARKDOWN",SET_PAGE_CONTEXT:"SET_PAGE_CONTEXT",FETCH_CONVERTED_HTML:"FETCH_CONVERTED_HTML",SET_CONVERTED_HTML:"SET_CONVERTED_HTML",WRITE_SCREEN_METADATA:"WRITE_SCREEN_METADATA",REMOVE_SCREEN_METADATA:"REMOVE_SCREEN_METADATA"}},36:function(e,t,n){var r=n(67);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=(0,n(4).default)("640c1bf6",r,!1,{});r.locals||e.hot.accept(67,function(){var t=n(67);"string"==typeof t&&(t=[[e.i,t,""]]),a(t)}),e.hot.dispose(function(){a()})},37:function(e,t,n){var r=n(68);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=(0,n(4).default)("119afafa",r,!1,{});r.locals||e.hot.accept(68,function(){var t=n(68);"string"==typeof t&&(t=[[e.i,t,""]]),a(t)}),e.hot.dispose(function(){a()})},38:function(e,t,n){var r=n(69);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=(0,n(4).default)("dd741672",r,!1,{});r.locals||e.hot.accept(69,function(){var t=n(69);"string"==typeof t&&(t=[[e.i,t,""]]),a(t)}),e.hot.dispose(function(){a()})},39:function(e,t,n){var r=n(70);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=(0,n(4).default)("092cf81a",r,!1,{});r.locals||e.hot.accept(70,function(){var t=n(70);"string"==typeof t&&(t=[[e.i,t,""]]),a(t)}),e.hot.dispose(function(){a()})},40:function(e,t,n){var r=n(71);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=(0,n(4).default)("3448e08b",r,!1,{});r.locals||e.hot.accept(71,function(){var t=n(71);"string"==typeof t&&(t=[[e.i,t,""]]),a(t)}),e.hot.dispose(function(){a()})},48:function(e,t,n){"use strict";var r={name:"OverlayScreen",props:{transparent:{type:Boolean,default:!1}},methods:{close:function(){this.$emit("close")}}};t.a=r},50:function(e,t,n){"use strict";var r={name:"TheHeader",components:{FontAwesomeIcon:n(8).a},computed:{title:function(){return window.SCREEN_SPEC_MD.title}},methods:{openTreeDialog:function(){this.$emit("openTreeDialog")}}};t.a=r},51:function(e,t,n){"use strict";n(24),n(25);function r(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}var a={name:"BaseDialog",components:{FontAwesomeIcon:n(8).a},props:{overflowScroll:{type:Boolean,default:!0},disableCloseButton:{type:Boolean,default:!1}},mounted:function(){this.$refs.wrapper&&this.redrawHack(this.$refs.wrapper)},methods:{close:function(){this.$emit("close")},redrawHack:function(e){var t=this;return function(e){return function(){var t=this,n=arguments;return new Promise(function(a,o){var i=e.apply(t,n);function s(e){r(i,a,o,s,c,"next",e)}function c(e){r(i,a,o,s,c,"throw",e)}s(void 0)})}}(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.style.height="auto",n.next=3,t.$nextTick();case 3:e.style.height="";case 4:case"end":return n.stop()}},n,this)}))()}}};t.a=a},52:function(e,t,n){"use strict";var r={name:"Tree",components:{TreeItem:n(112).a},props:{treeData:{type:Object,required:!0}},data:function(){return{filterWord:""}},methods:{onKeyUpFilter:function(e){this.filterWord=e.target.value}}};t.a=r},53:function(e,t,n){"use strict";n(234);var r={name:"TreeItem",components:{FontAwesomeIcon:n(8).a},props:{opened:{type:Boolean,default:!1},filterWord:{type:String,default:""},treeData:{type:Object,required:!0}},data:function(){return{open:!1}},computed:{isDir:function(){return this.treeData.children&&this.treeData.children.length},treeDataChildren:function(){return this.treeData.children},matchFilter:function(){var e=this.treeData.title,t=new RegExp(this.filterWord);return""===this.filterWord||!e||t.test(e)}},watch:{filterWord:function(e){this.matchFilter&&""!==e&&this.$emit("expand")}},mounted:function(){this.opened&&(this.open=!0)},methods:{toggle:function(){this.isDir&&(this.open=!this.open)},onExpand:function(){this.open=!0,this.$emit("expand")}}};t.a=r},54:function(e,t,n){"use strict";var r=n(162),a=n(7),o={name:"FontAwesomeIcon",components:{FAIcon:r.FontAwesomeIcon},props:{icon:{type:String,required:!0},size:{type:String,required:!1,default:"1x"},spin:{type:Boolean,required:!1,default:!1},pulse:{type:Boolean,required:!1,default:!1}},computed:{faIcon:function(){switch(this.icon){case"close":case"times":return a.j;case"home":return a.c;case"edit":return a.a;case"image":return a.d;case"search":return a.g;case"search-plus":return a.i;case"search-minus":return a.h;case"plus-square":return a.f;case"minus-square":return a.e;case"expand-arrows-alt":return a.b;default:return""}}}};t.a=o},67:function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"\n.TheHeader[data-v-9a9f6144] {\n  display: grid;\n  grid-template-rows: 48px;\n  grid-template-columns: 100px 1fr auto;\n  position: relative;\n  height: 48px;\n  background-color: #2f6fad;\n}\n.TheHeader_MainNav[data-v-9a9f6144] {\n    display: grid;\n    grid-template-rows: 48px;\n    grid-template-columns: 50px 50px;\n    grid-column: 1 / 2;\n    align-items: center;\n}\n.TheHeader_IconLink[data-v-9a9f6144] {\n    color: #ffffff;\n    width: 50px;\n    font-size: 12px;\n    text-align: center;\n}\n.TheHeader_IconButton[data-v-9a9f6144] {\n    color: #ffffff;\n    font-size: 12px;\n    text-align: center;\n    min-width: 50px;\n    min-height: 48px;\n    padding: 0;\n    border: none;\n    background: none;\n    margin-right: 0;\n}\n.TheHeader_PageTitle[data-v-9a9f6144] {\n    display: block;\n    color: #ffffff;\n    font-size: 18px;\n    line-height: 48px;\n    padding: 0 0 0 20px;\n    grid-column: 2 / 3;\n}\n.TheHeader_NavForDeveloper[data-v-9a9f6144] {\n    display: grid;\n    grid-template-rows: 48px;\n    grid-template-columns: 50px 50px;\n    grid-column: 3 / 4;\n    align-items: center;\n}\n.TheHeader_Link[data-v-9a9f6144] {\n    color: #ffffff;\n    font-size: 14px;\n    text-align: center;\n}\n",""])},68:function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"\n.OverlayScreen[data-v-1cd48bc8] {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.1);\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-items: center;\n  align-items: center;\n  z-index: 20;\n  user-select: none;\n}\n.OverlayScreen.fade-enter-active[data-v-1cd48bc8], .OverlayScreen.fade-leave-active[data-v-1cd48bc8] {\n    transition: opacity 0.2s;\n}\n.OverlayScreen.fade-enter[data-v-1cd48bc8], .OverlayScreen.fade-leave-to[data-v-1cd48bc8] {\n    opacity: 0;\n}\n.OverlayScreen._transparent[data-v-1cd48bc8] {\n    background-color: transparent;\n}\n",""])},69:function(e,t,n){(e.exports=n(3)(!1)).push([e.i,'\n@charset "UTF-8";\n.BaseDialog[data-v-5fab2bbd] {\n  margin: 0 auto;\n  display: inline-flex;\n  flex-direction: column;\n}\n.BaseDialog_Wrapper[data-v-5fab2bbd] {\n    box-sizing: border-box;\n    min-width: 392px;\n    min-height: 280px;\n    display: inline-flex;\n    flex-direction: column;\n    padding: 32px;\n    background-color: #fff;\n    border-radius: 6px;\n    border: 1px solid #eee;\n    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);\n    height: 100%;\n}\n.BaseDialog_Header[data-v-5fab2bbd] {\n    font-weight: 600;\n    margin-bottom: 24px;\n}\n.BaseDialog_Main[data-v-5fab2bbd] {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: column;\n}\n.BaseDialog_Main._overflowScroll[data-v-5fab2bbd] {\n      overflow: auto;\n      -ms-overflow-style: none;\n}\n.BaseDialog_Footer[data-v-5fab2bbd] {\n    min-height: 40px;\n    margin-top: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.BaseDialog_HeaderBtn[data-v-5fab2bbd] {\n    position: relative;\n    width: 100%;\n}\n.BaseDialog_CloseBtn[data-v-5fab2bbd] {\n    position: absolute;\n    cursor: pointer;\n    /*top: 16px;*/\n    /*right: 16px;*/\n    /* アイコンがなくて見栄え上の変更 */\n    top: 15px;\n    right: 17px;\n    border: none;\n    padding: 0;\n    margin: 0;\n    background-color: transparent;\n    color: #999999;\n}\n.BaseDialog_CloseBtn[data-v-5fab2bbd]:hover {\n      color: #666;\n}\n',""])},70:function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"\n.TreeItem_Toggle[data-v-322e5b2e] {\n  cursor: pointer;\n}\n.TreeItem_DirIcon[data-v-322e5b2e] {\n  color: #666666;\n}\n.TreeItem_NodeIcon[data-v-322e5b2e] {\n  color: #999999;\n}\n.TreeItem_Title[data-v-322e5b2e]:hover {\n  color: #555555;\n}\n.TreeItem_Title._match[data-v-322e5b2e] {\n  color: #bbbbbb;\n}\n.TreeItem_List[data-v-322e5b2e] {\n  list-style: none;\n  padding-left: 20px;\n}\n",""])},71:function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"\n.Tree_FilterInput[data-v-e919733c] {\n  padding: 5px;\n  width: 300px;\n  height: 35px;\n  box-sizing: border-box;\n  outline: 0;\n}\n.Tree_List[data-v-e919733c] {\n  overflow: scroll;\n  height: 80vh;\n  width: 600px;\n  padding-left: 0;\n  list-style: none;\n}\n",""])},78:function(e,t,n){"use strict";var r=n(17),a=n(50),o=(n(176),n(0)),i=Object(o.a)(a.a,r.render,r.staticRenderFns,!1,null,"9a9f6144",null),s=n(5);s.install(n(1)),s.compatible&&(e.hot.accept(),e.hot.data?s.reload("9a9f6144",i.options):s.createRecord("9a9f6144",i.options),e.hot.accept(17,function(e){r=n(17),s.rerender("9a9f6144",{render:r.render,staticRenderFns:r.staticRenderFns})})),i.options.__file="src/components/TheHeader.vue",t.a=i.exports},79:function(e,t,n){"use strict";var r=n(16),a=n(48),o=(n(177),n(0)),i=Object(o.a)(a.a,r.render,r.staticRenderFns,!1,null,"1cd48bc8",null),s=n(5);s.install(n(1)),s.compatible&&(e.hot.accept(),e.hot.data?s.reload("1cd48bc8",i.options):s.createRecord("1cd48bc8",i.options),e.hot.accept(16,function(e){r=n(16),s.rerender("1cd48bc8",{render:r.render,staticRenderFns:r.staticRenderFns})})),i.options.__file="src/components/Common/OverlayScreen.vue",t.a=i.exports},8:function(e,t,n){"use strict";var r=n(18),a=n(54),o=n(0),i=Object(o.a)(a.a,r.render,r.staticRenderFns,!1,null,null,null),s=n(5);s.install(n(1)),s.compatible&&(e.hot.accept(),e.hot.data?s.reload("436565ce",i.options):s.createRecord("436565ce",i.options),e.hot.accept(18,function(e){r=n(18),s.rerender("436565ce",{render:r.render,staticRenderFns:r.staticRenderFns})})),i.options.__file="src/components/Common/FontAwesomeIcon.vue",t.a=i.exports},80:function(e,t,n){"use strict";var r=n(13),a=n(51),o=(n(178),n(0)),i=Object(o.a)(a.a,r.render,r.staticRenderFns,!1,null,"5fab2bbd",null),s=n(5);s.install(n(1)),s.compatible&&(e.hot.accept(),e.hot.data?s.reload("5fab2bbd",i.options):s.createRecord("5fab2bbd",i.options),e.hot.accept(13,function(e){r=n(13),s.rerender("5fab2bbd",{render:r.render,staticRenderFns:r.staticRenderFns})})),i.options.__file="src/components/Common/BaseDialog.vue",t.a=i.exports},81:function(e,t,n){"use strict";var r=n(14),a=n(52),o=(n(181),n(0)),i=Object(o.a)(a.a,r.render,r.staticRenderFns,!1,null,"e919733c",null),s=n(5);s.install(n(1)),s.compatible&&(e.hot.accept(),e.hot.data?s.reload("e919733c",i.options):s.createRecord("e919733c",i.options),e.hot.accept(14,function(e){r=n(14),s.rerender("e919733c",{render:r.render,staticRenderFns:r.staticRenderFns})})),i.options.__file="src/components/Common/Tree.vue",t.a=i.exports},83:function(e,t,n){"use strict";var r=n(1),a=n(6),o=(n(24),n(25),n(62)),i=n.n(o),s=n(10);function c(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}var u=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},s.a.FETCH_TREE_DATA,function(e){var t=e.commit;return function(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){c(o,r,a,i,s,"next",e)}function s(e){c(o,r,a,i,s,"throw",e)}i(void 0)})}}(regeneratorRuntime.mark(function e(){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/tree.json");case 2:return n=e.sent,r=n.data,e.abrupt("return",t(s.a.SET_TREE_DATA,{treeData:r}));case 5:case"end":return e.stop()}},e,this)}))()});var l,d=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},s.a.SET_TREE_DATA,function(e,t){var n=t.treeData;e.treeData=n}),p={},f=function(){return{treeData:{}}},h=n(2);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=(m(l={},h.a.INIT_PAGE,function(e){e.editable="true"===window.SCREEN_SPEC_MD.editable,e.body=window.SCREEN_SPEC_MD.convertedHtml,e.updatedDate=window.SCREEN_SPEC_MD.updatedDate,e.updatedAuthorName=window.SCREEN_SPEC_MD.updatedAuthorName,e.createdDate=window.SCREEN_SPEC_MD.createdDate,e.createdAuthorName=window.SCREEN_SPEC_MD.createdAuthorName}),m(l,h.a.SET_MARKDOWN,function(e,t){var n=t.markdown;e.markdown=n}),m(l,h.a.SET_PAGE_CONTEXT,function(e,t){var n=t.editable,r=t.toRoot,a=t.title,o=t.screen,i=t.absolutesScreen,s=t.svgCanvas,c=t.body,u=t.updatedAuthorName,l=t.updatedDate,d=t.createdAuthorName,p=t.createdDate;e.editable="true"===n,e.toRoot=r,e.title=a,e.screen=o,e.absolutesScreen=i,e.svgCanvas=s,e.body=c,e.updatedAuthorName=u,e.updatedDate=l,e.createdAuthorName=d,e.createdDate=p}),m(l,h.a.SET_CONVERTED_HTML,function(e,t){var n=t.html;e.convertedHtml=n}),l);n(123),n(124),n(35),n(61),n(175),n(110);function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b,T={"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-cache, no-store, must-revalidate"},g=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.axios=i.a.create({headers:T})}return function(e,t,n){t&&_(e.prototype,t),n&&_(e,n)}(e,[{key:"_request",value:function(e){var t=e.method,n=void 0===t?"GET":t,r=e.url,a=e.data,o=e.params;return this.axios({method:n,url:"".concat("").concat("").concat(r),data:a,params:o})}},{key:"fetchTree",value:function(e){var t=e.path;return this._request({url:"/tree.json",params:{path:t}})}},{key:"fetchMarkdown",value:function(e){var t=e.path;return this._request({url:"/__markdown",params:{path:t}})}},{key:"writeMarkdown",value:function(e){var t=e.path,n=e.markdown;return this._request({url:"/__markdown",method:"POST",data:{path:t,markdown:n}})}},{key:"writeMetadataScreen",value:function(e){var t=e.path,n=e.screenMetadata;return this._request({url:"/__screenMetadata",method:"POST",data:{path:t,screenMetadata:n}})}},{key:"removeMetadataScreen",value:function(e){var t=e.path;return this._request({url:"/__removeScreenMetadata",method:"PATCH",data:{path:t}})}},{key:"fetchConvertedHtml",value:function(e){var t=e.markdown;return this._request({url:"/__html",method:"POST",data:{markdown:t}})}},{key:"uploadImage",value:function(e){var t=e.formData;return this._request({url:"/__uploadImage",method:"POST",data:t})}}]),e}());function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function x(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}function D(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){x(o,r,a,i,s,"next",e)}function s(e){x(o,r,a,i,s,"throw",e)}i(void 0)})}}var R=function(){return location.pathname.replace(/^\//,"")},y=function(e,t){var n=new FormData;return n.append("imagePath",t),n.append("filePath",location.pathname),n.append("image",e),n},C={editable:{namespaced:!0,state:{markdown:null,convertedHtml:null,editable:null,toRoot:null,title:null,screen:null,absolutesScreen:null,svgCanvas:null,body:null,updatedAuthorName:null,updatedDate:null,createdAuthorName:null,createdDate:null},mutations:v,actions:(w(b={},h.a.FETCH_MARKDOWN,function(e){var t=e.commit;return D(regeneratorRuntime.mark(function e(){var n,r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=location.pathname,e.next=3,g.fetchMarkdown({path:n});case 3:r=e.sent,a=r.data,t(h.a.SET_MARKDOWN,{markdown:a});case 6:case"end":return e.stop()}},e,this)}))()}),w(b,h.a.FETCH_CONVERTED_HTML,function(e,t){var n=e.commit,r=t.markdown;return D(regeneratorRuntime.mark(function e(){var t,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.fetchConvertedHtml({markdown:r});case 2:t=e.sent,a=t.data.html,n(h.a.SET_CONVERTED_HTML,{html:a});case 5:case"end":return e.stop()}},e,this)}))()}),w(b,h.a.UPLOAD_IMAGE,function(e,t){e.commit;var n=t.imageFile,r=t.imagePath;return D(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.uploadImage({formData:y(n,r)});case 2:return t=e.sent,e.abrupt("return",t.data.context);case 4:case"end":return e.stop()}},e,this)}))()}),w(b,h.a.WRITE_MARKDOWN,function(e,t){var n=e.commit,r=t.markdown;return D(regeneratorRuntime.mark(function e(){var t,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=R(),e.next=3,g.writeMarkdown({path:t,markdown:r});case 3:a=e.sent,n(h.a.SET_PAGE_CONTEXT,a.data.context),n(h.a.SET_MARKDOWN,{markdown:r});case 6:case"end":return e.stop()}},e,this)}))()}),w(b,h.a.WRITE_SCREEN_METADATA,function(e,t){var n=e.commit,r=t.screenMetadata,a=t.fileToUpload,o=void 0===a?null:a,i=t.imagePath,s=void 0===i?"":i;return D(regeneratorRuntime.mark(function e(){var t,a,i,c,u,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=R(),a=g.writeMetadataScreen({path:t,screenMetadata:r}),i=o?g.uploadImage({formData:y(o,s)}):Promise.resolve(),e.next=5,Promise.all([a,i]);case 5:return c=e.sent,u=E(c,2),l=u[0],u[1],n(h.a.SET_PAGE_CONTEXT,l.data.context),e.abrupt("return",l.data.context);case 11:case"end":return e.stop()}},e,this)}))()}),w(b,h.a.REMOVE_SCREEN_METADATA,function(e){var t=e.commit;return D(regeneratorRuntime.mark(function e(){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=R(),e.next=3,g.removeMetadataScreen({path:n});case 3:r=e.sent,t(h.a.SET_PAGE_CONTEXT,r.data.context);case 5:case"end":return e.stop()}},e,this)}))()}),b),getters:{}}};r.default.use(a.a);t.a=function(){return new a.a.Store({state:f,actions:u,mutations:d,getters:p,modules:C})}}}]);
//# sourceMappingURL=index~plain-spec.bundle.js.map