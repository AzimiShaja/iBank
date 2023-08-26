import { BsShieldLock } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { AiFillBank } from "react-icons/ai";
export default function Feature() {
  return (
    <div className="flex flex-col lg:items-center gap-10 mt-20 bg-gray-50 py-20  px-10">
      <div className="flex flex-col items-center max-md:items-start gap-1">
        <p className="text-orange-500 text-lg">Our Feature</p>
        <h1 className="lg:text-4xl text-3xl font-bold font-open">
          Payment Service Worldwide
        </h1>
      </div>

      <div className="grid max-lg:grid-cols-1 grid-cols-3  gap-4 w-full lg:px-60">
        <div className="bg-white p-4 rounded-md shadow-2xl flex flex-col gap-4 hover:scale-110 duration-300">
          <h1 className="flex gap-2 items-center text-2xl font-poppins">
            <BsShieldLock className="text-2xl text-orange-500" /> Protect your
            Account
          </h1>
          <p className="text-justify text-md font-light text-gray-600">
            Your account is fully protected with the company, and please dont
            share your account with anyone
          </p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-2xl flex flex-col gap-4 hover:scale-110 duration-300">
          <h1 className="flex gap-2 items-center text-2xl font-poppins ">
            <GiReceiveMoney className="text-3xl text-orange-500" />
            Send Money
          </h1>
          <p className="text-justify text-md font-light text-gray-600">
            Every transactions on thetransacrd is safe and secure with the best
            data encryption you can ever imagine
          </p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-2xl flex flex-col gap-4 hover:scale-110 duration-300">
          <h1 className="flex gap-2 items-center text-2xl font-open ">
            <AiFillBank className="text-2xl text-orange-500" /> Online Banking
          </h1>
          <p className="text-justify text-md font-light text-gray-600">
            Take advantage of premium banking privileges, relationship benefits
            and access to the investment expertise and insights of thetransacrd,
            tailored to your needs.
          </p>
        </div>
      </div>
    </div>
  );
}
