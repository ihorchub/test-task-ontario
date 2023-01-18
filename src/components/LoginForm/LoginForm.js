import * as yup from 'yup';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { UserlogIn } from 'redux/operations';
import { FormWrapper, Input, Label } from './LoginForm.styled';
import { ButtonBig } from 'components/ButtonBig/ButtonBig';

const validationSchema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().required(),
});

const initialValues = {
  login: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ login, password }, { resetForm }) => {
    dispatch(UserlogIn({ login, password }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormWrapper>
        <Label>
          Username
          <Input type="text" name="login" placeholder="example" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" placeholder="Your password" />
        </Label>
        <ButtonBig type="submit">Login</ButtonBig>
      </FormWrapper>
    </Formik>
  );
};
