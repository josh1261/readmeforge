"use client";

import { useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { ReadmeForm } from "@/components/ReadmeForm";
import { ReadmePreview } from "@/components/ReadmePreview";
import { generateReadme } from "@/lib/generateReadme";
import type { ReadmeFormData } from "@/types/readme";

const defaultFormData: ReadmeFormData = {
  projectName: "VisionGuard NPU Classifier",
  description:
    "Real-time image classification pipeline optimized for edge AI deployment.",
  targetRole: "NPU Software Engineer",
  techStack: "Python, PyTorch, ONNX Runtime, Next.js, TypeScript",
  keyFeatures:
    "Exports trained models to ONNX\nBenchmarks inference latency on device-like inputs\nGenerates readable experiment summaries for reviewers",
  installationCommand: "npm install",
  runCommand: "npm run dev",
  results: "Accuracy 98.5%, Inference time 2.1ms, Model size reduced by 34%",
  whatILearned:
    "How to communicate model performance with concise metrics\nHow to separate preprocessing, inference, and reporting logic\nHow to frame technical trade-offs for hiring reviewers",
  futureWork:
    "Add automated benchmark regression checks\nSupport TensorRT and OpenVINO export paths\nDeploy an interactive demo with sample inputs",
};

export default function Home() {
  const [formData, setFormData] = useState<ReadmeFormData>(defaultFormData);

  const markdown = useMemo(() => generateReadme(formData), [formData]);

  const handleChange = (field: keyof ReadmeFormData, value: string) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleReset = () => {
    setFormData(defaultFormData);
  };

  return (
    <main>
      <Header />
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 pb-10 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-8">
        <ReadmeForm formData={formData} onChange={handleChange} onReset={handleReset} />
        <ReadmePreview markdown={markdown} />
      </div>
    </main>
  );
}
