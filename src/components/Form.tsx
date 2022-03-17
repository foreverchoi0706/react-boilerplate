import React, {FC, ReactNode, useEffect} from "react";
import {FieldValues, FormProvider, SubmitHandler, useForm,} from "react-hook-form";

interface IProps {
    children: ReactNode;
    onSubmit: SubmitHandler<FieldValues>;
    defaultValues?: FieldValues;
}

const Form: FC<IProps> = ({children, onSubmit, defaultValues}) => {
    const methods = useForm<typeof defaultValues>({
        defaultValues
    });

    useEffect(() => {
        if (methods.formState.errors) {
            console.log(methods.formState.errors);
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
