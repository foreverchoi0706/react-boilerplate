import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import GlobalStyle from "components/GlobalStyle";
import theme from "theme";

const queryClient = new QueryClient();

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Reset />
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>

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