import styled from 'styled-components';

const Crumb = ({ endPoint, children }) => {
  return <Text endPoint={endPoint}>{children}</Text>;
};

const Text = styled.span`
  font-family: 'Lato';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.19px;

  color: ${props => (props.endPoint ? '#9499A8' : '#202a44')};
`;

export default Crumb;
