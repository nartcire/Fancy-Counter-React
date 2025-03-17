import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

function CountButton({ setCount, type, locked }) {
  const handleClick = () => {
    setCount((prev) => {
      if (type === "minus") {
        const newCount = prev - 1;
        if (newCount < 0) {
          return 0;
        } else {
          return newCount;
        }
      } else {
        const newCount = prev + 1;

        if (newCount > 5) {
          return 5;
        } else {
          return newCount;
        }
      }
    });
  };

  return (
    <button className="count-btn" disabled={locked} onClick={handleClick}>
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}

export default CountButton;
