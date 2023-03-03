import { observer } from 'mobx-react-lite'
import React from 'react'
import { Quote } from '../../types'
import { Modal, ModalProps } from './Modal'
import './QuoteModal.scss'

interface QuoteModalProps extends Omit<ModalProps, 'title' | 'children'> {
  quote: Quote | null
  quoteName: string | null
}

export const QuoteModal: React.FC<QuoteModalProps> = observer((props) => {
  const { visible, quote, quoteName, onHide } = props

  return (
    <Modal
      title={quoteName ?? ''}
      visible={visible}
      onHide={onHide}
    >
      <>{quote && <QuoteModalInfo quote={quote} />}</>
    </Modal>
  )
})

interface QuoteModalInfoProps {
  quote: Quote
}

const QuoteModalInfo: React.FC<QuoteModalInfoProps> = observer((props) => {
  const { quote } = props
  return (
    <div className="quote-modal__info">
      {Object.entries(quote).map(([key, value], index) => {
        return (
          <div
            key={`quote-modal__row-${key}-${index}`}
            className="quote-modal__row"
          >
            {key} : {value}
          </div>
        )
      })}
    </div>
  )
})
