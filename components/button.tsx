import { cls } from "@libs/client/utils";
interface ButtonProps {
  large?: boolean;
  text: string;
  [key: string]: any;
}

function Button({ large = false, onClick, text, ...rest }: ButtonProps) {
  return (
    <button className={cls()} {...rest}>
      {text}
    </button>
  );
}

export default Button;
