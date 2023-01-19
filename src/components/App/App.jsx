import { useSelector } from 'react-redux';
import ContentPage from 'pages/ContentPage/ContentPage';
import Login from 'pages/Login/Login';
import { selectIsLoggedIn } from 'redux/selectors';
import { GlobalStyle } from './GlobalStyles';
import { Wrapper } from './App.styled';

export const App = () => {
  const isLogIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <Wrapper>{isLogIn === false ? <Login /> : <ContentPage />}</Wrapper>
      <GlobalStyle />
    </>
  );
};
