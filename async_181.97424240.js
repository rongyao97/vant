(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{213:function(t,e,n){"use strict";n.r(e);var a={i18n:{"zh-CN":{text:"文本",customIndexList:"自定义索引列表"},"en-US":{text:"Text",customIndexList:"Custom Index List"}},data:function(){for(var t=[],e="A".charCodeAt(0),n=0;n<26;n++)t.push(String.fromCharCode(e+n));return{activeTab:0,indexList:t,customIndexList:[1,2,3,4,5,6,8,9,10]}}},i=n(7),s=Object(i.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("demo-section",[n("van-tabs",{model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[n("van-tab",{attrs:{title:t.$t("basicUsage")}},[n("van-index-bar",t._l(t.indexList,function(e){return n("div",{key:e},[n("van-index-anchor",{attrs:{index:e}}),n("van-cell",{attrs:{title:t.$t("text")}}),n("van-cell",{attrs:{title:t.$t("text")}}),n("van-cell",{attrs:{title:t.$t("text")}})],1)}),0)],1),n("van-tab",{attrs:{title:t.$t("customIndexList")}},[n("van-index-bar",{attrs:{"index-list":t.customIndexList}},t._l(t.customIndexList,function(e){return n("div",{key:e},[n("van-index-anchor",{attrs:{index:e}},[t._v("\n            "+t._s(t.$t("title")+e)+"\n          ")]),n("van-cell",{attrs:{title:t.$t("text")}}),n("van-cell",{attrs:{title:t.$t("text")}}),n("van-cell",{attrs:{title:t.$t("text")}})],1)}),0)],1)],1)],1)},[],!1,null,null,null);e.default=s.exports}}]);