"use client";

import { useState } from "react";

type ReadmePreviewProps = {
  markdown: string;
};

export function ReadmePreview({ markdown }: ReadmePreviewProps) {
  const [copyLabel, setCopyLabel] = useState("Copy to Clipboard");
  const [downloaded, setDownloaded] = useState(false);
  const [downloadError, setDownloadError] = useState("");
  const [saveLabel, setSaveLabel] = useState("Save Local README");
  const [statusMessage, setStatusMessage] = useState("");
  const readmeContent = markdown;
  const hasReadmeContent = readmeContent.trim().length > 0;

  const copyWithFallback = () => {
    const textArea = document.createElement("textarea");

    textArea.value = markdown;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "0";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    const copied = document.execCommand("copy");
    textArea.remove();

    if (!copied) {
      throw new Error("Fallback copy failed");
    }
  };

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText && window.isSecureContext) {
        await navigator.clipboard.writeText(markdown);
      } else {
        copyWithFallback();
      }
      setCopyLabel("Copied!");
      window.setTimeout(() => setCopyLabel("Copy to Clipboard"), 2000);
    } catch {
      try {
        copyWithFallback();
        setCopyLabel("Copied!");
        window.setTimeout(() => setCopyLabel("Copy to Clipboard"), 2000);
      } catch {
        setCopyLabel("Copy failed");
        window.setTimeout(() => setCopyLabel("Copy to Clipboard"), 2000);
      }
    }
  };

  const handleDownload = () => {
    if (!readmeContent.trim()) {
      return;
    }

    try {
      setDownloadError("");

      const blob = new Blob([readmeContent], {
        type: "text/markdown;charset=utf-8",
      });

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");

      a.href = url;
      a.download = "README.md";
      document.body.appendChild(a);
      a.click();

      a.remove();
      URL.revokeObjectURL(url);

      setDownloaded(true);
      window.setTimeout(() => setDownloaded(false), 2000);
    } catch {
      setDownloaded(false);
      setDownloadError("Download failed. Please try again.");
    }
  };

  const handleSave = async () => {
    try {
      const response = await fetch("/api/save-readme", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ markdown }),
      });

      if (!response.ok) {
        throw new Error("Save failed");
      }

      const result = (await response.json()) as { path?: string };
      setSaveLabel("Saved!");
      setStatusMessage(`Saved to ${result.path ?? "generated/README.md"}`);
      window.setTimeout(() => setSaveLabel("Save Local README"), 2000);
    } catch {
      setSaveLabel("Save failed");
      setStatusMessage("Use Copy or Download instead.");
      window.setTimeout(() => setSaveLabel("Save Local README"), 2000);
    }
  };

  return (
    <section className="flex min-h-[42rem] flex-col rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-950">README Preview</h2>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            Generated Markdown updates as you type.
          </p>
          {statusMessage ? (
            <p className="mt-2 text-sm font-medium text-teal-700">{statusMessage}</p>
          ) : null}
          {downloadError ? (
            <p className="mt-2 text-sm font-medium text-red-600">{downloadError}</p>
          ) : null}
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={handleSave}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            {saveLabel}
          </button>
          <button
            type="button"
            onClick={handleDownload}
            disabled={!hasReadmeContent}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400"
          >
            {downloaded ? "Downloaded!" : "Download README.md"}
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            {copyLabel}
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-hidden p-4 sm:p-6">
        <pre className="h-full min-h-[34rem] overflow-auto rounded-md border border-slate-200 bg-slate-950 p-4 text-sm leading-6 text-slate-100 shadow-inner">
          <code>{markdown}</code>
        </pre>
      </div>
    </section>
  );
}
