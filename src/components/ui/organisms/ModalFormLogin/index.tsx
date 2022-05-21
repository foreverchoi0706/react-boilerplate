import { memo, useCallback, useEffect } from "react";
import shallow from "zustand/shallow";
import useUiStore from "hooks/stores/useUiStore";
import Form from "components/Form";
import Modal from "components/Modal";
import Button from "components/ui/atoms/Button";
import FormInput from "components/ui/molecules/FormInput";
import Styled from "./styled"
import useLogin from "hooks/mutations/useLogin";
import { FieldValues } from "react-hook-form";

const FormLogin = () => {
    const setIsLoginModalOpen = useUiStore((state) => state.setIsLoginModalOpen, shallow);

    const { mutate, isSuccess } = useLogin();

    const handleClose = useCallback(() => {
        setIsLoginModalOpen(false);
    }, []);

    const handleSubmit = useCallback((fieldValues: FieldValues) => {
        mutate(fieldValues);
    }, []);

    useEffect(() => {
        if (isSuccess) {
            setIsLoginModalOpen(false);
        }
    }, [isSuccess])

    return (
        <Modal handleClose={handleClose}>
            <Form onSubmit={handleSubmit} defaultValues={{}}>
                <Styled.FormLogin>
                    <Styled.Header>
                        로그인
                        <Styled.ButtonWrap>
                            <Button type="button" onClick={handleClose}>
                                닫기
                            </Button>
                        </Styled.ButtonWrap>
                    </Styled.Header>
                    <Styled.FormInputWrap>
                        <FormInput label="ID" type="text" name="id" placeholder="id" required="ID는 필수입니다." />
                    </Styled.FormInputWrap>
                    <Styled.FormInputWrap>
                        <FormInput label="PW" type="password" name="pw" placeholder="pw" required="PW는 필수입니다." />
                    </Styled.FormInputWrap>
                    <Button type="submit" full primary>로그인</Button>
                </Styled.FormLogin>
            </Form>
        </Modal>
    );
};

export default memo(FormLogin);