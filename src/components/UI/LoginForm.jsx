import { NavLink } from "react-router-dom";

function LoginForm() {
  return (
    <div>
      <h1 className="text-5xl p-10 text-center font-bold">Login</h1>
      <form action="" className="flex flex-col gap-8 items-center">
        <label className="input input-bordered rounded-lg flex items-center gap-2 w-[80%] sm:w-[30%]">
          Email
          <input
            type="email"
            className="grow"
            required
          />
        </label>
        <label className="input input-bordered rounded-lg flex items-center gap-2 w-[80%] sm:w-[30%]">
          Password
          <input
            type="password"
            className="grow"
            required
          />
        </label>
        <button
          type="submit"
          className="btn border-none rounded-lg w-[80%] sm:w-[30%] bg-blue-900 text-gray-100 hover:bg-indigo-700"
        >
          Login
        </button>
        <div>
          <NavLink to={"/signup"} className="hover:text-gray-500">
            Don't have an account?
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
