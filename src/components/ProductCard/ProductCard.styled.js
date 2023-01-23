import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const ButtonPosition = styled.div`
  position: absolute;
  left: 16px;
  top: 16px;
`;

export const PriceWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.p`
  font-family: 'Lato';
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;

  color: #202a44;
`;

export const Listed = styled.p`
  font-family: 'Lato';
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  text-align: right;

  color: #9499a8;
`;

export const AddressWrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 12px;
`;

export const Address = styled.p`
  font-family: 'Lato';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.19;

  color: #202a44;
`;

export const Accent = styled(Address)`
  color: #9499a8;
`;
