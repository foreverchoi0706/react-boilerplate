import { Grid, GridItem } from "@chakra-ui/react";
import React, { FC } from "react";

import Layout from "@/component/Layout";
import CardPosition from "@/component/organism/CardPosition";

const Home: FC = () => {
  return (
    <Layout.Main>
      <Grid
        justifyContent="space-between"
        templateColumns={{
          base: "repeat(auto-fill, 50%)",
          md: "repeat(auto-fill, 33.3%)",
        }}
      >
        {new Array(50).fill("").map((_, index) => (
          <GridItem key={index} margin="10px">
            <CardPosition id={index} />
          </GridItem>
        ))}
      </Grid>
    </Layout.Main>
  );
};

export default Home;
