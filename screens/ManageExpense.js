import { StyleSheet, View } from 'react-native';
import React, { useContext, useLayoutEffect } from 'react';

// components
import Button from '../components/UI/Button';
import IconButton from '../components/UI/IconButton';

// extras
import { GlobalStyles } from '../constants/styles';
import { ExpesesContext } from '../store/expenses-context';

export default function ManageExpense({ route, navigation }) {
  const { deleteExpense, addExpense, updateExpense } =
    useContext(ExpesesContext);

  const { expenseId } = route.params || '';
  const isEditing = !!expenseId;

  function deleteExpenseHandler() {
    deleteExpense(expenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEditing) {
      updateExpense(expenseId, {
        description: 'Test!!!',
        amount: 29.99,
        date: new Date('2022-05-19'),
      });
    } else {
      addExpense({
        description: 'Test',
        amount: 19.99,
        date: new Date('2022-05-19'),
      });
    }
    navigation.goBack();
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button mode='flat' onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={confirmHandler} style={styles.button}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      <View style={styles.deleteContainer}>
        {isEditing && (
          <IconButton
            icon='trash'
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});
