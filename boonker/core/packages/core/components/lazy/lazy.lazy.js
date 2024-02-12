(function techno4ComponentLoader(e,a){void 0===a&&(a=!0);var t=e.$,s=e.utils,r=(e.getDevice,e.getSupport),l=(e.Class,e.Modal,e.ConstructorMethods,e.ModalMethods,e.$jsx,s.bindMethods);const o={destroy(e){const a=t(e).closest(".page");a.length&&a[0].t4LazyDestroy&&a[0].t4LazyDestroy()},create(e){const a=this,s=r(),l=t(e).closest(".page").eq(0),o=l.find(".lazy");if(0===o.length&&!l.hasClass("lazy"))return;const n=a.params.lazy.placeholder;!1!==n&&o.each((e=>{t(e).attr("data-src")&&!t(e).attr("src")&&t(e).attr("src",n)}));const d=[];let i=!1;function y(e){d.indexOf(e)>=0&&d.splice(d.indexOf(e),1),i=!1,a.params.lazy.sequential&&d.length>0&&(i=!0,a.lazy.loadImage(d[0],y))}if(a.params.lazy.observer&&s.intersectionObserver){let e=l[0].t4LazyObserver;return e||(e=new window.IntersectionObserver((function(e,t){e.forEach((e=>{if(e.isIntersecting){if(a.params.lazy.sequential&&i)return void(d.indexOf(e.target)<0&&d.push(e.target));i=!0,a.lazy.loadImage(e.target,y),t.unobserve(e.target)}}))}),{root:l[0]})),o.each((a=>{a.t4LazyObserverAdded||(a.t4LazyObserverAdded=!0,e.observe(a))})),void(l[0].t4LazyDestroy||(l[0].t4LazyDestroy=()=>{e.disconnect(),delete l[0].t4LazyDestroy,delete l[0].t4LazyObserver}))}function c(){a.lazy.load(l,(e=>{a.params.lazy.sequential&&i?d.indexOf(e)<0&&d.push(e):(i=!0,a.lazy.loadImage(e,y))}))}l[0].t4LazyDestroy||(l[0].t4LazyDestroy=function(){l[0].t4LazyAttached=!1,delete l[0].t4LazyAttached,l.off("lazy",c),l.off("scroll",c,!0),l.find(".tab").off("tab:mounted tab:show",c),a.off("resize",c)}),l[0].t4LazyAttached||(l[0].t4LazyAttached=!0,l.on("lazy",c),l.on("scroll",c,!0),l.find(".tab").on("tab:mounted tab:show",c),a.on("resize",c)),c()},isInViewport(e){const a=this,t=e.getBoundingClientRect(),s=a.params.lazy.threshold||0;return t.top>=0-s&&t.left>=0-s&&t.top<=a.height+s&&t.left<=a.width+s},loadImage(e,a){const s=this,r=t(e),l=r.attr("data-background"),o=l||r.attr("data-src");function n(){r.removeClass("lazy").addClass("lazy-loaded"),l?r.css("background-image",`url(${o})`):o&&r.attr("src",o),a&&a(e),r.trigger("lazy:loaded"),s.emit("lazyLoaded",r[0])}if(!o)return r.trigger("lazy:load"),s.emit("lazyLoad",r[0]),void n();const d=new window.Image;d.onload=n,d.onerror=function(){r.removeClass("lazy").addClass("lazy-loaded"),l?r.css("background-image",`url(${s.params.lazy.placeholder||""})`):r.attr("src",s.params.lazy.placeholder||""),a&&a(e),r.trigger("lazy:error"),s.emit("lazyError",r[0])},d.src=o,r.removeAttr("data-src").removeAttr("data-background"),r.trigger("lazy:load"),s.emit("lazyLoad",r[0])},load(e,a){const s=this;let r=t(e);r.hasClass("page")||(r=r.parents(".page").eq(0)),0!==r.length&&r.find(".lazy").each((e=>{t(e).parents(".tab:not(.tab-active)").length>0||s.lazy.isInViewport(e)&&(a?a(e):s.lazy.loadImage(e))}))}};var n={name:"lazy",params:{lazy:{placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXCwsK592mkAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==",threshold:0,sequential:!0,observer:!0}},create(){l(this,{lazy:o})},on:{pageInit(e){const a=this;(e.$el.find(".lazy").length>0||e.$el.hasClass("lazy"))&&a.lazy.create(e.$el)},pageAfterIn(e){const a=this,t=r();a.params.lazy.observer&&t.intersectionObserver||(e.$el.find(".lazy").length>0||e.$el.hasClass("lazy"))&&a.lazy.create(e.$el)},pageBeforeRemove(e){const a=this;(e.$el.find(".lazy").length>0||e.$el.hasClass("lazy"))&&a.lazy.destroy(e.$el)},tabMounted(e){const a=this,s=t(e);(s.find(".lazy").length>0||s.hasClass("lazy"))&&a.lazy.create(s)},tabBeforeRemove(e){const a=this,s=r();if(a.params.lazy.observer&&s.intersectionObserver)return;const l=t(e);(l.find(".lazy").length>0||l.hasClass("lazy"))&&a.lazy.destroy(l)}}};if(a){if(e.prototype.modules&&e.prototype.modules[n.name])return;e.use(n),e.instance&&(e.instance.useModuleParams(n,e.instance.params),e.instance.useModule(n))}return n}(techno4, typeof techno4AutoInstallComponent === 'undefined' ? undefined : techno4AutoInstallComponent))