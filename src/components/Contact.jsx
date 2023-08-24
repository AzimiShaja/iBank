export default function Contact() {
  return (
    <div className="flex max-lg:flex-col justify-center gap-20 items-start max-lg:px-10 py-20 px-5">
      {/**======== */}
      <div className="flex flex-col items-start lg:items-center  gap-8">
        <div className="flex flex-col items-start lg:items-center gap-1">
          <p className="text-orange-500 lg:text-lg">Contact Us</p>
          <h1 className="lg:text-5xl text-3xl font-open font-bold max-w-2xl leading-tight lg:text-center">
            iBank Is A Quick Solution For Business Payments
          </h1>
        </div>
        <div className="flex items-center gap-5 max-lg:flex-col">
          <button className="bg-blue-900 py-3 px-7 border border-blue-900 text-white rounded-lg hover:bg-white hover:text-black duration-300 cursor-pointer">
            Personal Accounts
          </button>
          <button className="bg-orange-500 py-3 px-7 border border-orange-500 text-white rounded-lg hover:bg-white hover:text-black duration-300 cursor-pointer">
            Business Accounts
          </button>
        </div>
      </div>
    </div>
  );
}
