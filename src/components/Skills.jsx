function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Vite",
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        "Java",
        "Django",
        "REST APIs",
        "Node.js",
        "Express.js",
      ],
    },
    {
      title: "Mobile",
      icon: "📱",
      skills: [
        "React Native",
        "Expo",
      ],
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: [
        "MySQL",
        "MongoDB",
      ],
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Python IDE",
      ],
    },
    {
      title: "AI/ML",
      icon: "",
      skills: [
        "Python",
        "Numpy",
        "Pandas",
        "Seaborn",
        "Matplotlib"
      ],
    },
  ];

  return (
    <section
      id="skills"
      data-aos="fade-up"
      className="py-28 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="mb-20">

          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
            SKILLS
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Technologies I Work With
          </h2>

          <p className="text-gray-600 text-lg leading-8 max-w-3xl">
            Technologies, frameworks, tools, and platforms I use to build
            modern web applications, mobile experiences, and scalable
            backend systems.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group h-full bg-white rounded-3xl border border-slate-100 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 transition">
                <span className="group-hover:scale-110 transition">
                  {category.icon}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

        {/* Continuous Growth */}
        <div className="mt-20 bg-white rounded-3xl border border-slate-100 shadow-lg p-10">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Continuous Growth
              </h3>

              <p className="text-gray-600 leading-8 max-w-3xl">
                I continuously improve my skills through real-world projects,
                internships, open-source contributions, technical workshops,
                and hands-on experience with modern development tools,
                AI tools, and software engineering practices.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap justify-center">

              <span className="px-5 py-3 rounded-xl bg-blue-50 text-blue-700 font-semibold">
                Machine Learning 
              </span>

              <span className="px-5 py-3 rounded-xl bg-violet-50 text-violet-700 font-semibold">
                Neural Networks
              </span>

              <span className="px-5 py-3 rounded-xl bg-cyan-50 text-cyan-700 font-semibold">
                NLP
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;