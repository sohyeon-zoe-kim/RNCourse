import { View } from 'react-native'

import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    data: new Date('2023-07-18'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.29,
    data: new Date('2023-07-21'),
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 5.99,
    data: new Date('2023-09-02'),
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 14.99,
    data: new Date('2023-09-03'),
  },
  {
    id: 'e5',
    description: 'Another book',
    amount: 18.59,
    data: new Date('2023-10-25'),
  },
]

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  )
}

export default ExpensesOutput
