import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContentPage from 'modules/ContentPage/components/ContentPage/ContentPage';
import Login from 'modules/Login/components/Login/Login';
import { selectIsLoggedIn } from 'redux/selectors';
import { GlobalStyle } from './GlobalStyles';
import { Wrapper } from './App.styled';

export const App = () => {
  const isLogIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <h1>Update for node</h1>
      <Wrapper>{isLogIn === false ? <Login /> : <ContentPage />}</Wrapper>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </>
  );
};
