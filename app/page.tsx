"use client";

import { useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { ReadmeForm } from "@/components/ReadmeForm";
import { ReadmePreview } from "@/components/ReadmePreview";
import { UsageSteps } from "@/components/UsageSteps";
import { defaultReadmeFormData, readmeExamples } from "@/lib/examples";
import { generateReadme } from "@/lib/generateReadme";
import type { ReadmeFormData } from "@/types/readme";

export default function Home() {
  const [formData, setFormData] = useState<ReadmeFormData>({ ...defaultReadmeFormData });
  const [selectedExampleId, setSelectedExampleId] = useState(readmeExamples[0].id);

  const markdown = useMemo(() => generateReadme(formData), [formData]);

  const handleChange = (field: keyof ReadmeFormData, value: string) => {
    setSelectedExampleId("");
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleLoadExample = (exampleId: string) => {
    const selectedExample = readmeExamples.find((example) => example.id === exampleId);

    if (!selectedExample) {
      return;
    }

    setSelectedExampleId(exampleId);
    setFormData({ ...selectedExample.data });
  };

  const handleReset = () => {
    setSelectedExampleId(readmeExamples[0].id);
    setFormData({ ...defaultReadmeFormData });
  };

  return (
    <main>
      <Header />
      <UsageSteps />
      <div
        id="generator"
        className="mx-auto grid w-full max-w-7xl scroll-mt-6 gap-6 px-4 pb-10 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-8"
      >
        <ReadmeForm
          examples={readmeExamples}
          formData={formData}
          selectedExampleId={selectedExampleId}
          onChange={handleChange}
          onLoadExample={handleLoadExample}
          onReset={handleReset}
        />
        <ReadmePreview markdown={markdown} />
      </div>
    </main>
  );
}
