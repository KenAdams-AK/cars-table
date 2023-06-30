import { Car } from "../models/car.model";

interface Props {
  carData: Car;
}

export default function EditCar(props: Props) {
  const { carData } = props;

  return <div>EditCarPopup, edit car with Id: {carData.id}</div>;
}
