import { useState } from 'react';
import styled from 'styled-components';
import { Elipse } from 'components/Icons/Icons';
import ParametersCollection from 'components/ParametersCollection/ParametersCollection';
import Title from 'components/Title/Title';
import Button from 'components/Button/Button';
import ContactYouSoon from 'components/Popups/ContactYouSoon';

const HouseDetails = ({ details }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Wrapper>
      <div>
        <OnMarket>
          <Button as="a" href="#" link width="128px">
            <Elipse />
            On Market
          </Button>
          <Text>{details.listed}</Text>
        </OnMarket>
        <Title>{details.title}</Title>
        <Address>{details.address}</Address>
        <ParametersCollection collection={details.parameters} />
      </div>
      <PriceWrapper>
        <Mls>{details.mls}</Mls>
        <Price>{details.price}</Price>
        <Button
          variant="primary"
          type="button"
          width="139px"
          onClick={() => setShowModal(true)}
        >
          Buy this
        </Button>
        {showModal && <ContactYouSoon onClose={() => setShowModal(false)} />}
      </PriceWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OnMarket = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Text = styled.p`
  margin-left: 20px;

  font-family: 'Lato';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.19px;

  color: #9499a8;
`;

const Address = styled.p`
  margin-top: 4px;
  margin-bottom: 24px;

  font-family: 'Lato';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;

  color: #202a44;
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;

const Mls = styled.p`
  font-family: 'Lato';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.19;
  text-align: right;

  color: #9499a8;
`;

const Price = styled.p`
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

export default HouseDetails;
