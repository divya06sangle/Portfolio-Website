import SectionTitle from "./SectionTitle";

function Contact() {
  return (
    <section
      id="contact"
      data-aos="fade-up"
      className="py-28 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <SectionTitle
          subtitle="CONTACT"
          title="Let's Connect & Grow Together"
          description="

I'm a Final Year Information Technology student passionate about web and mobile development, AI/ML, and open-source contributions. I'm always eager to explore new opportunities, connect with like-minded people, learn from industry professionals, and collaborate on impactful projects.

Whether it's an internship, a learning opportunity, a technical discussion, or a collaborative project, I'd love to connect!"
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* Contact Information */}
          <div>

            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Get In Touch
            </h3>

            <p className="text-gray-600 leading-8 mb-8">
              I'm always excited to connect with developers,
              recruiters, startup founders, and technology enthusiasts.
              Let's discuss projects, opportunities, or innovative ideas.
            </p>

            <div className="space-y-5">

              <a
                href="mailto:dsangle272@gmail.com"
                className="block bg-white p-6 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
              >
                <h4 className="font-bold text-slate-900 mb-2">
                  📧 Email
                </h4>

                <p className="text-gray-600">
                  dsangle272@gmail.com
                </p>
              </a>

              <a
                href="https://github.com/divya06sangle"
                target="_blank"
                rel="noreferrer"
                className="block bg-white p-6 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
              >
                <h4 className="font-bold text-slate-900 mb-2">
                  💻 GitHub
                </h4>

                <p className="text-gray-600">
                  github.com/divya06sangle
                </p>
              </a>

              <a
                href="https://www.linkedin.com/in/divya-sangle-a06691288/"
                target="_blank"
                rel="noreferrer"
                className="block bg-white p-6 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
              >
                <h4 className="font-bold text-slate-900 mb-2">
                  🔗 LinkedIn
                </h4>

                <p className="text-gray-600">
                  linkedin.com/in/divya-sangle-a06691288
                </p>
              </a>

              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-lg">
                <h4 className="font-bold text-slate-900 mb-2">
                  📍 Location
                </h4>

                <p className="text-gray-600">
                  Khamgaon, Maharashtra, India
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-lg">
                <h4 className="font-bold text-slate-900 mb-2">
                  ⚡ Response Time
                </h4>

                <p className="text-gray-600">
                  Usually within 24–48 hours
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-lg">
                <h4 className="font-bold text-slate-900 mb-2">
                  💼 Availability
                </h4>

                <p className="text-gray-600">
                  Open to internships, freelance projects, and full-time opportunities.
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 md:p-10">

            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Send a Message
            </h3>

            <p className="text-gray-600 mb-8">
              Have a project, internship opportunity, collaboration,
              or idea to discuss? I'd love to hear from you.
            </p>

            <form className="space-y-6">

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;