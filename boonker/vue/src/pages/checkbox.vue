<template>
  <t4-page>
    <t4-navbar title="Checkbox" back-link="Back"></t4-navbar>
    <t4-block-title>Inline</t4-block-title>
    <t4-block strong>
      <p>
        Lorem <t4-checkbox name="checkbox-1"></t4-checkbox> ipsum dolor sit amet, consectetur
        adipisicing elit. Alias beatae illo nihil aut eius commodi sint eveniet aliquid eligendi
        <t4-checkbox name="checkbox-2" checked></t4-checkbox> ad delectus impedit tempore nemo, enim
        vel praesentium consequatur nulla mollitia!
      </p>
    </t4-block>

    <t4-block-title>Checkbox Group</t4-block-title>
    <t4-list>
      <t4-list-item checkbox title="Books" name="demo-checkbox" checked></t4-list-item>
      <t4-list-item checkbox title="Movies" name="demo-checkbox"></t4-list-item>
      <t4-list-item checkbox title="Food" name="demo-checkbox"></t4-list-item>
      <t4-list-item checkbox title="Drinks" name="demo-checkbox"></t4-list-item>
    </t4-list>

    <t4-block-title>Indeterminate State</t4-block-title>
    <t4-list>
      <t4-list-item
        checkbox
        title="Movies"
        name="demo-checkbox"
        :checked="movies.length === 2"
        :indeterminate="movies.length === 1"
        @change="onMoviesChange"
      >
        <template #root>
          <ul>
            <t4-list-item
              checkbox
              title="Movie 1"
              name="demo-checkbox"
              value="Movie 1"
              :checked="movies.indexOf('Movie 1') >= 0"
              @change="onMovieChange"
            />
            <t4-list-item
              checkbox
              title="Movie 2"
              name="demo-checkbox"
              value="Movie 2"
              :checked="movies.indexOf('Movie 2') >= 0"
              @change="onMovieChange"
            />
          </ul>
        </template>
      </t4-list-item>
    </t4-list>

    <t4-block-title>With Media Lists</t4-block-title>
    <t4-list media-list>
      <t4-list-item
        checkbox
        checked
        name="demo-media-checkbox"
        title="Facebook"
        after="17:14"
        subtitle="New messages from John Doe"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      ></t4-list-item>
      <t4-list-item
        checkbox
        name="demo-media-checkbox"
        title="John Doe (via Twitter)"
        after="17:11"
        subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      ></t4-list-item>
      <t4-list-item
        checkbox
        name="demo-media-checkbox"
        title="Facebook"
        after="16:48"
        subtitle="New messages from John Doe"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      ></t4-list-item>
      <t4-list-item
        checkbox
        name="demo-media-checkbox"
        title="John Doe (via Twitter)"
        after="15:32"
        subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      ></t4-list-item>
    </t4-list>
  </t4-page>
</template>
<script>
import {
  t4Navbar,
  t4Page,
  t4BlockTitle,
  t4Block,
  t4List,
  t4ListItem,
  t4Checkbox,
} from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4BlockTitle,
    t4Block,
    t4List,
    t4ListItem,
    t4Checkbox,
  },
  data() {
    return {
      movies: ['Movie 1'],
    };
  },
  methods: {
    onMovieChange(e) {
      const self = this;
      const value = e.target.value;
      const movies = self.movies;
      if (e.target.checked) {
        movies.push(value);
      } else {
        movies.splice(movies.indexOf(value), 1);
      }
    },
    onMoviesChange() {
      const self = this;
      const movies = self.movies;
      if (movies.length === 1 || movies.length === 0) {
        self.movies = ['Movie 1', 'Movie 2'];
      } else if (movies.length === 2) {
        self.movies = [];
      }
    },
  },
};
</script>
