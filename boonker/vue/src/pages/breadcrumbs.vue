<template>
  <t4-page>
    <t4-navbar sliding back-link="Back" title="Breadcrumbs" />
    <t4-block strong>
      <p>
        Breadcrumbs allow users to keep track and maintain awareness of their locations within the
        app or website. They should be used for large sites and apps with hierarchically arranged
        pages.
      </p>
    </t4-block>

    <t4-block-title>Basic</t4-block-title>
    <t4-block strong>
      <t4-breadcrumbs>
        <t4-breadcrumbs-item>
          <t4-link>Home</t4-link>
        </t4-breadcrumbs-item>
        <t4-breadcrumbs-separator />
        <t4-breadcrumbs-item>
          <t4-link>Catalog</t4-link>
        </t4-breadcrumbs-item>
        <t4-breadcrumbs-separator />
        <t4-breadcrumbs-item active>Phones</t4-breadcrumbs-item>
      </t4-breadcrumbs>
    </t4-block>

    <t4-block-title>Scrollable</t4-block-title>
    <t4-block-header>Breadcrumbs will be scrollable if they don't fit the screen</t4-block-header>
    <t4-block strong>
      <t4-breadcrumbs>
        <t4-breadcrumbs-item>
          <t4-link>Home</t4-link>
        </t4-breadcrumbs-item>
        <t4-breadcrumbs-separator />
        <t4-breadcrumbs-item>
          <t4-link>Catalog</t4-link>
        </t4-breadcrumbs-item>
        <t4-breadcrumbs-separator />
        <t4-breadcrumbs-item>
          <t4-link>Phones</t4-link>
        </t4-breadcrumbs-item>
        <t4-breadcrumbs-separator />
        <t4-breadcrumbs-item>
          <t4-link>Apple</t4-link>
        </t4-breadcrumbs-item>
        <t4-breadcrumbs-separator />
        <t4-breadcrumbs-item active>iPhone 12</t4-breadcrumbs-item>
      </t4-breadcrumbs>
    </t4-block>

    <t4-block-title>Collapsed</t4-block-title>
    <t4-block strong>
      <t4-breadcrumbs>
        <t4-breadcrumbs-item>
          <t4-link>Home</t4-link>
        </t4-breadcrumbs-item>
        <t4-breadcrumbs-separator />
        <t4-breadcrumbs-collapsed class="popover-open" data-popover=".breadcrumbs-popover">
          <t4-popover class="breadcrumbs-popover" style="width: 120px">
            <t4-list>
              <t4-list-item link title="Catalog" popover-close />
              <t4-list-item link title="Phones" popover-close />
              <t4-list-item link title="Apple" popover-close />
            </t4-list>
          </t4-popover>
        </t4-breadcrumbs-collapsed>
        <t4-breadcrumbs-separator />
        <t4-breadcrumbs-item active>iPhone 12</t4-breadcrumbs-item>
      </t4-breadcrumbs>
    </t4-block>

    <t4-block-title>With Icons</t4-block-title>
    <t4-block strong>
      <t4-breadcrumbs>
        <t4-breadcrumbs-item>
          <t4-link
            icon-ios="t4:house_fill"
            icon-aurora="t4:house_fill"
            icon-md="material:home"
            text="Home"
          />
        </t4-breadcrumbs-item>
        <t4-breadcrumbs-separator />
        <t4-breadcrumbs-item>
          <t4-link
            icon-ios="t4:square_list_fill"
            icon-aurora="t4:square_list_fill"
            icon-md="material:list_alt"
            text="Catalog"
          />
        </t4-breadcrumbs-item>
        <t4-breadcrumbs-separator />
        <t4-breadcrumbs-item>
          <t4-link
            icon-ios="t4:device_phone_portrait"
            icon-aurora="t4:device_phone_portrait"
            icon-md="material:smartphone"
            text="Phones"
          />
        </t4-breadcrumbs-item>
        <t4-breadcrumbs-separator />
        <t4-breadcrumbs-item>
          <t4-link icon-t4="logo_apple" text="Apple" />
        </t4-breadcrumbs-item>
        <t4-breadcrumbs-separator />
        <t4-breadcrumbs-item active>iPhone 12</t4-breadcrumbs-item>
      </t4-breadcrumbs>
    </t4-block>
  </t4-page>
</template>
<script>
import {
  t4Navbar,
  t4Page,
  t4Link,
  t4Block,
  t4BlockTitle,
  t4BlockHeader,
  t4Breadcrumbs,
  t4BreadcrumbsItem,
  t4BreadcrumbsSeparator,
  t4BreadcrumbsCollapsed,
  t4Popover,
  t4List,
  t4ListItem,
} from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4Link,
    t4Block,
    t4BlockTitle,
    t4BlockHeader,
    t4Breadcrumbs,
    t4BreadcrumbsItem,
    t4BreadcrumbsSeparator,
    t4BreadcrumbsCollapsed,
    t4Popover,
    t4List,
    t4ListItem,
  },
};
</script>
