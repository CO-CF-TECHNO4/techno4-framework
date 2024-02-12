import Dom64 from 'dom64';
import techno4 from './components/app/app-class.js'

import request, {
  RequestError,
  RequestResponse,
  RequestParameters,
  RequestXHR,
} from './shared/request';
import { getSupport, Support } from './shared/get-support.js';
import { getDevice, Device } from './shared/get-device.js';
import { Utils } from './shared/utils.js';
import { techno4Parameters, techno4Plugin } from './components/app/app-class.js';

import { Clicks as ClicksModule } from './modules/clicks/clicks.js';
import { Component as ComponentModule } from './modules/component/component.js';
import { Device as DeviceModule } from './modules/device/device.js';
import { Request as RequestModule } from './modules/request/request.js';
import { Resize as ResizeModule } from './modules/resize/resize.js';
import { Router as RouterModule } from './modules/router/router.js';
import { ServiceWorker as ServiceWorkerModule } from './modules/service-worker/service-worker.js';
import { Store as StoreModule } from './modules/store/store.js';
import { Support as SupportModule } from './modules/support/support.js';
import { Touch as TouchModule } from './modules/touch/touch.js';
import { Utils as UtilsModule } from './modules/utils/utils.js';
import { ComponentFunction as Component } from './modules/component/component.js';
import { StoreObject as Store, StoreParameters, createStore } from './modules/store/store.js';

import { Accordion } from './components/accordion/accordion.js';
import { Actions } from './components/actions/actions.js';
import { Appbar } from './components/appbar/appbar.js';
import { AreaChart } from './components/area-chart/area-chart.js';
import { Autocomplete } from './components/autocomplete/autocomplete.js';
import { Badge } from './components/badge/badge.js';
import { Block } from './components/block/block.js';
import { Breadcrumbs } from './components/breadcrumbs/breadcrumbs.js';
import { Button } from './components/button/button.js';
import { Calendar } from './components/calendar/calendar.js';
import { Card } from './components/card/card.js';
import { Checkbox } from './components/checkbox/checkbox.js';
import { Chip } from './components/chip/chip.js';
import { ColorPicker } from './components/color-picker/color-picker.js';
import { ContactsList } from './components/contacts-list/contacts-list.js';
import { DataTable } from './components/data-table/data-table.js';
import { Dialog } from './components/dialog/dialog.js';
import { Elevation } from './components/elevation/elevation.js';
import { Fab } from './components/fab/fab.js';
import { Form } from './components/form/form.js';
import { Gauge } from './components/gauge/gauge.js';
import { Grid } from './components/grid/grid.js';
import { Icon } from './components/icon/icon.js';
import { InfiniteScroll } from './components/infinite-scroll/infinite-scroll.js';
import { Input } from './components/input/input.js';
import { Lazy } from './components/lazy/lazy.js';
import { Link } from './components/link/link.js';
import { List } from './components/list/list.js';
import { ListIndex } from './components/list-index/list-index.js';
import { LoginScreen } from './components/login-screen/login-screen.js';
import { Menu } from './components/menu/menu.js';
import { Messagebar } from './components/messagebar/messagebar.js';
import { Messages } from './components/messages/messages.js';
import { Modal } from './components/modal/modal.js';
import { Navbar } from './components/navbar/navbar.js';
import { Notification } from './components/notification/notification.js';
import { Page } from './components/page/page.js';
import { Panel } from './components/panel/panel.js';
import { PhotoBrowser } from './components/photo-browser/photo-browser.js';
import { Picker } from './components/picker/picker.js';
import { PieChart } from './components/pie-chart/pie-chart.js';
import { Popover } from './components/popover/popover.js';
import { Popup } from './components/popup/popup.js';
import { Preloader } from './components/preloader/preloader.js';
import { Progressbar } from './components/progressbar/progressbar.js';
import { PullToRefresh } from './components/pull-to-refresh/pull-to-refresh.js';
import { Radio } from './components/radio/radio.js';
import { Range } from './components/range/range.js';
import { Searchbar } from './components/searchbar/searchbar.js';
import { Sheet } from './components/sheet/sheet.js';
import { Skeleton } from './components/skeleton/skeleton.js';
import { SmartSelect } from './components/smart-select/smart-select.js';
import { Sortable } from './components/sortable/sortable.js';
import { Statusbar } from './components/statusbar/statusbar.js';
import { Stepper } from './components/stepper/stepper.js';
import { Subnavbar } from './components/subnavbar/subnavbar.js';
import { Swipeout } from './components/swipeout/swipeout.js';
import { Swiper } from './components/swiper/swiper.js';
import { Tabs } from './components/tabs/tabs.js';
import { TextEditor } from './components/text-editor/text-editor.js';
import { Timeline } from './components/timeline/timeline.js';
import { Toast } from './components/toast/toast.js';
import { Toggle } from './components/toggle/toggle.js';
import { Toolbar } from './components/toolbar/toolbar.js';
import { Tooltip } from './components/tooltip/tooltip.js';
import { TouchRipple } from './components/touch-ripple/touch-ripple.js';
import { Treeview } from './components/treeview/treeview.js';
import { Typography } from './components/typography/typography.js';
import { View } from './components/view/view.js';
import { VirtualList } from './components/virtual-list/virtual-list.js';

declare module './components/app/app-class.js' {
  interface techno4Class<Events> extends ClicksModule.AppMethods{}
  interface techno4Parameters extends ClicksModule.AppParams{}
  interface techno4Events extends ClicksModule.AppEvents{}
  interface techno4Class<Events> extends ComponentModule.AppMethods{}
  interface techno4Parameters extends ComponentModule.AppParams{}
  interface techno4Events extends ComponentModule.AppEvents{}
  interface techno4Class<Events> extends DeviceModule.AppMethods{}
  interface techno4Parameters extends DeviceModule.AppParams{}
  interface techno4Events extends DeviceModule.AppEvents{}
  interface techno4Class<Events> extends RequestModule.AppMethods{}
  interface techno4Parameters extends RequestModule.AppParams{}
  interface techno4Events extends RequestModule.AppEvents{}
  interface techno4Class<Events> extends ResizeModule.AppMethods{}
  interface techno4Parameters extends ResizeModule.AppParams{}
  interface techno4Events extends ResizeModule.AppEvents{}
  interface techno4Class<Events> extends RouterModule.AppMethods{}
  interface techno4Parameters extends RouterModule.AppParams{}
  interface techno4Events extends RouterModule.AppEvents{}
  interface techno4Class<Events> extends ServiceWorkerModule.AppMethods{}
  interface techno4Parameters extends ServiceWorkerModule.AppParams{}
  interface techno4Events extends ServiceWorkerModule.AppEvents{}
  interface techno4Class<Events> extends StoreModule.AppMethods{}
  interface techno4Parameters extends StoreModule.AppParams{}
  interface techno4Events extends StoreModule.AppEvents{}
  interface techno4Class<Events> extends SupportModule.AppMethods{}
  interface techno4Parameters extends SupportModule.AppParams{}
  interface techno4Events extends SupportModule.AppEvents{}
  interface techno4Class<Events> extends TouchModule.AppMethods{}
  interface techno4Parameters extends TouchModule.AppParams{}
  interface techno4Events extends TouchModule.AppEvents{}
  interface techno4Class<Events> extends UtilsModule.AppMethods{}
  interface techno4Parameters extends UtilsModule.AppParams{}
  interface techno4Events extends UtilsModule.AppEvents{}
  interface techno4Class<Events> extends Accordion.AppMethods{}
  interface techno4Parameters extends Accordion.AppParams{}
  interface techno4Events extends Accordion.AppEvents{}
  interface techno4Class<Events> extends Actions.AppMethods{}
  interface techno4Parameters extends Actions.AppParams{}
  interface techno4Events extends Actions.AppEvents{}
  interface techno4Class<Events> extends Appbar.AppMethods{}
  interface techno4Parameters extends Appbar.AppParams{}
  interface techno4Events extends Appbar.AppEvents{}
  interface techno4Class<Events> extends AreaChart.AppMethods{}
  interface techno4Parameters extends AreaChart.AppParams{}
  interface techno4Events extends AreaChart.AppEvents{}
  interface techno4Class<Events> extends Autocomplete.AppMethods{}
  interface techno4Parameters extends Autocomplete.AppParams{}
  interface techno4Events extends Autocomplete.AppEvents{}
  interface techno4Class<Events> extends Badge.AppMethods{}
  interface techno4Parameters extends Badge.AppParams{}
  interface techno4Events extends Badge.AppEvents{}
  interface techno4Class<Events> extends Block.AppMethods{}
  interface techno4Parameters extends Block.AppParams{}
  interface techno4Events extends Block.AppEvents{}
  interface techno4Class<Events> extends Breadcrumbs.AppMethods{}
  interface techno4Parameters extends Breadcrumbs.AppParams{}
  interface techno4Events extends Breadcrumbs.AppEvents{}
  interface techno4Class<Events> extends Button.AppMethods{}
  interface techno4Parameters extends Button.AppParams{}
  interface techno4Events extends Button.AppEvents{}
  interface techno4Class<Events> extends Calendar.AppMethods{}
  interface techno4Parameters extends Calendar.AppParams{}
  interface techno4Events extends Calendar.AppEvents{}
  interface techno4Class<Events> extends Card.AppMethods{}
  interface techno4Parameters extends Card.AppParams{}
  interface techno4Events extends Card.AppEvents{}
  interface techno4Class<Events> extends Checkbox.AppMethods{}
  interface techno4Parameters extends Checkbox.AppParams{}
  interface techno4Events extends Checkbox.AppEvents{}
  interface techno4Class<Events> extends Chip.AppMethods{}
  interface techno4Parameters extends Chip.AppParams{}
  interface techno4Events extends Chip.AppEvents{}
  interface techno4Class<Events> extends ColorPicker.AppMethods{}
  interface techno4Parameters extends ColorPicker.AppParams{}
  interface techno4Events extends ColorPicker.AppEvents{}
  interface techno4Class<Events> extends ContactsList.AppMethods{}
  interface techno4Parameters extends ContactsList.AppParams{}
  interface techno4Events extends ContactsList.AppEvents{}
  interface techno4Class<Events> extends DataTable.AppMethods{}
  interface techno4Parameters extends DataTable.AppParams{}
  interface techno4Events extends DataTable.AppEvents{}
  interface techno4Class<Events> extends Dialog.AppMethods{}
  interface techno4Parameters extends Dialog.AppParams{}
  interface techno4Events extends Dialog.AppEvents{}
  interface techno4Class<Events> extends Elevation.AppMethods{}
  interface techno4Parameters extends Elevation.AppParams{}
  interface techno4Events extends Elevation.AppEvents{}
  interface techno4Class<Events> extends Fab.AppMethods{}
  interface techno4Parameters extends Fab.AppParams{}
  interface techno4Events extends Fab.AppEvents{}
  interface techno4Class<Events> extends Form.AppMethods{}
  interface techno4Parameters extends Form.AppParams{}
  interface techno4Events extends Form.AppEvents{}
  interface techno4Class<Events> extends Gauge.AppMethods{}
  interface techno4Parameters extends Gauge.AppParams{}
  interface techno4Events extends Gauge.AppEvents{}
  interface techno4Class<Events> extends Grid.AppMethods{}
  interface techno4Parameters extends Grid.AppParams{}
  interface techno4Events extends Grid.AppEvents{}
  interface techno4Class<Events> extends Icon.AppMethods{}
  interface techno4Parameters extends Icon.AppParams{}
  interface techno4Events extends Icon.AppEvents{}
  interface techno4Class<Events> extends InfiniteScroll.AppMethods{}
  interface techno4Parameters extends InfiniteScroll.AppParams{}
  interface techno4Events extends InfiniteScroll.AppEvents{}
  interface techno4Class<Events> extends Input.AppMethods{}
  interface techno4Parameters extends Input.AppParams{}
  interface techno4Events extends Input.AppEvents{}
  interface techno4Class<Events> extends Lazy.AppMethods{}
  interface techno4Parameters extends Lazy.AppParams{}
  interface techno4Events extends Lazy.AppEvents{}
  interface techno4Class<Events> extends Link.AppMethods{}
  interface techno4Parameters extends Link.AppParams{}
  interface techno4Events extends Link.AppEvents{}
  interface techno4Class<Events> extends List.AppMethods{}
  interface techno4Parameters extends List.AppParams{}
  interface techno4Events extends List.AppEvents{}
  interface techno4Class<Events> extends ListIndex.AppMethods{}
  interface techno4Parameters extends ListIndex.AppParams{}
  interface techno4Events extends ListIndex.AppEvents{}
  interface techno4Class<Events> extends LoginScreen.AppMethods{}
  interface techno4Parameters extends LoginScreen.AppParams{}
  interface techno4Events extends LoginScreen.AppEvents{}
  interface techno4Class<Events> extends Menu.AppMethods{}
  interface techno4Parameters extends Menu.AppParams{}
  interface techno4Events extends Menu.AppEvents{}
  interface techno4Class<Events> extends Messagebar.AppMethods{}
  interface techno4Parameters extends Messagebar.AppParams{}
  interface techno4Events extends Messagebar.AppEvents{}
  interface techno4Class<Events> extends Messages.AppMethods{}
  interface techno4Parameters extends Messages.AppParams{}
  interface techno4Events extends Messages.AppEvents{}
  interface techno4Class<Events> extends Modal.AppMethods{}
  interface techno4Parameters extends Modal.AppParams{}
  interface techno4Events extends Modal.AppEvents{}
  interface techno4Class<Events> extends Navbar.AppMethods{}
  interface techno4Parameters extends Navbar.AppParams{}
  interface techno4Events extends Navbar.AppEvents{}
  interface techno4Class<Events> extends Notification.AppMethods{}
  interface techno4Parameters extends Notification.AppParams{}
  interface techno4Events extends Notification.AppEvents{}
  interface techno4Class<Events> extends Page.AppMethods{}
  interface techno4Parameters extends Page.AppParams{}
  interface techno4Events extends Page.AppEvents{}
  interface techno4Class<Events> extends Panel.AppMethods{}
  interface techno4Parameters extends Panel.AppParams{}
  interface techno4Events extends Panel.AppEvents{}
  interface techno4Class<Events> extends PhotoBrowser.AppMethods{}
  interface techno4Parameters extends PhotoBrowser.AppParams{}
  interface techno4Events extends PhotoBrowser.AppEvents{}
  interface techno4Class<Events> extends Picker.AppMethods{}
  interface techno4Parameters extends Picker.AppParams{}
  interface techno4Events extends Picker.AppEvents{}
  interface techno4Class<Events> extends PieChart.AppMethods{}
  interface techno4Parameters extends PieChart.AppParams{}
  interface techno4Events extends PieChart.AppEvents{}
  interface techno4Class<Events> extends Popover.AppMethods{}
  interface techno4Parameters extends Popover.AppParams{}
  interface techno4Events extends Popover.AppEvents{}
  interface techno4Class<Events> extends Popup.AppMethods{}
  interface techno4Parameters extends Popup.AppParams{}
  interface techno4Events extends Popup.AppEvents{}
  interface techno4Class<Events> extends Preloader.AppMethods{}
  interface techno4Parameters extends Preloader.AppParams{}
  interface techno4Events extends Preloader.AppEvents{}
  interface techno4Class<Events> extends Progressbar.AppMethods{}
  interface techno4Parameters extends Progressbar.AppParams{}
  interface techno4Events extends Progressbar.AppEvents{}
  interface techno4Class<Events> extends PullToRefresh.AppMethods{}
  interface techno4Parameters extends PullToRefresh.AppParams{}
  interface techno4Events extends PullToRefresh.AppEvents{}
  interface techno4Class<Events> extends Radio.AppMethods{}
  interface techno4Parameters extends Radio.AppParams{}
  interface techno4Events extends Radio.AppEvents{}
  interface techno4Class<Events> extends Range.AppMethods{}
  interface techno4Parameters extends Range.AppParams{}
  interface techno4Events extends Range.AppEvents{}
  interface techno4Class<Events> extends Searchbar.AppMethods{}
  interface techno4Parameters extends Searchbar.AppParams{}
  interface techno4Events extends Searchbar.AppEvents{}
  interface techno4Class<Events> extends Sheet.AppMethods{}
  interface techno4Parameters extends Sheet.AppParams{}
  interface techno4Events extends Sheet.AppEvents{}
  interface techno4Class<Events> extends Skeleton.AppMethods{}
  interface techno4Parameters extends Skeleton.AppParams{}
  interface techno4Events extends Skeleton.AppEvents{}
  interface techno4Class<Events> extends SmartSelect.AppMethods{}
  interface techno4Parameters extends SmartSelect.AppParams{}
  interface techno4Events extends SmartSelect.AppEvents{}
  interface techno4Class<Events> extends Sortable.AppMethods{}
  interface techno4Parameters extends Sortable.AppParams{}
  interface techno4Events extends Sortable.AppEvents{}
  interface techno4Class<Events> extends Statusbar.AppMethods{}
  interface techno4Parameters extends Statusbar.AppParams{}
  interface techno4Events extends Statusbar.AppEvents{}
  interface techno4Class<Events> extends Stepper.AppMethods{}
  interface techno4Parameters extends Stepper.AppParams{}
  interface techno4Events extends Stepper.AppEvents{}
  interface techno4Class<Events> extends Subnavbar.AppMethods{}
  interface techno4Parameters extends Subnavbar.AppParams{}
  interface techno4Events extends Subnavbar.AppEvents{}
  interface techno4Class<Events> extends Swipeout.AppMethods{}
  interface techno4Parameters extends Swipeout.AppParams{}
  interface techno4Events extends Swipeout.AppEvents{}
  interface techno4Class<Events> extends Swiper.AppMethods{}
  interface techno4Parameters extends Swiper.AppParams{}
  interface techno4Events extends Swiper.AppEvents{}
  interface techno4Class<Events> extends Tabs.AppMethods{}
  interface techno4Parameters extends Tabs.AppParams{}
  interface techno4Events extends Tabs.AppEvents{}
  interface techno4Class<Events> extends TextEditor.AppMethods{}
  interface techno4Parameters extends TextEditor.AppParams{}
  interface techno4Events extends TextEditor.AppEvents{}
  interface techno4Class<Events> extends Timeline.AppMethods{}
  interface techno4Parameters extends Timeline.AppParams{}
  interface techno4Events extends Timeline.AppEvents{}
  interface techno4Class<Events> extends Toast.AppMethods{}
  interface techno4Parameters extends Toast.AppParams{}
  interface techno4Events extends Toast.AppEvents{}
  interface techno4Class<Events> extends Toggle.AppMethods{}
  interface techno4Parameters extends Toggle.AppParams{}
  interface techno4Events extends Toggle.AppEvents{}
  interface techno4Class<Events> extends Toolbar.AppMethods{}
  interface techno4Parameters extends Toolbar.AppParams{}
  interface techno4Events extends Toolbar.AppEvents{}
  interface techno4Class<Events> extends Tooltip.AppMethods{}
  interface techno4Parameters extends Tooltip.AppParams{}
  interface techno4Events extends Tooltip.AppEvents{}
  interface techno4Class<Events> extends TouchRipple.AppMethods{}
  interface techno4Parameters extends TouchRipple.AppParams{}
  interface techno4Events extends TouchRipple.AppEvents{}
  interface techno4Class<Events> extends Treeview.AppMethods{}
  interface techno4Parameters extends Treeview.AppParams{}
  interface techno4Events extends Treeview.AppEvents{}
  interface techno4Class<Events> extends Typography.AppMethods{}
  interface techno4Parameters extends Typography.AppParams{}
  interface techno4Events extends Typography.AppEvents{}
  interface techno4Class<Events> extends View.AppMethods{}
  interface techno4Parameters extends View.AppParams{}
  interface techno4Events extends View.AppEvents{}
  interface techno4Class<Events> extends VirtualList.AppMethods{}
  interface techno4Parameters extends VirtualList.AppParams{}
  interface techno4Events extends VirtualList.AppEvents{}
}

export {
  request,
  RequestError,
  RequestResponse,
  RequestParameters,
  RequestXHR,
  getSupport,
  Support,
  getDevice,
  Device,
  Utils,
  Dom64,
  Component,
  techno4Parameters,
  techno4Plugin,
  RouterModule as Router,
  Store,
  StoreParameters,
  createStore,
};
export { Accordion, Actions, Appbar, AreaChart, Autocomplete, Badge, Block, Breadcrumbs, Button, Calendar, Card, Checkbox, Chip, ColorPicker, ContactsList, DataTable, Dialog, Elevation, Fab, Form, Gauge, Grid, Icon, InfiniteScroll, Input, Lazy, Link, List, ListIndex, LoginScreen, Menu, Messagebar, Messages, Modal, Navbar, Notification, Page, Panel, PhotoBrowser, Picker, PieChart, Popover, Popup, Preloader, Progressbar, PullToRefresh, Radio, Range, Searchbar, Sheet, Skeleton, SmartSelect, Sortable, Statusbar, Stepper, Subnavbar, Swipeout, Swiper, Tabs, TextEditor, Timeline, Toast, Toggle, Toolbar, Tooltip, TouchRipple, Treeview, Typography, View, VirtualList }
export default techno4;
