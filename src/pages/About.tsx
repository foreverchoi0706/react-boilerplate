import React from "react";
import Layout from "@/Layout";
import useSelector from "@/hooks/useSelector";
import useDispatch from "@/hooks/useDispatch";
import { changeUserName } from "@/reducers/user";

const About = () => {
  const { name } = useSelector((root) => root.user);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeUserName("KIM"));
  };

  return (
    <Layout>
      {name} <button onClick={handleClick}>BUTTON</button>
    </Layout>
  );
};

export default About;
