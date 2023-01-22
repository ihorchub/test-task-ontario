import styled from 'styled-components';

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

export const Flag = styled.span`
  position: absolute;
  display: flex;
  left: 24px;
  bottom: 18px;
`;
