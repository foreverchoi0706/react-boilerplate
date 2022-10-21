import React, {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import About from "@/pages/About";
import Home from "@/pages/Home";

const App = () => {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<Home/>} path="/"/>
                    <Route element={<About/>} path="/about/:id"/>
                    <Route element={<Navigate replace to="/"/>} path="/*"/>
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );
};

export default App;
