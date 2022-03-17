import React, {FC} from "react";
import Layout from "@/components/Layout";
import FormLogin from "@/components/common/organisms/FormLogin";


const Home: FC = () => {
    return (
        <Layout fallback={<div>LOADING...</div>}>
            <FormLogin/>
        </Layout>
    );
};

export default Home;
