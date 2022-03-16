import React, {FC} from "react";
import Layout from "@/components/Layout";
import FormLogin from "@/components/common/organisms/FormLogin";

const Temp: FC = () => {
    return <FormLogin/>;
};

const Home: FC = () => {
    return (
        <Layout fallback={<div>LOADING...</div>}>
            <Temp/>
        </Layout>
    );
};

export default Home;
