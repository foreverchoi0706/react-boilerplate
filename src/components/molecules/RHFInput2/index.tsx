import { FC, HTMLInputTypeAttribute, memo, useId } from "react";
import { useFormContext } from "react-hook-form";
import { RegisterOptions } from "react-hook-form/dist/types/validator";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

interface IProps extends RegisterOptions {
  label?: string;
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  helperText?: string;
}

const RHFInput2: FC<IProps> = ({
  label,
  name,
  type,
  placeholder = " ",
  helperText,
  ...rest
}) => {
  const id = useId();

  const {
    register,
    formState: { errors },
  } = useFormContext();

  if (type === "checkbox") {
    return null;
  }

  if (type === "radio") {
    return null;
  }

  return (
    <FormControl
      id={id}
      variant="floating"
      isInvalid={errors[name]}
      isRequired={Boolean(rest.required)}
      isReadOnly={rest.disabled}
    >
      <Input id={id} placeholder={placeholder} {...register(name, rest)} />
      {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
      {errors[name] ? (
        <FormErrorMessage>{errors[name].message}</FormErrorMessage>
      ) : (
        helperText && <FormHelperText>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

export default memo(RHFInput2);
