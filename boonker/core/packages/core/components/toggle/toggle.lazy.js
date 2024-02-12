(function techno4ComponentLoader(e,t){void 0===t&&(t=!0);var o=e.$,s=e.utils,a=(e.getDevice,e.getSupport),n=e.Class,l=(e.Modal,e.ConstructorMethods),i=(e.ModalMethods,e.$jsx,s.extend),c=s.now,g=s.nextTick,r=s.deleteProps;class d extends n{constructor(e,t){void 0===t&&(t={}),super(t,[e]);const s=this,n=a(),l={};s.useModulesParams(l),s.params=i(l,t);const r=s.params.el;if(!r)return s;const d=o(r);if(0===d.length)return s;if(d[0].t4Toggle)return d[0].t4Toggle;const h=d.children('input[type="checkbox"]');let u;i(s,{app:e,$el:d,el:d[0],$inputEl:h,inputEl:h[0],disabled:d.hasClass("disabled")||h.hasClass("disabled")||h.attr("disabled")||h[0].disabled}),Object.defineProperty(s,"checked",{enumerable:!0,configurable:!0,set(e){s&&void 0!==s.$inputEl&&s.checked!==e&&(h[0].checked=e,s.$inputEl.trigger("change"))},get:()=>h[0].checked}),d[0].t4Toggle=s;const p={};let f,v,m,b,y;function T(e){u||s.disabled||(p.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,p.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY,v=0,u=!0,f=void 0,b=c(),y=s.checked,m=d[0].offsetWidth,g((()=>{u&&d.addClass("toggle-active-state")})))}function M(t){if(!u||s.disabled)return;const o="touchmove"===t.type?t.targetTouches[0].pageX:t.pageX,a="touchmove"===t.type?t.targetTouches[0].pageY:t.pageY,n=e.rtl?-1:1;if(void 0===f&&(f=!!(f||Math.abs(a-p.y)>Math.abs(o-p.x))),f)return void(u=!1);let l;t.preventDefault(),v=o-p.x,v*n<0&&Math.abs(v)>m/3&&y&&(l=!0),v*n>0&&Math.abs(v)>m/3&&!y&&(l=!0),l&&(p.x=o,s.checked=!y,y=!y)}function $(){if(!u||s.disabled)return f&&d.removeClass("toggle-active-state"),void(u=!1);const t=e.rtl?-1:1;let o;u=!1,d.removeClass("toggle-active-state"),c()-b<300&&(v*t<0&&y&&(o=!0),v*t>0&&!y&&(o=!0),o&&(s.checked=!y))}function E(){s.$el.trigger("toggle:change"),s.emit("local::change toggleChange",s)}s.attachEvents=function(){const t=!!n.passiveListener&&{passive:!0};d.on(e.touchEvents.start,T,t),e.on("touchmove",M),e.on("touchend:passive",$),s.$inputEl.on("change",E)},s.detachEvents=function(){const t=!!n.passiveListener&&{passive:!0};d.off(e.touchEvents.start,T,t),e.off("touchmove",M),e.off("touchend:passive",$),s.$inputEl.off("change",E)},s.useModules(),s.init()}toggle(){this.checked=!this.checked}init(){this.attachEvents()}destroy(){let e=this;e.$el.trigger("toggle:beforedestroy"),e.emit("local::beforeDestroy toggleBeforeDestroy",e),delete e.$el[0].t4Toggle,e.detachEvents(),r(e),e=null}}var h={name:"toggle",create(){this.toggle=l({defaultSelector:".toggle",constructor:d,app:this,domProp:"t4Toggle"})},static:{Toggle:d},on:{tabMounted(e){const t=this;o(e).find(".toggle-init").each((e=>t.toggle.create({el:e})))},tabBeforeRemove(e){o(e).find(".toggle-init").each((e=>{e.t4Toggle&&e.t4Toggle.destroy()}))},pageInit(e){const t=this;e.$el.find(".toggle-init").each((e=>t.toggle.create({el:e})))},pageBeforeRemove(e){e.$el.find(".toggle-init").each((e=>{e.t4Toggle&&e.t4Toggle.destroy()}))}},vnode:{"toggle-init":{insert(e){const t=e.elm;this.toggle.create({el:t})},destroy(e){const t=e.elm;t.t4Toggle&&t.t4Toggle.destroy()}}}};if(t){if(e.prototype.modules&&e.prototype.modules[h.name])return;e.use(h),e.instance&&(e.instance.useModuleParams(h,e.instance.params),e.instance.useModule(h))}return h}(techno4, typeof techno4AutoInstallComponent === 'undefined' ? undefined : techno4AutoInstallComponent))