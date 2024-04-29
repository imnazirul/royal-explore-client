/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */

const Contact = () => {
  return (
    <div className=" rounded-2xl border shadow-2xl  font-poppins">
      <div className="container flex flex-col  px-6 pt-10 pb-6 mx-auto">
        <h1 className="text-2xl md:text-4xl text-center font-bold  ">
          Contact Us
        </h1>
        <hr className="mt-3 max-lg:mb-3" />
        <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
          <div className="lg:w-1/2  lg:mx-6">
            <h1 className="max-sm:text-xl md:text-2xl font-semibold capitalize lg:text-3xl">
              Get a quote
            </h1>

            <p className="max-w-xl mt-6 max-sm:text-sm">
              Ask us everything and we would love to hear from you.Get inspired!
              And Let's turn your travel aspirations into unforgettable
              adventures. Reach out today!
            </p>

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span className="mx-2 truncate w-72">
                  Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span className="mx-2 truncate w-72">(257) 563-7401</span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="mx-2 truncate w-72">
                  support@royalexplore.com
                </span>
              </p>
            </div>
          </div>

          <div className="mt-5 w-full lg:w-1/2 lg:mx-6">
            <div className="w-full px-2 lg:px-5 py-5 mx-auto overflow-hidden  border rounded-xl lg:max-w-xl">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="flex-1 ">
                  <label className="block mb-2 text-sm ">Email address</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className=" block w-full px-5 py-3 mt-2  border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>

                <div className="w-full mt-6">
                  <label className="block mb-2 text-sm ">Message</label>
                  <textarea
                    className="block w-full h-32 px-5 py-3 mt-2  placeholder-gray-400  border border-gray-200 rounded-md md:h-48  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 resize-none focus:outline-none focus:ring"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary-1 rounded-md  focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
