import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
`;

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
