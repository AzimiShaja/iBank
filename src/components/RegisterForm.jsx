export default function RegisterForm() {
  return (
    <div className="py-20  flex flex-col justify-center items-center">
      <div className="flex flex-col items-center gap-5 max-w-fit">
        <h1 className="text-4xl font-bold font-open">Register</h1>
        <form className="register flex flex-col gap-4 w-full">
          <div className="flex gap-4 md:gap-5 justify-center max-md:flex-col">
            <input type="text" placeholder="Enter your first name" />
            <input type="text" placeholder="Enter your Last name" />
          </div>
          <input type="date" placeholder="date of birth" />
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
          <input type="password" placeholder="confirm your password" />
          <button className="bg-blue-900 py-2 border border-blue-900 text-white rounded-lg hover:bg-white hover:text-black duration-300 cursor-pointer">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}