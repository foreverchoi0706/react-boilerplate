import { FC, PropsWithChildren } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { action } from "@storybook/addon-actions";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

const StorybookFormProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(action("[React Hooks RHFProvider] Submit"))}
        autoComplete="off"
      >
        {children}
      </form>
    </FormProvider>
  );
};

export const withRHF =
  (showSubmitButton: boolean) =>
  (Story: FC): StoryFnReactReturnType =>
    (
      <StorybookFormProvider>
        <Story />
        {showSubmitButton && <button type="submit">Submit</button>}
      </StorybookFormProvider>
    );
