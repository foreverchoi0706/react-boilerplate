import React, { FC, PropsWithChildren, useEffect } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm, } from "react-hook-form";

interface IProps {
    onSubmit: SubmitHandler<FieldValues>;
    defaultValues?: FieldValues;
}

const Form: FC<PropsWithChildren<IProps>> = ({ children, onSubmit, defaultValues }) => {
    const methods = useForm<typeof defaultValues>({
        defaultValues
    });

    useEffect(() => {
        if (methods.formState.errors) {
            console.error(methods.formState.errors);
        }
    }, [methods.formState.errors]);

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} autoComplete="off">
                {children}
            </form>
        </FormProvider>
    );
};

export default Form;
