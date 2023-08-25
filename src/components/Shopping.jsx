import img from "/src/assets/shopping.png";
import { BsCheck2Circle } from "react-icons/bs";
export default function Shopping() {
  return (
    <div className="flex max-lg:flex-col justify-center gap-20 items-start max-lg:px-10 py-20 px-5">
      {/**======== */}
      <div className="flex flex-col items-start justify-center gap-8">
        <div className="flex flex-col items-start gap-1">
          <p className="text-orange-500 lg:text-lg">Online Shopping</p>
          <h1 className="lg:text-5xl text-3xl font-open font-bold max-w-2xl leading-tight">
            Shop Online Make In Online Banking Payments
          </h1>
        </div>
        <div className="max-w-xl">
          <p className="text-justify max-lg:text-sm font-light text-gray-400 font-open">
            Take advantage of premium banking privileges, relationship benefits
            and access to the investment expertise and insights of thetransacrd,
            tailored to your needs. Insights to empower confident financial
            decisions And Goals.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <p className="max-lg:text-sm flex s gap-3 items-center">
            <BsCheck2Circle className="text-2xl" />
            Cards that work all across the world.
          </p>
          <p className="max-lg:text-sm flex s gap-3 items-center">
            <BsCheck2Circle className="text-2xl" />
            Highest Returns on your investments.
          </p>
          <p className="max-lg:text-sm flex s gap-3 items-center">
            <BsCheck2Circle className="text-2xl" />
            No minimum balance. No overdrafts.
          </p>
        </div>
        <div>
          <button className="bg-blue-900 py-3 px-7 border border-blue-900 text-white rounded-lg hover:bg-white hover:text-black duration-300 cursor-pointer">
            Sign up today
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={img} alt="" />
      </div>
    </div>
  );
}
