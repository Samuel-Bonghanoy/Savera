import { FiPlusCircle } from 'react-icons/fi';
import { HiHomeModern } from 'react-icons/hi2';
import { IoMdOptions } from 'react-icons/io';
import { MdAccountCircle, MdQueryStats } from 'react-icons/md';

export default function MenuBar(): JSX.Element {
  return (
    <div className="w-full h-full ">
      <section id="bottom-navigation" className="fixed inset-x-0 bottom-0 z-10 block shadow bg-main">
        <div id="tabs" className="flex items-center justify-between">
          <a
            href="#"
            className="flex flex-col items-center justify-center w-full pt-2 pb-1 text-center focus:text-accent hover:text-accent"
          >
            <HiHomeModern size={'2em'} />
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
            <IoMdOptions size={'2em'} />
            <span className="block text-xs tab tab-home">Options</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center w-full pt-2 pb-1 text-center focus:text-accent hover:text-accent"
          >
            <MdQueryStats size={'2em'} />
            <span className="block text-xs tab tab-home">Stats</span>
          </a>
        </div>
      </section>
    </div>
  );
}
