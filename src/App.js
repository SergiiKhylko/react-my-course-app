import Costs from "./components/costs/Costs";
import NewCost from "./components/newCost/NewCost";
import React, {useState} from "react";


const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2023, 2, 12),
    description: "Fridge",
    amount: 666.66
  },
  {
    id: "c2",
    date: new Date(2023, 11, 25),
    description: "MacBook",
    amount: 2000
  },
  {
    id: "c3",
    date: new Date(2023, 0, 1),
    description: "PlayStation 5",
    amount: 399.99
  },
  {
    id: "c4",
    date: new Date(2024, 4, 24),
    description: "PlayStation VR2",
    amount: 499.99
  }
];

const App = () => {

  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = cost => {
    setCosts(prevState => {
      return [cost, ...prevState]
    });
  }

  return (
    <div>
      <h1 className="title">
        Track your costs
      </h1>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
