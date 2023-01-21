import styled from 'styled-components';
import { Field } from 'formik';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;

  font-family: 'Lato';
  font-size: 14px;
  line-height: 1.21;

  color: #202a44;

  :first-child {
    margin-bottom: 20px;
  }

  /* ::before {
    content: ' ';
    position: absolute;
    width: 14px;
    height: 14px;
    background-image: <Canada/>;
    background-repeat: no-repeat;
    background-position: 0px 0px; /* position of the right icon */
  } */
  /* position: relative; */
`;

export const Input = styled(Field)`
  height: 56px;

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

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 16px 12px;
  gap: 10px;
  margin-top: 35px;
  cursor: pointer;

  width: 76px;
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
