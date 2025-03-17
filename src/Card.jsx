import ButtonContainer from "./ButtonContainer";
import Count from "./Count";
import ResetButton from "./ResetButton";
import Title from "./Title";
import { useState } from "react";

function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer setCount={setCount} locked={locked} />
    </div>
  );
}

export default Card;
