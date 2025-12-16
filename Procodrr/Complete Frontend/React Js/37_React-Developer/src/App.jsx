import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import expenseData from "./expenseData";
import { useLocalStorage } from "./hooks/useLocalStorage";

const App = () => {
  const [expenseObj, setExpenseObj] = useLocalStorage('expenseObj', {
    title: "",
    category: "",
    amount: 0,
  });
  const [expenses, setExpenses] = useLocalStorage("expenses", expenseData);

  const [editingRowId, setEditingRowId] = useLocalStorage("editingRowId", "");

  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm
          setExpenses={setExpenses}
          setExpenseObj={setExpenseObj}
          expenseObj={expenseObj}
          expenses={expenses}
          editingRowId={editingRowId}
          setEditingRowId={setEditingRowId}
        />
        <ExpenseTable
          expenses={expenses}
          setExpenses={setExpenses}
          setExpenseObj={setExpenseObj}
          setEditingRowId={setEditingRowId}
        />
      </div>
    </main>
  );
};

export default App;
