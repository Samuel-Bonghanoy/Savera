import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './components/AppLayout/components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
  },
]);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
