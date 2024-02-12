import React, { useRef } from 'react';
import { Navbar, Page, Block, Button, t4 } from 'techno4-react';

export default () => {
  const notificationFull = useRef(null);
  const notificationWithButton = useRef(null);
  const notificationCloseOnClick = useRef(null);
  const notificationCallbackOnClose = useRef(null);

  const showNotificationFull = () => {
    // Create toast
    if (!notificationFull.current) {
      notificationFull.current = t4.notification.create({
        icon: '<i class="icon icon-t4"></i>',
        title: 'techno4',
        titleRightText: 'now',
        subtitle: 'This is a subtitle',
        text: 'This is a simple notification message',
        closeTimeout: 3000,
      });
    }
    // Open it
    notificationFull.current.open();
  };
  const showNotificationWithButton = () => {
    // Create toast
    if (!notificationWithButton.current) {
      notificationWithButton.current = t4.notification.create({
        icon: '<i class="icon icon-t4"></i>',
        title: 'techno4',
        subtitle: 'Notification with close button',
        text: 'Click (x) button to close me',
        closeButton: true,
      });
    }
    // Open it
    notificationWithButton.current.open();
  };
  const showNotificationCloseOnClick = () => {
    // Create toast
    if (!notificationCloseOnClick.current) {
      notificationCloseOnClick.current = t4.notification.create({
        icon: '<i class="icon icon-t4"></i>',
        title: 'techno4',
        titleRightText: 'now',
        subtitle: 'Notification with close on click',
        text: 'Click me to close',
        closeOnClick: true,
      });
    }
    // Open it
    notificationCloseOnClick.current.open();
  };
  const showNotificationCallbackOnClose = () => {
    // Create toast
    if (!notificationCallbackOnClose.current) {
      notificationCallbackOnClose.current = t4.notification.create({
        icon: '<i class="icon icon-t4"></i>',
        title: 'techno4',
        titleRightText: 'now',
        subtitle: 'Notification with close on click',
        text: 'Click me to close',
        closeOnClick: true,
        on: {
          close() {
            t4.dialog.alert('Notification closed');
          },
        },
      });
    }
    // Open it
    notificationCallbackOnClose.current.open();
  };
  const onPageBeforeOut = () => {
    t4.notification.close();
  };
  const onPageBeforeRemove = () => {
    // Destroy toasts when page removed
    if (notificationFull.current) notificationFull.current.destroy();
    if (notificationWithButton.current) notificationWithButton.current.destroy();
    if (notificationCloseOnClick.current) notificationCloseOnClick.current.destroy();
    if (notificationCallbackOnClose.current) notificationCallbackOnClose.current.destroy();
  };
  return (
    <Page onPageBeforeOut={onPageBeforeOut} onPageBeforeRemove={onPageBeforeRemove}>
      <Navbar title="Notifications" backLink="Back"></Navbar>
      <Block>
        <p>
          techno4 comes with simple Notifications component that allows you to show some useful
          messages to user and request basic actions.
        </p>
        <p>
          <Button fill onClick={showNotificationFull}>
            Full layout notification
          </Button>
        </p>
        <p>
          <Button fill onClick={showNotificationWithButton}>
            With close button
          </Button>
        </p>
        <p>
          <Button fill onClick={showNotificationCloseOnClick}>
            Click to close
          </Button>
        </p>
        <p>
          <Button fill onClick={showNotificationCallbackOnClose}>
            Callback on close
          </Button>
        </p>
      </Block>
    </Page>
  );
};
