import Costs from "./components/costs/Costs";
import NewCost from "./components/newCost/NewCost";

const App = () => {

  const costs = [
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
    }
  ];

  const addCostHandler = cost => {
    console.log(cost);
    console.log("App Component")
  }

  return (
    <div>
      <h1>
        Let's learn React!
      </h1>
      <h2>Hey there!</h2>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
