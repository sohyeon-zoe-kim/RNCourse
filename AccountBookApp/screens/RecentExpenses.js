import { useContext } from 'react'

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/context/expenses-context'
import { getDateMinusDays } from '../util/data'

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext)

  const recentExpenses = expensesCtx.expenses.filter(expense => {
    const today = new Date()
    const date7DaysAgo = getDateMinusDays(today, 7)

    return expense.date > date7DaysAgo && expense.date <= today
  })

  return (
    <ExpensesOutput expensesPeriod="Last 7 Days" expenses={recentExpenses} />
  )
}

export default RecentExpenses
