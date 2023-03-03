import React, { useEffect } from 'react';
import { observer } from "mobx-react"
import { QuotesStore } from '../store/quotes';
import { toJS } from 'mobx';
import { QuotesTable } from '../components';

interface QuotesPageProps {
  title: string;
  store: QuotesStore;
}

export const QuotesPage: React.FC<QuotesPageProps> = observer((props) => {
  const store = props.store as QuotesStore;
  useEffect(() => {
    console.log(props.title, 'mount');
    store.fetchQuotes();
    store.startUpdating();
    return () => {
      store.stopUpdating();
      console.log(props.title, 'unmount');
    }
  }, [])

  return (
    <div>
      <QuoteTitle title={props.title} />
      <QuotesTable quotes={toJS(store.quotesObj)} />
    </div>
  );
})

const QuoteTitle: React.FC<any> = observer(({ title }) => {
  return (
    <div>
      {title}
    </div>
  );
})
