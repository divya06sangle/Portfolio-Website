function About() {
  const stats = [
    { value: "5+", label: "Projects Built" },
    { value: "6", label: "Certifications" },
    { value: "3+", label: "Workshops Conducted" },
    { value: "1", label: "Internship" },
  ];

  return (
    <section
      id="about"
      data-aos="fade-right"
      className="py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
            ABOUT ME
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            My Journey
          </h2>

          <p className="mt-6 max-w-3xl text-gray-600 leading-8">
Passionate about software development, AI/ML, and open source, with a focus on building impactful digital experiences through modern technologies and continuously exploring innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Card */}
          <div className="rounded-3xl bg-linear-to-br from-slate-900 via-slate-800 to-blue-950 text-white p-10 shadow-2xl">

            <h3 className="text-3xl font-bold mb-6">
              Developer | AI Enthusiast
            </h3>

            <p className="text-slate-300 leading-8 mb-6">

I am a Final Year Information Technology student at Shri Sant Gajanan Maharaj College of Engineering, Shegaon.
 I also have an interest in Artificial Intelligence and Machine Learning, along with familiarity with Python libraries such as NumPy, Pandas, Matplotlib, and Seaborn for data analysis and visualization, as well as Microsoft Excel for data handling and analysis.
I enjoy solving real-world problems through scalable applications, exploring AI/ML-driven solutions, visualizing data to uncover meaningful insights, contributing to open-source communities, and continuously learning emerging technologies.
            </p>

            <p className="text-slate-300 leading-8 mb-6">
              My expertise includes React, React Native,
              MySQL,
              Git, GitHub, Linux, and modern web technologies.
            </p>

            <p className="text-slate-300 leading-8">
              I enjoy solving real-world problems through
              scalable applications, contributing to technical
              communities, and continuously learning emerging
              technologies.
            </p>

          </div>

          {/* Right Cards */}
          <div className="space-y-6">

            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <h4 className="text-2xl font-bold text-slate-900 mb-3">
                🎓 Education
              </h4>

              <p className="font-semibold text-slate-700">
                B.E. Information Technology
              </p>

              <p className="text-gray-500 mt-2">
                Shri Sant Gajanan Maharaj College of Engineering,
                Shegaon
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <h4 className="text-2xl font-bold text-slate-900 mb-3">
                💼 Internship
              </h4>

              <p className="font-semibold text-slate-700">
                Programming & Development Intern
              </p>

              <p className="text-gray-500 mt-2">
                One Smarter Inc., USA
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <h4 className="text-2xl font-bold text-slate-900 mb-3">
                🚀 Leadership
              </h4>

              <p className="font-semibold text-slate-700">
                Mozilla Open Source Community
              </p>

              <p className="text-gray-500 mt-2">
                Final Year Advisor (2026–2027)
              </p>
            </div>

          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl bg-white border border-slate-100 p-8 text-center shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-4xl font-bold text-blue-600 mb-3">
                {item.value}
              </h3>

              <p className="text-gray-600 font-medium">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default About;