import { Item, Wrapper } from './HouseParameters.styled';
import { parameters } from './Parameters';

export const HouseParameters = () => {
  return (
    <Wrapper>
      {parameters.map(({ id, svg, text }) => (
        <Item key={id}>
          <>{svg}</>
          <p>{text}</p>
        </Item>
      ))}
    </Wrapper>
  );
};
