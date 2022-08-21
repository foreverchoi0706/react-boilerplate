import { FC, HTMLInputTypeAttribute, memo, useId } from "react";
import { useFormContext } from "react-hook-form";
import { RegisterOptions } from "react-hook-form/dist/types/validator";
import Input from "components/atoms/Input";
import Styled from "./styled";

interface IProps extends RegisterOptions {
  label?: string;
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
}

const RHFInput: FC<IProps> = memo(
  ({ label, name, type, placeholder = "", ...rest }) => {
    const id = useId();

    const {
      register,
      formState: { errors },
    } = useFormContext();

    if (type === "radio" || type === "checkbox") {
      return (
        <Styled.RHFInput>
          <Styled.Label htmlFor={id} type={type}>
            <Input id={id} type={type} {...register(name, rest)} />
            {label}
          </Styled.Label>
          {errors[name] && (
            <Styled.ErrorMsg>{errors[name].message}</Styled.ErrorMsg>
          )}
        </Styled.RHFInput>
      );
    }

    return (
      <Styled.RHFInput>
        <Styled.Label htmlFor={id} type={type}>
          {label}
          {rest.required && <em> *</em>}
        </Styled.Label>
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(name, rest)}
        />
        {errors[name] && (
          <Styled.ErrorMsg>{errors[name].message}</Styled.ErrorMsg>
        )}
      </Styled.RHFInput>
    );
  }
);

export default RHFInput;
