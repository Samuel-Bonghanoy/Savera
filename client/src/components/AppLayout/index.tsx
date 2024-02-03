import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import MenuBar from './components/MenuBar';

export default function AppLayout(): JSX.Element {
  return (
    <div>
      <Header />
      <Outlet />
      <MenuBar />
    </div>
  );
}
