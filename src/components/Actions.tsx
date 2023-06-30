import { ChangeEvent, useCallback, useState } from "react";

import { Car } from "../models/car.model";

import Modal from "../layout/Modal";
import EditCar from "./EditCar";
import DeleteCar from "./DeleteCar";

interface Props {
  carData: Car;
}

export default function Actions(props: Props) {
  const { carData } = props;
  const [openModal, setOpenModal] = useState<"edit" | "delete" | null>(null);

  const handleSelect = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLSelectElement;

    if (target.value === "edit") {
      setOpenModal("edit");
      target.value = "DEFAULT";
      return;
    }

    setOpenModal("delete");
    target.value = "DEFAULT";
  }, []);

  return (
    <>
      <div className="Actions">
        <select className="Actions__menu" defaultValue="DEFAULT" onChange={handleSelect}>
          <option value="DEFAULT" disabled>
            Select...
          </option>
          <option value="edit">Edit</option>
          <option value="delete">Delete</option>
        </select>
      </div>

      <Modal isOpen={Boolean(openModal)} handleClose={() => setOpenModal(null)}>
        {openModal === "edit" ? <EditCar carData={carData} /> : <DeleteCar carData={carData} />}
      </Modal>
    </>
  );
}
