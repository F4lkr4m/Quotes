import { observer } from 'mobx-react-lite';
import React from 'react';
import notifyStore from '../../store/notify';
import './Notification.scss';

export const Notification: React.FC = observer(() => {
  const { isVisible } = notifyStore;
  return (
    <>
      {isVisible && <NotificationToast />}
    </>
  );
});

const NotificationToast = observer(() => {
  const { msg } = notifyStore;

  return (
    <div className="notification">
      {msg}
    </div>
  );
})