import { BiStats } from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';
import { FiPlusCircle } from 'react-icons/fi';
import { MdAccountCircle } from 'react-icons/md';
import { SlOptions } from 'react-icons/sl';

export default function MenuBar(): JSX.Element {
  return (
    <div className="w-full h-full ">
      <section id="bottom-navigation" className="fixed inset-x-0 bottom-0 z-10 block shadow bg-main">
        <div id="tabs" className="flex items-center justify-between">
          <a
            href="#"
            className="flex flex-col items-center justify-center w-full pt-2 pb-1 text-center focus:text-accent hover:text-accent"
          >
            <FaHome size={'2em'} />
            <span className="block text-xs tab tab-home">Home</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center w-full pt-2 pb-1 text-center focus:text-accent hover:text-accent"
          >
            <MdAccountCircle size={'2em'} />
            <span className="block text-xs tab tab-home">Account</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center w-full pt-2 pb-1 text-center focus:text-accent hover:text-accent"
          >
            <FiPlusCircle size={'2em'} />
            <span className="block text-xs tab tab-home">Add Log</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center w-full pt-2 pb-1 text-center focus:text-accent hover:text-accent"
          >
            <SlOptions size={'2em'} />
            <span className="block text-xs tab tab-home">Options</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center w-full pt-2 pb-1 text-center focus:text-accent hover:text-accent"
          >
            <BiStats size={'2em'} />
            <span className="block text-xs tab tab-home">Stats</span>
          </a>
        </div>
      </section>
    </div>
  );
}
