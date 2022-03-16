import React, {FC, ReactNode} from "react";
import {FieldValues, FormProvider, SubmitHandler, useForm,} from "react-hook-form";

interface IProps {
    children: ReactNode;
    onSubmit: SubmitHandler<FieldValues>;
}

const Form: FC<IProps> = ({children, onSubmit}) => {
    const methods = useForm();

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} autoComplete="off">
                {children}
            </form>
        </FormProvider>
    );
};

export default Form;
