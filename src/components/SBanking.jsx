import { BsCheck2Circle } from "react-icons/bs";
import img from "/src/assets/about_img.png";
export default function SBanking() {
  return (
    <div className="flex max-lg:flex-col justify-center gap-20 items-start max-lg:px-10 pt-20 px-5">
      <div className="flex justify-center items-center">
        <img src={img} />
      </div>
      {/**======== */}
      <div className="flex flex-col items-start justify-center gap-8">
        <div className="flex flex-col items-start gap-1">
          <p className="text-orange-500 lg:text-lg">Smart Banking</p>
          <h1 className="lg:text-5xl text-3xl font-open font-bold max-w-2xl leading-tight">
            The Better Way to Save & Invest Online Banking
          </h1>
        </div>
        <div className="max-w-xl">
          <p className="text-justify max-lg:text-sm font-light text-gray-400 font-open">
            Our local and internatuonal money transfer is the very best you can
            imagine as we have provided the very best avenue for you to transfer
            fund accros countries in minutes and our fund transfer is instantly,
            with over a million customer, we have stood the test of time and our
            customers base speaks the volume about us.
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
            Highest Returns on your investments.
          </p>
        </div>
        <div>
          <button className="bg-blue-900 py-3 px-7 border border-blue-900 text-white rounded-lg hover:bg-white hover:text-black duration-300 cursor-pointer">
            More About Us
          </button>
        </div>
      </div>
    </div>
  );
}
