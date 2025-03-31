import { StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';

export default function ManageExpense({ route, navigation }) {
  const { expenseId } = route.params || '';
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  return (
    <View>
      <Text>ManageExpense: {isEditing.toString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
