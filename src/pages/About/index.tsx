import React, { FC } from "react";
import Button from "components/atoms/Button";
import useModal from "hooks/useModal";
import ModalFormLogin from "../../components/organisms/ModalFormLogin";

const About: FC = () => {
  const { openModal } = useModal();

  const handleClick = () => {
    openModal(<ModalFormLogin />);
  };

  return (
    <main>
      <Button onClick={handleClick}>CLICK</Button>
    </main>
  );
};

export default About;
