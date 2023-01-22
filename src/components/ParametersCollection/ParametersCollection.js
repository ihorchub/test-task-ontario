import { ItemWrapper, Text, Wrapper } from './ParametersCollection.styled';

export const ParametersCollection = ({ collection }) => {
  return (
    <Wrapper>
      {collection.map(({ id, icon, text }) => (
        <ItemWrapper key={id}>
          <img src={process.env.PUBLIC_URL + icon} alt="icon" />
          <Text>{text}</Text>
        </ItemWrapper>
      ))}
    </Wrapper>
  );
};
