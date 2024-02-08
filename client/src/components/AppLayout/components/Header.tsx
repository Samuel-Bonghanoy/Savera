import { MdNotifications, MdSearch } from 'react-icons/md';
import Logo from '../../../assets/logo.svg';

export default function Header(): JSX.Element {
  return (
    <header className="bg-main">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-end gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <label className="sr-only">Search</label>

              <input
                className="w-full h-10 text-sm bg-white border-none rounded-full shadow-sm pe-10 ps-4 sm:w-56"
                id="search"
                type="search"
                placeholder="Filter logs..."
              />

              <button
                type="button"
                className="absolute p-2 text-gray-600 transition -translate-y-1/2 rounded-full end-1 top-1/2 bg-gray-50 hover:text-gray-700"
              >
                <span className="sr-only">Search</span>
                <MdSearch size={'1.5em'} />
              </button>
            </div>

            <a
              title="notifications"
              href="#"
              className="block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
            >
              <MdNotifications size={'1.5em'} color="black" />
            </a>
          </div>

          <span aria-hidden="true" className="block w-px h-6 bg-gray-200 rounded-full"></span>

          <a href="#" className="block shrink-0">
            <span className="sr-only">Profile</span>
            <img alt="Man" src={Logo} className="object-cover w-10 h-10 rounded-full" />
          </a>
        </div>
      </div>
    </header>
  );
}
