import { StyleSheet, View } from 'react-native';
import React from 'react';

// components
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

// extras
import { GlobalStyles } from '../../constants/styles';

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
