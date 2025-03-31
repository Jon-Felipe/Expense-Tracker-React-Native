import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { ExpesesContext } from '../store/expenses-context';

// components
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { getDateMinusDays } from '../util/date';

export default function RecentExpenses() {
  const { expenses } = useContext(ExpesesContext);

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const prevDate = getDateMinusDays(today, 7);

    return expense.date > prevDate;
  });

  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod='Last 7 Days' />
  );
}

const styles = StyleSheet.create({});
