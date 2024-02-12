// Demo
if (window.parent && window !== window.parent) {
  const html = document.documentElement
  if (html) {
    html.style.setProperty('--t4-safe-area-top', '44px')
    html.style.setProperty('--t4-safe-area-bottom', '34px')
  }
}

// Dom64
var $ = Dom64

// Theme
var theme = 'auto'
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0]
}

// Init App
var app = new techno4({
  id: 'io.techno4.boonker',
  el: '#app',
  theme,
  // store.js,
  store: store,
  // routes.js,
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
})

setTimeout(()=> {
  app.views.main.router.navigate("/color-themes/")
}, 500)