import { BaseModal } from 'components/BaseModal/BaseModal';
import { FormInput } from 'components/FormInput/FormInput';
import { Canada } from 'components/Icons/Canada';
import { Form, Formik } from 'formik';
import { Button, Flag, MainText, SecondaryText, Title } from './Modal.styled';

export const Modal = ({ onClose }) => {
  return (
    <BaseModal onClose={onClose}>
      <Title>Let us contact you soon!</Title>
      <MainText>
        You’ll get emails when homes that match your search hit the market.
        <br />
        <br />
        You can provide your phone number to get matches faster and don’t miss
        anything. We hate spam too - so we don't sell your information, promise.
      </MainText>
      <Formik>
        <Form>
          <FormInput icon type="tel" placeholder="+1 613 555 0107">
            Phone number
            <Flag>
              <Canada />
            </Flag>
          </FormInput>
          <Button type="submit">Continue</Button>
        </Form>
      </Formik>
      <SecondaryText>
        You can change the type and frequency of notifications you receive
        within your notification settings.{' '}
      </SecondaryText>
    </BaseModal>
  );
};
