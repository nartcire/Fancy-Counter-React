import Count from "./Count";
import CountButtons from "./CountButtons";
import ResetButton from "./ResetButton";
import Title from "./Title";

function Card() {
  return (
    <div>
      <Title />
      <Count />
      <ResetButton />
      <CountButtons />
    </div>
  );
}

export default Card;
