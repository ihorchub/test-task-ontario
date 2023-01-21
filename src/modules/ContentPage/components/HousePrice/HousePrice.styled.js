import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 23px;
`;

export const Button = styled.button`
  width: 139px;
  height: 42px;

  padding: 11px 16px 12px;
  cursor: pointer;

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

export const Number = styled.p`
  font-family: 'Lato';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.19px;

  color: #9499a8;
`;

export const Price = styled.p`
  font-family: 'Abhaya Libre';
  font-weight: 700;
  font-size: 36px;
  line-height: 1.16;
  letter-spacing: -0.02em;
  font-feature-settings: 'tnum' on, 'lnum' on;

  color: #202a44;
`;
