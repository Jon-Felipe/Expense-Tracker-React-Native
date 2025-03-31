import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { ExpesesContext } from '../store/expenses-context';

// components
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

export default function AllExpenses() {
  const { expenses } = useContext(ExpesesContext);
  return <ExpensesOutput expenses={expenses} expensesPeriod='Total' />;
}

const styles = StyleSheet.create({});
