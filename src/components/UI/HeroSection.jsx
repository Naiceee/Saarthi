import { NavLink } from "react-router-dom";
import eduBear from "../../assets/img/edu-bear.png"

function HeroSection() {
    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={eduBear} className="max-w-sm rounded-full" />
          <div>
            <h1 className="text-5xl font-bold">
              India&apos;s Most Reliable Mentoring Platform!
            </h1>
            <p className="py-6">
              Empowering students with top-notch resources, expert guidance, and
              a supportive community, we strive to transform education and
              unlock every learner&apos;s potential. Join us in redefining
              learning for a brighter future..
            </p>
            <NavLink
              to={"/signup"}
              className="tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none max-w-64"
            >
              Get Started
            </NavLink>
          </div>
        </div>
      </div>
    );
}

export default HeroSection;