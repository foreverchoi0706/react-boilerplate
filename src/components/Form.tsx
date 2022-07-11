import { FC, PropsWithChildren, useEffect } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormProps,
} from "react-hook-form";

interface IProps extends UseFormProps {
  onSubmit: SubmitHandler<FieldValues>;
}

const Form: FC<PropsWithChildren<IProps>> = ({
  children,
  onSubmit,
  defaultValues,
}) => {
  const methods = useForm();

  useEffect(() => {
    if (defaultValues) {
      methods.reset(defaultValues);
    }
  }, [defaultValues]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} autoComplete="off">
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
