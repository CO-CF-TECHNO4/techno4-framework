# Techno4 Framework Core (`techno4`)

> Reactive UI Core, VDOM, Web Components, and Unified Techno4 Theme for Modern Web and Hybrid Mobile Applications.

Part of the **Techno4 Framework 2** ecosystem maintained by **CO «CF TECHNO4»** (`благодійна організація «БЛАГОДІЙНИЙ ФОНД ТЕХНО4»`).

---

## Overview

`techno4` provides an ultra-fast, dependency-free UI runtime with:
- **Unified Techno4 Theme**: eliminates iOS/MD fragmentation in favor of a cohesive, high-contrast industrial reactive design.
- **Fast Snabbdom Virtual DOM & Tagged Template Literals**: `$h` and JSX support without React or Vue overhead.
- **High Performance Routing & Modals**: push/pop view state, sheets, popups, actions, dialogs, dynamic route queues.
- **Embedded State Store**: reactive state management with subscriptions and computed properties.
- **Zero Heavy Framework Lock-in**: 100% vanilla JavaScript ES modules.

---

## Installation

```bash
npm install techno4 dom64
```

---

## Quick Start

```javascript
import Techno4 from 'techno4';
import 'techno4/css';

const app = new Techno4({
  el: '#app',
  name: 'Techno4 App',
  theme: 'auto',
  routes: [
    {
      path: '/',
      url: './pages/home.html',
    },
  ],
});
```

---

## Documentation

Official documentation and guides:
- [https://techno4.online/надбання/фреймворк](https://techno4.online/%D0%BD%D0%B0%D0%B4%D0%B1%D0%B0%D0%BD%D0%BD%D1%8F/%D1%84%D1%80%D0%B5%D0%B9%D0%BC%D0%B2%D0%BE%D1%80%D0%BA)

---

## License

Licensed under **LGPL-3.0-or-later** by **CO «CF TECHNO4»** (`благодійна організація «БЛАГОДІЙНИЙ ФОНД ТЕХНО4»`).
Original base code derived from MIT-licensed open source projects.
