import { StyleSheet, View } from 'react-native';
import React from 'react';

// components
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

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

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({});
