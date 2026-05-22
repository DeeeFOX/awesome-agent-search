#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const registryPath = path.join(root, "registry", "resources.json");
const outputPath = path.join(root, "docs", "registry-index.md");

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function escapeCell(value) {
  return String(value ?? "")
    .replaceAll("|", "\\|")
    .replaceAll("\n", " ");
}

function linkFor(item) {
  return `[${escapeCell(item.title)}](../${escapeCell(item.path)})`;
}

function languageFor(item) {
  return item.language ?? "en";
}

function translationFor(item) {
  return item.translationOf ? ` -> \`${item.translationOf}\`` : "";
}

function rowFor(item) {
  return [
    linkFor(item),
    `\`${escapeCell(item.type)}\``,
    `\`${escapeCell(item.ecosystem)}\``,
    `\`${escapeCell(item.maturity)}\``,
    `\`${escapeCell(languageFor(item))}\`${translationFor(item)}`,
    escapeCell(item.summary)
  ].join(" | ");
}

function section(title, resources) {
  const rows = resources.map((item) => `| ${rowFor(item)} |`).join("\n");
  return `## ${title}\n\n| Resource | Type | Ecosystem | Maturity | Language | Summary |\n| --- | --- | --- | --- | --- | --- |\n${rows}\n`;
}

function main() {
  const data = readJson(registryPath);
  const resources = [...data.resources].sort((a, b) => a.id.localeCompare(b.id));
  const groups = [
    ["Best Practices", resources.filter((item) => item.type === "best-practice")],
    ["Integrations", resources.filter((item) => item.type === "integration")],
    ["Research", resources.filter((item) => item.type === "research")],
    ["References", resources.filter((item) => item.type === "reference")],
    ["Tools", resources.filter((item) => item.type === "tool")]
  ].filter(([, items]) => items.length > 0);

  const content = [
    "# Registry Index",
    "",
    "This file is generated from `registry/resources.json`.",
    "",
    "Run:",
    "",
    "```sh",
    "make generate-registry-index",
    "```",
    "",
    ...groups.flatMap(([title, items]) => [section(title, items)])
  ].join("\n");

  fs.writeFileSync(outputPath, content);
  console.log(`generate-registry-index: wrote ${path.relative(root, outputPath)}`);
}

main();
