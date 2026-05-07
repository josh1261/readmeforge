# ReadMeForge

ReadMeForge is a web application that helps developers generate polished GitHub `README.md` files from structured project information. It is designed for students, junior developers, and portfolio builders who want to present their projects clearly without starting from a blank README.

## Live Demo

[https://readmeforge-eight.vercel.app/](https://readmeforge-eight.vercel.app/)

## Overview

ReadMeForge turns project details such as the project name, target role, tech stack, features, installation commands, results, lessons learned, and future work into a clean Markdown README. The app provides a live preview so users can review the generated document immediately and then copy, save, or download the final result.

## Key Features

- Project information input form
- Loadable example presets for AI, web app, and data analysis projects
- Template-based Markdown README generation
- Live README preview
- Multi-line command support for installation and run instructions
- Bullet list generation for features, results, lessons learned, and future work
- Copy to clipboard
- Save local README
- Download `README.md`
- Reset form to restore the default example

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- React

## Motivation

Writing a clear README is often difficult for beginner developers and students, even when the project itself is valuable. ReadMeForge was built to reduce that friction by guiding users through the key sections that hiring reviewers usually care about: project purpose, technical stack, features, measurable results, lessons learned, and future improvements.

The goal is to help portfolio projects look more complete, readable, and job-ready with a simple browser-based workflow.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the app locally:

```text
http://localhost:3000
```

## Usage

1. Fill in the project information form.
2. Review the generated Markdown in the live preview panel.
3. Use `Copy to Clipboard` to copy the README content.
4. Use `Save Local README` to save the generated README inside the local workspace.
5. Use `Download README.md` to download the generated file.
6. Use `Reset` to restore the default sample data.

## Project Structure

```text
.
|-- app/
|   |-- api/
|   |   +-- save-readme/
|   |-- globals.css
|   |-- layout.tsx
|   +-- page.tsx
|-- components/
|   |-- Header.tsx
|   |-- ReadmeForm.tsx
|   +-- ReadmePreview.tsx
|-- lib/
|   +-- generateReadme.ts
|-- types/
|   +-- readme.ts
|-- package.json
+-- README.md
```

## Future Improvements

- AI-powered README rewriting
- Job-role-specific README templates
- GitHub profile README generator
- Resume bullet point generator
- Korean to English README conversion
- Export options for different README styles

## License

MIT
