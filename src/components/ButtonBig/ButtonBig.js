import { Button } from './ButtonBig.styled';

export const ButtonBig = ({ onClick, type, width, children }) => {
  return (
    <Button onClick={onClick} type={type} width={width}>
      {children}
    </Button>
  );
};
