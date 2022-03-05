import React from "react";
import Layout from "@/components/Layout";
import useSelector from "@/hooks/useSelector";
import useDispatch from "@/hooks/useDispatch";
import { changeUserName } from "@/reducers/user";
import * as Button from "@/components/common/atoms/Button";

const About = () => {
  const { name } = useSelector((root) => root.user);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeUserName("KIM"));
  };

  return (
    <Layout>
      {name}
      <Button.Primary onClick={handleClick} disabled>
        BUTTON
      </Button.Primary>
    </Layout>
  );
};

export default About;
