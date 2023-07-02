import { Dispatch } from "react";

import { Car } from "../../models/car.model";

import CarForm from "../CarForm";

interface Props {
  carData: Car;
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
}

export default function EditCar(props: Props) {
  const { carData, setIsModalOpen } = props;

  return <CarForm formType="update" car={carData} setIsModalOpen={setIsModalOpen} />;
}
