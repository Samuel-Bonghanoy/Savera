import { BiPlus } from 'react-icons/bi';

export default function StickyButton(): JSX.Element {
  return (
    <button className="fixed z-50 inline-block p-3 text-white border rounded-full btn btn-circle bottom- right-5 bg-accent border-accent w-fit hover:bg-transparent hover:text-main focus:outline-none focus:ring active:text-indigo-500">
      <span className="sr-only"> Download </span>

      <BiPlus size={'1.5em'} />
    </button>
  );
}
