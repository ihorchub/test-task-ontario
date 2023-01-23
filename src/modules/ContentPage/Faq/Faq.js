import { Qa } from 'components/Qa/Qa';
import { Title } from 'components/Title/Title';
import { Item, ListWrapper, Wrapper } from './Faq.styled';

export const Faq = ({ elements }) => {
  return (
    <Wrapper>
      <Title questions>Frequently Asked Questions</Title>
      <ListWrapper>
        {elements.map(element => (
          <Item key={element.id}>
            <Qa element={element} />
          </Item>
        ))}
      </ListWrapper>
    </Wrapper>
  );
};
