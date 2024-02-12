<template>
  <t4-page @page:beforeremove="onPageBeforeRemove" @page:init="onPageInit">
    <t4-navbar back-link="Back" no-shadow>
      <t4-nav-title class="navbar-calendar-title"></t4-nav-title>
    </t4-navbar>
    <div id="calendar" class="block block-strong no-padding no-margin no-hairline-top"></div>
    <t4-list id="calendar-events" class="no-margin no-hairlines no-safe-area-left">
      <t4-list-item
        v-for="(item, index) in eventItems"
        :key="index"
        :title="item.title"
        :after="item.time"
      >
        <template #root-start>
          <div class="event-color" :style="{ 'background-color': item.color }"></div>
        </template>
      </t4-list-item>
      <t4-list-item v-if="eventItems.length === 0">
        <template #title>
          <span class="text-color-gray">No events for this day</span>
        </template>
      </t4-list-item>
    </t4-list>
  </t4-page>
</template>
<script>
import { t4Navbar, t4Page, t4NavTitle, t4List, t4ListItem, t4 } from 'techno4-vue';
import $ from 'dom64';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4NavTitle,
    t4List,
    t4ListItem,
  },
  data() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return {
      today: new Date(year, month, day),
      events: [
        {
          date: new Date(year, month, day),
          hours: 12,
          minutes: 30,
          title: 'Meeting with Vladimir',
          color: '#2196f3',
        },
        {
          date: new Date(year, month, day),
          hours: 18,
          minutes: 0,
          title: 'Shopping',
          color: '#4caf50',
        },
        {
          date: new Date(year, month, day),
          hours: 21,
          minutes: 0,
          title: 'Gym',
          color: '#e91e63',
        },
        {
          date: new Date(year, month, day + 2),
          hours: 16,
          minutes: 0,
          title: 'Pay loan',
          color: '#2196f3',
        },
        {
          date: new Date(year, month, day + 2),
          hours: 21,
          minutes: 0,
          title: 'Gym',
          color: '#ff9800',
        },
      ],
      eventItems: [],
    };
  },
  methods: {
    renderEvents(calendar) {
      const self = this;
      const currentDate = calendar.value[0];
      const currentEvents = self.events.filter(
        (event) =>
          event.date.getTime() >= currentDate.getTime() &&
          event.date.getTime() < currentDate.getTime() + 24 * 60 * 60 * 1000,
      );

      const eventItems = [];
      if (currentEvents.length) {
        currentEvents.forEach((event) => {
          const hours = event.hours;
          let minutes = event.minutes;
          if (minutes < 10) minutes = `0${minutes}`;
          eventItems.push({
            title: event.title,
            time: `${hours}:${minutes}`,
            color: event.color,
          });
        });
      }
      self.eventItems = eventItems;
    },
    onPageInit(page) {
      const self = this;
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
      self.calendar = t4.calendar.create({
        containerEl: '#calendar',
        toolbar: false,
        value: [self.today],
        events: self.events,
        on: {
          init(calendar) {
            $('.navbar-calendar-title').text(
              `${monthNames[calendar.currentMonth]}, ${calendar.currentYear}`,
            );
            t4.navbar.size(t4.navbar.getElByPage(page.el));
            calendar.$el.addClass('no-safe-area-right');
            self.renderEvents(calendar);
          },
          monthYearChangeStart(calendar) {
            $('.navbar-calendar-title').text(
              `${monthNames[calendar.currentMonth]}, ${calendar.currentYear}`,
            );
            t4.navbar.size(t4.navbar.getElByPage(page.el));
          },
          change(calendar) {
            self.renderEvents(calendar);
          },
        },
      });
    },
    onPageBeforeRemove() {
      const self = this;
      self.calendar.destroy();
    },
  },
};
</script>
