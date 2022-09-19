import {
  FC,
  memo,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

interface IProps {
  onClose: () => void;
}

const Popup: FC<PropsWithChildren<IProps>> = ({ children, onClose }) => {
  const [div, setDiv] = useState<HTMLDivElement | null>(null);
  const popup = useRef<Window | null>(null);

  useEffect(() => {
    setDiv(document.createElement("div"));
  }, []);

  useEffect(() => {
    if (!div) return;
    popup.current = window.open("", "_blank", "width=500,height=600");
    if (!popup.current) return;
    popup.current.document.body.appendChild(div);

    popup.current.addEventListener("beforeunload", onClose);
    return () => {
      if (!popup.current) return;
      popup.current.close();
      onClose();
    };
  }, [div]);

  return div && createPortal(children, div);
};

export default memo(Popup);
