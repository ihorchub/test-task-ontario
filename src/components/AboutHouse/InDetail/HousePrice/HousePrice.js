import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { Button, Number, Price, Wrapper } from './HousePrice.styled';

export const HousePrice = () => {
  const [showModal, setShowModal] = useState(false);

  const hendleClick = () => setShowModal(true);

  return (
    <Wrapper>
      <Number>MLS: N5846678</Number>
      <Price>$1,688,000</Price>
      <Button type="button" onClick={hendleClick}>
        Buy this{' '}
      </Button>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </Wrapper>
  );
};
