import { useContext, useEffect } from 'react'

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/context/expenses-context'
import { getDateMinusDays } from '../util/date'
import { fetchExpense } from '../util/http'

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext)

  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpense()
      expensesCtx.setExpenses(expenses)
    }
    getExpenses()
  }, [])

  const recentExpenses = expensesCtx.expenses.filter(expense => {
    const today = new Date()
    const date7DaysAgo = getDateMinusDays(today, 7)

    return expense.date > date7DaysAgo && expense.date <= today
  })

  return (
    <ExpensesOutput
      expensesPeriod="Last 7 Days"
      expenses={recentExpenses}
      fallbackText="No expenses registered fot the last 7 days"
    />
  )
}

export default RecentExpenses
