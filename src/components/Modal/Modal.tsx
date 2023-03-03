import React from 'react';
import './Modal.scss';

interface ModalProps {
  visible: boolean;
  onHide(): void;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { visible, onHide } = props;

  return (
    <div className="">
    
    </div>
  );
}