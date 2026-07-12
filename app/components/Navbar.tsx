export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-6 py-5">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-8 py-5">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 text-xl font-bold text-white shadow-lg">
            IQ
          </div>

          <div>

            <h1 className="text-3xl font-extrabold gradient-text">
              InvestIQ
            </h1>

            <p className="text-xs text-gray-400">
              AI Investment Research Agent
            </p>

          </div>

        </div>

        {/* Menu */}

        <div className="hidden items-center gap-8 text-gray-300 md:flex">

          <a
            href="#"
            className="transition hover:text-white"
          >
            Dashboard
          </a>

          <a
            href="#"
            className="transition hover:text-white"
          >
            AI Analysis
          </a>

          <a
            href="#"
            className="transition hover:text-white"
          >
            Features
          </a>

        </div>

        {/* Button */}

        <button className="primary-btn rounded-full px-6 py-3 font-semibold">
          Analyze Now
        </button>

      </nav>
    </header>
  );
}