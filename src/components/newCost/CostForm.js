import "./CostForm.css"

const CostForm= () => {
  return (
    <form>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-cost__control">
          <label>Sum</label>
          <input type="number" min="0.01"
            step="0.01" />
        </div>
        <div className="new-cost__control">
          <label>Date</label>
          <input type="date"
                 min="2019-01-01"
                 step="2023-12-31" />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add Cost</button>
        </div>
      </div>

    </form>
  );
}

export default CostForm;