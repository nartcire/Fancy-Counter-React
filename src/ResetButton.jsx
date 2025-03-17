import { ResetIcon } from "@radix-ui/react-icons";

function ResetButton({ setCount }) {
  return (
    <button
      className="reset-btn"
      onClick={(event) => {
        setCount(0);
        event.currentTarget.blur();
      }}
    >
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}

export default ResetButton;
