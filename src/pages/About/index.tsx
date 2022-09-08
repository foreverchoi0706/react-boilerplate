import {FC, memo, useCallback} from "react";
import {Box, Button, Flex} from "@chakra-ui/react";
import {SubmitHandler} from "react-hook-form";
import useSearchParamsStore, {ISearchParams,} from "@/hooks/stores/useListStore";
import RHFProvider from "@/components/RHFProvider";
import RHFInput2 from "@/components/molecules/RHFInput2";

const About: FC = () => {
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
    </main>
  );
};

export default memo(About);
