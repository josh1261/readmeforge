import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type SaveReadmeBody = {
  markdown?: unknown;
};

export async function POST(request: Request) {
  let body: SaveReadmeBody;

  try {
    body = (await request.json()) as SaveReadmeBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (typeof body.markdown !== "string") {
    return NextResponse.json({ error: "Markdown is required." }, { status: 400 });
  }

  const outputDir = path.join(process.cwd(), "generated");
  const outputPath = path.join(outputDir, "README.md");

  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(outputPath, body.markdown, "utf8");

  return NextResponse.json({ path: "generated/README.md" });
}
