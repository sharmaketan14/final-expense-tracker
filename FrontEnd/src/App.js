import React, { useEffect, useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

let DUMMY_EXPENSES = [];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  useEffect(() => {
    fetch("http://localhost:5000/extract").then((result) => {
      result.json().then((resp) => {
        for(const i of resp) {
          let temp = i.date;
          i.date = new Date(temp.toString())
        }
        console.log(resp)
        setExpenses((prevState) => resp)
      });
  });

  return () => {
    setExpenses(() => [])
  }
  }, [])
  function save(f) {
    fetch("http://localhost:5000/add", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify({
        'id' : f.id,
        'title' : f.title,
        'amount' : f.amount,
        'date' : f.date
      })
    })

    fetch("http://localhost:5000/extract").then((result) => {
      result.json().then((resp) => {
        for(const i of resp) {
          let temp = i.date;
          i.date = new Date(temp.toString())
        }
        setExpenses((prevState) => [...resp])
      });
  })
}
  
  return (
    <div className='App'>
      <NewExpense onSubmit={save} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;