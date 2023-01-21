import { Input, Label } from './FormInput.styled';

export const FormInput = ({ children, type, placeholder, icon }) => {
  return (
    <Label>
      {children}
      <Input icon={icon} type={type} placeholder={placeholder} />
    </Label>
  );
};
