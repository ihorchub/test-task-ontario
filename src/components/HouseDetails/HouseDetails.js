import { useState } from 'react';
import { Elipse } from 'components/Icons/Elipse';
import { ParametersCollection } from 'components/ParametersCollection/ParametersCollection';
import { Title } from 'components/Title/Title';
import {
  Address,
  Mls,
  OnMarket,
  Price,
  PriceWrapper,
  Text,
  Wrapper,
} from './HouseDetails.styled';
import Button from 'components/Button/Button';
import ContactYouSoon from 'components/Popups/ContactYouSoon';

export const HouseDetails = ({ details }) => {
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
