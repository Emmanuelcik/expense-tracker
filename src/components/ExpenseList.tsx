import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import ExpenseDetail from "./ExpenseDetail";

const ExpenseList = () => {
  const { state } = useBudget();

  const filterExpenses = state.currentCategory
    ? state.expenses.filter(
        (expense) => expense.category === state.currentCategory
      )
    : state.expenses;

  const isEmpty = useMemo(() => filterExpenses.length === 0, [state.expenses]);
  return (
    <div className="bg-white shadow-lg rounded-lg p-10 mt-10">
      {isEmpty ? (
        <p className="text-gray-600 text-2xl font-bold">
          {" "}
          There's no expenses
        </p>
      ) : (
        <>
          <p className="text-gray-600 text-2xl font-bold my-5">Expenses List</p>
          {filterExpenses.map((expense) => (
            <ExpenseDetail key={expense.id} expense={expense} />
          ))}
        </>
      )}
    </div>
  );
};

export default ExpenseList;
