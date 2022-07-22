import { FC, memo, useCallback } from "react";
import { FieldValues } from "react-hook-form";
import shallow from "zustand/shallow";
import { REG_NAME } from "constants/regexp";
import {
  REQUIRED_CORRECT_NAME,
  REQUIRED_NAME,
  REQUIRED_PW,
} from "constants/text";
import useLoginMutation from "hooks/mutations/useLoginMutation";
import useUiStore from "hooks/stores/useUiStore";
import useUserInfoQuery from "hooks/queries/useUserInfoQuery";
import RHFProvider from "components/RHFProvider";
import Modal from "components/organisms/Modal";
import Button from "components/atoms/Button";
import RHFInput from "components/molecules/RHFInput";
import Styled from "./styled";

const FormLogin: FC = () => {
  const { data } = useUserInfoQuery();

  const setIsLoginModalOpen = useUiStore(
    (state) => state.setIsLoginModalOpen,
    shallow
  );

  const { mutate, isLoading } = useLoginMutation();

  const handleClose = useCallback(() => {
    setIsLoginModalOpen(false);
  }, [setIsLoginModalOpen]);

  const handleSubmit = useCallback(
    (fieldValues: FieldValues) => {
      mutate(fieldValues as ILoginInfo);
    },
    [mutate]
  );

  return (
    <Modal title="로그인" onClose={handleClose} showCloseButton={!isLoading}>
      <Styled.FormLogin>
        {isLoading ? (
          <h1>LOADING...</h1>
        ) : (
          <RHFProvider defaultValues={data} onSubmit={handleSubmit}>
            <Styled.RHFInputWrap>
              <RHFInput
                label="ID"
                type="text"
                name="id"
                maxLength={10}
                placeholder="id"
                required={REQUIRED_NAME}
                pattern={{
                  value: new RegExp(REG_NAME),
                  message: REQUIRED_CORRECT_NAME,
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
            {/*<Styled.RHFInputWrap>*/}
            {/*  <FormInputCheckbox*/}
            {/*    label="개인정보 수집 동의"*/}
            {/*    name="agreement"*/}
            {/*    required="개인정보 수집 동의는 필수입니다."*/}
            {/*  />*/}
            {/*</Styled.RHFInputWrap>*/}
            {/*<Styled.RHFInputWrap>*/}
            {/*  <FormInputRadio*/}
            {/*    label="남"*/}
            {/*    name="gender"*/}
            {/*    value="M"*/}
            {/*    required={REQUIRED_GENDER}*/}
            {/*  />*/}
            {/*  <FormInputRadio*/}
            {/*    label="여"*/}
            {/*    name="gender"*/}
            {/*    value="W"*/}
            {/*    required={REQUIRED_GENDER}*/}
            {/*  />*/}
            {/*</Styled.RHFInputWrap>*/}
            <Button type="submit" primary full>
              로그인
            </Button>
          </RHFProvider>
        )}
      </Styled.FormLogin>
    </Modal>
  );
};

export default memo(FormLogin);
