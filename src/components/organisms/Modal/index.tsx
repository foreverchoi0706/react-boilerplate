import { FC, memo, PropsWithChildren, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import Styled from "./styled";

interface IProps {
  title: string;
  onClose: () => void;
  showCloseButton?: boolean;
  heightFull?: boolean;
}

const modal = document.querySelector("#modal") as Element;

const Modal: FC<PropsWithChildren<IProps>> = memo(
  ({ children, title, onClose, showCloseButton = true, heightFull = true }) => {
    const handleKeyDown = useCallback(
      ({ key }: KeyboardEvent) => {
        if (key === "Escape") {
          onClose();
        }
      },
      [onClose]
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
              <Styled.CloseButton onClick={onClose}>X</Styled.CloseButton>
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
