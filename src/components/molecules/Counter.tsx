import React from "react";
import useDispatch from "@/hooks/useDispatch";

const Counter = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: "UP",
      payload: 1,
    });
  };

  const handleClick2 = () => {
    dispatch({
      type: "DOWN",
      payload: 1,
    });
  };

  return (
    <section>
      <button onClick={handleClick}>UP</button>
      <button onClick={handleClick2}>DONW</button>
    </section>
  );
};

export default Counter;
