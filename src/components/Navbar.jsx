import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-18">

          <a
            href="#hero"
            className="text-2xl font-bold text-slate-900"
          >
            Divya
            <span className="text-blue-600">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 hover:text-blue-600 transition"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/DResume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Resume
            </a>
          </div>

          <button
            className="md:hidden text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-6 flex flex-col gap-5 border-t border-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <a
              href="/DResume.pdf"
              target="_blank"
              rel="noreferrer"
              className="w-fit px-5 py-2 rounded-xl bg-blue-600 text-white"
            >
              Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;