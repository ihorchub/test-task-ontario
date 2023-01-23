import styled from 'styled-components';
import { Form, Formik } from 'formik';
import PopupLayout from 'layouts/PopupLayout';
import Button from 'components/Button/Button';
import { FormInput } from 'components/FormInput/FormInput';
import { Canada } from 'components/Icons/Canada';
import { Title } from 'components/Title/Title';

const ContactYouSoon = ({ onClose }) => {
  return (
    <PopupLayout onClose={onClose}>
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
            <Button variant="primary" type="submit" width="165px">
              Continue
            </Button>
          </ButtonPosition>
        </Form>
      </Formik>
    </PopupLayout>
  );
};

const MainText = styled.p`
  margin-top: 20px;
  margin-bottom: 24px;

  font-family: 'Lato';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;

  color: #202a44;
`;

const SecondaryText = styled.p`
  margin-top: 16px;
  margin-bottom: 29px;

  font-family: 'Lato';
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;

  color: #202a44;
`;

const Flag = styled.span`
  position: absolute;
  display: flex;
  left: 24px;
  bottom: 18px;
`;

const ButtonPosition = styled.div`
  display: flex;
  justify-content: center;
`;

export default ContactYouSoon;
