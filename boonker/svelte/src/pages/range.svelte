<script>
  import {
    Navbar,
    Page,
    BlockTitle,
    Range,
    List,
    ListItem,
    ListItemCell,
    Icon,
    Block,
  } from 'techno4-svelte';

  let priceMin = 200;
  let priceMax = 400;

  function onPriceChange(values) {
    priceMin = values[0];
    priceMax = values[1];
  }
</script>

<Page>
  <Navbar title="Range Slider" backLink="Back" />

  <BlockTitle>Volume</BlockTitle>
  <List simpleList>
    <ListItem>
      <ListItemCell class="width-auto flex-shrink-0">
        <Icon ios="t4:speaker_fill" aurora="t4:speaker_fill" md="material:volume_mute" />
      </ListItemCell>
      <ListItemCell class="flex-shrink-3">
        <Range min={0} max={100} step={1} value={10} />
      </ListItemCell>
      <ListItemCell class="width-auto flex-shrink-0">
        <Icon ios="t4:speaker_3_fill" aurora="t4:speaker_3_fill" md="material:volume_up" />
      </ListItemCell>
    </ListItem>
  </List>

  <BlockTitle>Brightness</BlockTitle>
  <List simpleList>
    <ListItem>
      <ListItemCell class="width-auto flex-shrink-0">
        <Icon ios="t4:sun_min" aurora="t4:sun_min" md="material:brightness_low" />
      </ListItemCell>
      <ListItemCell class="flex-shrink-3">
        <Range min={0} max={100} step={1} value={50} label={true} color="orange" />
      </ListItemCell>
      <ListItemCell class="width-auto flex-shrink-0">
        <Icon ios="t4:sun_max_fill" aurora="t4:sun_max_fill" md="material:brightness_high" />
      </ListItemCell>
    </ListItem>
  </List>

  <BlockTitle class="display-flex justify-content-space-between">
    Price Filter
    <span>${priceMin} - ${priceMax}</span>
  </BlockTitle>
  <List simpleList>
    <ListItem>
      <ListItemCell class="width-auto flex-shrink-0">
        <Icon
          ios="t4:money_dollar_circle"
          aurora="t4:money_dollar_circle"
          md="material:attach_money" />
      </ListItemCell>
      <ListItemCell class="flex-shrink-3">
        <Range
          min={0}
          max={500}
          step={1}
          value={[priceMin, priceMax]}
          label={true}
          dual={true}
          color="green"
          onRangeChange={onPriceChange} />
      </ListItemCell>
      <ListItemCell class="width-auto flex-shrink-0">
        <Icon
          ios="t4:money_dollar_circle_fill"
          aurora="t4:money_dollar_circle_fill"
          md="material:monetization_on" />
      </ListItemCell>
    </ListItem>
  </List>

  <BlockTitle>With Scale</BlockTitle>
  <Block strong>
    <Range
      min={0}
      max={100}
      label={true}
      step={5}
      value={25}
      scale={true}
      scaleSteps={5}
      scaleSubSteps={4} />
  </Block>

  <BlockTitle>Vertical</BlockTitle>
  <Block strong class="display-flex justify-content-center">
    <Range
      class="margin-right"
      style="height: 160px"
      vertical={true}
      min={0}
      max={100}
      label={true}
      step={1}
      value={25} />
    <Range
      class="margin-horizontal"
      style="height: 160px"
      vertical={true}
      min={0}
      max={100}
      label={true}
      step={1}
      value={50} />
    <Range
      class="margin-horizontal"
      style="height: 160px"
      vertical={true}
      min={0}
      max={100}
      label={true}
      step={1}
      value={75} />
    <Range
      class="margin-left"
      style="height: 160px"
      dual={true}
      vertical={true}
      min={0}
      max={100}
      label={true}
      step={1}
      value={[25, 75]} />
  </Block>

  <BlockTitle>Vertical Reversed</BlockTitle>
  <Block strong class="display-flex justify-content-center">
    <Range
      class="margin-right"
      color="red"
      style="height: 160px"
      vertical={true}
      verticalReversed={true}
      min={0}
      max={100}
      label={true}
      step={1}
      value={25} />
    <Range
      class="margin-horizontal"
      color="red"
      style="height: 160px"
      vertical={true}
      verticalReversed={true}
      min={0}
      max={100}
      label={true}
      step={1}
      value={50} />
    <Range
      class="margin-horizontal"
      color="red"
      style="height: 160px"
      vertical={true}
      verticalReversed={true}
      min={0}
      max={100}
      label={true}
      step={1}
      value={75} />
    <Range
      class="margin-left"
      color="red"
      style="height: 160px"
      dual={true}
      vertical={true}
      verticalReversed={true}
      min={0}
      max={100}
      label={true}
      step={1}
      value={[25, 75]} />
  </Block>
</Page>
