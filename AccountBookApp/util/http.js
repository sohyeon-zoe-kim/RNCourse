import axios from 'axios'
const FIREBASE_DATABASE_URL =
  'https://react-native-course-1c266-default-rtdb.asia-southeast1.firebasedatabase.app'

export function storeExpense(expenseData) {
  axios.post(`${FIREBASE_DATABASE_URL}/expenses.json`, expenseData)
}
