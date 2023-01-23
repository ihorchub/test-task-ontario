import styled from 'styled-components';
import { useEffect } from 'react';
import { X } from 'components/Icons/X';

const PopupLayout = ({ onClose, children }) => {
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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

const ModalWindow = styled.div`
  position: absolute;
  width: 500px;
  height: 530px;
  padding: 50px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  background: #ffffff;
  border-radius: 30px;
`;

const Close = styled.span`
  position: absolute;
  top: 26px;
  right: 25px;
  display: flex;

  cursor: pointer;

  :hover {
    background-color: #eeeeee;
  }
`;

export default PopupLayout;
