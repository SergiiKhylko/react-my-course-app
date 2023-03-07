import Costs from "./components/costs/Costs";

const App = () => {

  const costs = [
    {
      date: new Date(2023, 2, 12),
      description: "Fridge",
      amount: 666.66
    },
    {
      date: new Date(2023, 11, 25),
      description: "MacBook",
      amount: 2000
    },
    {
      date: new Date(2023, 0, 1),
      description: "PlayStation 5",
      amount: 399.99
    }
  ];

  return (
    <div>
      <h1>
        Let's learn React!
      </h1>
      <h2>Hey there!</h2>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
