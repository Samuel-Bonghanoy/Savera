import React from 'react';
import { RiMenuAddLine } from 'react-icons/ri';

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps): JSX.Element {
  return (
    <div>
      <button
        className="text-white border-0 btn bg-main h-fit"
        onClick={() => document.getElementById('my_modal_2').showModal()}
      >
        <div className="flex flex-col items-center justify-center pt-2 pb-1 r w-fit focus:text-accent hover:text-accent">
          <RiMenuAddLine size={'1.5em'} />
          <span className="block text-xs tab tab-home">Add Log</span>
        </div>
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-main">
          {children}
          <form method="dialog" className="modal-backdrop">
            <button className="py-2 mt-2 font-semibold text-black bg-red-300 rounded-md">Close</button>
          </form>
        </div>
      </dialog>
    </div>
  );
}
