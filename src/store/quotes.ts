import { configure, makeAutoObservable, runInAction } from 'mobx'
import { fetchGetQuotes } from '../api'
import { Quote, QuoteMap } from '../types'

const INTERVAL_TIME = 5000

interface SelectedQuote {
  quote: Quote
  quoteName: string
}

export class QuotesStore {
  quotesObj: QuoteMap | null = null
  status: 'init' | 'loading' | 'success' | 'error' = 'init'
  timer: null | number = null
  seconds: number = 0
  selectedQuote: SelectedQuote | null = null
  modalIsVisible: boolean = false
  quotesRequest

  constructor(quotesRequest: () => Promise<QuoteMap>) {
    this.quotesRequest = quotesRequest
    makeAutoObservable(this)
  }

  startUpdating() {
    this.timer = window.setInterval(() => this.fetchQuotes(), INTERVAL_TIME)
  }

  stopUpdating = () => {
    if (this.timer) {
      window.clearInterval(this.timer)
    }
  }

  showModal = () => {
    this.modalIsVisible = true
    this.stopUpdating()
  }

  hideModal = () => {
    this.modalIsVisible = false
    this.startUpdating()
  }

  setSelectedQuoteAndShowModal = (quote: Quote, quoteName: string) => {
    this.selectedQuote = {
      quote,
      quoteName,
    }
    this.showModal()
  }

  async fetchQuotes() {
    try {
      runInAction(() => {
        this.status = 'loading'
      })

      const result = await this.quotesRequest()

      runInAction(() => {
        this.quotesObj = result
        this.status = 'success'
      })
    } catch (error) {
      runInAction(() => {
        this.status = 'error'
      })
      console.error(error)
    }
  }
}
