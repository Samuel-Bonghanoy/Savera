import { BsBank, BsCashStack } from 'react-icons/bs';

export default function Expenses(): JSX.Element {
  return (
    <div>
      <div className="flex items-center justify-center border-b-2 border-gray-200">
        <article className="flex items-center gap-4 p-3 bg-white border-r-2 border-gray-200 sm:justify-between">
          <span className="p-3 text-blue-600 bg-blue-100 rounded-full sm:order-last">
            <BsBank size={'1.5em'} color="" />
          </span>

          <div>
            <p className="text-xl font-medium text-gray-900">$240.94</p>

            <p className="text-sm text-gray-500">Income</p>
          </div>
        </article>
        <article className="flex items-center gap-4 p-3 bg-white border-gray-200 border-left sm:justify-between">
          <span className="p-3 text-blue-600 bg-red-100 rounded-full sm:order-last">
            <BsCashStack size={'1.5em'} color="red" />
          </span>

          <div>
            <p className="text-xl font-medium text-gray-900">$240.94</p>

            <p className="text-sm text-gray-500">Expenses</p>
          </div>
        </article>
      </div>
      {/* <article className="flex items-center gap-2 p-6 bg-white border border-gray-100 rounded-lg">
        <span className="p-3 text-blue-600 bg-green-200 rounded-full">
          <CiCoins1 color="green" size={'1.5em'} />
        </span>

        <div>
          <p className="text-xl font-medium text-gray-900">$240.94</p>

          <p className="text-sm text-gray-500">Amount Saved</p>
        </div> 
      </article> */}
    </div>
  );
}
