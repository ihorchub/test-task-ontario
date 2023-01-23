import styled from 'styled-components';

export const Text = styled.p`
  font-family: 'Abhaya Libre';
  font-weight: 700;
  font-size: ${props => (props.questions ? '28px' : '32px')};
  line-height: 1.19;
  letter-spacing: -0.02em;

  color: #202a44;
`;
