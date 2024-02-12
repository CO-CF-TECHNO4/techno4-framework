<template>
  <t4-page>
    <t4-block-title>Left Panel</t4-block-title>
    <t4-block>
      <p>
        This is a left side panel. You can close it by clicking outsite or on this link:
        <t4-link panel-close>close me</t4-link>. You can put here anything, even another isolated
        view like in <t4-link panel-open="right">Right Panel</t4-link>
      </p>
    </t4-block>
    <t4-block-title>Main View Navigation</t4-block-title>
    <t4-list>
      <t4-list-item link="/accordion/" title="Accordion" panel-close />
      <t4-list-item link="/action-sheet/" title="Action Sheet" panel-close />
      <t4-list-item link="/badge/" title="Badge" panel-close />
      <t4-list-item link="/buttons/" title="Buttons" panel-close />
      <t4-list-item link="/cards/" title="Cards" panel-close />
      <t4-list-item link="/checkbox/" title="Checkbox" panel-close />
      <t4-list-item link="/chips/" title="Chips/Tags" panel-close />
      <t4-list-item link="/contacts-list/" title="Contacts List" panel-close />
      <t4-list-item link="/data-table/" title="Data Table" panel-close />
    </t4-list>
    <t4-block>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu
        bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas
        in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim.
        Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim quis quam
        elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean semper eu
        massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae ligula.
        Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus.
      </p>
      <p>
        Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl ut
        lorem semper pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed quam. Nam
        risus libero, auctor vel tristique ac, malesuada ut ante. Sed molestie, est in eleifend
        sagittis, leo tortor ullamcorper erat, at vulputate eros sapien nec libero. Mauris dapibus
        laoreet nibh quis bibendum. Fusce dolor sem, suscipit in iaculis id, pharetra at urna.
        Pellentesque tempor congue massa quis faucibus. Vestibulum nunc eros, convallis blandit dui
        sit amet, gravida adipiscing libero.
      </p>
    </t4-block>
  </t4-page>
</template>
<script>
import { t4Page, t4BlockTitle, t4Block, t4List, t4ListItem, t4Link } from 'techno4-vue';

export default {
  components: {
    t4Page,
    t4BlockTitle,
    t4Block,
    t4List,
    t4ListItem,
    t4Link,
  },
};
</script>
