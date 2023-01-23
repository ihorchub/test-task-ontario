import styled from 'styled-components';

const Button = ({
  variant,
  onClick,
  type,
  as,
  href,
  link,
  width,
  children,
}) => {
  return (
    <Wrapper
      variant={variant}
      onClick={onClick}
      type={type}
      as={as}
      href={href}
      link={link}
      width={width}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${props =>
    props.variant === 'primary' ? '11px 16px 12px' : '8px 16px 9px'};
  gap: 10px;

  cursor: pointer;

  width: ${props => props.width && props.width};

  background: ${props => (props.link ? '#54cc61' : '#f1ae0f')};

  border-radius: 50px;
  border: 0;

  :hover {
    background-color: ${props => (props.link ? '#088c17' : '#d97203')};
  }

  font-family: 'Lato';
  font-weight: 700;
  font-size: 16px;
  line-height: 1.19;
  text-decoration: none;

  color: #ffffff;
`;

export default Button;
