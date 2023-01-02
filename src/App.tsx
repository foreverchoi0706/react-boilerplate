import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import "./global.css";

import Users from "./page/Uesrs";

export const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ChakraProvider>
        <BrowserRouter>
          {isSignIn ? (
            <Layout.SignIn>
              <Routes>
                {ROUTES.map(({ Component, path }) => (
                  <Route key={path} element={<Component />} path={path} />
                ))}
                <Route element={<Navigate replace to="/todos" />} path="/*" />
              </Routes>
            </Layout.SignIn>
          ) : (
            <Layout.SignOut>
              <Routes>
                <Route element={<SignIn />} path="/sign-in" />
                <Route element={<SignUp />} path="/sign-up" />
                <Route element={<Navigate replace to="/sign-in" />} path="/*" />
              </Routes>
            </Layout.SignOut>
          )}
        </BrowserRouter>
      </ChakraProvider> */}
      <Users />
    </QueryClientProvider>
  );
};

export default App;
