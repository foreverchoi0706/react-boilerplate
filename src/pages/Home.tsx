import React, { FC } from "react";
import { useQuery } from "react-query";
import Layout from "@/Layout";

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
    <Layout fallback={<div>1</div>}>
      <Temp />
    </Layout>
  );
};

export default Home;
