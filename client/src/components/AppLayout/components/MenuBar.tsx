import { MdAccountBox, MdHome, MdMoney } from 'react-icons/md';

export default function MenuBar(): JSX.Element {
  return (
    <div className="w-full h-screen">
      <section id="bottom-navigation" className="fixed inset-x-0 bottom-0 z-10 block bg-white shadow">
        <div id="tabs" className="flex items-center justify-between">
          <a
            href="#"
            className="flex flex-col items-center justify-center w-full pt-2 pb-1 text-center focus:text-teal-500 hover:text-teal-500"
          >
            <MdHome size={'2em'} />
            <span className="block text-xs tab tab-home">Home</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center w-full pt-2 pb-1 text-center focus:text-teal-500 hover:text-teal-500"
          >
            <MdAccountBox size={'2em'} />
            <span className="block text-xs tab tab-home">Account</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center w-full pt-2 pb-1 text-center focus:text-teal-500 hover:text-teal-500"
          >
            <MdMoney size={'2em'} />
            <span className="block text-xs tab tab-home">Budget</span>
          </a>
        </div>
      </section>
    </div>
  );
}
