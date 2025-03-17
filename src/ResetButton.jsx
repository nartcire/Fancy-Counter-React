import { ResetIcon } from "@radix-ui/react-icons";

function ResetButton({ setCount }) {
  return (
    <button className="reset-btn" onClick={() => setCount(0)}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}

export default ResetButton;
