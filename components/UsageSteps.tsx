const steps = [
  "Fill in your project details",
  "Preview your README instantly",
  "Copy or download README.md",
];

export function UsageSteps() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
      <div className="grid gap-3 sm:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={step}
            className="flex min-h-24 items-center gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-50 text-sm font-bold text-teal-700">
              {index + 1}
            </div>
            <p className="text-sm font-semibold leading-6 text-slate-800">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
