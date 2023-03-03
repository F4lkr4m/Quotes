import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';
import { QuoteMap } from '../../types';
import './Table.scss';

interface QuotesTableProps {
  quotes: QuoteMap | null;
}

export const QuotesTable: React.FC<QuotesTableProps> = observer((props) => {
  const quotes = props.quotes

  return (
    <>
      <div className="quotes-row">
        <div>Наименование</div>
        <div>Last</div>
        <div>Highest Bid</div>
        <div>Percent Change</div>
      </div>
      {quotes && Object.entries(quotes).map(([key, quote]) => {
        return (
          <div key={`quote-row-${quote.id}`} className="quotes-row quotes-row_highlight">
            <QuoteRowNameDisplay getName={key} />
            <QuoteRowNameDisplay getName={quote.last} />
            <QuoteRowNameDisplay getName={quote.highestBid} />
            <QuoteRowNameDisplay getName={quote.percentChange} />
          </div>
        );
      })}
    </>
  );
})

const ANIMATION_TIME = 500;

const QuoteRowNameDisplay: React.FC<any> = observer(({ getName }) => {
  const textRef = useRef(null);

  useEffect(() => {

    return () => {
      if (textRef.current) {
        (textRef.current as HTMLDivElement).className = 'quote-text';

        setTimeout(() => {
          if (textRef.current) {
            (textRef.current as HTMLDivElement).className = '';
          }
        }, ANIMATION_TIME)
      }
    }
  }, [getName])
  return (
    <div ref={textRef}>
      {getName}
    </div>
  );
})
