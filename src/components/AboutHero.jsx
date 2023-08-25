import img from "/src/assets/about.svg";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
export default function AboutHero() {
  return (
    <>
      <div className="grid h-full grid-cols-2 lg:px-20 bg-gradient-to-r from-gray-900 to-blue-900 max-lg:grid-cols-1 max-lg:pt-10">
        <div className="flex flex-col  items-start px-10 justify-center gap-5 md:gap-10 ">
          <div className="flex flex-col gap-10">
            <h1 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-open font-bold text-white">
              About Us
            </h1>
            <div className="flex">
              <Link to="/">
                <p className="flex text-white items-center hover:text-orange-500 duration-200">
                  Home <IoIosArrowForward />{" "}
                </p>
              </Link>
              <p className="flex text-orange-500 items-center ">
                about us <IoIosArrowForward />{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-end pt-10 px-4 lg:px-40">
          <img src={img} />
        </div>
      </div>
    </>
  );
}
