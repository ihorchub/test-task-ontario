import { ItemWrapper, Text, Wrapper } from './ParametersCollection.styled';

export const ParametersCollection = ({ collection, card }) => {
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
