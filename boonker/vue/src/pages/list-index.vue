<template>
  <t4-page>
    <t4-navbar title="List Index" back-link="Back"></t4-navbar>
    <t4-list-index
      indexes="auto"
      list-el=".list.contacts-list"
      :scroll-list="true"
      :label="true"
      @listindex:select="onIndexSelect"
    ></t4-list-index>
    <t4-list contacts-list>
      <t4-list-group>
        <t4-list-item title="A" group-title></t4-list-item>
        <t4-list-item title="Aaron"></t4-list-item>
        <t4-list-item title="Adam"></t4-list-item>
        <t4-list-item title="Aiden"></t4-list-item>
        <t4-list-item title="Albert"></t4-list-item>
        <t4-list-item title="Alex"></t4-list-item>
        <t4-list-item title="Alexander"></t4-list-item>
        <t4-list-item title="Alfie"></t4-list-item>
        <t4-list-item title="Archie"></t4-list-item>
        <t4-list-item title="Arthur"></t4-list-item>
        <t4-list-item title="Austin"></t4-list-item>
      </t4-list-group>
      <t4-list-group>
        <t4-list-item title="B" group-title></t4-list-item>
        <t4-list-item title="Benjamin"></t4-list-item>
        <t4-list-item title="Blake"></t4-list-item>
        <t4-list-item title="Bobby"></t4-list-item>
      </t4-list-group>
      <t4-list-group>
        <t4-list-item title="C" group-title></t4-list-item>
        <t4-list-item title="Caleb"></t4-list-item>
        <t4-list-item title="Callum"></t4-list-item>
        <t4-list-item title="Cameron"></t4-list-item>
        <t4-list-item title="Charles"></t4-list-item>
        <t4-list-item title="Charlie"></t4-list-item>
        <t4-list-item title="Connor"></t4-list-item>
      </t4-list-group>
      <t4-list-group>
        <t4-list-item title="D" group-title></t4-list-item>
        <t4-list-item title="Daniel"></t4-list-item>
        <t4-list-item title="David"></t4-list-item>
        <t4-list-item title="Dexter"></t4-list-item>
        <t4-list-item title="Dylan"></t4-list-item>
      </t4-list-group>
      <t4-list-group>
        <t4-list-item title="E" group-title></t4-list-item>
        <t4-list-item title="Edward"></t4-list-item>
        <t4-list-item title="Elijah"></t4-list-item>
        <t4-list-item title="Elliot"></t4-list-item>
        <t4-list-item title="Elliott"></t4-list-item>
        <t4-list-item title="Ethan"></t4-list-item>
        <t4-list-item title="Evan"></t4-list-item>
      </t4-list-group>
      <t4-list-group>
        <t4-list-item title="F" group-title></t4-list-item>
        <t4-list-item title="Felix"></t4-list-item>
        <t4-list-item title="Finlay"></t4-list-item>
        <t4-list-item title="Finley"></t4-list-item>
        <t4-list-item title="Frankie"></t4-list-item>
        <t4-list-item title="Freddie"></t4-list-item>
        <t4-list-item title="Frederick"></t4-list-item>
      </t4-list-group>
      <t4-list-group>
        <t4-list-item title="G" group-title></t4-list-item>
        <t4-list-item title="Gabriel"></t4-list-item>
        <t4-list-item title="George"></t4-list-item>
      </t4-list-group>
      <t4-list-group>
        <t4-list-item title="H" group-title></t4-list-item>
        <t4-list-item title="Harley"></t4-list-item>
        <t4-list-item title="Harrison"></t4-list-item>
        <t4-list-item title="Harry"></t4-list-item>
        <t4-list-item title="Harvey"></t4-list-item>
        <t4-list-item title="Henry"></t4-list-item>
        <t4-list-item title="Hugo"></t4-list-item>
      </t4-list-group>
      <t4-list-group>
        <t4-list-item title="I" group-title></t4-list-item>
        <t4-list-item title="Ibrahim"></t4-list-item>
        <t4-list-item title="Isaac"></t4-list-item>
      </t4-list-group>
      <t4-list-group>
        <t4-list-item title="J" group-title></t4-list-item>
        <t4-list-item title="Jack"></t4-list-item>
        <t4-list-item title="Jacob"></t4-list-item>
        <t4-list-item title="Jake"></t4-list-item>
        <t4-list-item title="James"></t4-list-item>
        <t4-list-item title="Jamie"></t4-list-item>
        <t4-list-item title="Jayden"></t4-list-item>
        <t4-list-item title="Jenson"></t4-list-item>
        <t4-list-item title="Joseph"></t4-list-item>
        <t4-list-item title="Joshua"></t4-list-item>
        <t4-list-item title="Jude"></t4-list-item>
      </t4-list-group>
      <t4-list-group>
        <t4-list-item title="K" group-title></t4-list-item>
        <t4-list-item title="Kai"></t4-list-item>
        <t4-list-item title="Kian"></t4-list-item>
      </t4-list-group>
      <t4-list-group>
        <t4-list-item title="L" group-title></t4-list-item>
        <t4-list-item title="Leo"></t4-list-item>
        <t4-list-item title="Leon"></t4-list-item>
        <t4-list-item title="Lewis"></t4-list-item>
        <t4-list-item title="Liam"></t4-list-item>
        <t4-list-item title="Logan"></t4-list-item>
        <t4-list-item title="Louie"></t4-list-item>
        <t4-list-item title="Louis"></t4-list-item>
        <t4-list-item title="Luca"></t4-list-item>
        <t4-list-item title="Lucas"></t4-list-item>
        <t4-list-item title="Luke"></t4-list-item>
      </t4-list-group>
      <t4-list-group>
        <t4-list-item title="M" group-title></t4-list-item>
        <t4-list-item title="Mason"></t4-list-item>
        <t4-list-item title="Matthew"></t4-list-item>
        <t4-list-item title="Max"></t4-list-item>
        <t4-list-item title="Michael"></t4-list-item>
        <t4-list-item title="Mohammad"></t4-list-item>
        <t4-list-item title="Mohammed"></t4-list-item>
        <t4-list-item title="Muhammad"></t4-list-item>
      </t4-list-group>
      <t4-list-group>
        <t4-list-item title="N" group-title></t4-list-item>
        <t4-list-item title="Nathan"></t4-list-item>
        <t4-list-item title="Noah"></t4-list-item>
      </t4-list-group>
      <t4-list-group>
        <t4-list-item title="O" group-title></t4-list-item>
        <t4-list-item title="Oliver"></t4-list-item>
        <t4-list-item title="Ollie"></t4-list-item>
        <t4-list-item title="Oscar"></t4-list-item>
        <t4-list-item title="Owen"></t4-list-item>
      </t4-list-group>
      <t4-list-group>
        <t4-list-item title="R" group-title></t4-list-item>
        <t4-list-item title="Reuben"></t4-list-item>
        <t4-list-item title="Riley"></t4-list-item>
        <t4-list-item title="Robert"></t4-list-item>
        <t4-list-item title="Ronnie"></t4-list-item>
        <t4-list-item title="Rory"></t4-list-item>
        <t4-list-item title="Ryan"></t4-list-item>
      </t4-list-group>
      <t4-list-group>
        <t4-list-item title="S" group-title></t4-list-item>
        <t4-list-item title="Samuel"></t4-list-item>
        <t4-list-item title="Sebastian"></t4-list-item>
        <t4-list-item title="Seth"></t4-list-item>
        <t4-list-item title="Sonny"></t4-list-item>
        <t4-list-item title="Stanley"></t4-list-item>
      </t4-list-group>
      <t4-list-group>
        <t4-list-item title="T" group-title></t4-list-item>
        <t4-list-item title="Teddy"></t4-list-item>
        <t4-list-item title="Theo"></t4-list-item>
        <t4-list-item title="Theodore"></t4-list-item>
        <t4-list-item title="Thomas"></t4-list-item>
        <t4-list-item title="Toby"></t4-list-item>
        <t4-list-item title="Tommy"></t4-list-item>
        <t4-list-item title="Tyler"></t4-list-item>
      </t4-list-group>
      <t4-list-group>
        <t4-list-item title="W" group-title></t4-list-item>
        <t4-list-item title="William"></t4-list-item>
      </t4-list-group>
      <t4-list-group>
        <t4-list-item title="Z" group-title></t4-list-item>
        <t4-list-item title="Zachary"></t4-list-item>
      </t4-list-group>
    </t4-list>
  </t4-page>
</template>
<script>
import { t4Page, t4Navbar, t4List, t4ListGroup, t4ListItem, t4ListIndex } from 'techno4-vue';

export default {
  components: {
    t4Page,
    t4Navbar,
    t4List,
    t4ListGroup,
    t4ListItem,
    t4ListIndex,
  },
  methods: {
    onIndexSelect(itemContent) {
      // eslint-disable-next-line
      console.log(itemContent);
    },
  },
};
</script>
