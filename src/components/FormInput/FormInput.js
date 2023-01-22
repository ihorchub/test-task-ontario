import { Input, Label } from './FormInput.styled';

export const FormInput = ({ name, type, placeholder, icon, children }) => {
  return (
    <Label>
      {children}
      <Input icon={icon} name={name} type={type} placeholder={placeholder} />
    </Label>
  );
};
