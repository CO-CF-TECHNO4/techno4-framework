(function techno4ComponentLoader(o,e){void 0===e&&(e=!0);var t=o.$,a=o.utils,p=o.getDevice,r=(o.getSupport,o.Class,o.Modal),s=(o.ConstructorMethods,o.ModalMethods),n=(o.$jsx,a.extend);class l extends r{constructor(o,e){const a=n({on:{}},o.params.popover,e);super(o,a);const r=this,s=p();let l;if(r.params=a,l=r.params.el?t(r.params.el).eq(0):t(r.params.content).filter((o=>1===o.nodeType)).eq(0),l&&l.length>0&&l[0].t4Modal)return l[0].t4Modal;const i=t(r.params.targetEl).eq(0);if(0===l.length)return r.destroy();let d;const c=r.params.backdrop&&o.$el.find(".popover.modal-in").filter((o=>o!==l[0])).length>0;let m;r.params.backdrop&&r.params.backdropEl?d=t(r.params.backdropEl):r.params.backdrop&&(r.params.backdropUnique||c?(d=t('<div class="popover-backdrop popover-backdrop-unique"></div>'),d[0].t4PopoverRef=r,r.$containerEl.append(d)):d=r.$containerEl.children(".popover-backdrop"),0===d.length&&(d=t('<div class="popover-backdrop"></div>'),r.$containerEl.append(d))),0===l.find(".popover-angle").length?(m=t('<div class="popover-angle"></div>'),l.prepend(m)):m=l.find(".popover-angle");const h=r.open;function v(){r.resize()}n(r,{app:o,$el:l,el:l[0],$targetEl:i,targetEl:i[0],$angleEl:m,angleEl:m[0],$backdropEl:d,backdropEl:d&&d[0],type:"popover",forceBackdropUnique:c,open(){for(var o=arguments.length,e=new Array(o),a=0;a<o;a++)e[a]=arguments[a];let[p,s]=e;return"boolean"==typeof e[0]&&([s,p]=e),p&&(r.$targetEl=t(p),r.targetEl=r.$targetEl[0]),h.call(r,s)}}),r.on("popoverOpen",(()=>{r.resize(),o.on("resize",v),t(window).on("keyboardDidShow keyboardDidHide",v),r.on("popoverClose popoverBeforeDestroy",(()=>{o.off("resize",v),t(window).off("keyboardDidShow keyboardDidHide",v)}))}));let f=null;function u(o){f=o.target}function g(o){const e=o.target,a=t(e);if(!(!s.desktop&&s.cordova&&(window.Keyboard&&window.Keyboard.isVisible||window.cordova.plugins&&window.cordova.plugins.Keyboard&&window.cordova.plugins.Keyboard.isVisible))&&0===a.closest(r.el).length)if(r.params.closeByBackdropClick&&r.params.backdrop&&r.backdropEl&&r.backdropEl===e&&f===e)r.close();else if(r.params.closeByOutsideClick&&f===e){const o=a.hasClass("popover-backdrop-unique")&&e.t4PopoverRef!==r||a.hasClass("popover-backdrop")&&e!==r.backdropEl,t=e.closest(".popover")&&e.closest(".popover")!==r.$el[0];o||t||r.close()}}function b(o){27===o.keyCode&&r.params.closeOnEscape&&r.close()}return r.params.closeOnEscape&&(r.on("popoverOpen",(()=>{t(document).on("keydown",b)})),r.on("popoverClose",(()=>{t(document).off("keydown",b)}))),r.on("popoverOpened",(()=>{(r.params.closeByOutsideClick||r.params.closeByBackdropClick)&&(o.on("touchstart",u),o.on("click",g))})),r.on("popoverClose",(()=>{(r.params.closeByOutsideClick||r.params.closeByBackdropClick)&&(o.off("touchstart",u),o.off("click",g))})),l[0].t4Modal=r,r}resize(){const o=this,{app:e,$el:a,$targetEl:p,$angleEl:r}=o,{targetX:s,targetY:n,verticalPosition:l}=o.params;a.css({left:"",top:""});const[i,d]=[a.width(),a.height()];let c,m,h,v,f,u,g=0;"ios"===e.theme||"aurora"===e.theme?(r.removeClass("on-left on-right on-top on-bottom").css({left:"",top:""}),g=r.width()/2):a.removeClass("popover-on-left popover-on-right popover-on-top popover-on-bottom popover-on-middle").css({left:"",top:""});let b=parseInt(t("html").css("--t4-safe-area-top"),10),k=parseInt(t("html").css("--t4-safe-area-left"),10),w=parseInt(t("html").css("--t4-safe-area-right"),10);if(Number.isNaN(b)&&(b=0),Number.isNaN(k)&&(k=0),Number.isNaN(w)&&(w=0),p&&p.length>0){h=p.outerWidth(),v=p.outerHeight();const o=p.offset();f=o.left-e.left,u=o.top-e.top;const t=p.parents(".page");t.length>0&&(u-=t[0].scrollTop)}else void 0!==s&&"undefined"!==n&&(f=s,u=n,h=o.params.targetWidth||0,v=o.params.targetHeight||0);let[y,E,C]=[0,0,0];const M="auto"!==l&&l;let $=M||("md"===e.theme?"bottom":"top");if("md"===e.theme){let o;"bottom"===M||!M&&d<e.height-u-v?($="bottom",E=u+v):"top"===M||!M&&d<u-b?(E=u-d,$="top"):($="middle",E=v/2+u-d/2),E=Math.max(8,Math.min(E,e.height-d-8)),f<e.width/2?(o="right",y="middle"===$?f+h:f):(o="left",y="middle"===$?f-i:f+h-i),y=Math.max(8,Math.min(y,e.width-i-8-w),k),a.addClass(`popover-on-${$} popover-on-${o}`)}else"top"===M||!M&&d+g<u-b?E=u-d-g:"bottom"===M||!M&&d+g<e.height-u-v?($="bottom",E=u+v+g):($="middle",E=v/2+u-d/2,C=E,E=Math.max(5,Math.min(E,e.height-d-5)),C-=E),"top"===$||"bottom"===$?(y=h/2+f-i/2,C=y,y=Math.max(5,Math.min(y,e.width-i-5)),k&&(y=Math.max(y,k)),w&&y+i>e.width-5-w&&(y=e.width-5-w-i),"top"===$&&r.addClass("on-bottom"),"bottom"===$&&r.addClass("on-top"),C-=y,c=i/2-g+C,c=Math.max(Math.min(c,i-2*g-13),13),r.css({left:`${c}px`})):"middle"===$&&(y=f-i-g,r.addClass("on-right"),(y<5||y+i+w>e.width||y<k)&&(y<5&&(y=f+h+g),y+i+w>e.width&&(y=e.width-i-5-w),y<k&&(y=k),r.removeClass("on-right").addClass("on-left")),m=d/2-g+C,m=Math.max(Math.min(m,d-2*g-13),13),r.css({top:`${m}px`}));a.css({top:`${E}px`,left:`${y}px`})}}var i={name:"popover",params:{popover:{verticalPosition:"auto",backdrop:!0,backdropEl:void 0,backdropUnique:!1,closeByBackdropClick:!0,closeByOutsideClick:!0,closeOnEscape:!1,containerEl:null}},static:{Popover:l},create(){const o=this;o.popover=n(s({app:o,constructor:l,defaultSelector:".popover.modal-in"}),{open(e,a,p){let r=t(e);if(r.length>1){const o=t(a).parents(".page");o.length&&r.each((e=>{const a=t(e);a.parents(o)[0]===o[0]&&(r=a)}))}r.length>1&&(r=r.eq(r.length-1));let s=r[0].t4Modal;const n=r.dataset();return s||(s=new l(o,Object.assign({el:r,targetEl:a},n))),s.open(a,p)}})},clicks:{".popover-open":function(o,e){void 0===e&&(e={});this.popover.open(e.popover,o,e.animate)},".popover-close":function(o,e){void 0===e&&(e={});this.popover.close(e.popover,e.animate,o)}}};if(e){if(o.prototype.modules&&o.prototype.modules[i.name])return;o.use(i),o.instance&&(o.instance.useModuleParams(i,o.instance.params),o.instance.useModule(i))}return i}(techno4, typeof techno4AutoInstallComponent === 'undefined' ? undefined : techno4AutoInstallComponent))
