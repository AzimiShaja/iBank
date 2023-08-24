import img from "/src/assets/security_img.png";
import { FaLock } from "react-icons/fa";
import { SiConvertio } from "react-icons/si";
export default function Security() {
  return (
    <div className="flex max-lg:flex-col justify-center gap-20 items-start max-lg:px-10 pt-20 px-5">
      {/**======== */}
      <div className="flex flex-col items-start justify-center gap-8">
        <div className="flex flex-col items-start gap-1">
          <p className="text-orange-500 lg:text-lg">Banking Security</p>
          <h1 className="lg:text-5xl text-3xl font-open font-bold max-w-2xl leading-tight">
            The Safest Way To Transact Your Money Fast
          </h1>
        </div>
        <div className="max-w-xl">
          <p className="text-justify max-lg:text-sm font-light text-gray-400 font-open">
            Every transactions on thetransacrd is safe and secure with the best
            data encryption you can ever imagine
          </p>
        </div>
        <div className="flex flex-col items-center gap-5 mt-10">
          <div className="flex gap-3 items-center bg-gray-100 p-4 rounded-3xl">
            <FaLock className="text-3xl text-blue-900" />
            <p className="text-lg">Pay Online Securely</p>
          </div>
          <div className="flex gap-3 items-center bg-gray-100 p-4 rounded-3xl">
            <SiConvertio className="text-3xl text-blue-900" />
            <p>Convert Your Money In Seconds</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={img} alt="" />
      </div>
    </div>
  );
}
