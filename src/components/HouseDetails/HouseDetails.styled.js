import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OnMarket = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const Text = styled.p`
  margin-left: 20px;

  font-family: 'Lato';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.19px;

  color: #9499a8;
`;

export const Address = styled.p`
  margin-top: 4px;
  margin-bottom: 24px;

  font-family: 'Lato';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;

  color: #202a44;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Mls = styled.p`
  font-family: 'Lato';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.19;
  text-align: right;

  color: #9499a8;
`;

export const Price = styled.p`
  font-family: 'Abhaya Libre';
  font-weight: 700;
  font-size: 36px;
  line-height: 1.16;
  text-align: right;
  letter-spacing: -0.02em;
  font-feature-settings: 'tnum' on, 'lnum' on;
  margin-top: 22px;
  margin-bottom: 24px;

  color: #202a44;
`;
