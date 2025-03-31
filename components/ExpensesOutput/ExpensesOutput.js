import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

// components
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

export default function ExpensesOutput({ expenses }) {
  return (
    <View>
      <ExpensesSummary />
      <ExpensesList />
    </View>
  );
}

const styles = StyleSheet.create({});
