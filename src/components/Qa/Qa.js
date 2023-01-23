import { useState } from 'react';
import { ChevronDown } from 'components/Icons/ChevronDown';
import { ChevronUp } from 'components/Icons/ChevronUp';
import { Answer, Question, QuestionWrapper } from './Qa.styled';

export const Qa = ({ element: { id, question, answer } }) => {
  const [itemId, setItemId] = useState('');

  const handleClick = e => {
    const selectQuestion = e.currentTarget.id;
    if (selectQuestion === itemId) {
      return setItemId('');
    }
    setItemId(e.currentTarget.id);
  };

  return (
    <>
      <QuestionWrapper id={id} onClick={handleClick}>
        <Question>{question}</Question>
        {itemId === id ? <ChevronUp /> : <ChevronDown />}
      </QuestionWrapper>
      {itemId === id && <Answer>{answer}</Answer>}
    </>
  );
};
