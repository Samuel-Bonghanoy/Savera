export default function Form(): JSX.Element {
  return (
    <div>
      <section className="bg-gray-100">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally independent from manufacturer and other
                group control gives you confidence that we will only recommend what is right for you.
              </p>

              <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-pink-600">
                  {' '}
                  0151 475 4450{' '}
                </a>

                <address className="mt-2 not-italic">282 Kevin Brook, Imogeneborough, CA 58517</address>
              </div>
            </div>

            <div className="p-8 bg-white rounded-lg shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" className="space-y-4">
                <div>
                  <label className="sr-only">Name</label>
                  <input
                    className="w-full p-3 text-sm border-gray-200 rounded-lg"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only">Email</label>
                    <input
                      className="w-full p-3 text-sm border-gray-200 rounded-lg"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only">Phone</label>
                    <input
                      className="w-full p-3 text-sm border-gray-200 rounded-lg"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <label className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white">
                      <input className="sr-only" id="Option1" type="radio" name="option" />

                      <span className="text-sm"> Option 1 </span>
                    </label>
                  </div>

                  <div>
                    <label className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white">
                      <input className="sr-only" id="Option2" type="radio" name="option" />

                      <span className="text-sm"> Option 2 </span>
                    </label>
                  </div>

                  <div>
                    <label className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white">
                      <input className="sr-only" id="Option3" type="radio" name="option" />

                      <span className="text-sm"> Option 3 </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="sr-only">Message</label>

                  <textarea
                    className="w-full p-3 text-sm border-gray-200 rounded-lg"
                    placeholder="Message"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full px-5 py-3 font-medium text-white bg-black rounded-lg sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
