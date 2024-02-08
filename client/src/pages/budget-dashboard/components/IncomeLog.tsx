export default function IncomeLog(): JSX.Element {
  return (
    <div>
      <article className="flex items-end justify-between p-6 bg-white border border-gray-200 rounded-lg">
        <div>
          <p className="text-sm text-accent">Allowance</p>

          <p className="text-xl font-medium text-gray-900">$240.94</p>
        </div>

        <div className="inline-flex gap-2 p-1 text-green-600 bg-green-100 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>

          <span className="text-xs font-medium"> Income </span>
        </div>
      </article>
    </div>
  );
}
