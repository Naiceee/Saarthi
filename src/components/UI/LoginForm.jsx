import { NavLink } from "react-router-dom";

function LoginForm() {
  return (
    <>
      <h1 className="text-5xl p-10 text-center font-bold">Login</h1>
      <form action="" className="flex flex-col gap-8 items-center">
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input type="email" className="grow w-96" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Password
          <input type="password" className="grow w-96" />
        </label>
        <button
          type="submit"
          className="btn btn-wide bg-blue-900 text-gray-100 hover:bg-indigo-700"
        >
          Login
        </button>
        <div>
          <NavLink to={"/signup"}>Don't have an account?</NavLink>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
