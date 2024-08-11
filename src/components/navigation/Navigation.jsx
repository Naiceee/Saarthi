import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/help"}>Help</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={"/apply-for-volunteering"}>
                Apply for Volunteering
              </NavLink>
            </li>
            <li>
              <NavLink to={"/handouts"}>Handouts</NavLink>
            </li>
            <li>
              <NavLink to={"/videos"}>Videos</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <NavLink to={"/"} className="btn btn-ghost text-xl">
          Saarthi
        </NavLink>
      </div>
      <div className="navbar-end">
        <NavLink
          to={"login"}
          className="tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none max-w-28"
        >
          Login
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;