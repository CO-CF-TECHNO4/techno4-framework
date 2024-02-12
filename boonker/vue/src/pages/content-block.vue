<template>
  <t4-page>
    <t4-navbar title="Content Block" back-link="Back"></t4-navbar>
    <p>
      This paragraph is outside of content block. Not cool, but useful for any custom elements with
      custom styling.
    </p>

    <t4-block>
      <p>
        Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing
        ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis,
        vulputate turpis vel, sagittis felis.
      </p>
    </t4-block>

    <t4-block strong>
      <p>
        Here comes another text block with additional "block-strong" class. Praesent nec imperdiet
        diam. Maecenas vel lectus porttitor, consectetur magna nec, viverra sem. Aliquam sed risus
        dolor. Morbi tincidunt ut libero id sodales. Integer blandit varius nisi quis consectetur.
      </p>
    </t4-block>

    <t4-block-title>Block title</t4-block-title>
    <t4-block>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit
        vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.
      </p>
    </t4-block>

    <t4-block-title>Another ultra long content block title</t4-block-title>
    <t4-block strong>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit
        vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.
      </p>
    </t4-block>

    <t4-block-title>Inset</t4-block-title>
    <t4-block strong inset>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit
        vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.
      </p>
    </t4-block>

    <t4-block-title>Tablet Inset</t4-block-title>
    <t4-block strong medium-inset>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit
        vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.
      </p>
    </t4-block>

    <t4-block-title>With Header & Footer</t4-block-title>
    <t4-block>
      <t4-block-header>Block Header</t4-block-header>
      <p>
        Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing
        ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis,
        vulputate turpis vel, sagittis felis.
      </p>
      <t4-block-footer>Block Footer</t4-block-footer>
    </t4-block>

    <t4-block-header>Block Header</t4-block-header>
    <t4-block>
      <p>
        Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing
        ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis,
        vulputate turpis vel, sagittis felis.
      </p>
    </t4-block>
    <t4-block-footer>Block Footer</t4-block-footer>

    <t4-block strong>
      <t4-block-header>Block Header</t4-block-header>
      <p>
        Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing
        ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis,
        vulputate turpis vel, sagittis felis.
      </p>
      <t4-block-footer>Block Footer</t4-block-footer>
    </t4-block>

    <t4-block-header>Block Header</t4-block-header>
    <t4-block strong>
      <p>
        Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing
        ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis,
        vulputate turpis vel, sagittis felis.
      </p>
    </t4-block>
    <t4-block-footer>Block Footer</t4-block-footer>

    <t4-block-title large>Block Title Large</t4-block-title>
    <t4-block strong>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit
        vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.
      </p>
    </t4-block>

    <t4-block-title medium>Block Title Medium</t4-block-title>
    <t4-block strong>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit
        vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.
      </p>
    </t4-block>
  </t4-page>
</template>
<script>
import {
  t4Navbar,
  t4Page,
  t4BlockTitle,
  t4Block,
  t4BlockHeader,
  t4BlockFooter,
} from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4BlockTitle,
    t4Block,
    t4BlockHeader,
    t4BlockFooter,
  },
};
</script>
