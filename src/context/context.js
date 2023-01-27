import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";

// const initialState = [{amount: 10, category: 'Savings', type: 'Income', date: '01-26-2023', id: '1'}];

const initialState = JSON.parse(localStorage.getItem("transactions")) || [
  {
    amount: 50,
    category: "House",
    type: "Expense",
    date: "2023-02-01",
    id: "c766fa54-c5c0-467f-8383-581ea2c63b9b",
  },
  {
    amount: 50,
    category: "Business",
    type: "Income",
    date: "2023-01-31",
    id: "7de6ac37-9d83-4810-893b-e5c3f28831a4",
  },
  {
    amount: 100,
    category: "Salary",
    type: "Income",
    date: "2023-01-30",
    id: "9b10e10e-f893-43b2-b3a8-5b663b140c43",
  },
];

export const ExpenseGuardContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  // Actions

  // Arrow function
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  //   console.log(transactions);

  const balance = transactions.reduce((acc, curVal) => {
    return curVal.type === "Expense"
      ? acc - curVal.amount
      : acc + curVal.amount;
  }, 0);

  return (
    <ExpenseGuardContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        transactions,
        balance,
      }}
    >
      {children}
    </ExpenseGuardContext.Provider>
  );
};
