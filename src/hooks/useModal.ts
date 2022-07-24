import { useCallback } from "react";
import useUiStore from "hooks/stores/useUiStore";

const useModal = () => {
  const setModal = useUiStore((state) => state.setModal);

  const openModal = useCallback((Modal: any) => {
    setModal(Modal);
  }, []);

  const closeModal = useCallback(() => {}, []);

  return {
    openModal,
    closeModal,
  };
};

export default useModal;
