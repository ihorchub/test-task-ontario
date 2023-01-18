import * as yup from 'yup';
import { Field, Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { UserlogIn } from 'redux/operations';

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
        <label>
          Login
          <Field type="text" name="login" />
        </label>
        <label>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};
