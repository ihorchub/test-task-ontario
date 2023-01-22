import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11px 16px 12px;
  gap: 10px;

  cursor: pointer;

  width: ${props => props.width && props.width};

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
