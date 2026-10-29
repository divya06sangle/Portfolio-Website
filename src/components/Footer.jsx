function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center">

          {/* Logo */}
          <h2 className="text-4xl font-bold mb-4">
            Divya
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              .
            </span>
          </h2>

          {/* Tagline */}
          <p className="text-slate-400 max-w-2xl mx-auto leading-8 mb-10">
            Final Year Information Technology student focused on building scalable web and mobile applications, exploring AI/ML innovations, contributing to open-source communities, and continuously learning emerging technologies.
          </p>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mx-auto mb-8"></div>

          {/* Copyright */}
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Divya Sangle. All Rights Reserved.
          </p>

          {/* Tech Stack */}
          <p className="text-slate-600 text-sm mt-2">
            Built with React, Vite & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;