import { Canada } from 'components/Svg/Canada';
import { X } from 'components/Svg/X';
import { Form, Formik } from 'formik';
import { useEffect } from 'react';
import {
  Button,
  Close,
  Flag,
  Input,
  Label,
  MainText,
  ModalWindow,
  Overlay,
  SecondaryText,
  Title,
} from './Modal.styled';

export const Modal = ({ onClose }) => {
  useEffect(() => {
    const handlerKeyDown = e => e.code === 'Escape' && onClose();

    window.addEventListener('keydown', handlerKeyDown);

    return () => {
      window.removeEventListener('keydown', handlerKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => e.currentTarget === e.target && onClose();

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <Close onClick={onClose}>
          <X />
        </Close>
        <Title>Let us contact you soon!</Title>
        <MainText>
          You’ll get emails when homes that match your search hit the market.
          <br />
          <br />
          You can provide your phone number to get matches faster and don’t miss
          anything. We hate spam too - so we don't sell your information,
          promise.
        </MainText>
        <Formik>
          <Form>
            <Label>
              Phone number
              <Input type="tel" placeholder="+1 613 555 0107" />
              <Flag>
                <Canada />
              </Flag>
            </Label>
            <Button type="submit">Continue</Button>
          </Form>
        </Formik>
        <SecondaryText>
          You can change the type and frequency of notifications you receive
          within your notification settings.{' '}
        </SecondaryText>
      </ModalWindow>
    </Overlay>
  );
};
