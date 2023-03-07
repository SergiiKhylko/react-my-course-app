import CostItem from "./components/CostItem";

function App() {

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
      <CostItem
        date={costs[0].date}
        description={costs[0].description}
        amount={costs[0].amount}
      />
      <CostItem
        date={costs[1].date}
        description={costs[1].description}
        amount={costs[1].amount}
      />
      <CostItem
        date={costs[2].date}
        description={costs[2].description}
        amount={costs[2].amount}
      />
    </div>
  );
}

export default App;
