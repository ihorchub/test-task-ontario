import styled from 'styled-components';

export const Text = styled.span`
  font-family: 'Lato';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.19px;

  color: ${props => (props.endPoint ? '#9499A8' : '#202a44')};
`;
