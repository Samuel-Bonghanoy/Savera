import FormModal from '../../FormModal';
import { BsBarChartLine, BsPersonBadge } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import { RiHome7Line } from 'react-icons/ri';

export default function MenuBar(): JSX.Element {
  return (
    <div className="w-full h-full ">
      <section id="bottom-navigation" className="fixed inset-x-0 bottom-0 z-10 block py-2 shadow bg-main">
        <div id="tabs" className="flex items-center justify-between">
          <a
            href="#"
            className="flex flex-col items-center justify-center w-full pt-2 pb-1 text-center focus:text-accent hover:text-accent"
          >
            <RiHome7Line size={'1.5em'} />
            <span className="block text-xs tab tab-home">Home</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center w-full pt-2 pb-1 text-center focus:text-accent hover:text-accent"
          >
            <BsPersonBadge size={'1.5em'} />
            <span className="block text-xs tab tab-home">Account</span>
          </a>
          <FormModal />
          <a
            href="#"
            className="flex flex-col items-center justify-center w-full pt-2 pb-1 text-center focus:text-accent hover:text-accent"
          >
            <IoSettingsOutline size={'1.5em'} />
            <span className="block text-xs tab tab-home">Options</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center w-full pt-2 pb-1 text-center focus:text-accent hover:text-accent"
          >
            <BsBarChartLine size={'1.5em'} />
            <span className="block text-xs tab tab-home">Stats</span>
          </a>
        </div>
      </section>
    </div>
  );
}
