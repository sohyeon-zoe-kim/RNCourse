import { useContext } from 'react'

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/context/expenses-context'

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext)
  return (
    <ExpensesOutput expensesPeriod="Total" expenses={expensesCtx.expenses} />
  )
}

export default AllExpenses
