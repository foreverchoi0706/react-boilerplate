import { FormProvider, useForm } from "react-hook-form";
import { BrowserRouter } from "react-router-dom";
import { Reset } from "styled-reset";

export const decorators = [
  (Story) => (
    <BrowserRouter>
    <FormProvider {...useForm()}>

   
        <Reset/>
        <Story />
        </FormProvider>
    </BrowserRouter>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}