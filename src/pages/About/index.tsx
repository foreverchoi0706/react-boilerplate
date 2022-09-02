import { FC, memo, useCallback } from "react";
import { Center, Flex, Text } from "@chakra-ui/react";
import { SubmitHandler } from "react-hook-form";
import shallow from "zustand/shallow";
import { Grid } from "@material-ui/core";
import useSearchParamsStore, {
  ISearchParams,
} from "@/hooks/stores/useListStore";
import Button from "@/components/atoms/Button";
import RHFProvider from "@/components/RHFProvider";
import RHFInput from "@/components/molecules/RHFInput";

const About: FC = () => {
  const setSearchParams = useSearchParamsStore(
    (state) => state.setSearchParams,
    shallow
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
        <Grid container alignItems="center">
          <Grid item xs={10}>
            <RHFInput label="검색" name="keyword" type="text" />
          </Grid>
          <Grid item xs={2}>
            <Button full type="submit">
              CLICKAAAA
            </Button>
          </Grid>
        </Grid>
        BBB
      </RHFProvider>
      <Flex flexDirection="column" alignContent="space-between" gap={2}> <Center w='100px' bg='green.500'><Text>dsad</Text></Center>
        <Center w='100px' bg='green.500'><Text>dsad</Text></Center>
      </Flex>
    </main>
  );
};

export default memo(About);
