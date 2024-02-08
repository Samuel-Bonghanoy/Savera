import { BsBarChartFill, BsHouseExclamationFill, BsPersonFill } from 'react-icons/bs';
import { MdAddCircle } from 'react-icons/md';
import { TbSettingsFilled } from 'react-icons/tb';

export default function MenuBar(): JSX.Element {
  return (
    <div className="w-full h-full ">
      <section id="bottom-navigation" className="fixed inset-x-0 bottom-0 z-10 block py-2 shadow bg-main">
        <div id="tabs" className="flex items-center justify-between">
          <a
            href="#"
            className="flex flex-col items-center justify-center w-full pt-2 pb-1 text-center focus:text-accent hover:text-accent"
          >
            <BsHouseExclamationFill size={'1.5em'} />
            <span className="block text-xs tab tab-home">Home</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center w-full pt-2 pb-1 text-center focus:text-accent hover:text-accent"
          >
            <BsPersonFill size={'1.5em'} />
            <span className="block text-xs tab tab-home">Account</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center w-full pt-2 pb-1 text-center focus:text-accent hover:text-accent"
          >
            <MdAddCircle size={'1.5em'} />
            <span className="block text-xs tab tab-home">Add Log</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center w-full pt-2 pb-1 text-center focus:text-accent hover:text-accent"
          >
            <TbSettingsFilled size={'1.5em'} />
            <span className="block text-xs tab tab-home">Options</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center w-full pt-2 pb-1 text-center focus:text-accent hover:text-accent"
          >
            <BsBarChartFill size={'1.5em'} />
            <span className="block text-xs tab tab-home">Stats</span>
          </a>
        </div>
      </section>
    </div>
  );
}
