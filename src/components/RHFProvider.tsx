import { FC, memo, PropsWithChildren, useEffect } from "react";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormProps,
} from "react-hook-form";

interface IProps extends UseFormProps {
  onSubmit: SubmitHandler<any>;
}

const RHFProvider: FC<PropsWithChildren<IProps>> = ({
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

export default memo(RHFProvider);
