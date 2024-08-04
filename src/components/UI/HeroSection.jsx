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
            <button className="btn bg-blue-500 hover:bg-blue-400 text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
}

export default HeroSection;