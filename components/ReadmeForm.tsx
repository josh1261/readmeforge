"use client";

import type { ReadmeFormData } from "@/types/readme";
import type { ReadmeExample } from "@/lib/examples";

type ReadmeFormProps = {
  examples: ReadmeExample[];
  formData: ReadmeFormData;
  selectedExampleId: string;
  onChange: (field: keyof ReadmeFormData, value: string) => void;
  onLoadExample: (exampleId: string) => void;
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

export function ReadmeForm({
  examples,
  formData,
  selectedExampleId,
  onChange,
  onLoadExample,
  onReset,
}: ReadmeFormProps) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-6 grid gap-4">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div>
            <h2 className="text-xl font-semibold text-slate-950">Project Inputs</h2>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              Fill in the details you want hiring reviewers to see.
            </p>
          </div>
          <button
            type="button"
            onClick={onReset}
            className="min-h-11 rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:min-w-24"
          >
            Reset
          </button>
        </div>

        <label className="grid gap-2 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <span className="text-sm font-semibold text-slate-700">Load Example</span>
          <select
            value={selectedExampleId}
            onChange={(event) => onLoadExample(event.target.value)}
            className="min-h-11 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-800 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
          >
            <option value="" disabled>
              Choose an example
            </option>
            {examples.map((example) => (
              <option key={example.id} value={example.id}>
                {example.label}
              </option>
            ))}
          </select>
        </label>
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
