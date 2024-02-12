<template>
  <t4-page>
    <t4-navbar back-link="Back" title="Searchbar">
      <t4-subnavbar :inner="false">
        <t4-searchbar
          search-container=".search-list"
          search-in=".item-title"
          :disable-button="!theme.aurora"
        ></t4-searchbar>
      </t4-subnavbar>
    </t4-navbar>
    <t4-list class="searchbar-not-found">
      <t4-list-item title="Nothing found" />
    </t4-list>
    <t4-list class="search-list searchbar-found">
      <t4-list-item title="Acura" />
      <t4-list-item title="Audi" />
      <t4-list-item title="BMW" />
      <t4-list-item title="Cadillac" />
      <t4-list-item title="Chevrolet" />
      <t4-list-item title="Chrysler" />
      <t4-list-item title="Dodge" />
      <t4-list-item title="Ferrari" />
      <t4-list-item title="Ford" />
      <t4-list-item title="GMC" />
      <t4-list-item title="Honda" />
      <t4-list-item title="Hummer" />
      <t4-list-item title="Hyundai" />
      <t4-list-item title="Infiniti" />
      <t4-list-item title="Isuzu" />
      <t4-list-item title="Jaguar" />
      <t4-list-item title="Jeep" />
      <t4-list-item title="Kia" />
      <t4-list-item title="Lamborghini" />
      <t4-list-item title="Land Rover" />
      <t4-list-item title="Lexus" />
      <t4-list-item title="Lincoln" />
      <t4-list-item title="Lotus" />
      <t4-list-item title="Mazda" />
      <t4-list-item title="Mercedes-Benz" />
      <t4-list-item title="Mercury" />
      <t4-list-item title="Mitsubishi" />
      <t4-list-item title="Nissan" />
      <t4-list-item title="Oldsmobile" />
      <t4-list-item title="Peugeot" />
      <t4-list-item title="Pontiac" />
      <t4-list-item title="Porsche" />
      <t4-list-item title="Regal" />
      <t4-list-item title="Saab" />
      <t4-list-item title="Saturn" />
      <t4-list-item title="Subaru" />
      <t4-list-item title="Suzuki" />
      <t4-list-item title="Toyota" />
      <t4-list-item title="Volkswagen" />
      <t4-list-item title="Volvo" />
    </t4-list>
  </t4-page>
</template>
<script>
import {
  t4Navbar,
  t4Page,
  t4Searchbar,
  t4Subnavbar,
  t4List,
  t4ListItem,
  theme,
} from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4Searchbar,
    t4Subnavbar,
    t4List,
    t4ListItem,
  },
  data() {
    return {
      theme,
    };
  },
};
</script>
