import './CostList.css';
import CostItem from "./CostItem";

const CostList = props => {
  const filteredCosts = props.filteredCosts;

  if (filteredCosts.length === 0) {
    return <h2 className="cost-list__fallback">no costs this year</h2>;
  }

  return (
    <ul className="cost-list">
      {filteredCosts.map(cost => (
        <CostItem
          key={cost.id}
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
        />
      ))}
    </ul>
  );
}

export default CostList;