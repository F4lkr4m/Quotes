export interface Quote {
  id: number;
  last: string;
  lowestAsk: string;
  percentChange: string;
  baseVolume: string;
  quoteVolume: string;
  isFrozen: string;
  highestBid: string;
  postOnly: string;
  high24hr: string;
  low24hr: string;
}

export interface QuoteMap {
  [name: string]: Quote;
}

