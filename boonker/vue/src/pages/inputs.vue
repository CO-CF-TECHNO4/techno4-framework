<template>
  <t4-page>
    <t4-navbar title="Form Inputs" back-link="Back"></t4-navbar>
    <t4-block-title>Full Layout / Inline Labels</t4-block-title>
    <t4-list inline-labels no-hairlines-md>
      <t4-list-input label="Name" type="text" placeholder="Your name" clear-button>
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>

      <t4-list-input label="Password" type="password" placeholder="Your password" clear-button>
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>

      <t4-list-input label="E-mail" type="email" placeholder="Your e-mail" clear-button>
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>

      <t4-list-input label="URL" type="url" placeholder="URL" clear-button>
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>

      <t4-list-input label="Phone" type="tel" placeholder="Your phone number" clear-button>
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>

      <t4-list-input label="Gender" type="select" placeholder="Please choose...">
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </t4-list-input>

      <t4-list-input label="Birthday" type="date" placeholder="Please choose...">
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>

      <t4-list-input label="Date time" type="datetime-local" placeholder="Please choose...">
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>

      <t4-list-input label="Range" :input="false">
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
        <template #input>
          <t4-range :value="50" :min="0" :max="100" :step="1" />
        </template>
      </t4-list-input>

      <t4-list-input label="Textarea" type="textarea" placeholder="Bio">
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>

      <t4-list-input label="Resizable" type="textarea" resizable placeholder="Bio">
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>
    </t4-list>

    <t4-block-title>Full Layout / Stacked Labels</t4-block-title>
    <t4-list no-hairlines-md>
      <t4-list-input label="Name" type="text" placeholder="Your name" clear-button>
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>

      <t4-list-input label="Password" type="password" placeholder="Your password" clear-button>
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>

      <t4-list-input label="E-mail" type="email" placeholder="Your e-mail" clear-button>
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>

      <t4-list-input label="URL" type="url" placeholder="URL" clear-button>
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>

      <t4-list-input label="Phone" type="tel" placeholder="Your phone number" clear-button>
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>

      <t4-list-input label="Gender" type="select" placeholder="Please choose...">
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </t4-list-input>

      <t4-list-input label="Birthday" type="date" placeholder="Please choose...">
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>

      <t4-list-input label="Date time" type="datetime-local" placeholder="Please choose...">
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>

      <t4-list-input label="Range" :input="false">
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
        <template #input>
          <t4-range :value="50" :min="0" :max="100" :step="1" />
        </template>
      </t4-list-input>

      <t4-list-input label="Textarea" type="textarea" placeholder="Bio">
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>

      <t4-list-input label="Resizable" type="textarea" resizable placeholder="Bio">
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>
    </t4-list>

    <t4-block-title>Floating Labels</t4-block-title>
    <t4-list no-hairlines-md>
      <t4-list-input label="Name" floating-label type="text" placeholder="Your name" clear-button>
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>

      <t4-list-input
        label="Password"
        floating-label
        type="password"
        placeholder="Your password"
        clear-button
      >
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>

      <t4-list-input
        label="E-mail"
        floating-label
        type="email"
        placeholder="Your e-mail"
        clear-button
      >
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>

      <t4-list-input label="URL" floating-label type="url" placeholder="URL" clear-button>
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>

      <t4-list-input
        label="Phone"
        floating-label
        type="tel"
        placeholder="Your phone number"
        clear-button
      >
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>

      <t4-list-input label="Resizable" floating-label type="textarea" resizable placeholder="Bio">
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>
    </t4-list>

    <t4-block-title>Floating Labels + Outline Inputs</t4-block-title>
    <t4-list no-hairlines-md>
      <t4-list-input
        outline
        label="Name"
        floating-label
        type="text"
        placeholder="Your name"
        clear-button
      >
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>
      <t4-list-input
        outline
        label="Password"
        floating-label
        type="password"
        placeholder="Your password"
        clear-button
      >
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>
      <t4-list-input
        outline
        label="E-mail"
        floating-label
        type="email"
        placeholder="Your e-mail"
        clear-button
      >
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>
      <t4-list-input outline label="URL" floating-label type="url" placeholder="URL" clear-button>
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>
      <t4-list-input
        outline
        label="Phone"
        floating-label
        type="tel"
        placeholder="Your phone number"
        clear-button
      >
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>
      <t4-list-input
        outline
        label="Bio"
        floating-label
        type="textarea"
        resizable
        placeholder="Bio"
        clear-button
      >
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>
    </t4-list>

    <t4-block-title>Validation + Additional Info</t4-block-title>
    <t4-list no-hairlines-md>
      <t4-list-input
        label="Name"
        type="text"
        placeholder="Your name"
        info="Default validation"
        required
        validate
        clear-button
      >
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>

      <t4-list-input
        label="Fruit"
        type="text"
        placeholder="Type 'apple' or 'banana'"
        required
        validate
        pattern="apple|banana"
        clear-button
      >
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
        <template #info>
          <span>Pattern validation (<b>apple|banana</b>)</span>
        </template>
      </t4-list-input>

      <t4-list-input
        label="E-mail"
        type="email"
        placeholder="Your e-mail"
        info="Default e-mail validation"
        required
        validate
        clear-button
      >
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>

      <t4-list-input
        label="URL"
        type="url"
        placeholder="Your URL"
        info="Default URL validation"
        required
        validate
        clear-button
      >
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>

      <t4-list-input
        label="Number"
        type="text"
        placeholder="Enter number"
        info="With custom error message"
        error-message="Only numbers please!"
        required
        validate
        pattern="[0-9]*"
        clear-button
      >
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>
    </t4-list>

    <t4-block-title>Icon + Input</t4-block-title>
    <t4-list no-hairlines-md>
      <t4-list-input type="text" placeholder="Your name" clear-button>
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>

      <t4-list-input type="password" placeholder="Your password" clear-button>
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>

      <t4-list-input type="email" placeholder="Your e-mail" clear-button>
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>

      <t4-list-input type="url" placeholder="URL" clear-button>
        <template #media>
          <t4-icon icon="demo-list-icon" />
        </template>
      </t4-list-input>
    </t4-list>

    <t4-block-title>Label + Input</t4-block-title>
    <t4-list no-hairlines-md>
      <t4-list-input label="Name" type="text" placeholder="Your name" clear-button></t4-list-input>

      <t4-list-input
        label="Password"
        type="password"
        placeholder="Your password"
        clear-button
      ></t4-list-input>

      <t4-list-input
        label="E-mail"
        type="email"
        placeholder="Your e-mail"
        clear-button
      ></t4-list-input>

      <t4-list-input label="URL" type="url" placeholder="URL" clear-button></t4-list-input>
    </t4-list>

    <t4-block-title>Only Inputs</t4-block-title>
    <t4-list no-hairlines-md>
      <t4-list-input type="text" placeholder="Your name" clear-button></t4-list-input>

      <t4-list-input type="password" placeholder="Your password" clear-button></t4-list-input>

      <t4-list-input type="email" placeholder="Your e-mail" clear-button></t4-list-input>

      <t4-list-input type="url" placeholder="URL" clear-button></t4-list-input>
    </t4-list>

    <t4-block-title>Inputs + Additional Info</t4-block-title>
    <t4-list no-hairlines-md>
      <t4-list-input
        type="text"
        placeholder="Your name"
        info="Full name please"
        clear-button
      ></t4-list-input>

      <t4-list-input
        type="password"
        placeholder="Your password"
        info="8 characters minimum"
        clear-button
      ></t4-list-input>

      <t4-list-input
        type="email"
        placeholder="Your e-mail"
        info="Your work e-mail address"
        clear-button
      ></t4-list-input>

      <t4-list-input
        type="url"
        placeholder="URL"
        info="Your website URL"
        clear-button
      ></t4-list-input>
    </t4-list>

    <t4-block-title>Only Inputs Inset</t4-block-title>
    <t4-list inset>
      <t4-list-input type="text" placeholder="Your name" clear-button></t4-list-input>

      <t4-list-input type="password" placeholder="Your password" clear-button></t4-list-input>

      <t4-list-input type="email" placeholder="Your e-mail" clear-button></t4-list-input>

      <t4-list-input type="url" placeholder="URL" clear-button></t4-list-input>
    </t4-list>
  </t4-page>
</template>
<script>
import {
  t4Navbar,
  t4Page,
  t4BlockTitle,
  t4List,
  t4Icon,
  t4ListInput,
  t4Range,
} from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4BlockTitle,
    t4List,
    t4Icon,
    t4ListInput,
    t4Range,
  },
};
</script>
