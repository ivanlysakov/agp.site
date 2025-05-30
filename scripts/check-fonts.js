#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fontsDir = path.join(__dirname, "..", "public", "fonts");

const requiredFonts = [
  "CalmiusSansHigh-Light.ttf",
  "CalmiusSansHigh-Light.woff",
  "CalmiusSansHigh-Light.woff2",
  "CalmiusSansHigh-Regular.ttf",
  "CalmiusSansHigh-Regular.woff",
  "CalmiusSansHigh-Regular.woff2",
  "CalmiusSansHigh-Medium.ttf",
  "CalmiusSansHigh-Medium.woff",
  "CalmiusSansHigh-Medium.woff2",
  "CalmiusSansHigh-SemiBold.ttf",
  "CalmiusSansHigh-SemiBold.woff",
  "CalmiusSansHigh-SemiBold.woff2",
  "CalmiusSansHigh-Bold.ttf",
  "CalmiusSansHigh-Bold.woff",
  "CalmiusSansHigh-Bold.woff2",
  "CalmiusSansHigh-ExtraBold.ttf",
  "CalmiusSansHigh-ExtraBold.woff",
  "CalmiusSansHigh-ExtraBold.woff2",
];

console.log("🔍 Checking Calmius Sans High font files...\n");

// Check if fonts directory exists
if (!fs.existsSync(fontsDir)) {
  console.log("❌ Fonts directory does not exist");
  console.log(`   Expected: ${fontsDir}`);
  console.log("   Run: mkdir -p public/fonts\n");
  process.exit(1);
}

// Check each required font file
const missingFonts = [];
const presentFonts = [];

requiredFonts.forEach((fontFile) => {
  const fontPath = path.join(fontsDir, fontFile);
  if (fs.existsSync(fontPath)) {
    const stats = fs.statSync(fontPath);
    if (stats.size > 1000) {
      // Font files should be larger than 1KB
      presentFonts.push(fontFile);
      console.log(`✅ ${fontFile} (${(stats.size / 1024).toFixed(1)}KB)`);
    } else {
      missingFonts.push(fontFile);
      console.log(`⚠️  ${fontFile} (file too small: ${stats.size}B)`);
    }
  } else {
    missingFonts.push(fontFile);
    console.log(`❌ ${fontFile} (missing)`);
  }
});

console.log(`\n📊 Summary:`);
console.log(
  `   Found: ${presentFonts.length}/${requiredFonts.length} font files`
);

if (missingFonts.length > 0) {
  console.log(`\n❌ Missing ${missingFonts.length} font files:`);
  missingFonts.forEach((font) => console.log(`   - ${font}`));

  console.log(`\n📋 Next steps:`);
  console.log(`   1. Obtain the Calmius Sans High font files legally`);
  console.log(`   2. Place them in: ${fontsDir}`);
  console.log(`   3. Run this script again to verify`);
  console.log(`   4. See FONT_SETUP.md for detailed instructions`);

  process.exit(1);
} else {
  console.log(`\n🎉 All font files are present and ready!`);
  console.log(
    `   The Calmius Sans High font should now be available in your application.`
  );
  console.log(`   Run 'npm run dev' to test the font in the browser.`);
}

// Check for unexpected files in fonts directory
const allFiles = fs.readdirSync(fontsDir);
const unexpectedFiles = allFiles.filter(
  (file) => !requiredFonts.includes(file)
);

if (unexpectedFiles.length > 0) {
  console.log(`\n📁 Additional files found in fonts directory:`);
  unexpectedFiles.forEach((file) => {
    const filePath = path.join(fontsDir, file);
    const stats = fs.statSync(filePath);
    console.log(`   - ${file} (${(stats.size / 1024).toFixed(1)}KB)`);
  });
}
