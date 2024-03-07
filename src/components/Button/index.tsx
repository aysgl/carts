import {ButtonType} from '../../types/Types';

const Button = ({ disabled, style, title, type } : ButtonType) => {
  return (
    <button disabled={disabled} type={type} className={`${style} bg-emerald-400 rounded-full p-3 px-5 text-xs`}>
      {title}
    </button>
  );
};

export default Button;
