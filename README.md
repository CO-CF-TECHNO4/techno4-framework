# Techno4 Framework Core (`techno4`)

> Reactive UI Core, VDOM, Web Components, and Unified Techno4 Theme for Modern Web and Hybrid Mobile Applications with Apache Cordova.

Part of the **TECHNO4 FRAMEWORK2** ecosystem maintained by **CO «CF TECHNO4»** (`благодійна організація «БЛАГОДІЙНИЙ ФОНД ТЕХНО4»`).

---

## Overview

`techno4` provides an ultra-fast, dependency-free UI runtime with:
- **Unified Techno4 Theme**: eliminates iOS/MD fragmentation in favor of a cohesive, high-contrast industrial reactive design.
- **First-Class Apache Cordova Integration**: native `deviceready` lifecycle management, Android hardware back-button handling, status bar styling, safe-area insets, and Cordova Android/iOS platform support.
- **Fast Snabbdom Virtual DOM & Tagged Template Literals**: `$h` and JSX support without React or Vue overhead.
- **High Performance Routing & Modals**: push/pop view state, sheets, popups, actions, dialogs, dynamic route queues.
- **Embedded State Store**: reactive state management with subscriptions and computed properties.
- **Hardware & Industrial Interfacing**: built-in hooks for Web Audio API, Web MIDI, and Web Serial UART.
- **Zero Heavy Framework Lock-in**: 100% vanilla JavaScript ES modules.

---

## Installation

### Core Web & PWA Runtime
Install the core UI runtime along with `dom64` (DOM manipulation library):

```bash
npm install techno4 dom64
```

### Hybrid Mobile Development with Apache Cordova
TECHNO4 FRAMEWORK2 has first-class native support for **Apache Cordova** (Cordova Android & Cordova iOS) as an essential component for building mobile applications.

#### 1. Install Apache Cordova CLI
```bash
npm install -g cordova
```

#### 2. Create a Ready-to-Run Techno4 + Cordova Project (Recommended)
You can quickly generate the complete project structure for a hybrid mobile application using the official **Techno4 CLI**:

```bash
# Using npx (no global install needed):
npx techno4-cli create

# Or install techno4-cli globally:
npm install -g techno4-cli
techno4 create
```
*During project setup, choose **Cordova** as the project type (with Android and/or iOS targets).*

#### 3. Working with Cordova Platforms
```bash
# Add mobile platform targets
cordova platform add android
cordova platform add ios

# Run on an emulator or connected device
cordova run android
cordova run ios

# Build production APK / AAB / IPA packages
cordova build android --release
cordova build ios --release
```

---

## Quick Start

### Web Application

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

### Apache Cordova Mobile Application

When running in an Apache Cordova container, `techno4` automatically detects the Cordova environment (`app.device.cordova === true`), hooks into the native lifecycle, and integrates with device plugins:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover">
  <title>Techno4 Cordova App</title>
  <link rel="stylesheet" href="css/techno4.bundle.min.css">
  <link rel="stylesheet" href="css/app.css">
</head>
<body>
  <div id="app">
    <div class="view view-main view-init">
      <!-- Pages & Navigation -->
    </div>
  </div>

  <!-- Cordova Native Bridge Script -->
  <script src="cordova.js"></script>
  <script type="module" src="js/app.js"></script>
</body>
</html>
```

```javascript
// js/app.js
import Techno4 from 'techno4';
import 'techno4/css';

const app = new Techno4({
  el: '#app',
  name: 'Techno4 Cordova Mobile',
  theme: 'auto',
  // Cordova-specific configurations:
  statusbar: {
    enabled: true,
    overlay: 'auto',
  },
  routes: [
    {
      path: '/',
      url: './pages/home.html',
    },
  ],
});

// Automatic Cordova device lifecycle handling:
document.addEventListener('deviceready', () => {
  console.log('Apache Cordova initialized!');
  console.log('Platform:', app.device.android ? 'Android' : app.device.ios ? 'iOS' : 'Other');
}, false);
```

---

## Key Apache Cordova Features in Techno4

- **Automatic Cordova Detection**: `app.device.cordova` is automatically set to `true` when running inside a Cordova WebView.
- **Hardware Back Button**: Full routing integration with Android hardware back button (automatically navigates back in views or prompts before exit).
- **Status Bar & Notch Handling**: Seamless adaptation to safe areas, device cutouts, dynamic islands, and status bar overlays via CSS variables (`--t4-safe-area-top`, `--t4-safe-area-bottom`).
- **Cordova Plugins Compatibility**: Ready out-of-the-box for Camera, File, Geolocation, SQLite, Push Notifications, Serial / Bluetooth LE, and Media plugins.

---

## Documentation

Official documentation, guides, and tutorials:
- 🌐 [https://techno4.online/надбання/фреймворк](https://techno4.online/%D0%BD%D0%B0%D0%B4%D0%B1%D0%B0%D0%BD%D0%BD%D1%8F/%D1%84%D1%80%D0%B5%D0%B9%D0%BC%D0%B2%D0%BE%D1%80%D0%BA)
- 🐙 [GitHub Repository](https://github.com/CO-CF-TECHNO4/TECHNO4FRAMEWORK2)

---

## License

Licensed under **LGPL-3.0-or-later** by **CO «CF TECHNO4»** (`благодійна організація «БЛАГОДІЙНИЙ ФОНД ТЕХНО4»`).  
Original base code derived from MIT-licensed open source projects.
