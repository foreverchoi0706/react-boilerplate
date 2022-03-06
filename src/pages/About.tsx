import React, { useCallback } from "react";
import Layout from "@/components/Layout";
import useSelector from "@/hooks/useSelector";
import useDispatch from "@/hooks/useDispatch";
import { changeUserName } from "@/reducers/user";
import Button from "@/components/common/atoms/Button";

const About = () => {
  const { name } = useSelector((root) => root.user);

  console.log(name);

  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(changeUserName("KIM"));
  }, []);

  return (
    <Layout>
      {name}
      <Button.Primary onClick={handleClick}>BUTTON</Button.Primary>
    </Layout>
  );
};

export default About;
