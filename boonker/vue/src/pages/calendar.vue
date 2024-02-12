<template>
  <t4-page @page:beforeremove="onPageBeforeRemove" @page:init="onPageInit">
    <t4-navbar title="Calendar" back-link="Back"></t4-navbar>

    <t4-block>
      <p>Calendar is a touch optimized component that provides an easy way to handle dates.</p>
      <p>
        Calendar could be used as inline component or as overlay. Overlay Calendar will be
        automatically converted to Popover on tablets (iPad).
      </p>
    </t4-block>

    <t4-block-title>Default setup</t4-block-title>
    <t4-list no-hairlines-md>
      <t4-list-input type="datepicker" placeholder="Your birth date" readonly />
    </t4-list>

    <t4-block-title>Custom date format</t4-block-title>
    <t4-list no-hairlines-md>
      <t4-list-input
        type="datepicker"
        placeholder="Select date"
        readonly
        :calendar-params="{
          dateFormat: { weekday: 'long', month: 'long', day: '2-digit', year: 'numeric' },
        }"
      />
    </t4-list>

    <t4-block-title>Date + Time</t4-block-title>
    <t4-list no-hairlines-md>
      <t4-list-input
        type="datepicker"
        placeholder="Select date and time"
        readonly
        :calendar-params="{
          timePicker: true,
          dateFormat: {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          },
        }"
      />
    </t4-list>

    <t4-block-title>Multiple Values</t4-block-title>
    <t4-list no-hairlines-md>
      <t4-list-input
        type="datepicker"
        placeholder="Select multiple dates"
        readonly
        :calendar-params="{ dateFormat: { month: 'short', day: 'numeric' }, multiple: true }"
      />
    </t4-list>

    <t4-block-title>Range Picker</t4-block-title>
    <t4-list no-hairlines-md>
      <t4-list-input
        type="datepicker"
        placeholder="Select date range"
        readonly
        :calendar-params="{ rangePicker: true }"
      />
    </t4-list>

    <t4-block-title>Open in Modal</t4-block-title>
    <t4-list no-hairlines-md>
      <t4-list-input
        type="datepicker"
        placeholder="Select date"
        readonly
        :calendar-params="{ openIn: 'customModal', header: true, footer: true }"
      />
    </t4-list>

    <t4-block-title>Calendar Page</t4-block-title>
    <t4-list>
      <t4-list-item title="Open Calendar Page" link="/calendar-page/" />
    </t4-list>

    <t4-block-title>Inline with custom toolbar</t4-block-title>
    <t4-block strong class="no-padding">
      <div id="demo-calendar-inline-container"></div>
    </t4-block>
  </t4-page>
</template>
<script>
import {
  t4Navbar,
  t4Page,
  t4Block,
  t4BlockTitle,
  t4List,
  t4ListInput,
  t4ListItem,
  t4,
} from 'techno4-vue';
import $ from 'dom64';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4Block,
    t4BlockTitle,
    t4List,
    t4ListInput,
    t4ListItem,
  },
  methods: {
    onPageInit() {
      const self = this;

      // Inline with custom toolbar
      const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      self.calendarInline = t4.calendar.create({
        containerEl: '#demo-calendar-inline-container',
        value: [new Date()],
        renderToolbar() {
          return `
              <div class="toolbar calendar-custom-toolbar no-shadow">
                <div class="toolbar-inner">
                  <div class="left">
                    <a href="#" class="link icon-only"><i class="icon icon-back"></i></a>
                  </div>
                  <div class="center"></div>
                  <div class="right">
                    <a href="#" class="link icon-only"><i class="icon icon-forward"></i></a>
                  </div>
                </div>
              </div>
            `.trim();
        },
        on: {
          init(c) {
            $('.calendar-custom-toolbar .center').text(
              `${monthNames[c.currentMonth]}, ${c.currentYear}`,
            );
            $('.calendar-custom-toolbar .left .link').on('click', () => {
              self.calendarInline.prevMonth();
            });
            $('.calendar-custom-toolbar .right .link').on('click', () => {
              self.calendarInline.nextMonth();
            });
          },
          monthYearChangeStart(c) {
            $('.calendar-custom-toolbar .center').text(
              `${monthNames[c.currentMonth]}, ${c.currentYear}`,
            );
          },
        },
      });
    },
    onPageBeforeRemove() {
      const self = this;
      self.calendarInline.destroy();
    },
  },
};
</script>
