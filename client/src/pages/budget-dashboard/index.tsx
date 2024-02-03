import ExpenseLog from './components/ExpenseLog';
import Expenses from './components/Expenses';

export default function BudgetDashboard(): JSX.Element {
  return (
    <div className="flex flex-col justify-center">
      <Expenses />
      <ExpenseLog />
    </div>
  );
}
