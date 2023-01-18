import { LoginForm } from 'components/LoginForm/LoginForm';
import { Title, Wrapper } from './Login.styled';

export default function Login() {
  return (
    <Wrapper>
      <Title>Log In</Title>
      <LoginForm />
    </Wrapper>
  );
}
