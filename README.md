# ReadMeForge

## Overview

ReadMeForge is a web app that automatically generates GitHub `README.md` files from structured project information. It helps developers turn basic project details into clean Markdown documentation with a live preview.

## Motivation

ReadMeForge is designed to help beginner developers, college students, and portfolio builders create project README files more easily. Many early-career developers build useful projects but struggle to explain the purpose, features, results, and lessons learned in a clear format. This app provides a simple workflow for creating a polished README without starting from a blank page.

## Features

- Project information input form
- Markdown README generation
- Live README preview
- Copy to clipboard
- Save local README
- Download README.md
- Reset form

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- React

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

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the app:

```text
http://localhost:3000
```

## Usage

Enter your project name, description, target role, tech stack, features, commands, results, lessons learned, and future work in the input form. ReadMeForge generates a Markdown README in real time on the preview panel.

Use `Copy to Clipboard` to copy the generated Markdown, `Save Local README` to save it inside the local project workspace, or `Download README.md` to download it as a Markdown file. Use `Reset` to restore the default example content.

## Future Work

- AI-powered README rewriting
- Job-role-specific README templates
- GitHub profile README generator
- Resume bullet point generator
- Korean to English README conversion

## License

MIT
