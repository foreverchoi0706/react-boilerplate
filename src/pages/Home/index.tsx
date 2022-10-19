import {Grid, GridItem} from "@chakra-ui/react";
import React, {FC} from "react";

import Layout from "@/components/Layout";
import * as Card from "@/components/organisms/Card";

const Home: FC = () => {
    return (
        <Layout.Main>
            <Grid justifyContent="space-between" templateColumns={{
                base: "repeat(auto-fill, 50%)",
                md: "repeat(auto-fill, 33.3%)"
            }}>
                {new Array(50).fill("").map((_, index) =>
                    <GridItem key={index} margin="10px">
                        <Card.Wrap id={index}>
                            <Card.Image
                                src="https://static-cdn.jtvnw.net/jtv_user_pictures/4f51b103-86d4-475b-806d-f3aad5bcdfc9-profile_image-300x300.png"/>
                            <Card.ViewCount value={index}/>
                        </Card.Wrap>
                    </GridItem>
                )}
            </Grid>
        </Layout.Main>
    );
}

export default Home;