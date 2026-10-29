import profile from "../assets/images/DSS.png";
import { personalInfo } from "../data/portfolioData";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 pt-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="order-2 lg:order-1">

            <p className="text-blue-400 font-medium mb-3">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
              {personalInfo.name}
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6">
              {personalInfo.title}
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-8">
              Final-year Information Technology student at Shri Sant Gajanan Maharaj College of Engineering, Shegaon. Passionate about full-stack web and mobile app development, AI/ML, and open-source contributions, with a focus on building impactful digital experiences and exploring innovative solutions through modern technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">

              <a
                href="/DResume.pdf"
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="border border-slate-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Contact Me
              </a>

            </div>

          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 flex justify-center">

            <div className="relative">

              {/* Subtle Glow */}
              <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl scale-105"></div>

              {/* Profile Image */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border border-slate-700 shadow-2xl">
                <img
                  src={profile}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-3 -right-3 bg-white text-slate-900 px-5 py-2 rounded-full shadow-xl border border-slate-200 font-semibold">
                Open to Opportunities
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;