import styled from 'styled-components';

export const Wrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const ItemWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: ${props => (props.card ? '4px' : '8px')};
`;

export const Text = styled.span`
  font-family: 'Lato';
  font-weight: 700;
  font-size: 16px;
  line-height: 1.19px;

  color: #202a44;
`;
