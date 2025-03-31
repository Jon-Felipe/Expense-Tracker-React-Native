import { createContext, useReducer } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'First desc',
    amount: 55.99,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    description: 'Second desc',
    amount: 5.99,
    date: new Date('2022-01-05'),
  },
  {
    id: 'e3',
    description: 'Third desc',
    amount: 35.99,
    date: new Date('2021-12-01'),
  },
  {
    id: 'e4',
    description: 'Forth desc',
    amount: 14.99,
    date: new Date('2022-02-19'),
  },
  {
    id: 'e5',
    description: 'Fifth desc',
    amount: 24.99,
    date: new Date('2022-02-99'),
  },
];

export const ExpesesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ id, ...action.payload }, ...state];
    case 'UPDATE':
      const expenseIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      const expense = state[expenseIndex];
      const updatedExpense = { ...expense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[expenseIndex] = updatedExpense;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: 'EDIT', payload: { id, data: expenseData } });
  }

  return (
    <ExpesesContext.Provider
      value={{
        expenses: expensesState,
        addExpense,
        deleteExpense,
        updateExpense,
      }}
    >
      {children}
    </ExpesesContext.Provider>
  );
}

export default ExpensesContextProvider;
