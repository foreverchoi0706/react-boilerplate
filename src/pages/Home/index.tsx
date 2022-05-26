import { memo } from "react";
import { useQuery } from "react-query";
import { getAccountInfo } from "apis/user";
import Banner from "components/organisms/Banner";
import CardList from "components/organisms/CardList";

const items = new Array(20).fill("").map((_, index) => index);

const Home = memo(() => {
    useQuery(["home"], getAccountInfo, {
        refetchOnWindowFocus: false,
        retry: 0,
    });

    return (
        <main>
            <Banner />
            <CardList items={items} />
        </main>
    )
});

export default Home;