# TECHNO4 Core Framework (`techno4`)

<div align="center">

**Реактивне UI-ядро, VDOM та єдина тема для веб-застосунків і гібридних мобільних додатків на Apache Cordova**  
*Reactive UI Core, VDOM, and Unified Theme for Modern Web and Hybrid Mobile Applications with Apache Cordova*

[![License: LGPL-3.0-or-later](https://img.shields.io/badge/License-LGPL--3.0--or--later-blue.svg)](LICENSE)
[![Organization](https://img.shields.io/badge/Organization-CO%20%C2%ABCF%20TECHNO4%C2%BB-green.svg)](https://techno4.online)

---

### [uk_UA](#uk_ua) &nbsp;|&nbsp; [en_GB](#en_gb)

---

</div>

<br>

---

## uk_UA

### 🎯 Мета проєкту
> **Вільна ініціатива розвитку сучасних інструментів розробника за підтримки благодійної організації «БЛАГОДІЙНИЙ ФОНД ТЕХНО4» (CO «CF TECHNO4»).**

`techno4` — це реактивне компонентне UI-ядро та середовище виконання без сторонніх залежностей, що входить до екосистеми **TECHNO4 FRAMEWORK2**. Забезпечує надшвидкий рендеринг інтерфейсів для веб-застосунків, PWA, настільних програм (Electron) та гібридних мобільних додатків на базі **Apache Cordova**.

### ⚡ Ключові можливості

- **Єдина тема Techno4**: усуває фрагментацію між iOS та Material Design на користь монолітного, контрастного та індустріального дизайну.
- **Першокласна підтримка Apache Cordova**: вбудована обробка життєвого циклу `deviceready`, апаратної кнопки «Назад» на Android, статус-бару, safe-area відступів та вилузів екрана.
- **Snabbdom Virtual DOM та шаблони `$h`**: декларативні шаблонні літерали без громіздких залежностей React або Vue.
- **Високопродуктивний роутинг та модальні вікна**: push/pop переходи, вкладки (Routable Tabs), панелі, шторки (sheets), спливаючі вікна (popups, dialogs).
- **Вбудоване сховище стану Store**: реактивний менеджмент стану з підписками та обчислюваними властивостями.
- **Підтримка апаратних API**: готові рішення для роботи з Web Audio API, Web MIDI та Web Serial UART.
- **100% сумісність з чистим JavaScript ES-модулями**: нульовий оверхед та моментальне завантаження.

### 📦 Встановлення

#### Базове встановлення для Web & PWA:
```bash
npm install techno4 dom64
```

#### Гібридна мобільна розробка з Apache Cordova:
TECHNO4 FRAMEWORK2 надає вбудовану нативну підтримку **Apache Cordova** (Cordova Android & Cordova iOS) як базового інструмента для мобільних збірок.

1. **Встановлення Apache Cordova CLI**:
   ```bash
   npm install -g cordova
   ```

2. **Створення готового проєкту Techno4 + Cordova через CLI**:
   ```bash
   # Запуск через npx:
   npx techno4-cli create

   # Або після глобального встановлення techno4-cli:
   npm install -g techno4-cli
   techno4 create
   ```
   *Під час конфігурації оберіть Cordova (Android та/або iOS).*

3. **Керування мобільними платформами**:
   ```bash
   cordova platform add android
   cordova platform add ios

   # Запуск на емуляторі або підключеному пристрої:
   cordova run android
   cordova run ios

   # Збірка релізного APK / AAB / IPA:
   cordova build android --release
   cordova build ios --release
   ```

### 🚀 Швидкий старт

#### Веб-застосунок:

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

#### Гібридний додаток Apache Cordova:

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
    <div class="view view-main view-init"></div>
  </div>

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

document.addEventListener('deviceready', () => {
  console.log('Apache Cordova активовано!');
  console.log('Платформа:', app.device.android ? 'Android' : app.device.ios ? 'iOS' : 'Web');
}, false);
```

### 📱 Можливості Apache Cordova у Techno4
- **Автовизначення оточення**: `app.device.cordova === true` встановлюється автоматично всередині Cordova WebView.
- **Апаратна кнопка «Назад» (Android Back Button)**: інтеграція з роутером (закриває модальні вікна та робить `router.back()` перед виходом).
- **Підтримка вирізів екрана та статус-бару**: CSS-змінні `--t4-safe-area-top`, `--t4-safe-area-bottom`.
- **Сумісність з екосистемою плагінів**: сумісний з Camera, File, Geolocation, SQLite, Push Notifications, Serial / Bluetooth LE тощо.

### 📚 Офіційна документація
Докладні посібники та документація:  
👉 **[https://techno4.online/надбання/фреймворк](https://techno4.online/%D0%BD%D0%B0%D0%B4%D0%B1%D0%B0%D0%BD%D0%BD%D1%8F/%D1%84%D1%80%D0%B5%D0%B9%D0%BC%D0%B2%D0%BE%D1%80%D0%BA)**

### ⚖️ Ліцензія та права
Вихідний код розповсюджується за ліцензією **LGPL-3.0-or-later**.  
Підтримується: **благодійна організація «БЛАГОДІЙНИЙ ФОНД ТЕХНО4»** (`CO «CF TECHNO4»`).  
Автор: **Mykola Zghurskyi** (`mykola@techno4.online`).  
Містить адаптовані компоненти Framework7 (MIT License).

<br>

---

## en_GB

### 🎯 Project Mission
> **A free initiative fostering modern developer tools, supported by the charitable organization "CO «CF TECHNO4»" (благодійна організація «БЛАГОДІЙНИЙ ФОНД ТЕХНО4»).**

`techno4` provides an ultra-fast, dependency-free reactive UI runtime and component architecture for the **TECHNO4 FRAMEWORK2** ecosystem. Tailored for modern Web, PWA, desktop solutions (Electron), and hybrid mobile apps built on **Apache Cordova**.

### ⚡ Key Features

- **Unified Techno4 Theme**: Eliminates iOS/MD fragmentation in favor of a cohesive, high-contrast industrial reactive design.
- **First-Class Apache Cordova Integration**: Native `deviceready` lifecycle management, Android hardware back-button handling, status bar styling, safe-area insets, and Cordova Android/iOS platform support.
- **Snabbdom Virtual DOM & Tagged Template Literals**: Fast `$h` template parser without the overhead of React or Vue.
- **High-Performance Routing & Modals**: Push/pop view state, Routable Tabs, sheets, popups, action sheets, and dynamic route queues.
- **Embedded State Store**: Reactive state management with subscriptions and computed properties.
- **Hardware & Industrial Interfacing**: Ready integrations for Web Audio API, Web MIDI, and Web Serial UART.
- **Zero Heavy Framework Lock-in**: 100% vanilla JavaScript ES modules.

### 📦 Installation

#### Web & PWA Runtime:
```bash
npm install techno4 dom64
```

#### Hybrid Mobile Development with Apache Cordova:
TECHNO4 FRAMEWORK2 provides first-class native support for **Apache Cordova** (Cordova Android & Cordova iOS) for building hybrid mobile apps.

1. **Install Apache Cordova CLI**:
   ```bash
   npm install -g cordova
   ```

2. **Create a Ready-to-Run Techno4 + Cordova Project (Recommended)**:
   ```bash
   # Using npx (no global install needed):
   npx techno4-cli create

   # Or install techno4-cli globally:
   npm install -g techno4-cli
   techno4 create
   ```
   *During setup, select Cordova as the target platform (Android / iOS).*

3. **Working with Cordova Platforms**:
   ```bash
   cordova platform add android
   cordova platform add ios

   # Run on an emulator or connected device:
   cordova run android
   cordova run ios

   # Build release packages:
   cordova build android --release
   cordova build ios --release
   ```

### 🚀 Quick Start

#### Web Application:

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

#### Apache Cordova Mobile Application:

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
    <div class="view view-main view-init"></div>
  </div>

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

document.addEventListener('deviceready', () => {
  console.log('Apache Cordova initialized!');
  console.log('Platform:', app.device.android ? 'Android' : app.device.ios ? 'iOS' : 'Web');
}, false);
```

### 📱 Key Apache Cordova Features in Techno4
- **Automatic Cordova Detection**: `app.device.cordova === true` automatically set inside Cordova WebView.
- **Hardware Back Button**: Full routing integration with Android hardware back button (navigates back in history or closes modals).
- **Status Bar & Safe Areas**: Adaptation to notches, dynamic cutouts, and status bar overlays via `--t4-safe-area-top` and `--t4-safe-area-bottom`.
- **Cordova Plugins Compatibility**: Out-of-the-box compatibility with Camera, File, Geolocation, SQLite, Push Notifications, Serial / BLE plugins.

### 📚 Official Documentation
Official documentation, guides, and tutorials:  
👉 **[https://techno4.online/надбання/фреймворк](https://techno4.online/%D0%BD%D0%B0%D0%B4%D0%B1%D0%B0%D0%BD%D0%BD%D1%8F/%D1%84%D1%80%D0%B5%D0%B9%D0%BC%D0%B2%D0%BE%D1%80%D0%BA)**

### ⚖️ License & Attribution
Distributed under the **LGPL-3.0-or-later** license.  
Published and supported by **CO «CF TECHNO4»** (`благодійна організація «БЛАГОДІЙНИЙ ФОНД ТЕХНО4»`).  
Author: **Mykola Zghurskyi** (`mykola@techno4.online`).  
Contains derivatives of Framework7 (MIT License).
