import { ChevronDown } from 'components/Icons/ChevronDown';
import { ChevronUp } from 'components/Icons/ChevronUp';
import { useState } from 'react';
import {
  Answer,
  ItemWrapper,
  Question,
  QuestionWrapper,
  Title,
  Wrapper,
} from './Faq.styled';
import { elements } from 'data/FaqElements';

export const Faq = () => {
  const [itemId, setItemId] = useState('');

  const handleClick = e => {
    const selectQuestion = e.currentTarget.id;
    if (selectQuestion === itemId) {
      return setItemId('');
    }
    setItemId(e.currentTarget.id);
  };

  return (
    <Wrapper>
      <Title>Frequently Asked Questions</Title>
      <ul>
        {elements.map(({ id, question, answer }) => (
          <ItemWrapper key={id}>
            <QuestionWrapper id={id} onClick={handleClick}>
              <Question>{question}</Question>
              {itemId === id ? <ChevronUp /> : <ChevronDown />}
            </QuestionWrapper>
            {itemId === id && <Answer>{answer}</Answer>}
          </ItemWrapper>
        ))}
      </ul>
    </Wrapper>
  );
};
