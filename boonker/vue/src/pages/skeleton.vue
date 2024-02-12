<template>
  <t4-page>
    <t4-navbar title="Skeleton Elements" back-link="Back"></t4-navbar>
    <t4-block strong>
      <p>
        Skeleton (or Ghost) elements designed to improve perceived performance and make app feels
        faster.
      </p>
      <p>
        techno4 comes with two types of such elements: Skeleton Block and Skeleton Text. Skeleton
        block is a gray box that can be used as placeholder for any element. Skeleton text uses
        special built-in skeleton font to render each character of such text as gray rectangle.
        Skeleton text allows to make such elements responsive and feel more natural.
      </p>
      <p>It can be used in any places and with any elements.</p>
    </t4-block>

    <t4-block-title>Skeleton List</t4-block-title>
    <t4-list media-list class="skeleton-text">
      <t4-list-item
        title="Title"
        subtitle="Subtitle"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum."
      >
        <template #media>
          <t4-skeleton-block style="width: 40px; height: 40px; border-radius: 50%" />
        </template>
      </t4-list-item>
      <t4-list-item
        title="Title"
        subtitle="Subtitle"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum."
      >
        <template #media>
          <t4-skeleton-block style="width: 40px; height: 40px; border-radius: 50%" />
        </template>
      </t4-list-item>
    </t4-list>

    <t4-block-title>Skeleton Card</t4-block-title>
    <t4-card
      class="skeleton-text"
      title="Card Header"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit."
      footer="Card Footer"
    ></t4-card>

    <t4-block-title>Loading Effects</t4-block-title>
    <t4-block strong>
      <p>It supports few loading effects:</p>
      <t4-row tag="p">
        <t4-button fill small round class="col" @click="load('fade')">Fade</t4-button>
        <t4-button fill small round class="col" @click="load('wave')">Wave</t4-button>
        <t4-button fill small round class="col" @click="load('pulse')">Pulse</t4-button>
      </t4-row>
    </t4-block>
    <t4-list v-if="loading" media-list>
      <t4-list-item
        v-for="n in 3"
        :key="n"
        :class="`skeleton-text skeleton-effect-${effect}`"
        title="Full Name"
        subtitle="Position"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit. Aliquam vestibulum vitae lorem ac iaculis. Praesent nec pharetra massa, at blandit lectus. Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
      >
        <template #media>
          <t4-skeleton-block style="width: 40px; height: 40px; border-radius: 50%" />
        </template>
      </t4-list-item>
    </t4-list>
    <t4-list v-else media-list>
      <t4-list-item
        title="John Doe"
        subtitle="CEO"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit. Aliquam vestibulum vitae lorem ac iaculis. Praesent nec pharetra massa, at blandit lectus. Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
      >
        <template #media>
          <img
            src="https://placeimg.com/80/80/people/1"
            style="width: 40px; height: 40px; border-radius: 50%"
          />
        </template>
      </t4-list-item>
      <t4-list-item
        title="Jane Doe"
        subtitle="Marketing"
        text="Cras consequat felis at consequat hendrerit. Aliquam vestibulum vitae lorem ac iaculis. Praesent nec pharetra massa, at blandit lectus. Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
      >
        <template #media>
          <img
            src="https://placeimg.com/80/80/people/2"
            style="width: 40px; height: 40px; border-radius: 50%"
          />
        </template>
      </t4-list-item>
      <t4-list-item
        title="Kate Johnson"
        subtitle="Admin"
        text="Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
      >
        <template #media>
          <img
            src="https://placeimg.com/80/80/people/3"
            style="width: 40px; height: 40px; border-radius: 50%"
          />
        </template>
      </t4-list-item>
    </t4-list>
  </t4-page>
</template>
<script>
import {
  t4Page,
  t4Navbar,
  t4BlockTitle,
  t4Block,
  t4List,
  t4ListItem,
  t4Button,
  t4Row,
  t4SkeletonBlock,
  t4Card,
} from 'techno4-vue';

export default {
  components: {
    t4Page,
    t4Navbar,
    t4BlockTitle,
    t4Block,
    t4List,
    t4ListItem,
    t4Button,
    t4Row,
    t4SkeletonBlock,
    t4Card,
  },
  data() {
    return {
      loading: false,
      effect: null,
    };
  },
  methods: {
    load(effect) {
      const self = this;
      if (self.loading) return;
      self.effect = effect;
      self.loading = true;
      setTimeout(() => {
        self.loading = false;
      }, 3000);
    },
  },
};
</script>
