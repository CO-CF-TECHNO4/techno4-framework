(function techno4ComponentLoader(e,a){void 0===a&&(a=!0);var r=e.$,s=e.utils,t=e.getDevice,n=(e.getSupport,e.Class),l=(e.Modal,e.ConstructorMethods),i=(e.ModalMethods,e.$jsx,s.extend),o=s.nextTick,c=s.deleteProps;class d extends n{constructor(e,a){void 0===a&&(a={}),super(a,[e]);const s=this,t={el:void 0,inputEl:void 0,inputEvents:"change input compositionend",disableButton:!0,disableButtonEl:void 0,backdropEl:void 0,searchContainer:void 0,searchItem:"li",searchIn:void 0,searchGroup:".list-group",searchGroupTitle:".item-divider, .list-group-title",ignore:".searchbar-ignore",foundEl:".searchbar-found",notFoundEl:".searchbar-not-found",hideOnEnableEl:".searchbar-hide-on-enable",hideOnSearchEl:".searchbar-hide-on-search",backdrop:void 0,removeDiacritics:!0,customSearch:!1,hideDividers:!0,hideGroups:!0,disableOnBackdropClick:!0,expandable:!1,inline:!1};s.useModulesParams(t),s.params=i(t,a);const n=r(s.params.el);if(0===n.length)return s;if(n[0].t4Searchbar)return n[0].t4Searchbar;let l;n[0].t4Searchbar=s;const o=n.parents(".navbar");if(n.parents(".page").length>0)l=n.parents(".page");else if(o.length>0&&(l=r(e.navbar.getPageByEl(o[0])),!l.length)){const e=n.parents(".view").find(".page-current");e[0]&&e[0].t4Page&&e[0].t4Page.navbarEl===o[0]&&(l=e)}let c,d,h,b;a.foundEl?c=r(a.foundEl):"string"==typeof s.params.foundEl&&l&&(c=l.find(s.params.foundEl)),a.notFoundEl?d=r(a.notFoundEl):"string"==typeof s.params.notFoundEl&&l&&(d=l.find(s.params.notFoundEl)),a.hideOnEnableEl?h=r(a.hideOnEnableEl):"string"==typeof s.params.hideOnEnableEl&&l&&(h=l.find(s.params.hideOnEnableEl)),a.hideOnSearchEl?b=r(a.hideOnSearchEl):"string"==typeof s.params.hideOnSearchEl&&l&&(b=l.find(s.params.hideOnSearchEl));const p=s.params.expandable||n.hasClass("searchbar-expandable"),u=s.params.inline||n.hasClass("searchbar-inline");let m,g,E,f;function v(e){e.preventDefault()}function $(e){s.enable(e),s.$el.addClass("searchbar-focused")}function C(){s.$el.removeClass("searchbar-focused"),"aurora"!==e.theme||f&&f.length&&s.params.disableButton||s.query||s.disable()}function y(){const e=s.$inputEl.val().trim();(s.$searchContainer&&s.$searchContainer.length>0&&(s.params.searchIn||s.isVirtualList||s.params.searchIn===s.params.searchItem)||s.params.customSearch)&&s.search(e,!0)}function x(e,a){s.$el.trigger("searchbar:clear",a),s.emit("local::clear searchbarClear",s,a)}function B(e){s.disable(e)}function k(){!s||s&&!s.$el||s.enabled&&(s.$el.removeClass("searchbar-enabled"),s.expandable&&s.$el.parents(".navbar").removeClass("with-searchbar-expandable-enabled with-searchbar-expandable-enabled-no-transition"))}function S(){!s||s&&!s.$el||s.enabled&&(s.$el.addClass("searchbar-enabled"),s.expandable&&s.$el.parents(".navbar").addClass("with-searchbar-expandable-enabled-no-transition"))}return void 0===s.params.backdrop&&(s.params.backdrop=!u&&"aurora"!==e.theme),s.params.backdrop&&(m=s.params.backdropEl?r(s.params.backdropEl):l&&l.length>0?l.find(".searchbar-backdrop"):n.siblings(".searchbar-backdrop"),0===m.length&&(m=r('<div class="searchbar-backdrop"></div>'),l&&l.length?n.parents(l).length>0&&o&&0===n.parents(o).length?m.insertBefore(n):m.insertBefore(l.find(".page-content").eq(0)):m.insertBefore(n))),s.params.searchContainer&&(g=r(s.params.searchContainer)),E=s.params.inputEl?r(s.params.inputEl):n.find('input[type="search"]').eq(0),s.params.disableButton&&(f=s.params.disableButtonEl?r(s.params.disableButtonEl):n.find(".searchbar-disable-button")),i(s,{app:e,view:e.views.get(n.parents(".view")),$el:n,el:n[0],$backdropEl:m,backdropEl:m&&m[0],$searchContainer:g,searchContainer:g&&g[0],$inputEl:E,inputEl:E[0],$disableButtonEl:f,disableButtonEl:f&&f[0],disableButtonHasMargin:!1,$pageEl:l,pageEl:l&&l[0],$navbarEl:o,navbarEl:o&&o[0],$foundEl:c,foundEl:c&&c[0],$notFoundEl:d,notFoundEl:d&&d[0],$hideOnEnableEl:h,hideOnEnableEl:h&&h[0],$hideOnSearchEl:b,hideOnSearchEl:b&&b[0],previousQuery:"",query:"",isVirtualList:g&&g.hasClass("virtual-list"),virtualList:void 0,enabled:!1,expandable:p,inline:u}),s.attachEvents=function(){n.on("submit",v),s.params.disableButton&&s.$disableButtonEl.on("click",B),s.params.disableOnBackdropClick&&s.$backdropEl&&s.$backdropEl.on("click",B),s.expandable&&"ios"===e.theme&&s.view&&o.length&&s.$pageEl&&(s.$pageEl.on("page:beforeout",k),s.$pageEl.on("page:beforein",S)),s.$inputEl.on("focus",$),s.$inputEl.on("blur",C),s.$inputEl.on(s.params.inputEvents,y),s.$inputEl.on("input:clear",x)},s.detachEvents=function(){n.off("submit",v),s.params.disableButton&&s.$disableButtonEl.off("click",B),s.params.disableOnBackdropClick&&s.$backdropEl&&s.$backdropEl.off("click",B),s.expandable&&"ios"===e.theme&&s.view&&o.length&&s.$pageEl&&(s.$pageEl.off("page:beforeout",k),s.$pageEl.off("page:beforein",S)),s.$inputEl.off("focus",$),s.$inputEl.off("blur",C),s.$inputEl.off(s.params.inputEvents,y),s.$inputEl.off("input:clear",x)},s.useModules(),s.init(),s}clear(e){const a=this;if(!a.query&&e&&r(e.target).hasClass("searchbar-clear"))return a.disable(),a;const s=a.value;return a.$inputEl.val("").trigger("change").focus(),a.$el.trigger("searchbar:clear",s),a.emit("local::clear searchbarClear",a,s),a}setDisableButtonMargin(){const e=this;if(e.expandable)return;const a=e.app;e.$disableButtonEl.transition(0).show(),e.$disableButtonEl.css("margin-"+(a.rtl?"left":"right"),-e.disableButtonEl.offsetWidth+"px"),e._clientLeft=e.$disableButtonEl[0].clientLeft,e.$disableButtonEl.transition(""),e.disableButtonHasMargin=!0}enable(e){const a=this;if(a.enabled)return a;const r=a.app,s=t();function n(){if(a.$backdropEl&&(a.$searchContainer&&a.$searchContainer.length||a.params.customSearch)&&!a.$el.hasClass("searchbar-enabled")&&!a.query&&a.backdropShow(),a.$el.addClass("searchbar-enabled"),(!a.$disableButtonEl||a.$disableButtonEl&&0===a.$disableButtonEl.length)&&a.$el.addClass("searchbar-enabled-no-disable-button"),!a.expandable&&a.$disableButtonEl&&a.$disableButtonEl.length>0&&"md"!==r.theme&&(a.disableButtonHasMargin||a.setDisableButtonMargin(),a.$disableButtonEl.css("margin-"+(r.rtl?"left":"right"),"0px")),a.expandable){const e=a.$el.parents(".navbar");if(e.hasClass("navbar-large")&&a.$pageEl){const r=a.$pageEl.find(".page-content"),s=e.find(".title-large");r.addClass("with-searchbar-expandable-enabled"),e.hasClass("navbar-large")&&e.hasClass("navbar-large-collapsed")&&s.length&&r.length&&(r.transition(0),r[0].scrollTop-=s[0].offsetHeight,setTimeout((()=>{r.transition("")}),200))}"md"===r.theme&&e.length?e.addClass("with-searchbar-expandable-enabled"):(e.addClass("with-searchbar-expandable-enabled"),e.hasClass("navbar-large")&&e.addClass("navbar-large-collapsed"))}a.$hideOnEnableEl&&a.$hideOnEnableEl.addClass("hidden-by-searchbar"),a.$el.trigger("searchbar:enable"),a.emit("local::enable searchbarEnable",a)}a.enabled=!0;let l=!1;!0===e&&document.activeElement!==a.inputEl&&(l=!0);return s.ios&&"ios"===r.theme?a.expandable?(l&&a.$inputEl.focus(),n()):(l&&a.$inputEl.focus(),!e||"focus"!==e.type&&!0!==e?n():o((()=>{n()}),400)):(l&&a.$inputEl.focus(),"md"===r.theme&&a.expandable&&a.$el.parents(".page, .view, .navbar-inner, .navbar").scrollLeft(r.rtl?100:0),n()),a}disable(){const e=this;if(!e.enabled)return e;const a=e.app;if(e.$inputEl.val("").trigger("change"),e.$el.removeClass("searchbar-enabled searchbar-focused searchbar-enabled-no-disable-button"),e.expandable){const r=e.$el.parents(".navbar"),s=e.$pageEl&&e.$pageEl.find(".page-content");if(r.hasClass("navbar-large")&&s.length){const a=r.find(".title-large");if(e.$el.transitionEnd((()=>{s.removeClass("with-searchbar-expandable-closing")})),r.hasClass("navbar-large")&&r.hasClass("navbar-large-collapsed")&&a.length){const e=s[0].scrollTop,r=a[0].offsetHeight;e>r&&(s.transition(0),s[0].scrollTop=e+r,setTimeout((()=>{s.transition("")}),200))}s.removeClass("with-searchbar-expandable-enabled").addClass("with-searchbar-expandable-closing")}"md"===a.theme&&r.length?(r.removeClass("with-searchbar-expandable-enabled with-searchbar-expandable-enabled-no-transition").addClass("with-searchbar-expandable-closing"),e.$el.transitionEnd((()=>{r.removeClass("with-searchbar-expandable-closing")}))):(r.removeClass("with-searchbar-expandable-enabled with-searchbar-expandable-enabled-no-transition").addClass("with-searchbar-expandable-closing"),e.$el.transitionEnd((()=>{r.removeClass("with-searchbar-expandable-closing")})),e.$pageEl&&e.$pageEl.find(".page-content").trigger("scroll"))}return!e.expandable&&e.$disableButtonEl&&e.$disableButtonEl.length>0&&"md"!==a.theme&&e.$disableButtonEl.css("margin-"+(a.rtl?"left":"right"),-e.disableButtonEl.offsetWidth+"px"),e.$backdropEl&&(e.$searchContainer&&e.$searchContainer.length||e.params.customSearch)&&e.backdropHide(),e.enabled=!1,e.$inputEl.blur(),e.$hideOnEnableEl&&e.$hideOnEnableEl.removeClass("hidden-by-searchbar"),e.$el.trigger("searchbar:disable"),e.emit("local::disable searchbarDisable",e),e}toggle(){const e=this;return e.enabled?e.disable():e.enable(!0),e}backdropShow(){const e=this;return e.$backdropEl&&e.$backdropEl.addClass("searchbar-backdrop-in"),e}backdropHide(){const e=this;return e.$backdropEl&&e.$backdropEl.removeClass("searchbar-backdrop-in"),e}search(e,a){const s=this;if(s.previousQuery=s.query||"",e===s.previousQuery)return s;a||(s.enabled||s.enable(),s.$inputEl.val(e),s.$inputEl.trigger("input")),s.query=e,s.value=e;const{$searchContainer:t,$el:n,$foundEl:l,$notFoundEl:i,$hideOnSearchEl:o,isVirtualList:c}=s;if(e.length>0&&o?o.addClass("hidden-by-searchbar"):o&&o.removeClass("hidden-by-searchbar"),(t&&t.length&&n.hasClass("searchbar-enabled")||s.params.customSearch&&n.hasClass("searchbar-enabled"))&&(0===e.length?s.backdropShow():s.backdropHide()),s.params.customSearch)return n.trigger("searchbar:search",{query:e,previousQuery:s.previousQuery}),s.emit("local::search searchbarSearch",s,e,s.previousQuery),s;let d,h=[];if(c){if(s.virtualList=t[0].t4VirtualList,""===e.trim())return s.virtualList.resetFilter(),i&&i.hide(),l&&l.show(),n.trigger("searchbar:search",{query:e,previousQuery:s.previousQuery}),s.emit("local::search searchbarSearch",s,e,s.previousQuery),s;if(d=s.params.removeDiacritics?removeDiacritics(e):e,s.virtualList.params.searchAll)h=s.virtualList.params.searchAll(d,s.virtualList.items)||[];else if(s.virtualList.params.searchByItem)for(let e=0;e<s.virtualList.items.length;e+=1)s.virtualList.params.searchByItem(d,s.virtualList.items[e],e)&&h.push(e)}else{let a;a=s.params.removeDiacritics?removeDiacritics(e.trim().toLowerCase()).split(" "):e.trim().toLowerCase().split(" "),t.find(s.params.searchItem).removeClass("hidden-by-searchbar").each((e=>{const t=r(e);let n=[],l=s.params.searchIn?t.find(s.params.searchIn):t;s.params.searchIn===s.params.searchItem&&(l=t),l.each((e=>{let a=r(e).text().trim().toLowerCase();s.params.removeDiacritics&&(a=removeDiacritics(a)),n.push(a)})),n=n.join(" ");let i=0;for(let e=0;e<a.length;e+=1)n.indexOf(a[e])>=0&&(i+=1);i===a.length||s.params.ignore&&t.is(s.params.ignore)?h.push(t[0]):t.addClass("hidden-by-searchbar")})),s.params.hideDividers&&t.find(s.params.searchGroupTitle).each((e=>{const a=r(e),t=a.nextAll(s.params.searchItem);let n=!0;for(let e=0;e<t.length;e+=1){const a=t.eq(e);if(a.is(s.params.searchGroupTitle))break;a.hasClass("hidden-by-searchbar")||(n=!1)}const l=s.params.ignore&&a.is(s.params.ignore);n&&!l?a.addClass("hidden-by-searchbar"):a.removeClass("hidden-by-searchbar")})),s.params.hideGroups&&t.find(s.params.searchGroup).each((e=>{const a=r(e),t=s.params.ignore&&a.is(s.params.ignore);0!==a.find(s.params.searchItem).filter((e=>!r(e).hasClass("hidden-by-searchbar"))).length||t?a.removeClass("hidden-by-searchbar"):a.addClass("hidden-by-searchbar")}))}return 0===h.length?(i&&i.show(),l&&l.hide()):(i&&i.hide(),l&&l.show()),c&&s.virtualList&&s.virtualList.filterItems(h),n.trigger("searchbar:search",{query:e,previousQuery:s.previousQuery,foundItems:h}),s.emit("local::search searchbarSearch",s,e,s.previousQuery,h),s}init(){const e=this;e.expandable&&e.$el&&e.$el.addClass("searchbar-expandable"),e.inline&&e.$el&&e.$el.addClass("searchbar-inline"),e.attachEvents()}destroy(){const e=this;e.emit("local::beforeDestroy searchbarBeforeDestroy",e),e.$el.trigger("searchbar:beforedestroy"),e.detachEvents(),e.$el[0]&&(e.$el[0].t4Searchbar=null,delete e.$el[0].t4Searchbar),c(e)}}var h={name:"searchbar",static:{Searchbar:d},create(){this.searchbar=l({defaultSelector:".searchbar",constructor:d,app:this,domProp:"t4Searchbar",addMethods:"clear enable disable toggle search".split(" ")})},on:{tabMounted(e){const a=this;r(e).find(".searchbar-init").each((e=>{const s=r(e);a.searchbar.create(i(s.dataset(),{el:e}))}))},tabBeforeRemove(e){r(e).find(".searchbar-init").each((e=>{e.t4Searchbar&&e.t4Searchbar.destroy&&e.t4Searchbar.destroy()}))},pageInit(e){const a=this;e.$el.find(".searchbar-init").each((e=>{const s=r(e);a.searchbar.create(i(s.dataset(),{el:e}))})),"ios"===a.theme&&e.view&&e.view.router.dynamicNavbar&&e.$navbarEl&&e.$navbarEl.length>0&&e.$navbarEl.find(".searchbar-init").each((e=>{const s=r(e);a.searchbar.create(i(s.dataset(),{el:e}))}))},pageBeforeRemove(e){e.$el.find(".searchbar-init").each((e=>{e.t4Searchbar&&e.t4Searchbar.destroy&&e.t4Searchbar.destroy()})),"ios"===this.theme&&e.view&&e.view.router.dynamicNavbar&&e.$navbarEl&&e.$navbarEl.length>0&&e.$navbarEl.find(".searchbar-init").each((e=>{e.t4Searchbar&&e.t4Searchbar.destroy&&e.t4Searchbar.destroy()}))}},clicks:{".searchbar-clear":function(e,a){void 0===a&&(a={});const r=this.searchbar.get(a.searchbar);r&&r.clear()},".searchbar-enable":function(e,a){void 0===a&&(a={});const r=this.searchbar.get(a.searchbar);r&&r.enable(!0)},".searchbar-disable":function(e,a){void 0===a&&(a={});const r=this.searchbar.get(a.searchbar);r&&r.disable()},".searchbar-toggle":function(e,a){void 0===a&&(a={});const r=this.searchbar.get(a.searchbar);r&&r.toggle()}},vnode:{"searchbar-init":{insert(e){const a=e.elm,s=r(a);this.searchbar.create(i(s.dataset(),{el:a}))},destroy(e){const a=e.elm;a.t4Searchbar&&a.t4Searchbar.destroy&&a.t4Searchbar.destroy()}}}};if(a){if(e.prototype.modules&&e.prototype.modules[h.name])return;e.use(h),e.instance&&(e.instance.useModuleParams(h,e.instance.params),e.instance.useModule(h))}return h}(techno4, typeof techno4AutoInstallComponent === 'undefined' ? undefined : techno4AutoInstallComponent))