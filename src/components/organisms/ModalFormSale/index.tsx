import { FC, memo } from "react";
import useLoginMutation from "@/hooks/mutations/useSignInMutation";
import Modal from "components/organisms/Modal";
import Styled from "./styled";

const ModalFormLogin: FC = () => {
  const { isLoading } = useLoginMutation();

  return (
    <Modal title="구매" showCloseButton={!isLoading}>
      {isLoading ? (
        <h1>LOADING...</h1>
      ) : (
        <Styled.FormLogin>sadsad</Styled.FormLogin>
      )}
    </Modal>
  );
};

export default memo(ModalFormLogin);
