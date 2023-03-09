import "./NewCost.css";
import CostForm from "./CostForm";
import React, {useState} from "react";

const NewCost = props => {

  const [isFormVisible, setFormVisible] = useState(false);

  const inputCostDataHandler = () => {
    setFormVisible(true);
  }

  const cancelCostHandler = () => {
    setFormVisible(false);
  }

  const saveCostDataHandler = inputCostData => {

    const costDate = {
      ...inputCostData,
      id: Math.random().toString()
    };

    props.onAddCost(costDate);
    setFormVisible(false);
  }

  return (
    <div className="new-cost">
      {!isFormVisible &&
        <button onClick={inputCostDataHandler}>Add new cost</button>
      }
      {isFormVisible &&
        <CostForm onSaveCostData={saveCostDataHandler} onCancel={cancelCostHandler} />
      }
    </div>
  );
}

export default NewCost;