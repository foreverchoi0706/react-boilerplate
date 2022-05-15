import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import useSelector from "@/hooks/useSelector";
import Modal from "@/components/ui/organisms/Modal";
import Styled from "./styled";
import FormLogin from "../FormLogin";

const Header = () => {
    const { name } = useSelector((root) => root.user);

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleCloseModal = () => {
        setIsOpen((preState) => !preState)
    }

    return (
        <Styled.Header>
            {isOpen && <Modal handleCloseModal={handleCloseModal}>
                <FormLogin />
            </Modal>}
            <Styled.Gnb>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li onClick={handleCloseModal}>
                    <h3>MODAL</h3>
                </li>
                <li>
                    <h3>환영합니다, {name}님!</h3>
                </li>
            </Styled.Gnb>
        </Styled.Header>
    );
};

export default memo(Header);
