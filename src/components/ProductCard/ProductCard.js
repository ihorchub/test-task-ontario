import styled from 'styled-components';
import Button from 'components/Button/Button';
import ParametersCollection from 'components/ParametersCollection/ParametersCollection';

const ProductCard = ({
  card: { img, price, listed, details, adress, number, sqrt },
}) => {
  return (
    <CardWrapper>
      <ButtonPosition>
        <Button width="169px">10 wishes matched</Button>
      </ButtonPosition>
      <img src={process.env.PUBLIC_URL + img.src} alt={img.alt} />
      <PriceWrapper>
        <Price>{price}</Price>
        <Listed>{listed}</Listed>
      </PriceWrapper>
      <ParametersCollection card collection={details} />
      <AddressWrapper>
        <Address>{adress}</Address>
        <Accent>{number}</Accent>
      </AddressWrapper>

      <Accent>{sqrt}</Accent>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 370px;
`;

const ButtonPosition = styled.div`
  position: absolute;
  left: 16px;
  top: 16px;
`;

const PriceWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.p`
  font-family: 'Lato';
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;

  color: #202a44;
`;

const Listed = styled.p`
  font-family: 'Lato';
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  text-align: right;

  color: #9499a8;
`;

const AddressWrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 12px;
`;

const Address = styled.p`
  font-family: 'Lato';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.19;

  color: #202a44;
`;

const Accent = styled(Address)`
  color: #9499a8;
`;

export default ProductCard;
