import { Button } from './ButtonMedium.styled';

export const ButtonMedium = ({ onClick, as, href, link, width, children }) => {
  return (
    <Button onClick={onClick} as={as} href={href} link={link} width={width}>
      {children}
    </Button>
  );
};
