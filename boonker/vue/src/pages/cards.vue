<template>
  <t4-page>
    <t4-navbar title="Cards" back-link="Back"></t4-navbar>

    <t4-block>
      <p>
        Cards are a great way to contain and organize your information, especially when combined
        with List Views. Cards can contain unique related data, like for example photos, text or
        links about a particular subject. Cards are typically an entry point to more complex and
        detailed information.
      </p>
    </t4-block>
    <t4-block-title>Simple Cards</t4-block-title>
    <t4-card
      content="This is a simple card with plain text, but cards can also contain their own header, footer, list view, image, or any other element."
    ></t4-card>
    <t4-card
      title="Card header"
      content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
      footer="Card footer"
    ></t4-card>
    <t4-card
      content="Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet. Mauris aliquet magna justo. "
    ></t4-card>

    <t4-block-title>Outline Cards</t4-block-title>
    <t4-card
      outline
      content="This is a simple card with plain text, but cards can also contain their own header, footer, list view, image, or any other element."
    ></t4-card>
    <t4-card
      outline
      title="Card header"
      content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
      footer="Card footer"
    ></t4-card>
    <t4-card
      outline
      content="Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet. Mauris aliquet magna justo. "
    ></t4-card>

    <t4-block-title>Styled Cards</t4-block-title>
    <t4-card class="demo-card-header-pic">
      <t4-card-header
        class="no-border"
        valign="bottom"
        style="background-image: url(https://cdn.techno4.io/placeholder/nature-1000x600-3.jpg)"
        >Journey To Mountains</t4-card-header
      >
      <t4-card-content>
        <p class="date">Posted on January 21, 2015</p>
        <p>
          Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non
          felis. Phasellus quis nibh hendrerit...
        </p>
      </t4-card-content>
      <t4-card-footer>
        <t4-link>Like</t4-link>
        <t4-link>Read more</t4-link>
      </t4-card-footer>
    </t4-card>
    <t4-card class="demo-card-header-pic">
      <t4-card-header
        class="no-border"
        valign="bottom"
        style="background-image: url(https://cdn.techno4.io/placeholder/people-1000x600-6.jpg)"
        >Journey To Mountains</t4-card-header
      >
      <t4-card-content>
        <p class="date">Posted on January 21, 2015</p>
        <p>
          Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non
          felis. Phasellus quis nibh hendrerit...
        </p>
      </t4-card-content>
      <t4-card-footer>
        <t4-link>Like</t4-link>
        <t4-link>Read more</t4-link>
      </t4-card-footer>
    </t4-card>

    <t4-block-title>Facebook Cards</t4-block-title>
    <t4-card class="demo-facebook-card">
      <t4-card-header class="no-border">
        <div class="demo-facebook-avatar">
          <img
            src="https://cdn.techno4.io/placeholder/people-68x68-1.jpg"
            width="34"
            height="34"
          />
        </div>
        <div class="demo-facebook-name">John Doe</div>
        <div class="demo-facebook-date">Monday at 3:47 PM</div>
      </t4-card-header>
      <t4-card-content :padding="false">
        <img src="https://cdn.techno4.io/placeholder/nature-1000x700-8.jpg" width="100%" />
      </t4-card-content>
      <t4-card-footer class="no-border">
        <t4-link>Like</t4-link>
        <t4-link>Comment</t4-link>
        <t4-link>Share</t4-link>
      </t4-card-footer>
    </t4-card>
    <t4-card class="demo-facebook-card">
      <t4-card-header class="no-border">
        <div class="demo-facebook-avatar">
          <img
            src="https://cdn.techno4.io/placeholder/people-68x68-1.jpg"
            width="34"
            height="34"
          />
        </div>
        <div class="demo-facebook-name">John Doe</div>
        <div class="demo-facebook-date">Monday at 2:15 PM</div>
      </t4-card-header>
      <t4-card-content>
        <p>What a nice photo i took yesterday!</p>
        <img src="https://cdn.techno4.io/placeholder/nature-1000x700-8.jpg" width="100%" />
        <p class="likes">Likes: 112 &nbsp;&nbsp; Comments: 43</p>
      </t4-card-content>
      <t4-card-footer class="no-border">
        <t4-link>Like</t4-link>
        <t4-link>Comment</t4-link>
        <t4-link>Share</t4-link>
      </t4-card-footer>
    </t4-card>

    <t4-block-title>Cards With List View</t4-block-title>
    <t4-card>
      <t4-card-content :padding="false">
        <t4-list>
          <t4-list-item link="#">Link 1</t4-list-item>
          <t4-list-item link="#">Link 2</t4-list-item>
          <t4-list-item link="#">Link 3</t4-list-item>
          <t4-list-item link="#">Link 4</t4-list-item>
          <t4-list-item link="#">Link 5</t4-list-item>
        </t4-list>
      </t4-card-content>
    </t4-card>
    <t4-card title="New Releases:">
      <t4-card-content :padding="false">
        <t4-list medial-list>
          <t4-list-item title="Yellow Submarine" subtitle="Beatles">
            <template #media>
              <img src="https://cdn.techno4.io/placeholder/fashion-88x88-4.jpg" width="44" />
            </template>
          </t4-list-item>
          <t4-list-item title="Don't Stop Me Now" subtitle="Queen">
            <template #media>
              <img src="https://cdn.techno4.io/placeholder/fashion-88x88-5.jpg" width="44" />
            </template>
          </t4-list-item>
          <t4-list-item title="Billie Jean" subtitle="Michael Jackson">
            <template #media>
              <img src="https://cdn.techno4.io/placeholder/fashion-88x88-6.jpg" width="44" />
            </template>
          </t4-list-item>
        </t4-list>
      </t4-card-content>
      <t4-card-footer>
        <span>January 20, 2015</span>
        <span>5 comments</span>
      </t4-card-footer>
    </t4-card>
  </t4-page>
</template>
<script>
import {
  t4Navbar,
  t4Page,
  t4Block,
  t4BlockTitle,
  t4Card,
  t4CardHeader,
  t4CardContent,
  t4CardFooter,
  t4List,
  t4ListItem,
  t4Link,
} from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4Block,
    t4BlockTitle,
    t4Card,
    t4CardHeader,
    t4CardContent,
    t4CardFooter,
    t4List,
    t4ListItem,
    t4Link,
  },
};
</script>
