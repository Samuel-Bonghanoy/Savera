import Header from './components/Header';
import MenuBar from './components/MenuBar';

export default function AppLayout(): JSX.Element {
  return (
    <div>
      <Header />
      <MenuBar />
    </div>
  );
}
