import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 96px;
`;

export const CardsWrapper = styled.ul`
  margin-top: 18px;
  display: flex;
  gap: 31px;
`;

export const Title = styled.h2`
  font-family: 'Abhaya Libre';
  font-weight: 700;
  font-size: 32px;
  line-height: 1.19;

  letter-spacing: -0.02em;
  font-feature-settings: 'tnum' on, 'lnum' on;

  color: #202a44;
`;

export const ProductCard = styled.li`
  position: relative;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px 9px;
  gap: 10px;

  position: absolute;
  width: 169px;
  height: 36px;
  left: 16px;
  top: 16px;

  cursor: pointer;
  border: 0;

  background: #f1ae0f;
  border-radius: 50px;

  font-family: 'Lato';
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;

  :hover {
    background-color: #d97203;
  }
`;

export const PriceWrapper = styled.div`
  margin-top: 20px;
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

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Listed = styled.p`
  font-family: 'Lato';
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  text-align: right;

  color: #9499a8;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const DescrWrapper = styled.ul`
  margin-top: 20px;
  display: flex;
  gap: 24px;
`;

export const DescrItem = styled.li`
  display: flex;
  gap: 4px;

  font-family: 'Lato';
  font-weight: 700;
  font-size: 16px;
  line-height: 1.19;

  color: #202a44;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const Adress = styled.p`
  margin-top: 16px;
  font-family: 'Lato';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.19;

  color: #202a44;
`;

export const Number = styled.p`
  font-family: 'Lato';
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #9499a8;
`;

export const Sqrt = styled.p`
  margin-top: 12px;

  font-family: 'Lato';
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #9499a8;
`;
