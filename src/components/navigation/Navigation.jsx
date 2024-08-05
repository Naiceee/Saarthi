import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navbar bg-base-100">
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
              <a>Help</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Apply for Volunteering</a>
            </li>
            <li>
              <a>Handouts</a>
            </li>
            <li>
              <a>Videos</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <NavLink to={"/"} className="btn btn-ghost text-xl">Saarthi</NavLink>
      </div>
      <div className="navbar-end">
        <NavLink to={"login"} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-blue-500 text-white hover:bg-blue-400">
          Login
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;