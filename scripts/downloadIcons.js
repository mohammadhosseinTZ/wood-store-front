import path from "path";
import fs from "fs-extra";
import { icons } from "../lib/icons.js";

const OUTPUT_DIR = path.resolve("public/assets/fonts/MaterialSymbol");
const OUTPUT_FONT = path.join(OUTPUT_DIR, "MaterialSymbolsRoundOutput.woff2");

// 1. Collect unique icon names
const iconNames = Object.values(icons)
  .map((name) => name.trim())
  .filter(Boolean) // remove empty values
  .sort(); // ✅ required by Google Fonts

const iconParam = iconNames.join(",");
console.log(iconParam);

// 2. Build Google Fonts API URL
const baseUrl = "https://fonts.googleapis.com/css2";
const family = "family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,300..500,0..1,0";
const url = `${baseUrl}?${family}&icon_names=${encodeURIComponent(iconParam)}`;

console.log("Fetching CSS:", url);

// 3. Fetch CSS from Google Fonts
const res = await fetch(url, {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
    Accept: "text/css,*/*;q=0.1",
  },
});
const css = await res.text();

// 4. Extract WOFF2 URL
const match = css.match(/url\(([^)]+)\)/);
if (!match) {
  console.error("❌ Could not find font URL in CSS");
  process.exit(1);
}
const fontUrl = match[1].replace(/["']/g, "");

console.log("Downloading font:", fontUrl);

// 5. Download font file
const fontData = await fetch(fontUrl).then((res) => res.arrayBuffer());
await fs.ensureDir(OUTPUT_DIR);
await fs.writeFile(OUTPUT_FONT, Buffer.from(fontData));

console.log(`✅ Saved subset font with ${iconNames.length} icons → ${OUTPUT_FONT}`);
