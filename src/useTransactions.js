import { useContext } from "react";
import { ExpenseGuardContext } from "./context/context";
import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "./constants/categories";

// MOST IMPORTANT LOGIC

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseGuardContext);
  const transactionsPerType = transactions.filter((t) => t.type === title);

  const total = transactionsPerType.reduce(
    (acc, curval) => (acc += curval.amount),
    0
  );

  const categories = title === "Income" ? incomeCategories : expenseCategories;

  console.log({ transactionsPerType, total, categories });

  transactionsPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    if (category) category.amount += t.amount;
  });

  const filterCategories = categories.filter((c) => c.amount > 0);

  const chartData = {
    datasets: [
      {
        data: filterCategories.map((c) => c.amount),
        backgroundColor: filterCategories.map((c) => c.color),
      }
    ],
    labels: filterCategories.map((c) => c.type),
  };

  return { total, chartData};

};

export default useTransactions;


// import { useContext } from 'react';
// import { ExpenseGuardContext } from './context/context';

// import { incomeCategories, expenseCategories, resetCategories } from './constants/categories';

// const useTransactions = (title) => {
//   resetCategories();
//   const { transactions } = useContext(ExpenseGuardContext);
//   const rightTransactions = transactions.filter((t) => t.type === title);
//   const total = rightTransactions.reduce((acc, currVal) => acc += currVal.amount, 0);
//   const categories = title === 'Income' ? incomeCategories : expenseCategories;

//   rightTransactions.forEach((t) => {
//     const category = categories.find((c) => c.type === t.category);

//     if (category) category.amount += t.amount;
//   });

//   const filteredCategories = categories.filter((sc) => sc.amount > 0);

//   const chartData = {
//     datasets: [{
//       data: filteredCategories.map((c) => c.amount),
//       backgroundColor: filteredCategories.map((c) => c.color),
//     }],
//     labels: filteredCategories.map((c) => c.type),
//   };

//   return { filteredCategories, total, chartData };
// };

// export default useTransactions;