export default function LoginForm() {
  return (
    <div className="py-20  flex flex-col gap-5 justify-center items-center">
      <h1 className="text-4xl font-bold font-open">Login</h1>
      <form className="register flex flex-col gap-4 lg:w-3/12 max-lg: w-9/12 ">
        <input type="email" placeholder="Enter your email" required />
        <input type="password" placeholder="Enter your password" required />
        <button className="bg-orange-500 py-2 border border-orange-500 text-white rounded-lg hover:bg-white hover:text-black duration-300 cursor-pointer">
          Sign in
        </button>
      </form>
    </div>
  );
}
