import { Link } from "react-router";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-3">
        <div>
          <span className="font-['Poppins'] text-lg font-bold text-white">
            My First React App
          </span>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            A small React + TypeScript project built with Vite and Tailwind CSS,
            made while learning the fundamentals of modern frontend development.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="transition-colors hover:text-indigo-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition-colors hover:text-indigo-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-indigo-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
            Built With
          </h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>React + TypeScript</li>
            <li>Vite</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        © {year} My First React App. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;