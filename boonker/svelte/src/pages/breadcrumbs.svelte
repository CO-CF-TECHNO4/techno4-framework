<script>
  import {
    Navbar,
    Page,
    BlockTitle,
    BlockHeader,
    Block,
    Breadcrumbs,
    BreadcrumbsItem,
    BreadcrumbsSeparator,
    BreadcrumbsCollapsed,
    Popover,
    List,
    ListItem,
    Link,
  } from 'techno4-svelte';
</script>

<Page>
  <Navbar sliding backLink="Back" title="Breadcrumbs" />
  <Block strong>
    <p>
      Breadcrumbs allow users to keep track and maintain awareness of their locations within the app
      or website. They should be used for large sites and apps with hierarchically arranged pages.
    </p>
  </Block>

  <BlockTitle>Basic</BlockTitle>
  <Block strong>
    <Breadcrumbs>
      <BreadcrumbsItem>
        <Link>Home</Link>
      </BreadcrumbsItem>
      <BreadcrumbsSeparator />
      <BreadcrumbsItem>
        <Link>Catalog</Link>
      </BreadcrumbsItem>
      <BreadcrumbsSeparator />
      <BreadcrumbsItem active>Phones</BreadcrumbsItem>
    </Breadcrumbs>
  </Block>

  <BlockTitle>Scrollable</BlockTitle>
  <BlockHeader>Breadcrumbs will be scrollable if they don't fit the screen</BlockHeader>
  <Block strong>
    <Breadcrumbs>
      <BreadcrumbsItem>
        <Link>Home</Link>
      </BreadcrumbsItem>
      <BreadcrumbsSeparator />
      <BreadcrumbsItem>
        <Link>Catalog</Link>
      </BreadcrumbsItem>
      <BreadcrumbsSeparator />
      <BreadcrumbsItem>
        <Link>Phones</Link>
      </BreadcrumbsItem>
      <BreadcrumbsSeparator />
      <BreadcrumbsItem>
        <Link>Apple</Link>
      </BreadcrumbsItem>
      <BreadcrumbsSeparator />
      <BreadcrumbsItem active>iPhone 12</BreadcrumbsItem>
    </Breadcrumbs>
  </Block>

  <BlockTitle>Collapsed</BlockTitle>
  <Block strong>
    <Breadcrumbs>
      <BreadcrumbsItem>
        <Link>Home</Link>
      </BreadcrumbsItem>
      <BreadcrumbsSeparator />
      <BreadcrumbsCollapsed class="popover-open" data-popover=".breadcrumbs-popover">
        <Popover class="breadcrumbs-popover" style="width: 120px">
          <List>
            <ListItem link title="Catalog" popoverClose />
            <ListItem link title="Phones" popoverClose />
            <ListItem link title="Apple" popoverClose />
          </List>
        </Popover>
      </BreadcrumbsCollapsed>
      <BreadcrumbsSeparator />
      <BreadcrumbsItem active>iPhone 12</BreadcrumbsItem>
    </Breadcrumbs>
  </Block>

  <BlockTitle>With Icons</BlockTitle>
  <Block strong>
    <Breadcrumbs>
      <BreadcrumbsItem>
        <Link
          iconIos="t4:house_fill"
          iconAurora="t4:house_fill"
          iconMd="material:home"
          text="Home"
        />
      </BreadcrumbsItem>
      <BreadcrumbsSeparator />
      <BreadcrumbsItem>
        <Link
          iconIos="t4:square_list_fill"
          iconAurora="t4:square_list_fill"
          iconMd="material:list_alt"
          text="Catalog"
        />
      </BreadcrumbsItem>
      <BreadcrumbsSeparator />
      <BreadcrumbsItem>
        <Link
          iconIos="t4:device_phone_portrait"
          iconAurora="t4:device_phone_portrait"
          iconMd="material:smartphone"
          text="Phones"
        />
      </BreadcrumbsItem>
      <BreadcrumbsSeparator />
      <BreadcrumbsItem>
        <Link icont4="logo_apple" text="Apple" />
      </BreadcrumbsItem>
      <BreadcrumbsSeparator />
      <BreadcrumbsItem active>iPhone 12</BreadcrumbsItem>
    </Breadcrumbs>
  </Block>
</Page>
