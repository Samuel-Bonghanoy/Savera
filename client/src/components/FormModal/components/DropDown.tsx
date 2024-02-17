export default function DropDown(): JSX.Element {
  return (
    <div className="w-full dropdown text-start">
      <div tabIndex={0} role="button" className="justify-start w-full text-white bg-white border-0 text-start btn">
        Type of expense here
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] w-full menu p-2 shadow bg-base-100 rounded-box ">
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
}
