import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { UserlogIn } from 'redux/operations';
import { Title } from 'components/Title/Title';
import { InputWrapper, Wrapper } from './Login.styled';
import { FormInput } from 'components/FormInput/FormInput';
import { ButtonBig } from 'components/ButtonBig/ButtonBig';

const validationSchema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().required(),
});

const initialValues = {
  login: '',
  password: '',
};

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = ({ login, password }, { resetForm }) => {
    dispatch(UserlogIn({ login, password }));
    resetForm();
  };
  return (
    <Wrapper>
      <Title>Log In</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <InputWrapper>
            <FormInput name="login" type="text" placeholder="example">
              Username
            </FormInput>
            <FormInput
              name="password"
              type="password"
              placeholder="Your password"
            >
              Password
            </FormInput>
          </InputWrapper>
          <ButtonBig type="submit" width="76px">
            Log In
          </ButtonBig>
        </Form>
      </Formik>
    </Wrapper>
  );
}