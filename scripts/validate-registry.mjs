#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const registryPath = path.join(root, "registry", "resources.json");
const allowedTypes = new Set(["integration", "best-practice", "research", "tool", "reference"]);
const allowedEcosystems = new Set(["codex", "claude-code", "openclaw", "generic", "multi-agent"]);
const allowedMaturities = new Set(["starter", "recommended", "advanced", "experimental"]);
const allowedLanguages = new Set(["en", "zh-CN"]);

function fail(message) {
  console.error(`validate-registry: ${message}`);
  process.exit(1);
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function ensure(condition, message) {
  if (!condition) fail(message);
}

function resolveResourcePath(item) {
  ensure(typeof item.path === "string" && item.path.length > 0, `invalid path for ${item.id}`);
  ensure(!path.isAbsolute(item.path), `path must be relative for ${item.id}: ${item.path}`);

  const target = path.resolve(root, item.path);
  const relative = path.relative(root, target);

  ensure(relative.length > 0, `path must not point to repository root for ${item.id}`);
  ensure(!relative.startsWith("..") && !path.isAbsolute(relative), `path escapes repository for ${item.id}: ${item.path}`);
  ensure(fs.existsSync(target), `missing referenced path for ${item.id}: ${item.path}`);
  ensure(fs.statSync(target).isFile(), `referenced path must be a file for ${item.id}: ${item.path}`);
}

function main() {
  ensure(fs.existsSync(registryPath), "missing registry/resources.json");

  const data = readJson(registryPath);
  ensure(Array.isArray(data.resources), "resources must be an array");

  const seen = new Set();

  for (const item of data.resources) {
    for (const field of ["id", "title", "type", "ecosystem", "summary", "path", "tags", "maturity", "public"]) {
      ensure(Object.hasOwn(item, field), `resource is missing field: ${field}`);
    }

    ensure(typeof item.id === "string" && /^[a-z0-9-]+$/.test(item.id), `invalid id: ${item.id}`);
    ensure(!seen.has(item.id), `duplicate id: ${item.id}`);
    seen.add(item.id);

    ensure(typeof item.title === "string" && item.title.length >= 3, `invalid title for ${item.id}`);
    ensure(allowedTypes.has(item.type), `invalid type for ${item.id}: ${item.type}`);
    ensure(allowedEcosystems.has(item.ecosystem), `invalid ecosystem for ${item.id}: ${item.ecosystem}`);
    ensure(typeof item.summary === "string" && item.summary.length >= 10, `invalid summary for ${item.id}`);
    if (Object.hasOwn(item, "language")) {
      ensure(allowedLanguages.has(item.language), `invalid language for ${item.id}: ${item.language}`);
    }
    if (Object.hasOwn(item, "translationOf")) {
      ensure(typeof item.translationOf === "string" && /^[a-z0-9-]+$/.test(item.translationOf), `invalid translationOf for ${item.id}: ${item.translationOf}`);
    }
    ensure(Array.isArray(item.tags) && item.tags.length > 0, `tags must be a non-empty array for ${item.id}`);
    ensure(item.tags.every((tag) => typeof tag === "string" && tag.length > 0), `tags must contain non-empty strings for ${item.id}`);
    ensure(allowedMaturities.has(item.maturity), `invalid maturity for ${item.id}: ${item.maturity}`);
    ensure(typeof item.public === "boolean", `public must be boolean for ${item.id}`);
    resolveResourcePath(item);
  }

  for (const item of data.resources) {
    if (Object.hasOwn(item, "translationOf")) {
      ensure(seen.has(item.translationOf), `translation target does not exist for ${item.id}: ${item.translationOf}`);
      ensure(item.translationOf !== item.id, `translation target must differ from id for ${item.id}`);
    }
  }

  console.log("validate-registry: clean");
}

main();
