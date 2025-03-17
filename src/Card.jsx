import Count from "./Count";
import CountButtons from "./CountButtons";
import ResetButton from "./ResetButton";
import Title from "./Title";
import { useState } from "react";

function Card() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <Title />
      <Count count={count} />
      <ResetButton />
      <CountButtons setCount={setCount} />
    </div>
  );
}

export default Card;
