import './CostItem.css'

function CostItem() {
  return (
    <div className="cost-item">
      <div>Jan 13 2023</div>
      <div className="cost-item__description">
        <h2>Fridge</h2>
        <div className="cost-item__price">$600</div>
      </div>
    </div>
  );
}

export default CostItem;