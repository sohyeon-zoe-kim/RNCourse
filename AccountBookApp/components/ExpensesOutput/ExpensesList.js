import { FlatList, Text } from 'react-native'

function renderExpenseItem(itemData) {
  const item = itemData.item
  return <Text>{item.description}</Text>
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={item => item.id}
    />
  )
}

export default ExpensesList
