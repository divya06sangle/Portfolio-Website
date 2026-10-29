import SectionTitle from "./SectionTitle";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Simon Says Game",
      category: "Web Application",
      status: "Completed",
      description:
        "Developed an interactive Simon Says memory game using HTML, CSS, and JavaScript featuring random sequence generation, score tracking.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/divya06sangle/Simon-says",
      live: "#",
    },
    {
      id: 2,
      title: "Portfolio-Website",
      category: "Web Application",
      status: "Completed",
      description:
         "Designed and developed a responsive personal portfolio website to showcase my technical skills, projects, certifications, and experience, featuring a modern UI, interactive sections, and professional contact links.",
       tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
      github: "#",
      live: "#",
    },
    {
      id: 3,
      title: "Zerodha Clone",
      category: "Web Application",
      status: "Completed",
      description:
        "A responsive Zerodha landing page clone built using React, featuring authentication UI, reusable components, and a clean modern interface.",
      tech: ["React", "Vite", "CSS"],
      github: "https://github.com/divya06sangle/Zerodha-clone",
      live: "https://zerodha-clone-one-zeta.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      data-aos="zoom-in"
      className="py-28 bg-linear-to-b from-slate-50 via-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <SectionTitle
          subtitle="PROJECTS"
          title="Featured Work"
          description="A collection of projects showcasing my skills in web development, mobile applications, and software engineering."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >

              {/* Project Header */}
              <div className="relative h-56 bg-linear-to-br from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center">

                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,white,transparent_60%)]"></div>

                <div className="relative z-10 text-center px-6">

                  <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-5">
                    {project.category}
                  </span>

                  <h3 className="text-white text-3xl font-bold mb-3">
                    {project.title}
                  </h3>

                  <span className="text-blue-100 text-sm">
                    {project.status}
                  </span>

                </div>

              </div>

              {/* Content */}
              <div className="p-7">

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-blue-600">
                    Featured Project
                  </span>

                  <span className="text-xs text-slate-500">
                    #{project.id}
                  </span>
                </div>

                <p className="text-gray-600 leading-7 mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-100 hover:bg-blue-600 hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-black transition-all duration-300"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center border border-slate-300 text-slate-700 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Section */}
        <div className="mt-24 text-center">

          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Interested in Working Together?
          </h3>

          <p className="text-slate-400 max-w-2xl mx-auto leading-8 mb-10">
  Final Year Information Technology Student • MERN Stack Developer •
  AI/ML Enthusiast • Open Source Community
</p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300"
          >
            Contact Me
          </a>

        </div>

      </div>
    </section>
  );
}

export default Projects;