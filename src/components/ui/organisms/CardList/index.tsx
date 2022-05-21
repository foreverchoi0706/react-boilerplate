import { FC, memo } from "react";
import { Link } from "react-router-dom";
import Styled from "./styled";

interface IProps {
    items: number[];
}

const Card: FC<{ item: number }> = memo(({ item }) => {
    return (
        <Styled.Card>
            <Link to={`/about/${item}`}>
                <h2>TITLE</h2>
                <Styled.ThumbnailImgWrap>
                    <Styled.ThumbnailImg src="https://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg" alt="test" />
                </Styled.ThumbnailImgWrap>
                <p>{item}</p>
            </Link>
        </Styled.Card>
    );
});

const CardList: FC<IProps> = memo(({ items }) => {
    console.log("CardList");
    return (
        <Styled.CardList>
            {items.map((item) => <Card key={item} item={item} />)}
        </Styled.CardList>
    );
});


export default CardList;