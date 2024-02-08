import ExpenseLog from './components/ExpenseLog';
import Expenses from './components/Expenses';
import IncomeLog from './components/IncomeLog';

export default function BudgetDashboard(): JSX.Element {
  return (
    <div className="flex flex-col justify-center">
      <Expenses />
      <ExpenseLog />
      <IncomeLog />
    </div>
  );
}
