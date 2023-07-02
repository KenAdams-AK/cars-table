import { Dispatch, useCallback } from "react";

import { useCarsContext } from "../../hooks/useCarsContext";
import { Car } from "../../models/car.model";

import Button from "../../layout/Button";

interface Props {
  car: Car;
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
}

export default function DeleteCar(props: Props) {
  const { car, setIsModalOpen } = props;
  const { deleteCar } = useCarsContext();

  const handleDeleteClick = useCallback(() => {
    deleteCar(car.id);
    setIsModalOpen(false);
  }, []);

  return (
    <div className="DeleteCar">
      <div className="DeleteCar__warning">
        Are you sure you want to delete {car.car} {car.car_model} from the list?
      </div>
      <div className="DeleteCar__actions">
        <Button content="Delete" onClick={handleDeleteClick} />
        <Button content="Exit" onClick={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
}
