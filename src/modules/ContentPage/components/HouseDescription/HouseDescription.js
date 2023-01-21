import { Elipse } from 'components/Icons/Elipse';
import {
  Adress,
  Button,
  ButtonSpan,
  Text,
  Title,
  Wrapper,
} from './HouseDescription.styled';
import { HouseParameters } from '../HouseParameters/HouseParameters';

export const HouseDescription = () => {
  return (
    <div>
      <Wrapper>
        <Button type="button">
          <Elipse />
          <ButtonSpan>On Market</ButtonSpan>
        </Button>
        <Text>Listed 5 days ago</Text>
      </Wrapper>
      <Title>York, Oak Ridges Lake Wilcox</Title>
      <Adress>Near Yonge/Stouffville Rd, 22 Sunset Beach Rd</Adress>
      <HouseParameters />
    </div>
  );
};
