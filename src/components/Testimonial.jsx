import testimonials from "./Testimonials";
import { BiSolidQuoteRight } from "react-icons/bi";
export default function Testimonial() {
  return (
    <div className="flex flex-col lg:items-center gap-10 mt-20 bg-gray-50 py-20  px-10">
      <div className="flex flex-col items-center max-md:items-start gap-1">
        <p className="text-orange-500 text-lg">Our Testimonial</p>
        <h1 className="lg:text-4xl text-3xl font-bold font-open">
          What Clients Say about Us
        </h1>
      </div>
      <div className="grid max-lg:grid-cols-1 xl:grid-cols-4 gap-4 w-full lg:px-60">
        {testimonials.map((testimonial) => {
          return (
            <div
              id={testimonial.id}
              className="bg-white p-4 rounded-md shadow-2xl flex flex-col gap-4 items-start justify-around"
            >
              <div className="flex gap-10 lg:gap-20">
                <img
                  className="rounded-full h-32"
                  src={testimonial.img}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <p className="text-md font-light text-gray-500">
                  {testimonial.review}
                </p>
                <h1 className="flex gap-2 items-center text-2xl font-acme">
                  {testimonial.name}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
