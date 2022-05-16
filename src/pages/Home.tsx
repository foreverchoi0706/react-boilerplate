import React, { FC } from "react";
import Layout from "@/components/Layout";

const Home: FC = () => {
    return (
        <Layout fallback={<div>LOADING...</div>}>
            HOME
        </Layout>
    );
};

export default Home;
