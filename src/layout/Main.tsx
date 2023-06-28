import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  pageName: string;
};

export default function Main(props: Props) {
  const { children, pageName } = props;

  return <main className={pageName}>{children}</main>;
}
