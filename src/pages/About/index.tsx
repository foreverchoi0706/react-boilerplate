import React, {FC, memo, useCallback} from "react";
import useSign from "hooks/useSign";
import useModal from "hooks/useModal";
import Button from "components/atoms/Button";
import ModalFormLogin from "components/organisms/ModalFormLogin";
import ModalFormSale from "components/organisms/ModalFormSale";

const About: FC = () => {
  const { isSignIn } = useSign();

  const { openModal } = useModal();

  const handleClick = useCallback(() => {
    openModal(isSignIn ? <ModalFormSale /> : <ModalFormLogin />);
  }, [isSignIn]);

  return (
    <main>
      <Button onClick={handleClick}>CLICK</Button>
    </main>
  );
};

export default memo(About);
