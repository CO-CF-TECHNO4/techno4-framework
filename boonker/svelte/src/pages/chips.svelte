<script>
  import { t4, Navbar, Page, BlockTitle, Chip, Block } from 'techno4-svelte';

  function deleteChip(e) {
    const target = e.target;
    t4.dialog.confirm('Do you want to delete this tiny demo Chip?', () => {
      t4.$(target).parents('.chip').remove();
    });
  }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<Page>
  <Navbar title="Chips" backLink="Back"></Navbar>
  <BlockTitle>Chips With Text</BlockTitle>
  <Block strong>
    <Chip text="Example Chip" />
    <Chip text="Another Chip" />
    <Chip text="One More Chip" />
    <Chip text="Fourth Chip" />
    <Chip text="Last One" />
  </Block>
  <BlockTitle>Outline Chips</BlockTitle>
  <Block strong>
    <Chip outline text="Example Chip" />
    <Chip outline text="Another Chip" />
    <Chip outline text="One More Chip" />
    <Chip outline text="Fourth Chip" />
    <Chip outline text="Last One" />
  </Block>
  <BlockTitle>Icon Chips</BlockTitle>
  <Block strong>
    <Chip text="Add Contact" mediaBgColor="blue" iconIos="t4:plus_circle" iconAurora="t4:plus_circle" iconMd="material:add_circle" />
    <Chip text="London" mediaBgColor="green" iconIos="t4:compass" iconAurora="t4:compass" iconMd="material:location_on" />
    <Chip text="John Doe" mediaBgColor="red" iconIos="t4:person" iconAurora="t4:person" iconMd="material:person" />
  </Block>
  <BlockTitle>Contact Chips</BlockTitle>
  <Block strong>
    <Chip text="Jane Doe">
      <img slot="media" src="https://cdn.techno4.io/placeholder/people-100x100-9.jpg" />
    </Chip>
    <Chip text="John Doe">
      <img slot="media" src="https://cdn.techno4.io/placeholder/people-100x100-3.jpg" />
    </Chip>
    <Chip text="Adam Smith">
      <img slot="media" src="https://cdn.techno4.io/placeholder/people-100x100-7.jpg" />
    </Chip>
    <Chip text="Jennifer" mediaBgColor="pink" media="J" />
    <Chip text="Chris" mediaBgColor="yellow" mediaTextColor="black" media="C" />
    <Chip text="Kate" mediaBgColor="red" media="K" />
  </Block>
  <BlockTitle>Deletable Chips / Tags</BlockTitle>
  <Block strong>
    <Chip text="Example Chip" deleteable onDelete={deleteChip} />
    <Chip text="Chris" media="C" mediaBgColor="orange" textColor="black" deleteable onDelete={deleteChip} />
    <Chip text="Jane Doe" deleteable onDelete={deleteChip}>
      <img slot="media" src="https://cdn.techno4.io/placeholder/people-100x100-9.jpg"/>
    </Chip>
    <Chip text="One More Chip" deleteable onDelete={deleteChip} />
    <Chip text="Jennifer" mediaBgColor="pink" media="J" deleteable onDelete={deleteChip} />
    <Chip text="Adam Smith" deleteable onDelete={deleteChip}>
      <img slot="media" src="https://cdn.techno4.io/placeholder/people-100x100-7.jpg"/>
    </Chip>
  </Block>
  <BlockTitle>Color Chips</BlockTitle>
  <Block strong>
    <Chip text="Red Chip" color="red" />
    <Chip text="Green Chip" color="green" />
    <Chip text="Blue Chip" color="blue" />
    <Chip text="Orange Chip" color="orange" />
    <Chip text="Pink Chip" color="pink" />
    <Chip outline text="Red Chip" color="red" />
    <Chip outline text="Green Chip" color="green" />
    <Chip outline text="Blue Chip" color="blue" />
    <Chip outline text="Orange Chip" color="orange" />
    <Chip outline text="Pink Chip" color="pink" />
  </Block>
</Page>
