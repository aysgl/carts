import { ButtonType } from "../../types/Types";

const Button = ({ disabled, style, title, type, onClick }: ButtonType) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${style} bg-black text-white rounded-full p-3 px-5 text-xs`}
    >
      {title}
    </button>
  );
};

export default Button;
