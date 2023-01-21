import styled from 'styled-components';
import { Field } from 'formik';

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;

  font-family: 'Lato';
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;

  color: #202a44;
`;

export const Input = styled(Field)`
  height: 56px;
  margin-top: 10px;
  padding-left: ${props => (props.icon ? '56px' : '24px')};

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
