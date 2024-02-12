<template>
  <t4-page>
    <t4-navbar title="Popover" back-link="Back"></t4-navbar>
    <t4-toolbar bottom>
      <t4-link>Dummy Link</t4-link>
      <t4-link popover-open=".popover-menu">Open Popover</t4-link>
    </t4-toolbar>

    <t4-block>
      <p><t4-button fill popover-open=".popover-menu">Open popover on me</t4-button></p>
      <p>
        Mauris fermentum neque et luctus venenatis. Vivamus a sem rhoncus, ornare tellus eu, euismod
        mauris. In porta turpis at semper convallis. Duis adipiscing leo eu nulla lacinia, quis
        rhoncus metus condimentum. Etiam nec malesuada nibh. Maecenas quis lacinia nisl, vel posuere
        dolor. Vestibulum condimentum, nisl ac vulputate egestas, neque enim dignissim elit, rhoncus
        volutpat magna enim a est. Aenean sit amet ligula neque. Cras suscipit rutrum enim. Nam a
        odio facilisis, elementum tellus non,
        <t4-link popover-open=".popover-menu">popover</t4-link> tortor. Pellentesque felis eros,
        dictum vitae lacinia quis, lobortis vitae ipsum. Cras vehicula bibendum lorem quis
        imperdiet.
      </p>
      <p>
        In hac habitasse platea dictumst. Etiam varius, ante vel ornare facilisis, velit massa
        rutrum dolor, ac porta magna magna lacinia nunc. Curabitur
        <t4-link popover-open=".popover-menu">popover!</t4-link> cursus laoreet. Aenean vel tempus
        augue. Pellentesque in imperdiet nibh. Mauris rhoncus nulla id sem suscipit volutpat.
        Pellentesque ac arcu in nisi viverra pulvinar. Nullam nulla orci, bibendum sed ligula non,
        ullamcorper iaculis mi. In hac habitasse platea dictumst. Praesent varius at nisl eu luctus.
        Cras aliquet porta est. Quisque elementum quis dui et consectetur. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sed laoreet purus.
        Pellentesque eget ante ante.
      </p>
      <p>
        Duis et ultricies nibh. Sed facilisis turpis urna, ac imperdiet erat venenatis eu. Proin sit
        amet faucibus tortor, et varius sem. Etiam vitae lacinia neque. Aliquam nisi purus, interdum
        in arcu sed, ultrices rutrum arcu. Nulla mi turpis, consectetur vel enim quis, facilisis
        viverra dui. Aliquam quis convallis tortor, quis semper ligula. Morbi ullamcorper
        <t4-link popover-open=".popover-menu">one more popover</t4-link> massa at accumsan. Etiam
        purus odio, posuere in ligula vitae, viverra ultricies justo. Vestibulum nec interdum nisi.
        Aenean ac consectetur velit, non malesuada magna. Sed pharetra vehicula augue, vel venenatis
        lectus gravida eget. Curabitur lacus tellus, venenatis eu arcu in, interdum auctor nunc.
        Nunc non metus neque. Suspendisse viverra lectus sed risus aliquet, vel accumsan dolor
        feugiat.
      </p>
    </t4-block>
    <t4-popover class="popover-menu">
      <t4-list>
        <t4-list-item link="/dialog/" popover-close title="Dialog" />
        <t4-list-item link="/tabs/" popover-close title="Tabs" />
        <t4-list-item link="/panel/" popover-close title="Side Panels" />
        <t4-list-item link="/list/" popover-close title="List View" />
        <t4-list-item link="/inputs/" popover-close title="Form Inputs" />
      </t4-list>
    </t4-popover>
  </t4-page>
</template>
<script>
import {
  t4Navbar,
  t4Page,
  t4Toolbar,
  t4Popover,
  t4List,
  t4ListItem,
  t4Block,
  t4Link,
  t4Button,
} from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4Toolbar,
    t4Popover,
    t4List,
    t4ListItem,
    t4Block,
    t4Link,
    t4Button,
  },
};
</script>
