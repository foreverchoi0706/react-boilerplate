import { FC, memo, useCallback } from "react";
import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import { SubmitHandler } from "react-hook-form";
import useSearchParamsStore, {
  ISearchParams,
} from "@/hooks/stores/useListStore";
import RHFProvider from "@/components/RHFProvider";
import RHFInput2 from "@/components/molecules/RHFInput2";
import Popup from "@/components/Popup";
import useSlide from "@/hooks/useSlide";

const PopupContent: FC = () => {
  const { refContainer, slideNext, slidePrev } = useSlide();

  return (
    <div>
      <h1>TEST</h1>
      <button onClick={slideNext}>slideNext</button>
      <ul ref={refContainer}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <button onClick={slidePrev}>slidePrev</button>
    </div>
  );
};

const About: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const setSearchParams = useSearchParamsStore(
    ({ setSearchParams }) => setSearchParams
  );

  const handleSubmit = useCallback<SubmitHandler<ISearchParams>>(
    (searchParams) => {
      setSearchParams(searchParams);
    },
    []
  );

  return (
    <main>
      <RHFProvider onSubmit={handleSubmit}>
        <Flex gap={2}>
          <Box flexGrow={1}>
            <RHFInput2 label="test" name="keyword" type="text" />
          </Box>
          <Box>
            <Button type="submit">SEARCH</Button>
          </Box>
        </Flex>
      </RHFProvider>
      <button onClick={onOpen}>WINDOW OPEN</button>
      {isOpen && (
        <Popup onClose={onClose}>
          <PopupContent />
        </Popup>
      )}
    </main>
  );
};

export default memo(About);
