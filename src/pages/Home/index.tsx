import { memo } from "react";
import { useQuery } from "react-query";
import { getAccountInfo } from "apis/user";
import Banner from "components/ui/organisms/Banner";
import CardList from "components/ui/organisms/CardList";

const items = new Array(20).fill("").map((_, index) => index);

const Home = memo(() => {
    useQuery(["home"], getAccountInfo);

    return (
        <main>
            <Banner />
            <CardList items={items} />
        </main>
    )
});

export default Home;