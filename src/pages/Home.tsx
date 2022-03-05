import React, { FC } from "react";
import { useQuery } from "react-query";
import Layout from "@/components/Layout";

const Temp: FC = () => {
  const { data } = useQuery(["test"], async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("hi");
      }, 3000);
    });
  });
  return <div>{data}</div>;
};

const Home: FC = () => {
  return (
    <Layout filled fallback={<div>LOADING...</div>}>
      <Temp />
    </Layout>
  );
};

export default Home;
