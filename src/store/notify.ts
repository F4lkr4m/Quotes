import { makeAutoObservable, runInAction } from 'mobx';
import { NOTIFICATION_LIFE_TIME } from '../constants';


class NotifyStore {
  msg: null | string = null;
  isVisible: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setMessage = (msg: string) => {
    this.msg = msg;
  }

  showNotification = () => {
    this.isVisible = true;

    setTimeout(() => {
      runInAction(() => {
        this.isVisible = false;
      })
    }, NOTIFICATION_LIFE_TIME)
  }

  setMessageAndShow = (msg: string) => {
    this.setMessage(msg);
    this.showNotification();
  }
}

const nofifyStore = new NotifyStore();

export default nofifyStore;
