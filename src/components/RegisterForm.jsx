import { Link } from "react-router-dom";

export default function RegisterForm() {
  return (
    <div className="py-20 flex flex-col justify-center items-center gap-10">
      <h1 className="text-4xl font-bold font-open">Register</h1>
      <form className="register flex flex-col gap-4 lg:w-5/12 max-lg:w-8/12">
        <div className="flex max-lg:gap-5 gap-4 justify-between max-md:flex-col">
          <input type="text" placeholder="Enter your first name" required />
          <input type="text" placeholder="Enter your Last name" required />
        </div>
        <input type="date" placeholder="date of birth" required />
        <input type="email" placeholder="Enter your email" required />
        <input type="password" placeholder="Enter your password" required />
        <input type="password" placeholder="confirm your password" required />
        <button className="bg-blue-900 py-2 border border-blue-900 text-white rounded-lg hover:bg-white hover:text-black duration-300 cursor-pointer">
          Sign up
        </button>
      </form>
      <div>
        <p>
          Already have an account?{" "}
          <Link to={"/login"} className="underline text-blue-900">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}
