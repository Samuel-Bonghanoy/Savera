import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import BudgetDashboard from './pages/budget-dashboard';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <BudgetDashboard />,
      },
    ],
  },
]);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
