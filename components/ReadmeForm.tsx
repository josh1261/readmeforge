"use client";

import type { ReadmeFormData } from "@/types/readme";

type ReadmeFormProps = {
  formData: ReadmeFormData;
  onChange: (field: keyof ReadmeFormData, value: string) => void;
  onReset: () => void;
};

const textFields: Array<{
  id: keyof ReadmeFormData;
  label: string;
  placeholder: string;
}> = [
  {
    id: "projectName",
    label: "Project Name",
    placeholder: "VisionGuard NPU Classifier",
  },
  {
    id: "description",
    label: "One-line Description",
    placeholder: "Real-time image classification pipeline optimized for edge devices.",
  },
  {
    id: "targetRole",
    label: "Target Role",
    placeholder: "NPU Software Engineer",
  },
  {
    id: "techStack",
    label: "Tech Stack",
    placeholder: "Python, PyTorch, ONNX Runtime, Next.js",
  },
];

const textAreaFields: Array<{
  id: keyof ReadmeFormData;
  label: string;
  placeholder: string;
  rows?: number;
}> = [
  {
    id: "keyFeatures",
    label: "Key Features",
    placeholder: "Model export to ONNX\nLatency benchmark dashboard\nReusable preprocessing pipeline",
  },
  {
    id: "installationCommand",
    label: "Installation Command",
    placeholder: "pip install -r requirements.txt\nnpm install",
    rows: 3,
  },
  {
    id: "runCommand",
    label: "Run Command",
    placeholder: "python train.py\npython analyze_flops.py",
    rows: 3,
  },
  {
    id: "results",
    label: "Results / Metrics",
    placeholder: "Accuracy 98.5%\nInference time 2.1ms\nModel size reduced by 34%",
  },
  {
    id: "whatILearned",
    label: "What I Learned",
    placeholder: "Optimizing inference paths\nWriting clearer experiment logs\nDesigning README content for recruiters",
  },
  {
    id: "futureWork",
    label: "Future Work",
    placeholder: "Add CI benchmark checks\nSupport more model formats\nDeploy demo endpoint",
  },
];

export function ReadmeForm({ formData, onChange, onReset }: ReadmeFormProps) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-slate-950">Project Inputs</h2>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            Fill in the details you want hiring reviewers to see.
          </p>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          Reset
        </button>
      </div>

      <form className="grid gap-5">
        {textFields.map((field) => (
          <label key={field.id} className="grid gap-2">
            <span className="text-sm font-semibold text-slate-700">{field.label}</span>
            <input
              value={formData[field.id]}
              onChange={(event) => onChange(field.id, event.target.value)}
              placeholder={field.placeholder}
              className="min-h-11 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
            />
          </label>
        ))}

        {textAreaFields.map((field) => (
          <label key={field.id} className="grid gap-2">
            <span className="text-sm font-semibold text-slate-700">{field.label}</span>
            <textarea
              value={formData[field.id]}
              onChange={(event) => onChange(field.id, event.target.value)}
              placeholder={field.placeholder}
              rows={field.rows ?? 5}
              className="min-h-32 resize-y rounded-md border border-slate-300 bg-white px-3 py-2 text-sm leading-6 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
            />
          </label>
        ))}
      </form>
    </section>
  );
}
