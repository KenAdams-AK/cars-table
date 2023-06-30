import { ButtonHTMLAttributes, MouseEventHandler } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  modifier?: string;
}

export default function Button(props: Props) {
  const { content, modifier, onClick, ...rest } = props;

  return (
    <button className={`Button ${modifier}`} type="button" onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
