import styled from 'styled-components';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { UserlogIn } from 'redux/operations';
import Title from 'components/Title/Title';
import FormInput from 'components/FormInput/FormInput';
import Button from 'components/Button/Button';

const validationSchema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().required(),
});

const initialValues = {
  login: '',
  password: '',
};

const Login = () => {
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
          <Button variant="primary" type="submit" width="76px">
            Log In
          </Button>
        </Form>
      </Formik>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-top: 26px;
  margin-bottom: 35px;
`;

export default Login;
