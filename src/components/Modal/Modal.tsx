import { observer } from 'mobx-react-lite'
import React from 'react'
import { ReactComponent as CrossIcon } from '../../assets/cross.svg'
import './Modal.scss'

export interface ModalProps {
  visible: boolean
  onHide(): void
  title?: string
  children?: JSX.Element
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { visible, title, children, onHide } = props

  return (
    <>
      {visible && (
        <div className="modal-background">
          <div className="modal">
            <ModalHeader
              title={title}
              onHide={onHide}
            />
            <div className="modal__content">{children}</div>
          </div>
        </div>
      )}
    </>
  )
}

interface ModalHeaderProps {
  title?: string
  onHide(): void
}

const ModalHeader: React.FC<ModalHeaderProps> = observer((props) => {
  const { title, onHide } = props
  return (
    <div className="modal__header">
      {title}
      <i
        onClick={onHide}
        className="modal__cross-icon"
      >
        <CrossIcon />
      </i>
    </div>
  )
})
