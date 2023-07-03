import { ChangeEvent, useCallback, useState } from "react";

import { Car } from "../models/car.model";

import Modal from "../layout/Modal";
import EditCar from "./Popups/EditCar";
import DeleteCar from "./Popups/DeleteCar";

interface Props {
  carData: Car;
}

export default function Actions(props: Props) {
  const { carData } = props;
  const [action, setAction] = useState<"edit" | "delete" | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSelect = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const { target } = e;

    setAction(e.target.value as typeof action);
    setIsModalOpen(true);

    target.value = "DEFAULT";
  }, []);

  return (
    <>
      <div className="Actions">
        <select
          className="Actions__menu"
          defaultValue="DEFAULT"
          name="actions"
          onChange={handleSelect}
        >
          <option value="DEFAULT" disabled>
            Select...
          </option>
          <option value="edit">Edit</option>
          <option value="delete">Delete</option>
        </select>
      </div>

      <Modal isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)}>
        {action === "edit" ? <EditCar carData={carData} setIsModalOpen={setIsModalOpen} /> : null}

        {action === "delete" ? <DeleteCar car={carData} setIsModalOpen={setIsModalOpen} /> : null}
      </Modal>
    </>
  );
}
