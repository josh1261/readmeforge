export function Header() {
  return (
    <header className="mx-auto w-full max-w-7xl px-4 pb-8 pt-10 sm:px-6 sm:pt-14 lg:px-8">
      <div className="border-b border-slate-200 pb-9">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
            ReadMeForge
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Create job-ready GitHub README files in seconds.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            Enter your project details and instantly generate a clean README.md for
            your portfolio, job applications, and GitHub repositories.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#generator"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Start Generating
            </a>
            <p className="text-sm text-slate-500">No login, no database, no API key required.</p>
          </div>
        </div>
      </div>
    </header>
  );
}
