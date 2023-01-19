import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 88px;
`;

export const Title = styled.h2`
  font-family: 'Abhaya Libre';
  font-weight: 700;
  font-size: 28px;
  line-height: 1.18;

  margin-bottom: 50px;
  letter-spacing: -0.02em;

  color: #202a44;
`;

export const ItemWrapper = styled.li`
  width: 770px;
  padding-bottom: 24px;

  :not(:first-child) {
    padding-top: 24px;
  }

  :not(:last-child) {
    border-bottom: 1px solid #e9ebef;
  }
`;

export const QuestionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  margin-bottom: 16px;
`;

export const Question = styled.p`
  font-family: 'Lato';
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;

  color: #202a44;
`;

export const Answer = styled.p`
  font-family: 'Lato';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;

  color: #202a44;
`;
