import type { ReadmeFormData } from "@/types/readme";

const fallbackProjectStructure = `.
|-- README.md
|-- src/
|   |-- main.ts
|   +-- utils/
|-- tests/
+-- package.json`;

const splitListItems = (value: string) => {
  const hasLineBreak = /\r?\n/.test(value);
  const separator = hasLineBreak ? /\r?\n/ : ",";

  return value
    .split(separator)
    .map((item) => item.trim())
    .filter(Boolean);
};

const normalizeCommandBlock = (value: string) =>
  value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n");

const toBulletList = (value: string, fallback: string) => {
  const items = splitListItems(value);

  if (items.length === 0) {
    return `- ${fallback}`;
  }

  return items.map((item) => `- ${item}`).join("\n");
};

const toCodeBlock = (value: string, fallback: string) => {
  const command = normalizeCommandBlock(value) || fallback;
  return `\`\`\`bash\n${command}\n\`\`\``;
};

export const generateReadme = (data: ReadmeFormData) => {
  const projectName = data.projectName.trim() || "Untitled Project";
  const description =
    data.description.trim() ||
    "A focused software project built to demonstrate practical engineering skills.";
  const targetRole = data.targetRole.trim() || "Software Engineer";

  return `# ${projectName}

## Overview
${description}

This project is presented for a ${targetRole} role, highlighting implementation decisions, technical trade-offs, and measurable outcomes.

## Motivation
I built this project to solve a practical problem, strengthen production-oriented development habits, and communicate the engineering process clearly for hiring reviewers.

## Tech Stack
${toBulletList(data.techStack, "Add the main languages, frameworks, libraries, and tools used in this project.")}

## Features
${toBulletList(data.keyFeatures, "Add the key user-facing or technical features of this project.")}

## Installation
${toCodeBlock(data.installationCommand, "npm install")}

## How to Run
${toCodeBlock(data.runCommand, "npm run dev")}

## Results
${toBulletList(data.results, "Add measurable outcomes such as accuracy, latency, model size, conversion rate, or other project metrics.")}

## What I Learned
${toBulletList(data.whatILearned, "Add the engineering lessons, debugging insights, or domain knowledge gained.")}

## Future Work
${toBulletList(data.futureWork, "Add the next improvements, experiments, or production-readiness tasks.")}

## Project Structure
\`\`\`text
${fallbackProjectStructure}
\`\`\`
`;
};
