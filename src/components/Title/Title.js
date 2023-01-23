import { Text } from './Title.js.styled';

export const Title = ({ questions, children }) => {
  return <Text questions={questions}>{children}</Text>;
};
