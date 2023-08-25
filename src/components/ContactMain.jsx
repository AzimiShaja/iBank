export default function ContactMain() {
  return (
    <>
      <div className="py-20 bg-gray-50 flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center">
          <h1 className="text-orange-500">Send Us A Message</h1>
          <h1 className="text-5xl font-open font-bold">
            Do you have any question?
          </h1>
        </div>
        <form className="flex flex-col gap-3 w-3/12">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <textarea rows="5" placeholder="Message"></textarea>
          <button className="bg-blue-900 py-2 border border-blue-900 text-white rounded-lg hover:bg-white hover:text-black duration-300 cursor-pointer">
            Send
          </button>
        </form>
      </div>
    </>
  );
}
