import { useSelector } from 'react-redux';
import Content from 'components/Content/Content';
import Login from 'components/Login/Login';
import { selectIsLoggedIn } from 'redux/selectors';

export const App = () => {
  const isLogIn = useSelector(selectIsLoggedIn);
  return <div> {isLogIn === false ? <Login /> : <Content />}</div>;
};
