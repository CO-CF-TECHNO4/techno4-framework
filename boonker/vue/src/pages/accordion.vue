<template>
  <t4-page>
    <t4-navbar title="Accordion" back-link="Back"></t4-navbar>

    <t4-block-title>List View Accordion</t4-block-title>
    <t4-list accordion-list>
      <t4-list-item accordion-item title="Lorem Ipsum">
        <t4-accordion-content>
          <t4-block>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec
              commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper
              arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel
              congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget
              ipsum.
            </p>
          </t4-block>
        </t4-accordion-content>
      </t4-list-item>
      <t4-list-item accordion-item title="Nested List">
        <t4-accordion-content>
          <t4-list>
            <t4-list-item title="Item 1"></t4-list-item>
            <t4-list-item title="Item 2"></t4-list-item>
            <t4-list-item title="Item 3"></t4-list-item>
            <t4-list-item title="Item 4"></t4-list-item>
          </t4-list>
        </t4-accordion-content>
      </t4-list-item>
      <t4-list-item accordion-item title="Integer semper">
        <t4-accordion-content>
          <t4-block>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec
              commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper
              arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel
              congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget
              ipsum.
            </p>
          </t4-block>
        </t4-accordion-content>
      </t4-list-item>
    </t4-list>

    <t4-block-title>Inset Accordion</t4-block-title>
    <t4-list accordion-list inset>
      <t4-list-item accordion-item title="Lorem Ipsum">
        <t4-accordion-content>
          <t4-block>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec
              commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper
              arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel
              congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget
              ipsum.
            </p>
          </t4-block>
        </t4-accordion-content>
      </t4-list-item>
      <t4-list-item accordion-item title="Nested List">
        <t4-accordion-content>
          <t4-list>
            <t4-list-item title="Item 1"></t4-list-item>
            <t4-list-item title="Item 2"></t4-list-item>
            <t4-list-item title="Item 3"></t4-list-item>
            <t4-list-item title="Item 4"></t4-list-item>
          </t4-list>
        </t4-accordion-content>
      </t4-list-item>
      <t4-list-item accordion-item title="Integer semper">
        <t4-accordion-content>
          <t4-block>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec
              commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper
              arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel
              congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget
              ipsum.
            </p>
          </t4-block>
        </t4-accordion-content>
      </t4-list-item>
    </t4-list>

    <t4-block-title>Opposite Side</t4-block-title>
    <t4-list accordion-list accordion-opposite>
      <t4-list-item accordion-item title="Lorem Ipsum">
        <t4-accordion-content>
          <t4-block>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec
              commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper
              arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel
              congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget
              ipsum.
            </p>
          </t4-block>
        </t4-accordion-content>
      </t4-list-item>
      <t4-list-item accordion-item title="Nested List">
        <t4-accordion-content>
          <t4-list>
            <t4-list-item title="Item 1"></t4-list-item>
            <t4-list-item title="Item 2"></t4-list-item>
            <t4-list-item title="Item 3"></t4-list-item>
            <t4-list-item title="Item 4"></t4-list-item>
          </t4-list>
        </t4-accordion-content>
      </t4-list-item>
      <t4-list-item accordion-item title="Integer semper">
        <t4-accordion-content>
          <t4-block>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec
              commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper
              arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel
              congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget
              ipsum.
            </p>
          </t4-block>
        </t4-accordion-content>
      </t4-list-item>
    </t4-list>

    <t4-block-title>Custom Collapsible</t4-block-title>
    <t4-block inner accordion-list>
      <t4-accordion-item v-for="n in 3" :key="n">
        <t4-accordion-toggle
          ><b>Item {{ n }}</b></t4-accordion-toggle
        >
        <t4-accordion-content>Content {{ n }}</t4-accordion-content>
      </t4-accordion-item>
    </t4-block>
  </t4-page>
</template>
<script>
import {
  t4Navbar,
  t4Page,
  t4BlockTitle,
  t4Block,
  t4AccordionItem,
  t4AccordionToggle,
  t4AccordionContent,
  t4List,
  t4ListItem,
} from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4BlockTitle,
    t4Block,
    t4AccordionItem,
    t4AccordionToggle,
    t4AccordionContent,
    t4List,
    t4ListItem,
  },
};
</script>
