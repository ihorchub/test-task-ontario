import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px 9px;
  gap: 10px;
  cursor: pointer;

  width: 128px;
  height: 36px;
  left: 138.5px;
  top: 579px;

  background: #54cc61;
  border-radius: 50px;
  border: 0;

  :hover {
    background-color: #088c17;
  }
`;

export const ButtonSpan = styled.span`
  font-family: 'Lato';
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const Text = styled.p`
  margin-left: 20px;

  font-family: 'Lato';
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #9499a8;
`;

export const Title = styled.h2`
  margin-top: 16px;

  font-family: 'Abhaya Libre';
  font-weight: 700;
  font-size: 32px;
  line-height: 1.19;

  letter-spacing: -0.02em;
  font-feature-settings: 'tnum' on, 'lnum' on;

  color: #202a44;
`;

export const Adress = styled.p`
  margin-top: 4px;

  font-family: 'Lato';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;

  color: #202a44;
`;
