import img from "/src/assets/app_img.png";
export default function Mobile() {
  return (
    <div className="flex items-center max-lg:flex-col justify-center gap-20 max-lg:px-10 pt-20 px-5">
      <div className="flex justify-center items-center rounded-full bg-blue-50">
        <img src={img} alt="" />
      </div>
      {/**======== */}
      <div className="flex flex-col items-start justify-center gap-8">
        <div className="flex flex-col items-start gap-1">
          <h1 className="lg:text-5xl text-3xl font-open font-bold max-w-2xl leading-tight">
            We Bring Everything In On Place
          </h1>
        </div>
        <div className="max-w-xl">
          <p className="text-justify max-lg:text-sm font-light text-gray-400 font-open">
            Convenient account options for businesses of all sizes. Plus, take
            advantage of human resource and investment solutions delivered by
            thetransacrd®. Offer your customers a variety of secure and
            convenient payment options that make it easy to do business.
          </p>
        </div>
      </div>
    </div>
  );
}
