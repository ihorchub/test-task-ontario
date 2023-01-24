import styled from 'styled-components';

const ParametersCollection = ({ collection, card }) => {
  return (
    <Wrapper>
      {collection.map(({ id, icon, text }) => (
        <ItemWrapper card={card} key={id}>
          <img src={process.env.PUBLIC_URL + icon} alt="icon" />
          <Text>{text}</Text>
        </ItemWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const ItemWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: ${props => (props.card ? '4px' : '8px')};
`;

const Text = styled.span`
  font-family: 'Lato';
  font-weight: 700;
  font-size: 16px;
  line-height: 1.19px;

  color: #202a44;
`;

export default ParametersCollection;
