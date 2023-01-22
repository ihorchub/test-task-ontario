import { Button } from './ButtonMedium.styled';

export const ButtonMedium = ({ link, width, children }) => {
  return (
    <Button link={link} width={width}>
      {children}
    </Button>
  );
};
