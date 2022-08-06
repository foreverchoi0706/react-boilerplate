import { FC, memo, useCallback } from "react";
import { SubmitHandler } from "react-hook-form";
import {
  REQUIRED_CORRECT_NAME,
  REQUIRED_GENDER,
  REQUIRED_NAME,
  REQUIRED_PW,
} from "constants/text";
import useModal from "hooks/useModal";
import useLoginMutation from "hooks/mutations/useLoginMutation";
import RHFProvider from "components/RHFProvider";
import RHFInput from "components/molecules/RHFInput";
import Modal from "components/organisms/Modal";
import Button from "components/atoms/Button";
import Styled from "./styled";

const ModalFormLogin: FC = () => {
  const { closeModal } = useModal();

  const { mutate, isLoading } = useLoginMutation();

  const handleSubmit: SubmitHandler<ILoginInfo> = useCallback((loginInfo) => {
    mutate(loginInfo, {
      onSuccess: closeModal,
    });
  }, []);

  return (
    <Modal title="로그인" showCloseButton={!isLoading}>
      {isLoading ? (
        <h1>LOADING...</h1>
      ) : (
        <Styled.FormLogin>
          <RHFProvider onSubmit={handleSubmit}>
            <Styled.RHFInputWrap>
              <RHFInput
                label="ID"
                type="text"
                name="id"
                placeholder="id"
                required={REQUIRED_NAME}
                validate={{
                  checkSpace: (value: string) => {
                    return value.trim() ? undefined : REQUIRED_CORRECT_NAME;
                  },
                }}
              />
            </Styled.RHFInputWrap>
            <Styled.RHFInputWrap>
              <RHFInput
                label="PW"
                type="password"
                name="pw"
                placeholder="pw"
                required={REQUIRED_PW}
              />
            </Styled.RHFInputWrap>
            <Styled.RHFInputWrap>
              <RHFInput
                type="checkbox"
                label="개인정보 수집 동의"
                name="agreement"
                required="개인정보 수집 동의는 필수입니다."
              />
            </Styled.RHFInputWrap>
            <Styled.RHFInputWrap>
              <RHFInput
                type="radio"
                label="남"
                name="gender"
                value="M"
                required={REQUIRED_GENDER}
              />
              <RHFInput
                type="radio"
                label="여"
                name="gender"
                value="W"
                required={REQUIRED_GENDER}
              />
            </Styled.RHFInputWrap>
            <Button type="submit" primary full>
              로그인
            </Button>
          </RHFProvider>
        </Styled.FormLogin>
      )}
    </Modal>
  );
};

export default memo(ModalFormLogin);
