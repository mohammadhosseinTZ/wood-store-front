#!/usr/bin/env node
import { execSync } from "child_process";
import fs from "fs";

// --- Read project info ---
const pkg = JSON.parse(fs.readFileSync("./package.json", "utf8"));
const { name, version, dependencies, scripts } = pkg;

// --- Ensure build directory exists ---
if (!fs.existsSync("./builds")) fs.mkdirSync("./builds", { recursive: true });

// --- Create deps.json with only necessary fields ---
console.log("🧩 Cloning dependencies...");
fs.writeFileSync(
  "./package.clean.json",
  JSON.stringify({ dependencies, scripts }, null, 2),
  "utf8"
);

// --- Create cleaned package-lock for stable caching ---
console.log("🧹 Preparing clean package-lock...");
const lock = JSON.parse(fs.readFileSync("./package-lock.json", "utf8"));
delete lock.version;
delete lock.name;
if (lock.packages && lock.packages[""]) {
  delete lock.packages[""].name;
  delete lock.packages[""].version;
}
fs.writeFileSync("./package-lock.clean.json", JSON.stringify(lock, null, 2), "utf8");

// --- Build docker image ---
console.log(`🚀 Building ${name}:${version}...`);
execSync(`docker build -t ${name}:${version} .`, { stdio: "inherit" });

// --- Save docker image ---
console.log("📦 Saving image...");
execSync(`docker save -o ./builds/${name}_v${version}.tar ${name}:${version}`, {
  stdio: "inherit",
});

console.log(`✅ Done: ./builds/${name}_v${version}.tar`);
