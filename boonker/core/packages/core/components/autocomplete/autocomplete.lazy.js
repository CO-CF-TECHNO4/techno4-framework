(function techno4ComponentLoader(e,t){void 0===t&&(t=!0);var o=e.$,a=e.utils,n=e.getDevice,r=(e.getSupport,e.Class),l=(e.Modal,e.ConstructorMethods),p=(e.ModalMethods,e.$jsx),s=a.extend,d=a.id,i=a.nextTick,c=a.iosPreloaderContent,u=a.mdPreloaderContent,m=a.auroraPreloaderContent,h=a.deleteProps;class v extends r{constructor(e,t){void 0===t&&(t={}),super(t,[e]);const a=this;a.app=e;const r=n(),l=s({on:{}},e.params.autocomplete);let p,c;void 0===l.searchbarDisableButton&&(l.searchbarDisableButton="aurora"!==e.theme),a.useModulesParams(l),a.params=s(l,t),a.params.openerEl&&(p=o(a.params.openerEl),p.length&&(p[0].t4Autocomplete=a)),a.params.inputEl&&(c=o(a.params.inputEl),c.length&&(c[0].t4Autocomplete=a));const u=d();let m=t.url;!m&&p&&p.length&&(p.attr("href")?m=p.attr("href"):p.find("a").length>0&&(m=p.find("a").attr("href"))),m&&"#"!==m&&""!==m||(m=a.params.url);const h=a.params.multiple?"checkbox":"radio";s(a,{$openerEl:p,openerEl:p&&p[0],$inputEl:c,inputEl:c&&c[0],id:u,url:m,value:a.params.value||[],inputType:h,inputName:`${h}-${u}`,$modalEl:void 0,$dropdownEl:void 0});let v="";function f(){let e=a.$inputEl.val().trim();a.params.source&&a.params.source.call(a,e,(t=>{let o="";const n=a.params.limit?Math.min(a.params.limit,t.length):t.length;let r,l,p;a.items=t,a.params.highlightMatches&&(e=e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),r=new RegExp(`(${e})`,"i"));for(let e=0;e<n;e+=1){const n="object"==typeof t[e]?t[e][a.params.valueProperty]:t[e],s="object"==typeof t[e]?t[e][a.params.textProperty]:t[e];0===e&&(l=n,p=a.items[e]),o+=a.renderItem({value:n,text:a.params.highlightMatches?s.replace(r,"<b>$1</b>"):s},e)}if(""===o&&""===e&&a.params.dropdownPlaceholderText&&(o+=a.renderItem({placeholder:!0,text:a.params.dropdownPlaceholderText})),a.$dropdownEl.find("ul").html(o),a.params.typeahead){if(!l||!p)return;if(0!==l.toLowerCase().indexOf(e.toLowerCase()))return;if(v.toLowerCase()===e.toLowerCase())return void(a.value=[]);if(0===v.toLowerCase().indexOf(e.toLowerCase()))return v=e,void(a.value=[]);c.val(l),c[0].setSelectionRange(e.length,l.length);const t="object"==typeof a.value[0]?a.value[0][a.params.valueProperty]:a.value[0];t&&l.toLowerCase()===t.toLowerCase()||(a.value=[p],a.emit("local::change autocompleteChange",[p]))}v=e}))}function g(){const e=this,t=e.value;let n,r,l;if(o(e).parents(".autocomplete-values").length>0){if("checkbox"===a.inputType&&!e.checked){for(let e=0;e<a.value.length;e+=1)l="string"==typeof a.value[e]?a.value[e]:a.value[e][a.params.valueProperty],l!==t&&1*l!=1*t||a.value.splice(e,1);a.updateValues(),a.emit("local::change autocompleteChange",a.value)}}else{for(let e=0;e<a.items.length;e+=1)r="object"==typeof a.items[e]?a.items[e][a.params.valueProperty]:a.items[e],r!==t&&1*r!=1*t||(n=a.items[e]);if("radio"===a.inputType)a.value=[n];else if(e.checked)a.value.push(n);else for(let e=0;e<a.value.length;e+=1)l="object"==typeof a.value[e]?a.value[e][a.params.valueProperty]:a.value[e],l!==t&&1*l!=1*t||a.value.splice(e,1);a.updateValues(),("radio"===a.inputType&&e.checked||"checkbox"===a.inputType)&&a.emit("local::change autocompleteChange",a.value)}}function b(e){const t=o(e.target);t.is(a.$inputEl[0])||a.$dropdownEl&&t.closest(a.$dropdownEl[0]).length||a.close()}function w(){a.open()}function $(){a.open()}function E(){a.$dropdownEl.find("label.active-state").length>0||setTimeout((()=>{a.close()}),0)}function C(){a.positionDropdown()}function y(e){if(!a.opened)return;if(27===e.keyCode)return e.preventDefault(),void a.$inputEl.blur();if(13===e.keyCode){const t=a.$dropdownEl.find(".autocomplete-dropdown-selected label");return t.length?(e.preventDefault(),t.trigger("click"),void a.$inputEl.blur()):void(a.params.typeahead&&(e.preventDefault(),a.$inputEl.blur()))}if(40!==e.keyCode&&38!==e.keyCode)return;e.preventDefault();const t=a.$dropdownEl.find(".autocomplete-dropdown-selected");let o;t.length?(o=t[40===e.keyCode?"next":"prev"]("li"),o.length||(o=a.$dropdownEl.find("li").eq(40===e.keyCode?0:a.$dropdownEl.find("li").length-1))):o=a.$dropdownEl.find("li").eq(40===e.keyCode?0:a.$dropdownEl.find("li").length-1),o.hasClass("autocomplete-dropdown-placeholder")||(t.removeClass("autocomplete-dropdown-selected"),o.addClass("autocomplete-dropdown-selected"))}function P(){const e=o(this);let t;for(let o=0;o<a.items.length;o+=1){const n="object"==typeof a.items[o]?a.items[o][a.params.valueProperty]:a.items[o],r=e.attr("data-value");n!==r&&1*n!=1*r||(t=a.items[o])}a.params.updateInputValueOnSelect&&(a.$inputEl.val("object"==typeof t?t[a.params.valueProperty]:t),a.$inputEl.trigger("input change")),a.value=[t],a.emit("local::change autocompleteChange",[t]),a.close()}return a.attachEvents=function(){"dropdown"!==a.params.openIn&&a.$openerEl&&a.$openerEl.on("click",w),"dropdown"===a.params.openIn&&a.$inputEl&&(a.$inputEl.on("focus",$),a.$inputEl.on(a.params.inputEvents,f),r.android?o("html").on("click",b):a.$inputEl.on("blur",E),a.$inputEl.on("keydown",y))},a.detachEvents=function(){"dropdown"!==a.params.openIn&&a.$openerEl&&a.$openerEl.off("click",w),"dropdown"===a.params.openIn&&a.$inputEl&&(a.$inputEl.off("focus",$),a.$inputEl.off(a.params.inputEvents,f),r.android?o("html").off("click",b):a.$inputEl.off("blur",E),a.$inputEl.off("keydown",y))},a.attachDropdownEvents=function(){a.$dropdownEl.on("click","label",P),e.on("resize",C)},a.detachDropdownEvents=function(){a.$dropdownEl.off("click","label",P),e.off("resize",C)},a.attachPageEvents=function(){a.$el.on("change",'input[type="radio"], input[type="checkbox"]',g),a.params.closeOnSelect&&!a.params.multiple&&a.$el.once("click",".list label",(()=>{i((()=>{a.close()}))}))},a.detachPageEvents=function(){a.$el.off("change",'input[type="radio"], input[type="checkbox"]',g)},a.useModules(),a.init(),a}get view(){const e=this,{$openerEl:t,$inputEl:o,app:a}=e;let n;if(e.params.view)n=e.params.view;else if(t||o){const e=t||o;n=e.closest(".view").length&&e.closest(".view")[0].t4View}return n||(n=a.views.main),n}positionDropdown(){const e=this,{$inputEl:t,app:a,$dropdownEl:n}=e,r=t.parents(".page-content");if(0===r.length)return;const l=t.offset(),p=t[0].offsetWidth,s=t[0].offsetHeight,d=t.parents(".list");let i;d.parents().each((e=>{if(i)return;const t=o(e);t.parent(r).length&&(i=t)}));const c=d.offset(),u=parseInt(r.css("padding-bottom"),10),m=d.length>0?c.left-r.offset().left:0,h=l.left-(d.length>0?c.left:0)-(a.rtl,0),v=l.top-(r.offset().top-r[0].scrollTop),f=r[0].scrollHeight-u-(v+r[0].scrollTop)-t[0].offsetHeight,g=a.rtl?"padding-right":"padding-left";let b;d.length&&!e.params.expandInput&&(b=(a.rtl?d[0].offsetWidth-h-p:h)-("md"===a.theme?16:15)),n.css({left:`${d.length>0?m:h}px`,top:`${v+r[0].scrollTop+s}px`,width:`${d.length>0?d[0].offsetWidth:p}px`}),n.children(".autocomplete-dropdown-inner").css({maxHeight:`${f}px`,[g]:d.length>0&&!e.params.expandInput?`${b}px`:""})}focus(){this.$el.find("input[type=search]").focus()}source(e){const t=this;if(!t.params.source)return;const{$el:o}=t;t.params.source.call(t,e,(a=>{let n="";const r=t.params.limit?Math.min(t.params.limit,a.length):a.length;t.items=a;for(let e=0;e<r;e+=1){let o=!1;const r="object"==typeof a[e]?a[e][t.params.valueProperty]:a[e];for(let e=0;e<t.value.length;e+=1){const a="object"==typeof t.value[e]?t.value[e][t.params.valueProperty]:t.value[e];a!==r&&1*a!=1*r||(o=!0)}n+=t.renderItem({value:r,text:"object"==typeof a[e]?a[e][t.params.textProperty]:a[e],inputType:t.inputType,id:t.id,inputName:t.inputName,selected:o},e)}o.find(".autocomplete-found ul").html(n),0===a.length?0!==e.length?(o.find(".autocomplete-not-found").show(),o.find(".autocomplete-found, .autocomplete-values").hide()):(o.find(".autocomplete-values").show(),o.find(".autocomplete-found, .autocomplete-not-found").hide()):(o.find(".autocomplete-found").show(),o.find(".autocomplete-not-found, .autocomplete-values").hide())}))}updateValues(){const e=this;let t="";for(let o=0;o<e.value.length;o+=1)t+=e.renderItem({value:"object"==typeof e.value[o]?e.value[o][e.params.valueProperty]:e.value[o],text:"object"==typeof e.value[o]?e.value[o][e.params.textProperty]:e.value[o],inputType:e.inputType,id:e.id,inputName:`${e.inputName}-checked}`,selected:!0},o);e.$el.find(".autocomplete-values ul").html(t)}preloaderHide(){const e=this;"dropdown"===e.params.openIn&&e.$dropdownEl?e.$dropdownEl.find(".autocomplete-preloader").removeClass("autocomplete-preloader-visible"):o(".autocomplete-preloader").removeClass("autocomplete-preloader-visible")}preloaderShow(){const e=this;"dropdown"===e.params.openIn&&e.$dropdownEl?e.$dropdownEl.find(".autocomplete-preloader").addClass("autocomplete-preloader-visible"):o(".autocomplete-preloader").addClass("autocomplete-preloader-visible")}renderPreloader(){const e=this,t={iosPreloaderContent:c,mdPreloaderContent:u,auroraPreloaderContent:m};return p("div",{class:"autocomplete-preloader preloader "+(e.params.preloaderColor?`color-${e.params.preloaderColor}`:"")},t[`${e.app.theme}PreloaderContent`]||"")}renderSearchbar(){const e=this;return e.params.renderSearchbar?e.params.renderSearchbar.call(e):p("form",{class:"searchbar"},p("div",{class:"searchbar-inner"},p("div",{class:"searchbar-input-wrap"},p("input",{type:"search",spellcheck:e.params.searchbarSpellcheck||"false",placeholder:e.params.searchbarPlaceholder}),p("i",{class:"searchbar-icon"}),p("span",{class:"input-clear-button"})),e.params.searchbarDisableButton&&p("span",{class:"searchbar-disable-button"},e.params.searchbarDisableText)))}renderItem(e,t){const o=this;if(o.params.renderItem)return o.params.renderItem.call(o,e,t);const a=e.value&&"string"==typeof e.value?e.value.replace(/"/g,"&quot;"):e.value;return"dropdown"!==o.params.openIn?p("li",null,p("label",{class:`item-${e.inputType} item-content`},p("input",{type:e.inputType,name:e.inputName,value:a,_checked:e.selected}),p("i",{class:`icon icon-${e.inputType}`}),p("div",{class:"item-inner"},p("div",{class:"item-title"},e.text)))):e.placeholder?p("li",{class:"autocomplete-dropdown-placeholder"},p("label",{class:"item-content"},p("div",{class:"item-inner"},p("div",{class:"item-title"},e.text)))):p("li",null,p("label",{class:"item-radio item-content","data-value":a},p("div",{class:"item-inner"},p("div",{class:"item-title"},e.text))))}renderNavbar(){const e=this;if(e.params.renderNavbar)return e.params.renderNavbar.call(e);let t=e.params.pageTitle;void 0===t&&e.$openerEl&&e.$openerEl.length&&(t=e.$openerEl.find(".item-title").text().trim());const o="popup"===e.params.openIn,a=o?e.params.preloader&&p("div",{class:"left"},e.renderPreloader()):p("div",{class:"left sliding"},p("a",{class:"link back"},p("i",{class:"icon icon-back"}),p("span",{class:"if-not-md"},e.params.pageBackLinkText))),n=o?p("div",{class:"right"},p("a",{class:"link popup-close","data-popup":".autocomplete-popup"},e.params.popupCloseLinkText)):e.params.preloader&&p("div",{class:"right"},e.renderPreloader());return p("div",{class:"navbar "+(e.params.navbarColorTheme?`color-${e.params.navbarColorTheme}`:"")},p("div",{class:"navbar-bg"}),p("div",{class:"navbar-inner "+(e.params.navbarColorTheme?`color-${e.params.navbarColorTheme}`:"")},a,t&&p("div",{class:"title sliding"},t),n,p("div",{class:"subnavbar sliding"},e.renderSearchbar())))}renderDropdown(){const e=this;return e.params.renderDropdown?e.params.renderDropdown.call(e,e.items):p("div",{class:"autocomplete-dropdown"},p("div",{class:"autocomplete-dropdown-inner"},p("div",{class:"list "+(e.params.expandInput?"":"no-safe-areas")},p("ul",null))),e.params.preloader&&e.renderPreloader())}renderPage(e){const t=this;return t.params.renderPage?t.params.renderPage.call(t,t.items):p("div",{class:"page page-with-subnavbar autocomplete-page","data-name":"autocomplete-page"},t.renderNavbar(e),p("div",{class:"searchbar-backdrop"}),p("div",{class:"page-content"},p("div",{class:`list autocomplete-list autocomplete-found autocomplete-list-${t.id} ${t.params.formColorTheme?`color-${t.params.formColorTheme}`:""}`},p("ul",null)),p("div",{class:"list autocomplete-not-found"},p("ul",null,p("li",{class:"item-content"},p("div",{class:"item-inner"},p("div",{class:"item-title"},t.params.notFoundText))))),p("div",{class:"list autocomplete-values"},p("ul",null))))}renderPopup(){const e=this;return e.params.renderPopup?e.params.renderPopup.call(e,e.items):p("div",{class:"popup autocomplete-popup"},p("div",{class:"view"},e.renderPage(!0),";"))}onOpen(e,t){const a=this,n=a.app,r=o(t);if(a.$el=r,a.el=r[0],a.openedIn=e,a.opened=!0,"dropdown"===a.params.openIn)a.attachDropdownEvents(),a.$dropdownEl.addClass("autocomplete-dropdown-in"),a.$inputEl.trigger("input");else{let e=r.find(".searchbar");"page"===a.params.openIn&&"ios"===n.theme&&0===e.length&&(e=o(n.navbar.getElByPage(r)).find(".searchbar")),a.searchbar=n.searchbar.create({el:e,backdropEl:r.find(".searchbar-backdrop"),customSearch:!0,on:{search(e,t){0===t.length&&a.searchbar.enabled?a.searchbar.backdropShow():a.searchbar.backdropHide(),a.source(t)}}}),a.attachPageEvents(),a.updateValues(),a.params.requestSourceOnOpen&&a.source("")}a.emit("local::open autocompleteOpen",a)}autoFocus(){const e=this;return e.searchbar&&e.searchbar.$inputEl&&e.searchbar.$inputEl.focus(),e}onOpened(){const e=this;"dropdown"!==e.params.openIn&&e.params.autoFocus&&e.autoFocus(),e.emit("local::opened autocompleteOpened",e)}onClose(){const e=this;e.destroyed||(e.searchbar&&e.searchbar.destroy&&(e.searchbar.destroy(),e.searchbar=null,delete e.searchbar),"dropdown"===e.params.openIn?(e.detachDropdownEvents(),e.$dropdownEl.removeClass("autocomplete-dropdown-in").remove(),e.$inputEl.parents(".item-content-dropdown-expanded").removeClass("item-content-dropdown-expanded")):e.detachPageEvents(),e.emit("local::close autocompleteClose",e))}onClosed(){const e=this;e.destroyed||(e.opened=!1,e.$el=null,e.el=null,delete e.$el,delete e.el,e.emit("local::closed autocompleteClosed",e))}openPage(){const e=this;if(e.opened)return e;const t=e.renderPage();return e.view.router.navigate({url:e.url,route:{content:t,path:e.url,on:{pageBeforeIn(t,o){e.onOpen("page",o.el)},pageAfterIn(t,o){e.onOpened("page",o.el)},pageBeforeOut(t,o){e.onClose("page",o.el)},pageAfterOut(t,o){e.onClosed("page",o.el)}},options:{animate:e.params.animate}}}),e}openPopup(){const e=this;if(e.opened)return e;const t={content:e.renderPopup(),animate:e.params.animate,push:e.params.popupPush,swipeToClose:e.params.popupSwipeToClose,on:{popupOpen(t){e.onOpen("popup",t.el)},popupOpened(t){e.onOpened("popup",t.el)},popupClose(t){e.onClose("popup",t.el)},popupClosed(t){e.onClosed("popup",t.el)}}};return e.params.routableModals&&e.view?e.view.router.navigate({url:e.url,route:{path:e.url,popup:t}}):e.modal=e.app.popup.create(t).open(e.params.animate),e}openDropdown(){const e=this;e.$dropdownEl||(e.$dropdownEl=o(e.renderDropdown()));e.$inputEl.parents(".list").length&&e.$inputEl.parents(".item-content").length>0&&e.params.expandInput&&e.$inputEl.parents(".item-content").addClass("item-content-dropdown-expanded");const t=e.$inputEl.parents(".page-content");e.params.dropdownContainerEl?o(e.params.dropdownContainerEl).append(e.$dropdownEl):0===t.length?e.$dropdownEl.insertAfter(e.$inputEl):(e.positionDropdown(),t.append(e.$dropdownEl)),e.onOpen("dropdown",e.$dropdownEl),e.onOpened("dropdown",e.$dropdownEl)}open(){const e=this;if(e.opened)return e;return e[`open${e.params.openIn.split("").map(((e,t)=>0===t?e.toUpperCase():e)).join("")}`](),e}close(){const e=this;return e.opened?("dropdown"===e.params.openIn?(e.onClose(),e.onClosed()):e.params.routableModals&&e.view||"page"===e.openedIn?e.view.router.back({animate:e.params.animate}):(e.modal.once("modalClosed",(()=>{i((()=>{e.destroyed||(e.modal.destroy(),delete e.modal)}))})),e.modal.close()),e):e}init(){this.attachEvents()}destroy(){const e=this;e.emit("local::beforeDestroy autocompleteBeforeDestroy",e),e.detachEvents(),e.$inputEl&&e.$inputEl[0]&&delete e.$inputEl[0].t4Autocomplete,e.$openerEl&&e.$openerEl[0]&&delete e.$openerEl[0].t4Autocomplete,h(e),e.destroyed=!0}}var f={name:"autocomplete",params:{autocomplete:{openerEl:void 0,inputEl:void 0,view:void 0,dropdownContainerEl:void 0,dropdownPlaceholderText:void 0,typeahead:!1,highlightMatches:!0,expandInput:!1,updateInputValueOnSelect:!0,inputEvents:"input",value:void 0,multiple:!1,source:void 0,limit:void 0,valueProperty:"id",textProperty:"text",openIn:"page",pageBackLinkText:"Back",popupCloseLinkText:"Close",pageTitle:void 0,searchbarPlaceholder:"Search...",searchbarDisableText:"Cancel",searchbarDisableButton:void 0,searchbarSpellcheck:!1,popupPush:!1,popupSwipeToClose:void 0,animate:!0,autoFocus:!1,closeOnSelect:!1,notFoundText:"Nothing found",requestSourceOnOpen:!1,preloaderColor:void 0,preloader:!1,formColorTheme:void 0,navbarColorTheme:void 0,routableModals:!1,url:"select/",renderDropdown:void 0,renderPage:void 0,renderPopup:void 0,renderItem:void 0,renderSearchbar:void 0,renderNavbar:void 0}},static:{Autocomplete:v},create(){const e=this;e.autocomplete=s(l({defaultSelector:void 0,constructor:v,app:e,domProp:"t4Autocomplete"}),{open(t){const o=e.autocomplete.get(t);if(o&&o.open)return o.open()},close(t){const o=e.autocomplete.get(t);if(o&&o.close)return o.close()}})}};if(t){if(e.prototype.modules&&e.prototype.modules[f.name])return;e.use(f),e.instance&&(e.instance.useModuleParams(f,e.instance.params),e.instance.useModule(f))}return f}(techno4, typeof techno4AutoInstallComponent === 'undefined' ? undefined : techno4AutoInstallComponent))