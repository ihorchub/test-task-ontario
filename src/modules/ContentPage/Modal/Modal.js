import { BaseModal } from 'components/BaseModal/BaseModal';
import { ButtonBig } from 'components/ButtonBig/ButtonBig';
import { FormInput } from 'components/FormInput/FormInput';
import { Canada } from 'components/Icons/Canada';
import { Title } from 'components/Title/Title';
import { Form, Formik } from 'formik';
import { ButtonPosition, Flag, MainText, SecondaryText } from './Modal.styled';

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
          <SecondaryText>
            You can change the type and frequency of notifications you receive
            within your notification settings.
          </SecondaryText>
          <ButtonPosition>
            <ButtonBig type="submit" width="165px">
              Continue
            </ButtonBig>
          </ButtonPosition>
        </Form>
      </Formik>
    </BaseModal>
  );
};
