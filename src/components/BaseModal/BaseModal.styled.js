import styled from 'styled-components';

export const Overlay = styled.div`
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

export const ModalWindow = styled.div`
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

export const Close = styled.span`
  position: absolute;
  top: 26px;
  right: 25px;
  display: flex;

  cursor: pointer;

  :hover {
    background-color: #eeeeee;
  }
`;
