<template>
  <t4-page>
    <t4-navbar title="Progress Bar" back-link="Back"></t4-navbar>
    <t4-block>
      <p>
        In addition to <a href="/preloader/">Preloader</a>, techno4 also comes with fancy
        animated determinate and infinite/indeterminate progress bars to indicate some activity.
      </p>
    </t4-block>
    <t4-block-title>Determinate Progress Bar</t4-block-title>
    <t4-block strong>
      <p>
        When progress bar is determinate it indicates how long an operation will take when the
        percentage complete is detectable.
      </p>
      <p>Inline determinate progress bar:</p>
      <div>
        <p><t4-progressbar id="demo-inline-progressbar" :progress="10" /></p>
        <t4-segmented raised>
          <t4-button @click="setInlineProgress(10)">10%</t4-button>
          <t4-button @click="setInlineProgress(30)">30%</t4-button>
          <t4-button @click="setInlineProgress(50)">50%</t4-button>
          <t4-button @click="setInlineProgress(100)">100%</t4-button>
        </t4-segmented>
      </div>
      <div>
        <p>Inline determinate load & hide:</p>
        <p id="demo-determinate-container"></p>
        <p>
          <t4-button fill @click="showDeterminate(true)">Start Loading</t4-button>
        </p>
      </div>
      <div>
        <p>Overlay with determinate progress bar on top of the app:</p>
        <p>
          <t4-button fill @click="showDeterminate(false)">Start Loading</t4-button>
        </p>
      </div>
    </t4-block>
    <t4-block-title>Infinite Progress Bar</t4-block-title>
    <t4-block strong>
      <p>
        When progress bar is infinite/indeterminate it requests that the user wait while something
        finishes when it’s not necessary to indicate how long it will take.
      </p>
      <p>Inline infinite progress bar</p>
      <p>
        <t4-progressbar infinite />
      </p>
      <p>Multi-color infinite progress bar</p>
      <p>
        <t4-progressbar infinite color="multi" />
      </p>
      <div>
        <p>Overlay with infinite progress bar on top of the app</p>
        <p id="demo-infinite-container"></p>
        <p>
          <t4-button fill @click="showInfinite(false)">Start Loading</t4-button>
        </p>
      </div>
      <div>
        <p>Overlay with infinite multi-color progress bar on top of the app</p>
        <p>
          <t4-button fill @click="showInfinite(true)">Start Loading</t4-button>
        </p>
      </div>
    </t4-block>
    <t4-block-title>Colors</t4-block-title>
    <div class="list simple-list">
      <ul>
        <li>
          <t4-progressbar color="blue" :progress="10" />
        </li>
        <li>
          <t4-progressbar color="red" :progress="20" />
        </li>
        <li>
          <t4-progressbar color="pink" :progress="30" />
        </li>
        <li>
          <t4-progressbar color="green" :progress="80" />
        </li>
        <li>
          <t4-progressbar color="yellow" :progress="90" />
        </li>
        <li>
          <t4-progressbar color="orange" :progress="100" />
        </li>
      </ul>
    </div>
  </t4-page>
</template>
<script>
import {
  t4Navbar,
  t4Page,
  t4BlockTitle,
  t4Block,
  t4Progressbar,
  t4Button,
  t4Segmented,
  t4,
} from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4BlockTitle,
    t4Block,
    t4Progressbar,
    t4Button,
    t4Segmented,
  },
  methods: {
    setInlineProgress(value) {
      t4.progressbar.set('#demo-inline-progressbar', value);
    },
    showDeterminate(inline) {
      const self = this;
      if (self.determinateLoading) return;
      self.determinateLoading = true;
      let progressBarEl;
      if (inline) {
        progressBarEl = t4.progressbar.show('#demo-determinate-container', 0);
      } else {
        progressBarEl = t4.progressbar.show(0);
      }
      let progress = 0;
      function simulateLoading() {
        setTimeout(() => {
          const progressBefore = progress;
          progress += Math.random() * 20;
          t4.progressbar.set(progressBarEl, progress);
          if (progressBefore < 100) {
            simulateLoading(); // keep "loading"
          } else {
            self.determinateLoading = false;
            t4.progressbar.hide(progressBarEl); // hide
          }
        }, Math.random() * 200 + 200);
      }
      simulateLoading();
    },
    showInfinite(multiColor) {
      const self = this;
      if (self.infiniteLoading) return;
      self.infiniteLoading = true;
      if (multiColor) {
        t4.progressbar.show('multi');
      } else {
        t4.progressbar.show();
      }
      setTimeout(() => {
        self.infiniteLoading = false;
        t4.progressbar.hide();
      }, 3000);
    },
  },
};
</script>
