import React, { FC, memo, useCallback } from "react";
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

  const handleSubmit: SubmitHandler<ISearchParams> = useCallback(
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
              CLICK
            </Button>
          </Grid>
        </Grid>
      </RHFProvider>
    </main>
  );
};

export default memo(About);
