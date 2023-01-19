import styled from 'styled-components';
import { Field } from 'formik';

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

export const Title = styled.h2`
  font-family: 'Abhaya Libre';
  font-weight: 700;
  font-size: 32px;
  line-height: 1.19;

  letter-spacing: -0.02em;

  color: #202a44;
`;

export const MainText = styled.p`
  margin-top: 20px;

  font-family: 'Lato';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;

  color: #202a44;
`;

export const SecondaryText = styled.p`
  margin-top: 16px;

  font-family: 'Lato';
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;

  color: #202a44;
`;

export const Button = styled.button`
  position: absolute;
  left: 50%;
  bottom: 50px;
  transform: translate(-50%);

  padding: 11px 16px 12px;
  cursor: pointer;

  width: 165px;
  height: 42px;

  background: #f1ae0f;
  border-radius: 50px;
  border: 0;

  font-family: 'Lato';
  font-weight: 700;
  font-size: 16px;
  line-height: 1.19;

  color: #ffffff;

  :hover {
    background-color: #d97203;
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  font-family: 'Lato';
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;

  color: #202a44;

  :first-child {
    margin-bottom: 20px;
  }
`;

export const Input = styled(Field)`
  height: 56px;
  margin-top: 10px;
  padding-left: 56px;

  background: #ffffff;
  border: 1px solid #e9ebef;
  border-radius: 10px;

  font-family: 'Lato';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.19px;

  ::placeholder {
    color: #9499a8;
  }
`;

export const Flag = styled.span`
  position: absolute;
  display: flex;
  left: 20px;
  bottom: 18px;
`;
