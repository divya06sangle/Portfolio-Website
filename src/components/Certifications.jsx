import SectionTitle from "./SectionTitle";

function Certifications() {
  const certifications = [
    {
      title: "JAVA Mern Stack Development",
      issuer: "Wipro(TalentNext)",
      year: "2024",
      link: "/certificates/java-dsa.pdf",
      description:
        "Developed foundational skills in Java programming, object-oriented programming (OOP), data structures and algorithms, and full-stack web development concepts, strengthening problem-solving abilities and software development fundamentals.",
    },
    {
      title: "Postman Student Expert",
      issuer: "Postman",
      year: "2025",
      link: "/certificates/postman-student-expert.pdf",
      description:
        "Gained practical experience in designing, testing, and documenting REST APIs using Postman, including sending HTTP requests, validating responses, managing request collections, handling API parameters and headers, and collaborating on API workflows to support reliable application development.",
    },
    {
      title: "Dotnet and SQL Server Developer",
      issuer: "Certifyera",
      year: "2025",
      link: "/certificates/mern-stack.pdf",
      description:
       "Gained foundational knowledge of .NET development and Microsoft SQL Server, focusing on building database-driven applications, writing SQL queries, managing relational data, and understanding full-stack application development.",
    },
  ];

  return (
    <section
      id="certifications"
      data-aos="fade-up"
      className="py-28 bg-linear-to-b from-white via-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle
          subtitle="CERTIFICATIONS"
          title="Learning & Achievements"
          description="Certifications, training programs, and technical learning milestones that have strengthened my development journey."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {certifications.map((certificate) => (
            <div
              key={certificate.title}
              className="group bg-white rounded-3xl border border-slate-100 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  {certificate.year}
                </span>

                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-2xl group-hover:bg-blue-600 group-hover:text-white transition">
                  🏆
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {certificate.title}
              </h3>

              <p className="text-blue-600 font-semibold mb-5">
                {certificate.issuer}
              </p>

              <p className="text-gray-600 leading-8 mb-6">
                {certificate.description}
              </p>

              <a
                href={certificate.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-all duration-300"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl border border-slate-100 shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Continuous Learning
          </h3>

          <p className="text-gray-600 max-w-3xl mx-auto leading-8">
            I continuously enhance my technical knowledge through certifications,
            hands-on projects, and practical learning to stay updated with modern
            software development technologies and industry best practices.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
