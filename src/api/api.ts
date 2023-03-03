import { QuoteMap } from '../types'
import { fetchGet } from '../utils'

const API_URL = 'https://poloniex.com/public?command=returnTicker'

export const fetchGetQuotes = async (): Promise<QuoteMap> => {
  const response = await fetchGet(API_URL)
  return response
}

const getHalfOfResponse = (response: any, secondHalf = false) => {
  const keys = Object.keys(response)
  let halfKeys: string[] = []
  if (secondHalf) {
    halfKeys = keys.slice(0, keys.length / 2)
  } else {
    halfKeys = keys.slice(keys.length / 2)
  }
  const quotes: QuoteMap = {}
  halfKeys.forEach((key: string) => {
    quotes[key] = response[key]
  })
  return quotes
}

export const fetchGetQuotesA = async (): Promise<QuoteMap> => {
  const response = await fetchGet(API_URL)
  return getHalfOfResponse(response, false)
}

export const fetchGetQuotesB = async (): Promise<QuoteMap> => {
  const response = await fetchGet(API_URL)
  return getHalfOfResponse(response, true)
}
