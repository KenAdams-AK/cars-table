import { Dispatch } from "react";
import CarForm from "../CarForm";

interface Props {
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
}

export default function AddCar(props: Props) {
  const { setIsModalOpen } = props;

  return <CarForm formType="create" setIsModalOpen={setIsModalOpen} />;
}
