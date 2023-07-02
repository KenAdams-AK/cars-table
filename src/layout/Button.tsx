import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
  modifier?: string;
}

export default function Button(props: Props) {
  const { content, modifier, ...rest } = props;

  return (
    <button className={`Button ${modifier || ""}`} type="button" {...rest}>
      {content}
    </button>
  );
}
