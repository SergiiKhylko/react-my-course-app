import './Costs.css'
import Card from "../ui/Card";
import CostsFilter from "./CostsFilter";
import React, {useState} from "react";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

const Costs = props => {
  const [selectedYear, setSelectedYear] = useState('2020');

  const filteredCosts = props.costs.filter(cost =>
    cost.date.getFullYear() === Number(selectedYear)
  );

  const yearChangeHandler = year => {
    setSelectedYear(year);
  }

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostsDiagram costs={filteredCosts} />
        <CostList filteredCosts={filteredCosts} />
      </Card>
    </div>
  )
}

export default Costs;