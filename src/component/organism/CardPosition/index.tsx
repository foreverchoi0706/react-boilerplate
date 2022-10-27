import React, { FC } from "react";
import { Link } from "react-router-dom";

import reactSvg from "../../../asset/react.svg";

import Card from "@/component/molecule/Card";

interface ICardPosition {
  id: number;
}

const CardPosition: FC<ICardPosition> = ({ id }) => {
  return (
    <Link to={`/about/${id}`}>
      <Card>
        <Card.Container background="#000000" overflow="hidden">
          <Card.Image
            _hover={{
              transform: "scale(1.2)",
              transitionDuration: "0.5s",
            }}
            src={reactSvg}
            width="100%"
          />
          <Card.ViewCount color="red" value={id} />
        </Card.Container>
      </Card>
    </Link>
  );
};
export default CardPosition;
