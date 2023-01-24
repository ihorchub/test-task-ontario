import styled from 'styled-components';
import { useState } from 'react';
import { ChevronDown } from 'components/Icons/Icons';
import { ChevronUp } from 'components/Icons/Icons';

const Qa = ({ element: { id, question, answer } }) => {
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

const QuestionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Question = styled.p`
  font-family: 'Lato';
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;

  color: #202a44;
`;

const Answer = styled.p`
  padding-top: 16px;

  font-family: 'Lato';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;

  color: #202a44;
`;

export default Qa;
