import { Button } from './ButtonBig.styled';

export const ButtonBig = ({ type, children }) => {
  return <Button type={type}>{children}</Button>;
};
