import { FC, memo, useCallback } from "react";
import { FieldValues } from "react-hook-form";
import shallow from "zustand/shallow";
import { REG_NAME } from "constants/regexp";
import { REQUIRED_CORRECT_NAME, REQUIRED_GENDER, REQUIRED_NAME, REQUIRED_PW } from "constants/text";
import useLogin from "hooks/mutations/useLogin";
import useUiStore from "hooks/stores/useUiStore";
import Form from "components/Form";
import Modal from "components/organisms/Modal";
import Button from "components/atoms/Button";
import FormInput from "components/molecules/FormInput";
import FormInputCheckbox from "components/molecules/FormInputCheckbox";
import FormInputRadio from "components/molecules/FormInputRadio";
import Styled from "./styled";

const FormLogin: FC = () => {
    const setIsLoginModalOpen = useUiStore((state) => state.setIsLoginModalOpen, shallow);

    const { mutate, isLoading } = useLogin();

    const handleClose = useCallback(() => {
        setIsLoginModalOpen(false);
    }, [setIsLoginModalOpen]);

    const handleSubmit = useCallback((fieldValues: FieldValues) => {
        mutate(fieldValues as ILoginInfo);
    }, [mutate]);

    return (
        <Modal title="로그인" onClose={handleClose} disabledCloseButton={!isLoading}>
            <Styled.FormLogin>
                {isLoading ?
                    <h1>LOADING...</h1> :
                    <Form onSubmit={handleSubmit}>
                        <Styled.FormInputWrap>
                            <FormInput
                                label="ID"
                                type="text"
                                name="id"
                                maxLength={10}
                                placeholder="id"
                                required={REQUIRED_NAME}
                                pattern={{
                                    value: new RegExp(REG_NAME),
                                    message: REQUIRED_CORRECT_NAME
                                }}
                            />
                        </Styled.FormInputWrap>
                        <Styled.FormInputWrap>
                            <FormInput
                                label="PW"
                                type="password"
                                name="pw"
                                placeholder="pw"
                                required={REQUIRED_PW}
                            />
                        </Styled.FormInputWrap>
                        <Styled.FormInputWrap>
                            <FormInputCheckbox
                                label="개인정보 수집 동의"
                                name="agreement"
                                required="개인정보 수집 동의는 필수입니다."
                            />
                        </Styled.FormInputWrap>
                        <Styled.FormInputWrap>
                            <FormInputRadio
                                label="남"
                                name="gender"
                                value="M"
                                required={REQUIRED_GENDER}
                            />
                            <FormInputRadio
                                label="여"
                                name="gender"
                                value="W"
                                required={REQUIRED_GENDER}
                            />
                        </Styled.FormInputWrap>
                        <Button type="submit" primary full>
                            로그인
                        </Button>
                    </Form>
                }
            </Styled.FormLogin>
        </Modal>
    );
};

export default memo(FormLogin);