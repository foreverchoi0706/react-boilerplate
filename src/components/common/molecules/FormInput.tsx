import React, {
  FC,
  HTMLInputTypeAttribute,
  useCallback,
  useState,
} from "react";
import { useFormContext, Validate } from "react-hook-form";
import Input from "@/components/common/atoms/Input";

interface IProps {
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  required?: string;
  validate?: Validate<any> | Record<string, Validate<any>>;
}

const FormInput: FC<IProps> = ({
  name,
  type,
  placeholder,
  validate,
  required,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [inputType, setInputType] = useState<HTMLInputTypeAttribute>(type);

  const handleClick = useCallback(() => {
    setInputType(inputType === "text" ? "password" : "text");
  }, [inputType]);

  return (
    <div>
      <Input
        placeholder={placeholder}
        type={inputType}
        {...register(name, {
          validate: {
            ...validate,
            required: (value: string) => {
              return value ? true : required;
            },
          },
        })}
      />
      <span>
        {type === "password" && (
          <>
            {inputType === "password" ? (
              <div onClick={handleClick}>보기</div>
            ) : (
              <div onClick={handleClick}>안보기</div>
            )}
          </>
        )}
      </span>
      <span>{errors[name] && errors[name].message}</span>
    </div>
  );
};

export default FormInput;
