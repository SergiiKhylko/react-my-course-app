import "./CostForm.css"
import React, {useState} from "react";

const CostForm = () => {

  const [inputTitle, setInputTitle] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: ""
  // });

  const titleChangeHandler = (event) => {
    setInputTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const costData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate)
    }

    console.log(costData);
    setInputTitle('');
    setInputAmount('');
    setInputDate('');
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={inputTitle}
          />
        </div>
        <div className="new-cost__control">
          <label>Sum</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            value={inputAmount}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-cost__control">
          <label>Date</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            value={inputDate}
            min="2019-01-01"
            step="2023-12-31"
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add Cost</button>
        </div>
      </div>

    </form>
  );
}

export default CostForm;