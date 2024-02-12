<template>
  <t4-page>
    <t4-navbar title="Text Editor" back-link="Back"></t4-navbar>
    <t4-block>
      <p>
        techno4 comes with a touch-friendly Rich Text Editor component. It is based on modern
        "contenteditable" API so it should work everywhere as is.
      </p>
      <p>
        It comes with the basic set of formatting features. But its functionality can be easily
        extended and customized to fit any requirements.
      </p>
    </t4-block>

    <t4-block-title>Default Setup</t4-block-title>
    <t4-text-editor />

    <t4-block-title>With Placeholder</t4-block-title>
    <t4-text-editor placeholder="Enter text..." />

    <t4-block-title>With Default Value</t4-block-title>
    <t4-text-editor
      placeholder="Enter text..."
      :value="customValue"
      @texteditor:change="(v) => (customValue = v)"
    />

    <t4-block-title>Specific Buttons</t4-block-title>
    <t4-block-header>It is possible to customize which buttons (commands) to show.</t4-block-header>
    <t4-text-editor
      placeholder="Enter text..."
      :buttons="[
        ['bold', 'italic', 'underline', 'strikeThrough'],
        ['orderedList', 'unorderedList'],
      ]"
    />

    <t4-block-title>Custom Button</t4-block-title>
    <t4-block-header
      >It is possible to create custom editor buttons. Here is the custom "hr" button that adds
      horizontal rule:</t4-block-header
    >
    <t4-text-editor
      placeholder="Enter text..."
      :custom-buttons="customButtons"
      :buttons="[['bold', 'italic', 'underline', 'strikeThrough'], 'hr']"
    />

    <t4-block-title>Resizable</t4-block-title>
    <t4-block-header>Editor will be resized based on its content.</t4-block-header>
    <t4-text-editor
      placeholder="Enter text..."
      resizable
      :buttons="['bold', 'italic', 'underline', 'strikeThrough']"
    />

    <t4-block-title>Popover Mode</t4-block-title>
    <t4-block-header
      >In this mode, there is no toolbar with buttons, but they appear as popover when you select
      any text in editor.</t4-block-header
    >
    <t4-text-editor
      placeholder="Enter text..."
      mode="popover"
      :buttons="['bold', 'italic', 'underline', 'strikeThrough']"
      style="--t4-text-editor-height: 150px"
    />

    <t4-block-title>Keyboard Toolbar Mode</t4-block-title>
    <t4-block-header
      >In this mode, toolbar with buttons will appear on top of virtual keyboard when editor is in
      the focus. It is supported only in iOS, Android cordova apps and in Android Chrome. When not
      supported it will fallback to "popover" mode.</t4-block-header
    >
    <t4-text-editor
      placeholder="Enter text..."
      mode="keyboard-toolbar"
      style="--t4-text-editor-height: 150px"
    />

    <t4-block-title>As List Input</t4-block-title>
    <t4-block-header
      >Text editor can be used in list with other inputs. In this example it is enabled with
      "keyboard-toolbar"/"popover" type for "About" field.</t4-block-header
    >
    <t4-list>
      <t4-list-input type="text" label="Name" placeholder="Your name" />
      <t4-list-input
        type="texteditor"
        label="About"
        placeholder="About"
        resizable
        :text-editor-params="{
          mode: 'popover',
          buttons: ['bold', 'italic', 'underline', 'strikeThrough'],
        }"
        :value="listEditorValue"
        @texteditor:change="(value) => (listEditorValue = value)"
      />
    </t4-list>
  </t4-page>
</template>
<script>
import {
  t4Page,
  t4Navbar,
  t4BlockTitle,
  t4BlockHeader,
  t4Block,
  t4TextEditor,
  t4List,
  t4ListInput,
} from 'techno4-vue';

export default {
  components: {
    t4Page,
    t4Navbar,
    t4BlockTitle,
    t4BlockHeader,
    t4Block,
    t4TextEditor,
    t4List,
    t4ListInput,
  },
  data() {
    return {
      customButtons: {
        hr: {
          content: '&lt;hr&gt;',
          onClick() {
            document.execCommand('insertHorizontalRule', false);
          },
        },
      },
      customValue: `<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur sunt, sapiente quis eligendi consectetur hic asperiores assumenda quidem dolore quasi iusto tenetur commodi qui ullam sint sed alias! Consequatur, dolor!</p>
        <p>Provident reiciendis exercitationem reprehenderit amet repellat laborum, sequi id quam quis quo quos facere veniam ad libero dolorum animi. Nobis, illum culpa explicabo dolorem vitae ut dolor at reprehenderit magnam?</p>
        <p>Qui, animi. Dolores dicta, nobis aut expedita enim eum assumenda modi, blanditiis voluptatibus excepturi non pariatur. Facilis fugit facere sequi molestias nemo in, suscipit inventore consequuntur, repellat perferendis, voluptas odit.</p>
        <p>Tempora voluptates, doloribus architecto eligendi numquam facilis perspiciatis autem quam voluptas maxime ratione harum laudantium cum deleniti. In, alias deserunt voluptatibus eligendi libero nobis est unde et perspiciatis cumque voluptatum.</p>
        <p>Quam error doloribus qui laboriosam eligendi. Aspernatur quam pariatur perspiciatis reprehenderit atque dicta culpa, aut rem? Assumenda, quibusdam? Reprehenderit necessitatibus facere nemo iure maiores porro voluptates accusamus quibusdam. Nesciunt, assumenda?</p>`,
      listEditorValue: '',
    };
  },
};
</script>
