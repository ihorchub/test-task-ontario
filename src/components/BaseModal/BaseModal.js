import { useEffect } from 'react';
import { X } from 'components/Icons/X';
import { Close, ModalWindow, Overlay } from './BaseModal.styled';

export const BaseModal = ({ onClose, children }) => {
  useEffect(() => {
    const handlerKeyDown = e => e.code === 'Escape' && onClose();

    window.addEventListener('keydown', handlerKeyDown);

    return () => {
      window.removeEventListener('keydown', handlerKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => e.currentTarget === e.target && onClose();

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <Close onClick={onClose}>
          <X />
        </Close>
        {children}
      </ModalWindow>
    </Overlay>
  );
};
