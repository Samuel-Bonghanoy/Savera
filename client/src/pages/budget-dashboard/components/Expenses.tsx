import { BsBank, BsCashCoin } from 'react-icons/bs';

export default function Expenses(): JSX.Element {
  return (
    <div>
      <div className="flex items-center justify-between border-b-2 border-gray-200">
        <article className="flex items-center gap-4 p-3  justify-start border-r-2 border-gray-200 bg-whiteborder-r-2 sm:justify-between w-[50%]">
          <span className="p-3 text-blue-600 bg-blue-100 rounded-full sm:order-last">
            <BsBank size={'1.5em'} color="" />
          </span>

          <div>
            <p className="text-xl font-medium text-gray-900">$240.94</p>

            <p className="text-sm text-gray-500">Income</p>
          </div>
        </article>
        <article className="flex items-center justify-end gap-4 p-3 bg-white border-gray-200 border-left sm:justify-between w-[50%]">
          <div>
            <p className="text-xl font-medium text-gray-900">$240.94</p>

            <p className="text-sm text-gray-500">Expenses</p>
          </div>
          <span className="p-3 text-blue-600 bg-red-100 rounded-full sm:order-last">
            <BsCashCoin size={'1.5em'} color="red" />
          </span>
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
