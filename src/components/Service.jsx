import { FcAlarmClock } from "react-icons/fc";
import { PiListDashes } from "react-icons/pi";
import { AiFillSetting } from "react-icons/ai";
import { TbDragDrop } from "react-icons/tb";
import { Link } from "react-router-dom";
export default function Service() {
  return (
    <div className="bg-gray-50 flex max-lg:flex-col justify-center mt-20 gap-20 items-start max-lg:px-10 py-20 px-5">
      <div className="grid max-lg:w-full lg:grid-cols-2 gap-4">
        <div className="flex flex-col items-start gap-4 bg-white p-4 rounded-md shadow-2xl">
          <FcAlarmClock className="text-5xl text-orange-500" />
          <h1 className=" text-xl font-bold font-open">Deadline Reminders</h1>
        </div>
        <div className="flex flex-col items-start gap-4 bg-white p-4 rounded-md shadow-2xl">
          <PiListDashes className="text-5xl text-orange-500" />
          <h1 className="text-xl font-bold font-open">Simple Dashbord</h1>
        </div>
        <div className="flex flex-col items-start gap-4 bg-white p-4 rounded-md shadow-2xl">
          <AiFillSetting className="text-5xl text-orange-500" />
          <h1 className="text-xl font-bold font-open">Email Notification</h1>
        </div>
        <div className="flex flex-col items-start gap-4 bg-white p-4 rounded-md shadow-2xl">
          <TbDragDrop className="text-5xl text-orange-500" />
          <h1 className="text-xl font-bold font-open">Drag Functionality</h1>
        </div>
      </div>
      {/**======== */}
      <div className="flex flex-col items-start justify-center gap-8">
        <div className="flex flex-col items-start gap-1">
          <p className="text-orange-500 lg:text-lg">Our Services</p>
          <h1 className="lg:text-5xl text-2xl font-open font-bold max-w-2xl leading-tight">
            Providing Services For Last 25 Years With Over 95.4% Satisfaction
          </h1>
        </div>
        <div className="max-w-xl">
          <p className="text-justify max-lg:text-sm font-light text-gray-400 font-open">
            With over 160 years of investment experience and $1.7 trillion in
            assets under management1 Footnote, access the world-class investment
            expertise of thetransacrd to help you meet your important financial
            goals We ensure you exprerience the very best of internet banking
            ever provided by any financial institution.
          </p>
        </div>
        <div>
          <Link to={"/services"}>
            <button className="bg-blue-900 border border-blue-900  text-white px-4 py-3 rounded-md hover:bg-transparent hover:text-blue-900 duration-300">
              View All Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
