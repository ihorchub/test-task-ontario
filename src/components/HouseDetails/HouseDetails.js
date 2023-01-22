import { useState } from 'react';
import { ButtonBig } from 'components/ButtonBig/ButtonBig';
import { ButtonMedium } from 'components/ButtonMedium/ButtonMedium';
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
import { Modal } from 'modules/ContentPage/Modal/Modal';

export const HouseDetails = ({ details }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Wrapper>
      <div>
        <OnMarket>
          <ButtonMedium as="a" href="#" link width="128px">
            <Elipse />
            On Market
          </ButtonMedium>
          <Text>{details.listed}</Text>
        </OnMarket>
        <Title>{details.title}</Title>
        <Address>{details.address}</Address>
        <ParametersCollection collection={details.parameters} />
      </div>
      <PriceWrapper>
        <Mls>{details.mls}</Mls>
        <Price>{details.price}</Price>
        <ButtonBig
          type="button"
          width="139px"
          onClick={() => setShowModal(true)}
        >
          Buy this
        </ButtonBig>
        {showModal && <Modal onClose={() => setShowModal(false)} />}
      </PriceWrapper>
    </Wrapper>
  );
};
