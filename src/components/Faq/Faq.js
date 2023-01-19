import { ChevronDown } from 'components/Svg/ChevronDown';
import { ChevronUp } from 'components/Svg/ChevronUp';
import { useState } from 'react';
import {
  Answer,
  ItemWrapper,
  Question,
  QuestionWrapper,
  Title,
  Wrapper,
} from './Faq.styled';
import { elements } from './FaqElements';

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
