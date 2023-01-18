import styled from 'styled-components';

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
  outline: none;

  font-family: 'Lato';
  font-weight: 700;
  font-size: 16px;
  line-height: 1.19;

  color: #ffffff;

  :hover {
    background-color: #d97203;
  }
`;
