(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{275:function(t,C,E){"use strict";E.r(C);var s={created:function(){this.content=unescape("%3Ch1%3EToast%3C/h1%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%3EInstall%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20Toast%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant%27%3C/span%3E%3B%0A%0AVue.use%28Toast%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%3EUsage%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%3EText%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3EToast%28%3Cspan%20class%3D%22hljs-string%22%3E%27Some%20messages%27%3C/span%3E%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%3ELoading%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3EToast.loading%28%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emask%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emessage%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Loading...%27%3C/span%3E%0A%7D%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%3ESuccess/Fail%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3EToast.success%28%3Cspan%20class%3D%22hljs-string%22%3E%27Success%27%3C/span%3E%29%3B%0AToast.fail%28%3Cspan%20class%3D%22hljs-string%22%3E%27Fail%27%3C/span%3E%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%3EAdvanced%20Usage%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20toast%20%3D%20Toast.loading%28%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eduration%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%2C%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20continuous%20display%20toast%3C/span%3E%0A%20%20forbidClick%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20forbid%20click%20background%3C/span%3E%0A%20%20loadingType%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27spinner%27%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emessage%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%273%20seconds%27%3C/span%3E%0A%7D%29%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Elet%3C/span%3E%20second%20%3D%20%3Cspan%20class%3D%22hljs-number%22%3E3%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20timer%20%3D%20setInterval%28%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-params%22%3E%28%29%3C/span%3E%20%3D%26gt%3B%3C/span%3E%20%7B%0A%20%20second--%3B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C/span%3E%20%28second%29%20%7B%0A%20%20%20%20toast.message%20%3D%20%3Cspan%20class%3D%22hljs-string%22%3E%60%3Cspan%20class%3D%22hljs-subst%22%3E%24%7Bsecond%7D%3C/span%3E%20seconds%60%3C/span%3E%3B%0A%20%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Eelse%3C/span%3E%20%7B%0A%20%20%20%20clearInterval%28timer%29%3B%0A%20%20%20%20Toast.clear%28%29%3B%0A%20%20%7D%0A%7D%2C%20%3Cspan%20class%3D%22hljs-number%22%3E1000%3C/span%3E%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%3E%24toast%20Method%3C/h3%3E%0A%3Cp%3EAfter%20import%20the%20Toast%20component%2C%20the%20%24toast%20method%20is%20automatically%20mounted%20on%20Vue.prototype%2C%20making%20it%20easy%20to%20call%20within%20a%20vue%20component.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20mounted%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.%24toast%28%3Cspan%20class%3D%22hljs-string%22%3E%27Some%20messages%27%3C/span%3E%29%3B%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%3ESingleton%3C/h3%3E%0A%3Cp%3EToast%20use%20singleton%20mode%20by%20default%2C%20if%20you%20need%20to%20pop%20multiple%20Toast%20at%20the%20same%20time%2C%20you%20can%20refer%20to%20the%20following%20example%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3EToast.allowMultiple%28%29%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20toast1%20%3D%20Toast%28%3Cspan%20class%3D%22hljs-string%22%3E%27First%20Toast%27%3C/span%3E%29%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20toast2%20%3D%20Toast.success%28%3Cspan%20class%3D%22hljs-string%22%3E%27Second%20Toast%27%3C/span%3E%29%3B%0A%0Atoast1.clear%28%29%3B%0Atoast2.clear%28%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%3EAPI%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%3EMethods%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EMethods%3C/th%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EReturn%20value%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3EToast%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eoptions%20%7C%20message%3C/code%3E%3C/td%3E%0A%3Ctd%3Etoast%20instance%3C/td%3E%0A%3Ctd%3EShow%20toast%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EToast.loading%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eoptions%20%7C%20message%3C/code%3E%3C/td%3E%0A%3Ctd%3Etoast%20instance%3C/td%3E%0A%3Ctd%3EShow%20loading%20toast%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EToast.success%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eoptions%20%7C%20message%3C/code%3E%3C/td%3E%0A%3Ctd%3Etoast%20instance%3C/td%3E%0A%3Ctd%3EShow%20success%20toast%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EToast.fail%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eoptions%20%7C%20message%3C/code%3E%3C/td%3E%0A%3Ctd%3Etoast%20instance%3C/td%3E%0A%3Ctd%3EShow%20fail%20toast%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EToast.clear%3C/td%3E%0A%3Ctd%3E%3Ccode%3EclearAll%3A%20boolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Evoid%3C/code%3E%3C/td%3E%0A%3Ctd%3EClose%20toast%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EToast.allowMultiple%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3E%3Ccode%3Evoid%3C/code%3E%3C/td%3E%0A%3Ctd%3EAllow%20multlple%20toast%20at%20the%20same%20time%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EToast.setDefaultOptions%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eoptions%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Evoid%3C/code%3E%3C/td%3E%0A%3Ctd%3ESet%20default%20options%20of%20all%20toasts%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EToast.resetDefaultOptions%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3E%3Ccode%3Evoid%3C/code%3E%3C/td%3E%0A%3Ctd%3EReset%20default%20options%20of%20all%20toasts%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%3EOptions%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3Cth%3EDefault%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Etype%3C/td%3E%0A%3Ctd%3ECan%20be%20set%20to%20%3Ccode%3Eloading%3C/code%3E%20%3Ccode%3Esuccess%3C/code%3E%20%3Ccode%3Efail%3C/code%3E%20%3Ccode%3Ehtml%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etext%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eposition%3C/td%3E%0A%3Ctd%3ECan%20be%20set%20to%20%3Ccode%3Etop%3C/code%3E%20%3Ccode%3Emiddle%3C/code%3E%20%3Ccode%3Ebottom%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Emiddle%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Emessage%3C/td%3E%0A%3Ctd%3EMessage%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%27%27%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Emask%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20mask%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EforbidClick%3C/td%3E%0A%3Ctd%3EWhether%20to%20forbid%20click%20background%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EloadingType%3C/td%3E%0A%3Ctd%3ELoading%20icon%20type%2C%20can%20be%20set%20to%20%3Ccode%3Espinner%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Ecircular%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eduration%3C/td%3E%0A%3Ctd%3EToast%20duration%28ms%29%2C%20won%27t%20disappear%20if%20value%20is%200%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E3000%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EclassName%3C/td%3E%0A%3Ctd%3ECustom%20className%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%20%7C%20Array%20%7C%20Object%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EonClose%3C/td%3E%0A%3Ctd%3EonClose%20callback%20function%3C/td%3E%0A%3Ctd%3E%3Ccode%3EFunction%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EgetContainer%3C/td%3E%0A%3Ctd%3EReturn%20the%20mount%20node%20for%20Toast%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%20%7C%20%28%29%20%3D%26gt%3B%20HTMLElement%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Ebody%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E")}},d=E(7),a=Object(d.a)(s,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement;return(this._self._c||t)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);C.default=a.exports}}]);