<template>
  <t4-page>
    <t4-navbar title="List View" back-link="Back" />
    <t4-block>
      <p>
        techno4 allows you to be flexible with list views (table views). You can make them as
        navigation menus, you can use there icons, inputs, and any elements inside of the list, and
        even make them nested:
      </p>
    </t4-block>
    <t4-block-title>Simple List</t4-block-title>
    <t4-list simple-list>
      <t4-list-item title="Item 1" />
      <t4-list-item title="Item 2" />
      <t4-list-item title="Item 3" />
    </t4-list>
    <t4-block-title>Simple Links List</t4-block-title>
    <t4-list>
      <t4-list-item title="Link 1" link="#" />
      <t4-list-item title="Link 2" link="#" />
      <t4-list-item title="Link 3" link="#" />
    </t4-list>
    <t4-block-title>Data list, with icons</t4-block-title>
    <t4-list>
      <t4-list-item title="Ivan Petrov" after="CEO">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item title="John Doe" badge="5">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item title="Jenna Smith">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
    </t4-list>
    <t4-block-title>Links</t4-block-title>
    <t4-list>
      <t4-list-item link="#" title="Ivan Petrov" after="CEO">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item link="#" title="John Doe" after="Cleaner">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item link="#" title="Jenna Smith">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
    </t4-list>
    <t4-block-title>Links, Header, Footer</t4-block-title>
    <t4-list>
      <t4-list-item link="#" header="Name" title="John Doe" after="Edit">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item link="#" header="Phone" title="+7 90 111-22-3344" after="Edit">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item link="#" header="Email" title="john@doe" footer="Home" after="Edit">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item link="#" header="Email" title="john@techno4" footer="Work" after="Edit">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
    </t4-list>
    <t4-block-title>Links, no icons</t4-block-title>
    <t4-list>
      <t4-list-item link="#" title="Ivan Petrov" />
      <t4-list-item link="#" title="John Doe" />
      <t4-list-item divider title="Divider Here" />
      <t4-list-item link="#" title="Ivan Petrov" />
      <t4-list-item link="#" title="Jenna Smith" />
    </t4-list>
    <t4-block-title>Grouped with sticky titles</t4-block-title>
    <t4-list>
      <t4-list-group>
        <t4-list-item title="A" group-title />
        <t4-list-item title="Aaron " />
        <t4-list-item title="Abbie" />
        <t4-list-item title="Adam" />
      </t4-list-group>
      <t4-list-group>
        <t4-list-item title="B" group-title />
        <t4-list-item title="Bailey" />
        <t4-list-item title="Barclay" />
        <t4-list-item title="Bartolo" />
      </t4-list-group>
      <t4-list-group>
        <t4-list-item title="C" group-title />
        <t4-list-item title="Caiden" />
        <t4-list-item title="Calvin" />
        <t4-list-item title="Candy" />
      </t4-list-group>
    </t4-list>
    <t4-block-title>Mixed and nested</t4-block-title>
    <t4-list>
      <t4-list-item link="#" title="Ivan Petrov" after="CEO">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item link="#" title="Two icons here">
        <template #media>
          <t4-icon icon="icon-t4" />
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item title="No icons here" />
      <li>
        <ul>
          <t4-list-item link="#" title="Ivan Petrov" after="CEO">
            <template #media>
              <t4-icon icon="icon-t4" />
            </template>
          </t4-list-item>
          <t4-list-item link="#" title="Two icons here">
            <template #media>
              <t4-icon icon="icon-t4" />
              <t4-icon icon="icon-t4" />
            </template>
          </t4-list-item>
          <t4-list-item title="No icons here" />
          <t4-list-item link="#" title="Ultra long text goes here, no, it is really really long">
            <template #media>
              <t4-icon icon="icon-t4" />
            </template>
          </t4-list-item>
          <t4-list-item title="With toggle">
            <template #media>
              <t4-icon icon="icon-t4" />
            </template>
            <template #after>
              <t4-toggle />
            </template>
          </t4-list-item>
        </ul>
      </li>
      <t4-list-item link="#" title="Ultra long text goes here, no, it is really really long">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item title="With toggle">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
        <template #after>
          <t4-toggle />
        </template>
      </t4-list-item>
    </t4-list>
    <t4-block-title>Mixed, inset</t4-block-title>
    <t4-list inset>
      <t4-list-item link="#" title="Ivan Petrov" after="CEO">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item link="#" title="Two icons here">
        <template #media>
          <t4-icon icon="icon-t4" />
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item link="#" title="Ultra long text goes here, no, it is really really long">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item title="With toggle">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
        <template #after>
          <t4-toggle />
        </template>
      </t4-list-item>
      <t4-block-footer>
        <p>Here comes some useful information about list above</p>
      </t4-block-footer>
    </t4-list>
    <t4-block-title>Tablet inset</t4-block-title>
    <t4-list medium-inset>
      <t4-list-item link="#" title="Ivan Petrov" after="CEO">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item link="#" title="Two icons here">
        <template #media>
          <t4-icon icon="icon-t4" />
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-list-item link="#" title="Ultra long text goes here, no, it is really really long">
        <template #media>
          <t4-icon icon="icon-t4" />
        </template>
      </t4-list-item>
      <t4-block-footer>
        <p>This list block will look like "inset" only on tablets (iPad)</p>
      </t4-block-footer>
    </t4-list>

    <t4-block-title>Media Lists</t4-block-title>
    <t4-block>
      <p>
        Media Lists are almost the same as Data Lists, but with a more flexible layout for
        visualization of more complex data, like products, services, users, etc.
      </p>
    </t4-block>
    <t4-block-title>Songs</t4-block-title>
    <t4-list media-list>
      <t4-list-item
        link="#"
        title="Yellow Submarine"
        after="$15"
        subtitle="Beatles"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <template #media>
          <img src="https://cdn.techno4.io/placeholder/people-160x160-1.jpg" width="80" />
        </template>
      </t4-list-item>
      <t4-list-item
        link="#"
        title="Don't Stop Me Now"
        after="$22"
        subtitle="Queen"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <template #media>
          <img src="https://cdn.techno4.io/placeholder/people-160x160-2.jpg" width="80" />
        </template>
      </t4-list-item>
      <t4-list-item
        link="#"
        title="Billie Jean"
        after="$16"
        subtitle="Michael Jackson"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <template #media>
          <img src="https://cdn.techno4.io/placeholder/people-160x160-3.jpg" width="80" />
        </template>
      </t4-list-item>
    </t4-list>
    <t4-block-title>Mail App</t4-block-title>
    <t4-list media-list>
      <t4-list-item
        link="#"
        title="Facebook"
        after="17:14"
        subtitle="New messages from John Doe"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      />
      <t4-list-item
        link="#"
        title="John Doe (via Twitter)"
        after="17:11"
        subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      />
      <t4-list-item
        link="#"
        title="Facebook"
        after="16:48"
        subtitle="New messages from John Doe"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      />
      <t4-list-item
        link="#"
        title="John Doe (via Twitter)"
        after="15:32"
        subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      />
    </t4-list>
    <t4-block-title>Something more simple</t4-block-title>
    <t4-list media-list>
      <t4-list-item title="Yellow Submarine" subtitle="Beatles">
        <template #media>
          <img src="https://cdn.techno4.io/placeholder/fashion-88x88-1.jpg" width="44" />
        </template>
      </t4-list-item>
      <t4-list-item link="#" title="Don't Stop Me Now" subtitle="Queen">
        <template #media>
          <img src="https://cdn.techno4.io/placeholder/fashion-88x88-2.jpg" width="44" />
        </template>
      </t4-list-item>
      <t4-list-item title="Billie Jean" subtitle="Michael Jackson">
        <template #media>
          <img src="https://cdn.techno4.io/placeholder/fashion-88x88-3.jpg" width="44" />
        </template>
      </t4-list-item>
    </t4-list>
    <t4-block-title>Inset</t4-block-title>
    <t4-list media-list inset>
      <t4-list-item link="#" title="Yellow Submarine" subtitle="Beatles">
        <template #media>
          <img src="https://cdn.techno4.io/placeholder/fashion-88x88-4.jpg" width="44" />
        </template>
      </t4-list-item>
      <t4-list-item link="#" title="Don't Stop Me Now" subtitle="Queen">
        <template #media>
          <img src="https://cdn.techno4.io/placeholder/fashion-88x88-5.jpg" width="44" />
        </template>
      </t4-list-item>
      <t4-list-item link="#" title="Billie Jean" subtitle="Michael Jackson">
        <template #media>
          <img src="https://cdn.techno4.io/placeholder/fashion-88x88-6.jpg" width="44" />
        </template>
      </t4-list-item>
    </t4-list>
    <t4-block-title>Custom Table-like Layout</t4-block-title>
    <t4-list>
      <li>
        <a href="#" class="item-link item-content">
          <div class="item-inner item-cell">
            <div class="item-row">
              <div class="item-cell">Cell 1-1</div>
              <div class="item-cell">Cell 1-2</div>
              <div class="item-cell">Cell 1-3</div>
            </div>
            <div class="item-row">
              <div class="item-cell">Cell 2-1</div>
              <div class="item-cell">Cell 2-2</div>
            </div>
            <div class="item-row">
              <div class="item-cell">Cell 3-1</div>
              <div class="item-cell">
                <div class="item-row">Cell 3-2</div>
                <div class="item-row">Cell 3-3</div>
              </div>
            </div>
          </div>
        </a>
      </li>
      <li>
        <a href="#" class="item-link item-content">
          <div class="item-inner item-cell">
            <div class="item-row">
              <div class="item-cell">Cell 1-1</div>
              <div class="item-cell">Cell 1-2</div>
              <div class="item-cell">Cell 1-3</div>
            </div>
            <div class="item-row">
              <div class="item-cell">Cell 2-1</div>
              <div class="item-cell">Cell 2-2</div>
            </div>
            <div class="item-row">
              <div class="item-cell">Cell 3-1</div>
              <div class="item-cell">
                <div class="item-row">Cell 3-2</div>
                <div class="item-row">Cell 3-3</div>
              </div>
            </div>
          </div>
        </a>
      </li>
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
  t4ListGroup,
  t4BlockFooter,
  t4Icon,
  t4Toggle,
} from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4BlockTitle,
    t4Block,
    t4List,
    t4ListItem,
    t4ListGroup,
    t4BlockFooter,
    t4Icon,
    t4Toggle,
  },
};
</script>
