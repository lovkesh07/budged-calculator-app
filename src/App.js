import React, { useState, useEffect } from "react";
import "./App.css";
import Expenselist from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForn";
import Alert from "./components/Alert";
import { v4 as uuid } from "uuid";

// uuid used to generate random id
// useState is a function that returns array with 2 value

const initialExpenses = [
  { id: uuid(), charge: "rent", amount: 1600 },
  { id: uuid(), charge: "rent2", amount: 100 },
  { id: uuid(), charge: "rent3", amount: 1600 },
];
console.log(initialExpenses);

function App() {
  // console.log(useState());

  // old way to use useState

  // const result = useState(initialExpenses);
  // const expenses =result[0];
  // const setExpenses =result[1];
  // console.log(expenses,setExpenses);

  const [expenses, setExpenses] = useState(initialExpenses);
  console.log(expenses);

  return (
    <>
      <Alert></Alert>
      <h1>budget calculator</h1>

      <main className="App">
        <ExpenseForm />
        <Expenselist expenses={expenses} />
      </main>

      <h1>
        Total spending :{" "}
        <span className="total">
          ${expenses.reduce((acc, curr) => {

            return acc += curr.amount
          }, 0)}
          {/* reduce = Use it when: You have an array of amounts and you want to add them all up. 
        const euros = [29.76, 41.85, 46.5];
        const sum = euros.reduce((total, amount) => total + amount); 
        sum // 118.11 
       */}
        </span>
      </h1>
    </>
  );
}

export default App;
