import { ComponentProps } from "react";
import { Car } from "../../models/car.model";

interface Props extends ComponentProps<"table"> {
  data: Car[];
}

export default function TableHead(props: Props) {
  const { data } = props;

  return <thead>TableHead</thead>;
}
