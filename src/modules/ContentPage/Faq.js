import styled from 'styled-components';
import Qa from 'components/Qa/Qa';
import Title from 'components/Title/Title';

const Faq = ({ elements }) => {
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

const Wrapper = styled.div`
  margin-top: 88px;
  width: 770px;
`;

const ListWrapper = styled.ul`
  margin-top: 50px;
`;

const Item = styled.li`
  padding-bottom: 24px;

  :not(:first-child) {
    padding-top: 24px;
  }

  :not(:last-child) {
    border-bottom: 1px solid #e9ebef;
  }
`;

export default Faq;
