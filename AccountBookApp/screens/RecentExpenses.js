import { useContext, useEffect, useState } from 'react'

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import ErrorOverlay from '../components/UI/ErrorOverlay'
import LoadingOverlay from '../components/UI/LoadingOverlay'
import { ExpensesContext } from '../store/context/expenses-context'
import { getDateMinusDays } from '../util/date'
import { fetchExpense } from '../util/http'

function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState()
  const expensesCtx = useContext(ExpensesContext)

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true)
      try {
        const expenses = await fetchExpense()
        expensesCtx.setExpenses(expenses)
      } catch (error) {
        setError('Could not fetch expense!')
      }
      setIsFetching(false)
    }
    getExpenses()
  }, [])

  if (error && !isFetching) {
    return <ErrorOverlay message={error} />
  }

  if (isFetching) {
    return <LoadingOverlay />
  }

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
