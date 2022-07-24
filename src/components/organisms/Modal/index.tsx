import { FC, memo, PropsWithChildren, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import Styled from "./styled";
import useModal from "../../../hooks/useModal";

interface IProps {
  title: string;
  showCloseButton?: boolean;
  heightFull?: boolean;
}

const modal = document.querySelector("#modal") as Element;

const Modal: FC<PropsWithChildren<IProps>> = memo(
  ({ children, title, showCloseButton = true, heightFull = true }) => {
    const { closeModal } = useModal();

    const handleKeyDown = useCallback(
      ({ key }: KeyboardEvent) => {
        if (key === "Escape") {
          closeModal();
        }
      },
      [closeModal]
    );

    useEffect(() => {
      document.body.style.overflow = "hidden";
      document.body.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "auto";
        document.body.removeEventListener("keydown", handleKeyDown);
      };
    }, [handleKeyDown]);

    return createPortal(
      <Styled.Modal>
        <Styled.Contents heightFull={heightFull}>
          <Styled.Header>
            {title}
            {showCloseButton && (
              <Styled.CloseButton onClick={closeModal}>X</Styled.CloseButton>
            )}
          </Styled.Header>
          <main>{children}</main>
        </Styled.Contents>
      </Styled.Modal>,
      modal
    );
  }
);

export default Modal;
