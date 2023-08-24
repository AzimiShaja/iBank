export default function Footer() {
  return (
    <>
      <div className="bg-gradient-to-r to-gray-900 from-blue-900 py-20 px-10 lg:px-60">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-20">
          <div>
            <h1 className="text-6xl font-bold font-pacifico text-white">
              <span className="text-orange-500 font-pacifico mr-1 text-6xl">
                i
              </span>
              Bank
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-white  text-xl border-b-2 border-orange-500">
              Our Company
            </h1>
            <ul className="footer-links text-white flex flex-col text-md gap-4">
              <li>Company & team</li>
              <li>Our Services</li>
              <li>Contact Us</li>
              <li>Privacy Poilcy</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-white  text-xl border-b-2 border-orange-500">
              Products
            </h1>
            <ul className="text-white flex flex-col text-md gap-4 footer-links">
              <li>Online Payment</li>
              <li>Deposit Schema</li>
              <li>Online Shopping</li>
              <li>Master Card</li>
              <li>Recieve Money</li>
              <li>Affiliate Program</li>
            </ul>
          </div>
          <div>
            <h1 className="text-white  text-xl border-b-2 border-orange-500">
              Subscribe
            </h1>
            <div className="flex flex-col mt-4 gap-4 ">
              <input
                className="text-white outline-none mt-5 p-3 w-full rounded-lg bg-transparent border"
                type="email"
                placeholder="Your Email"
              />
              <button className="bg-orange-500 py-3 px-7 border border-orange-500 text-white rounded-lg hover:bg-transparent duration-300 cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-gray-900 to-blue-900  border-t border-white text-white flex justify-center py-3">
        <p className="text-center ">
          Copyright © 2023 iBank. All Rights Reserved
        </p>
      </div>
    </>
  );
}
