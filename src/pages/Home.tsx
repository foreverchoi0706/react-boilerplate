import React, { useEffect } from "react";
import Layout from "@/Layout";
import useSelector from "@/hooks/useSelector";
import useDispatch from "@/hooks/useDispatch";
import { chnageUserName } from "@/reducers/user";

const Home = () => {
  const { name } = useSelector((root) => root.user);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(chnageUserName("KIM"));
  };

  return (
    <Layout>
      {name}
      <button onClick={handleClick}>BUTTON</button>
    </Layout>
  );
};

export default Home;
