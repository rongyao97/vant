(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{340:function(s,a,C){"use strict";C.r(a);var t={created:function(){this.content=unescape("%3Ch1%3ESku%3C/h1%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%3EInstall%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20Sku%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant%27%3C/span%3E%3B%0A%0AVue.use%28Sku%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%3EUsage%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%3EBasic%20Usage%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-sku%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22showBase%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Asku%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22sku%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Agoods%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22goods%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Agoods-id%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22goodsId%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Ahide-stock%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22sku.hide_stock%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aquota%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22quota%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aquota-used%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22quotaUsed%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Areset-stepper-on-hide%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22resetStepperOnHide%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Areset-selected-sku-on-hide%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22resetSelectedSkuOnHide%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aclose-on-click-overlay%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22closeOnClickOverlay%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Adisable-stepper-input%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22disableStepperInput%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Amessage-config%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22messageConfig%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Ebuy-clicked%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onBuyClicked%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eadd-cart%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onAddCartClicked%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%3ECustom%20Stepper%20Config%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-sku%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22showBase%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Asku%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22sku%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Agoods%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22goods%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Agoods-id%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22goodsId%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Ahide-stock%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22sku.hide_stock%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aquota%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22quota%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aquota-used%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22quotaUsed%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Acustom-stepper-config%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22customStepperConfig%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Ebuy-clicked%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onBuyClicked%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eadd-cart%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onAddCartClicked%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%3EAdvanced%20Usage%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-sku%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22showCustomAction%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Estepper-title%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22Stepper%20title%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Asku%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22sku%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Agoods%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22goods%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Agoods-id%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22goodsId%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Ahide-stock%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22sku.hide_stock%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aquota%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22quota%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aquota-used%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22quotaUsed%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eshow-add-cart-btn%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ereset-stepper-on-hide%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Ainitial-sku%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22initialSku%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Ebuy-clicked%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onBuyClicked%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eadd-cart%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onAddCartClicked%22%3C/span%3E%0A%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20custom%20sku-header-price%20--%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eslot%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22sku-header-price%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eslot-scope%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22props%22%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ediv%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eclass%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22van-sku__goods-price%22%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Espan%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eclass%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22van-sku__price-symbol%22%3C/span%3E%26gt%3B%3C/span%3E%uFFE5%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Espan%3C/span%3E%26gt%3B%3C/span%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Espan%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eclass%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22van-sku__price-num%22%3C/span%3E%26gt%3B%3C/span%3E%7B%7B%20props.price%20%7D%7D%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Espan%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Ediv%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%26gt%3B%3C/span%3E%0A%0A%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20custom%20sku%20actions%20--%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eslot%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22sku-actions%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eslot-scope%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22props%22%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ediv%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eclass%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22van-sku-actions%22%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-button%3C/span%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Esquare%3C/span%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Esize%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22large%22%3C/span%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etype%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22warning%22%3C/span%3E%0A%20%20%20%20%20%20%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eclick%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onPointClicked%22%3C/span%3E%0A%20%20%20%20%20%20%26gt%3B%3C/span%3E%0A%20%20%20%20%20%20%20%20Button%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-button%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20trigger%20sku%20inner%20event%20--%26gt%3B%3C/span%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-button%3C/span%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Esquare%3C/span%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Esize%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22large%22%3C/span%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etype%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22danger%22%3C/span%3E%0A%20%20%20%20%20%20%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eclick%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22props.skuEventBus.%24emit%28%27sku%3Abuy%27%29%22%3C/span%3E%0A%20%20%20%20%20%20%26gt%3B%3C/span%3E%0A%20%20%20%20%20%20%20%20Button%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-button%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Ediv%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-sku%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%3EAPI%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%3EProps%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3Cth%3EDefault%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ev-model%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20sku%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Esku%3C/td%3E%0A%3Ctd%3ESku%20data%3C/td%3E%0A%3Ctd%3E%3Ccode%3EObject%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Egoods%3C/td%3E%0A%3Ctd%3EGoods%20info%3C/td%3E%0A%3Ctd%3E%3Ccode%3EObject%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Egoods-id%3C/td%3E%0A%3Ctd%3EGoods%20id%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%20%7C%20Number%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ehide-stock%3C/td%3E%0A%3Ctd%3EWhether%20to%20hide%20stock%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ehide-quota-text%3C/td%3E%0A%3Ctd%3EWhether%20to%20hide%20quota%20text%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshow-add-cart-btn%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20cart%20button%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Equota%3C/td%3E%0A%3Ctd%3EQuota%20%280%20as%20no%20limit%29%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E0%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Equota-used%3C/td%3E%0A%3Ctd%3EUsed%20quota%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E0%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ereset-stepper-on-hide%3C/td%3E%0A%3Ctd%3EWhether%20to%20reset%20stepper%20when%20hide%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ereset-selected-sku-on-hide%3C/td%3E%0A%3Ctd%3EWhether%20to%20reset%20selected%20sku%20when%20hide%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edisable-stepper-input%3C/td%3E%0A%3Ctd%3EWhether%20to%20disable%20stepper%20input%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclose-on-click-overlay%3C/td%3E%0A%3Ctd%3EWhether%20to%20close%20sku%20popup%20when%20click%20overlay%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Estepper-title%3C/td%3E%0A%3Ctd%3EQuantity%20title%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3EQuantity%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecustom-stepper-config%3C/td%3E%0A%3Ctd%3ECustom%20stepper%20related%20config%3C/td%3E%0A%3Ctd%3E%3Ccode%3EObject%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%7B%7D%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Emessage-config%3C/td%3E%0A%3Ctd%3EMessage%20related%20config%3C/td%3E%0A%3Ctd%3E%3Ccode%3EObject%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%7B%7D%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eget-container%3C/td%3E%0A%3Ctd%3EReturn%20the%20mount%20node%20for%20sku%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%20%7C%20%28%29%20%3D%26gt%3B%20HTMLElement%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%3EEvents%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EEvent%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EArguments%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eadd-cart%3C/td%3E%0A%3Ctd%3ETriggered%20when%20click%20cart%20button%3C/td%3E%0A%3Ctd%3Edata%3A%20Object%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ebuy-clicked%3C/td%3E%0A%3Ctd%3ETriggered%20when%20click%20buy%20button%3C/td%3E%0A%3Ctd%3Edata%3A%20Object%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Estepper-change%3C/td%3E%0A%3Ctd%3ETriggered%20when%20stepper%20value%20changed%3C/td%3E%0A%3Ctd%3Evalue%3A%20number%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Esku-selected%3C/td%3E%0A%3Ctd%3ETriggered%20when%20select%20sku%3C/td%3E%0A%3Ctd%3E%7B%20skuValue%2C%20selectedSku%2C%20selectedSkuComb%20%7D%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eopen-preview%3C/td%3E%0A%3Ctd%3ETriggered%20when%20open%20image%20preview%3C/td%3E%0A%3Ctd%3Edata%3A%20Object%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclose-preview%3C/td%3E%0A%3Ctd%3ETriggered%20when%20close%20image%20preview%3C/td%3E%0A%3Ctd%3Edata%3A%20Object%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%3EMethods%3C/h3%3E%0A%3Cp%3EUse%20ref%20to%20get%20sku%20instance%20and%20call%20instance%20methods%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EName%3C/th%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EReturn%20value%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3EgetSkuData%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3EskuData%3C/td%3E%0A%3Ctd%3EGet%20current%20skuData%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%3ESlots%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EName%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Esku-header%3C/td%3E%0A%3Ctd%3ECustom%20header%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Esku-header-price%3C/td%3E%0A%3Ctd%3ECustom%20header%20price%20area%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Esku-body-top%3C/td%3E%0A%3Ctd%3ECustom%20content%20before%20sku-group%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Esku-group%3C/td%3E%0A%3Ctd%3ECustom%20sku%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eextra-sku-group%3C/td%3E%0A%3Ctd%3EExtra%20custom%20content%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Esku-stepper%3C/td%3E%0A%3Ctd%3ECustom%20stepper%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Esku-messages%3C/td%3E%0A%3Ctd%3ECustom%20messages%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Esku-actions%3C/td%3E%0A%3Ctd%3ECustom%20button%20actions%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%3ESku%20Data%20Structure%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3Esku%3A%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etree%3C/span%3E%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ek%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Color%27%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev%3C/span%3E%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eid%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%2730349%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Red%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EimgUrl%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27https%3A//img.yzcdn.cn/1.jpg%27%3C/span%3E%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eid%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%271215%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Blue%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EimgUrl%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27https%3A//img.yzcdn.cn/2.jpg%27%3C/span%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ek_s%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27s1%27%3C/span%3E%0A%20%20%20%20%7D%0A%20%20%5D%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Elist%3C/span%3E%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eid%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E2259%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eprice%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E100%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Es1%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%271215%27%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Es2%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%271193%27%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Es3%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%270%27%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Estock_num%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E110%3C/span%3E%0A%20%20%20%20%7D%0A%20%20%5D%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eprice%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%271.00%27%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Estock_num%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E227%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecollection_id%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E2261%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Enone_sku%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emessages%3C/span%3E%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Edatetime%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%270%27%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emultiple%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%270%27%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Message%27%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etype%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27text%27%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Erequired%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%271%27%3C/span%3E%0A%20%20%20%20%7D%0A%20%20%5D%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ehide_stock%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%3EinitialSku%20Data%20Structure%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%7B%0A%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20Key%uFF1AskuKeyStr%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20Value%uFF1AskuValueId%3C/span%3E%0A%20%20s1%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%2730349%27%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Es2%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%271193%27%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3EselectedNum%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E3%3C/span%3E%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%3EGoods%20Data%20Structure%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3Egoods%3A%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etitle%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Title%27%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Epicture%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27https%3A//img.yzcdn.cn/1.jpg%27%3C/span%3E%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%3EcustomStepperConfig%20Data%20Structure%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3EcustomStepperConfig%3A%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20custom%20quota%20text%3C/span%3E%0A%20%20quotaText%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27only%205%20can%20buy%27%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20custom%20callback%20when%20over%20limit%3C/span%3E%0A%20%20handleOverLimit%3A%20%3Cspan%20class%3D%22hljs-function%22%3E%28%3Cspan%20class%3D%22hljs-params%22%3Edata%3C/span%3E%29%20%3D%26gt%3B%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20%7B%20action%2C%20limitType%2C%20quota%2C%20quotaUsed%20%7D%20%3D%20data%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C/span%3E%20%28action%20%3D%3D%3D%20%3Cspan%20class%3D%22hljs-string%22%3E%27minus%27%3C/span%3E%29%20%7B%0A%20%20%20%20%20%20Toast%28%3Cspan%20class%3D%22hljs-string%22%3E%27at%20least%20select%20one%27%3C/span%3E%29%3B%0A%20%20%20%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Eelse%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C/span%3E%20%28action%20%3D%3D%3D%20%3Cspan%20class%3D%22hljs-string%22%3E%27plus%27%3C/span%3E%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20const%20%7B%20LIMIT_TYPE%20%7D%20%3D%20Sku.skuConstants%3B%3C/span%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C/span%3E%20%28limitType%20%3D%3D%3D%20LIMIT_TYPE.QUOTA_LIMIT%29%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Elet%3C/span%3E%20msg%20%3D%20%3Cspan%20class%3D%22hljs-string%22%3E%60Buy%20up%20to%20%3Cspan%20class%3D%22hljs-subst%22%3E%24%7Bquota%7D%3C/span%3E%60%3C/span%3E%3B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C/span%3E%20%28quotaUsed%20%26gt%3B%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%29%20msg%20+%3D%20%3Cspan%20class%3D%22hljs-string%22%3E%60%uFF0Cyou%20already%20buy%20%3Cspan%20class%3D%22hljs-subst%22%3E%24%7BquotaUsed%7D%3C/span%3E%60%3C/span%3E%3B%0A%20%20%20%20%20%20%20%20Toast%28msg%29%3B%0A%20%20%20%20%20%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Eelse%3C/span%3E%20%7B%0A%20%20%20%20%20%20%20%20Toast%28%3Cspan%20class%3D%22hljs-string%22%3E%27not%20enough%20stock%27%3C/span%3E%29%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%3EmessageConfig%20Data%20Structure%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3EmessageConfig%3A%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20the%20upload%20image%20callback%3C/span%3E%0A%20%20uploadImg%3A%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-params%22%3E%28%29%3C/span%3E%20%3D%26gt%3B%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Enew%3C/span%3E%20%3Cspan%20class%3D%22hljs-built_in%22%3EPromise%3C/span%3E%28%3Cspan%20class%3D%22hljs-function%22%3E%28%3Cspan%20class%3D%22hljs-params%22%3Eresolve%3C/span%3E%29%20%3D%26gt%3B%3C/span%3E%20%7B%0A%20%20%20%20%20%20setTimeout%28%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-params%22%3E%28%29%3C/span%3E%20%3D%26gt%3B%3C/span%3E%20resolve%28%3Cspan%20class%3D%22hljs-string%22%3E%27https%3A//img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg%21100x100.jpg%27%3C/span%3E%29%2C%20%3Cspan%20class%3D%22hljs-number%22%3E1000%3C/span%3E%29%3B%0A%20%20%20%20%7D%29%3B%0A%20%20%7D%2C%0A%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20max%20file%20size%20%28MB%29%3C/span%3E%0A%20%20uploadMaxSize%3A%20%3Cspan%20class%3D%22hljs-number%22%3E3%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20placehold%20config%3C/span%3E%0A%20%20placeholderMap%3A%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27xxx%27%3C/span%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etel%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27xxx%27%3C/span%3E%2C%0A%20%20%20%20...%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%3EEvents%20Params%20Data%20Structure%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3EskuData%3A%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3EgoodsId%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27946755%27%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emessages%3C/span%3E%3A%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emessage_0%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%2712%27%3C/span%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emessage_1%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%27%3C/span%3E%0A%20%20%7D%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3EcartMessages%3C/span%3E%3A%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%27Message%201%27%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27xxxx%27%3C/span%3E%0A%20%20%7D%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3EselectedNum%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3EselectedSkuComb%3C/span%3E%3A%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eid%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E2257%3C/span%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eprice%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E100%3C/span%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Es1%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%2730349%27%3C/span%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Es2%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%271193%27%3C/span%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Es3%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%270%27%3C/span%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Estock_num%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E111%3C/span%3E%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E")}},E=C(7),n=Object(E.a)(t,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this.$createElement;return(this._self._c||s)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);a.default=n.exports}}]);