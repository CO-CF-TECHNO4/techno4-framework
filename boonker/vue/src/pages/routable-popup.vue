<template>
  <t4-popup>
    <t4-page>
      <t4-navbar title="Routable Popup">
        <t4-nav-right>
          <t4-link popup-close>Close</t4-link>
        </t4-nav-right>
      </t4-navbar>
      <t4-block strong>
        <p>This Popup was loaded using route link as standalone component</p>
        <p>
          Lorem ipsum dolor sit t4amet, consectetur adipiscing elit. Suspendisse faucibus mauris
          t4leo, eu bibendum neque congue non. Ut leo t4mauris, eleifend eu commodo t4a, egestas ac
          urna. Maecenas in lacus t4faucibus, viverra ipsum t4pulvinar, molestie arcu. Etiam lacinia
          venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros.
          Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra
          pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis
          elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a
          faucibus lectus.
        </p>
        <p>
          Duis ut mauris t4sollicitudin, venenatis nisi t4sed, luctus ligula. Phasellus blandit nisl
          ut lorem semper pharetra. Nullam tortor t4nibh, suscipit in consequat t4vel, feugiat sed
          quam. Nam risus t4libero, auctor vel tristique t4ac, malesuada ut ante. Sed t4molestie,
          est in eleifend t4sagittis, leo tortor ullamcorper t4erat, at vulputate eros sapien nec
          libero. Mauris dapibus laoreet nibh quis bibendum. Fusce dolor t4sem, suscipit in iaculis
          t4id, pharetra at urna. Pellentesque tempor congue massa quis faucibus. Vestibulum nunc
          t4eros, convallis blandit dui sit t4amet, gravida adipiscing libero.
        </p>
      </t4-block>
    </t4-page>
  </t4-popup>
</template>
<script>
import { t4Popup, t4Navbar, t4NavRight, t4Link, t4Page, t4Block } from 'techno4-vue';

export default {
  components: {
    t4Popup,
    t4Navbar,
    t4NavRight,
    t4Link,
    t4Page,
    t4Block,
  },
};
</script>
