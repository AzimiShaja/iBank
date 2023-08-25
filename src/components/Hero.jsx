import { Link } from "react-router-dom";
import img from "/src/assets/img.png";
export default function Hero() {
  return (
    <div className="grid h-full grid-cols-2 lg:px-20 bg-gradient-to-r from-gray-900 to-blue-900 max-lg:grid-cols-1 max-lg:pt-10">
      <div className="flex flex-col  items-start px-10 justify-center gap-5 md:gap-10 ">
        <div className="flex flex-col gap-0">
          <p className="text-orange-500 text-lg max-md:text-md ">
            Simple. Taransparent. Secure
          </p>
          <h1 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-open font-bold text-white">
            Fast & Secure Online Money Transfer
          </h1>
        </div>
        <Link to="/register">
          <button className="bg-orange-500 py-3 px-7 border border-orange-500 text-white rounded-lg hover:bg-white hover:text-black duration-300 cursor-pointer">
            Get Started
          </button>
        </Link>
      </div>
      <div className="flex items-end pt-10 px-4 lg:px-20">
        <img src={img} />
      </div>
    </div>
  );
}
