import { ReactElement, useCallback } from "react";
import useUiStore from "hooks/stores/useUiStore";

const useModal = () => {
  const setModal = useUiStore((ui) => ui.setModal);

  const openModal = useCallback((Modal: ReactElement) => {
    setModal(Modal);
  }, []);

  const closeModal = useCallback(() => {
    setModal(null);
  }, []);

  return {
    openModal,
    closeModal,
  };
};

export default useModal;
