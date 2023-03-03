import { configure, makeAutoObservable, runInAction } from 'mobx';
import { fetchGetQuotes } from '../api';
import { Quote, QuoteMap } from '../types'; 

const INTERVAL_TIME = 5000;

export class QuotesStore {
  quotesObj: QuoteMap | null = null;
  status: "init" | "loading" | "success" | "error" = "init";
  timer: null | number = null;
  seconds: number = 0;
  quotesRequest;

  constructor(quotesRequest: () => Promise<QuoteMap>) {
    this.quotesRequest = quotesRequest;
    makeAutoObservable(this);
  }

  startUpdating() {
    this.timer = window.setInterval(() => this.fetchQuotes(), INTERVAL_TIME);
  }

  stopUpdating = () => {
    if (this.timer) {
      window.clearInterval(this.timer)
    }
  }

  async fetchQuotes() {
    try {
      this.status = "loading";
      const result = await this.quotesRequest();
      this.quotesObj = result;
      this.status = "success";
    } catch (error) {
      this.status = "error";
      console.error(error);
    }
    
      
  }
}