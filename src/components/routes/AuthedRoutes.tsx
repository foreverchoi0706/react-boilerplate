import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
const About = lazy(() => import("@/pages/About"));

const AuthedRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Suspense fallback={<div>loading...</div>}><About /></Suspense>} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AuthedRoutes;