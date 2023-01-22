import { Text } from './Crumb.styled';

export const Crumb = ({ endPoint, children }) => {
  return <Text endPoint={endPoint}>{children}</Text>;
};
