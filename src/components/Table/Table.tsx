import { observer } from 'mobx-react-lite'
import React, { useEffect, useRef } from 'react'
import { Quote, QuoteMap } from '../../types'
import './Table.scss'

interface QuotesTableProps {
  quotes: QuoteMap | null
  onRowClick: (quote: Quote, quoteName: string) => void
}

export const QuotesTable: React.FC<QuotesTableProps> = observer((props) => {
  const { quotes, onRowClick } = props

  return (
    <>
      <div className="quotes-row">
        <div>Наименование</div>
        <div>Last</div>
        <div>Highest Bid</div>
        <div>Percent Change</div>
      </div>
      {quotes &&
        Object.entries(quotes).map(([key, quote]) => {
          return (
            <div
              onClick={() => onRowClick(quote, key)}
              key={`quote-row-${quote.id}`}
              className="quotes-row quotes-row_highlight"
            >
              <QuoteRowNameDisplay data={key} />
              <QuoteRowNameDisplay data={quote.last} />
              <QuoteRowNameDisplay data={quote.highestBid} />
              <QuoteRowNameDisplay data={quote.percentChange} />
            </div>
          )
        })}
    </>
  )
})

const ANIMATION_TIME = 500;

interface QuoteRowNameDisplayProps {
  data: string;
}

const QuoteRowNameDisplay: React.FC<QuoteRowNameDisplayProps> = observer(({ data }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      if (textRef.current) {
        textRef.current.className = 'quote-text';

        setTimeout(() => {
          if (textRef.current) {
            textRef.current.className = '';
          }
        }, ANIMATION_TIME)
      }
    }
  }, [data])
  return <div ref={textRef}>{data}</div>
})
