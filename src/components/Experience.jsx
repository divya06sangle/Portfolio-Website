function Experience() {
  const experiences = [
    {
      title: "Final Year Advisor",
      organization: "Mozilla Open Source Community, SSGMCE",
      duration: "2026",
      icon: "🚀",
      description:
        "Leading open-source initiatives, mentoring students, organizing technical events, and fostering a collaborative developer community across campus.",
    },
    {
      title: "Programming & Development Intern",
      organization: "One Smarter Inc., USA",
      duration: "2026",
      icon: "💼",
      description:
        "Worked on client data research, LinkedIn data collection, Apollo-based lead generation, data processing, and automation tasks using modern development tools.",
    },
    {
      title: "Cloud Byte Workshop Organizer",
      organization: "Mozilla Open Source Community",
      duration: "2026",
      icon: "☁️",
      description:
        "Organized hands-on workshops on AWS Cloud and Red Hat Linux, helping students gain practical exposure to cloud computing and Linux administration.",
    },
    {
      title: "JavaScript Workshop Speaker",
      organization: "ITI Khamgaon",
      duration: "2024",
      icon: "🎤",
      description:
        "Delivered JavaScript training sessions covering core concepts, DOM manipulation, event handling, and modern frontend development practices.",
    },
    {
      title: "Game Development Workshop Speaker",
      organization: "SSGMCE, Shegaon",
      duration: "2024",
      icon: "🎮",
      description:
        "Conducted a hands-on game development workshop using JavaScript, teaching animation, collision detection, event handling, and interactive gameplay concepts.",
    },
  ];

  return (
    <section
      id="experience"
      data-aos="fade-left"
      className="py-28 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="mb-20">

          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
            EXPERIENCE
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Leadership & Professional Journey
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl text-lg leading-8">
            My experience spans leadership, internships, community building,
            technical workshops, open-source initiatives, and mentoring
            aspiring developers.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">

          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-100 rounded-full -translate-x-1/2"></div>

          {experiences.map((item, index) => (
            <div
              key={index}
              className={`relative flex mb-12 ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >

              {/* Dot */}
              <div className="absolute left-3 md:left-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-lg md:-translate-x-1/2"></div>

              {/* Card */}
              <div className="ml-14 md:ml-0 md:w-[45%] bg-white rounded-3xl p-8 border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

                <div className="flex items-center justify-between mb-5">

                  <span className="text-4xl">
                    {item.icon}
                  </span>

                  <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                    {item.duration}
                  </span>

                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-blue-600 font-semibold mb-4">
                  {item.organization}
                </p>

                <p className="text-gray-600 leading-8">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* Experience Summary */}
        <div className="mt-20 bg-white border border-slate-100 rounded-3xl shadow-lg p-10">

          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">
                5+
              </h3>

              <p className="text-gray-600 font-medium">
                Leadership & Community Roles
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-indigo-600 mb-2">
                3+
              </h3>

              <p className="text-gray-600 font-medium">
                Technical Workshops Conducted
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-violet-600 mb-2">
                1
              </h3>

              <p className="text-gray-600 font-medium">
                Internship
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;