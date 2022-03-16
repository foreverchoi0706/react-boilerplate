import React, {
    ChangeEventHandler,
    FC,
    HTMLInputTypeAttribute,
    memo,
    MouseEventHandler,
    useCallback,
    useState
} from "react";
import {useFormContext, Validate} from "react-hook-form";
import Input from "@/components/common/atoms/Input";

interface IProps {
    name: string;
    placeholder?: string;
    required?: string;
    onClick?: MouseEventHandler<HTMLInputElement>;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    validate?: Validate<any> | Record<string, Validate<any>>;
}

const FormInputPassword: FC<IProps> = ({
                                           name,
                                           placeholder,
                                           validate,
                                           required,
                                       }) => {
    const {
        register,
        formState: {errors},
    } = useFormContext();

    console.log("FormInputPassword");

    const [inputType, setInputType] = useState<HTMLInputTypeAttribute>("password");

    const handleClick = useCallback(() => {
        setInputType(inputType === "text" ? "password" : "text");
    }, [inputType]);

    return (
        <div>
            <Input.Text
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
                {inputType === "password" ? (
                    <div onClick={handleClick}>보기</div>
                ) : (
                    <div onClick={handleClick}>안보기</div>
                )}

      </span>
            <span>{errors[name] && errors[name].message}</span>
        </div>
    );
};

export default memo(FormInputPassword);
