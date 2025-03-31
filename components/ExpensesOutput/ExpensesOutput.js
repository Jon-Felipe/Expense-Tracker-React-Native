import { StyleSheet, View } from 'react-native';
import React from 'react';

// components
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
}

const styles = StyleSheet.create({});
