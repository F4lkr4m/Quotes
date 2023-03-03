import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { QuotesStore } from '../store/quotes'
import { toJS } from 'mobx'
import { QuoteModal, QuotesTable } from '../components'

interface QuotesPageProps {
  title: string
  store: QuotesStore
}

export const QuotesPage: React.FC<QuotesPageProps> = observer((props) => {
  const store = props.store as QuotesStore
  useEffect(() => {
    store.fetchQuotes()
    store.startUpdating()
    return () => {
      store.stopUpdating()
    }
  }, [])

  return (
    <div>
      <QuoteModal
        onHide={store.hideModal}
        visible={store.modalIsVisible}
        quote={store.selectedQuote?.quote ?? null}
        quoteName={store.selectedQuote?.quoteName ?? null}
      />
      <QuoteTitle title={props.title} />
      <QuotesTable
        quotes={toJS(store.quotesObj)}
        onRowClick={store.setSelectedQuoteAndShowModal}
      />
    </div>
  )
})

const QuoteTitle: React.FC<any> = observer(({ title }) => {
  return <div>{title}</div>
})
