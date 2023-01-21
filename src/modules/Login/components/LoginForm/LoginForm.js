import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { UserlogIn } from 'redux/operations';
import { Button, Input, Label } from './LoginForm.styled';

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
      <Form>
        <Label>
          Username
          <Input type="text" name="login" placeholder="example" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" placeholder="Your password" />
        </Label>
        <Button type="submit">Login</Button>
      </Form>
    </Formik>
  );
};
