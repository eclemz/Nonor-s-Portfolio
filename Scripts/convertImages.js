const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const { optimize } = require("svgo");

const inputDir = path.join(__dirname, "../src/Assets");
const outputDir = path.join(__dirname, "../public/optimized");

const imageExtensions = [".jpg", ".jpeg", ".png", ".tiff", ".bmp", ".svg"];

if (!fs.existsSync(inputDir)) {
  console.error(
    `Input directory "${inputDir}" does not exist. Please create it and add your images.`
  );
  process.exit(1);
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach((file) => {
  const ext = path.extname(file).toLowerCase();
  const inputFile = path.join(inputDir, file);
  const fileName = path.parse(file).name;

  if (ext === ".svg") {
    const svgContent = fs.readFileSync(inputFile, "utf8");
    const result = optimize(svgContent, {
      path: inputFile,
      multipass: true,
      plugins: [
        "preset-default",
        {
          name: "removeViewBox",
          active: false,
        },
        {
          name: "removeDimensions",
          active: true,
        },
      ],
    });

    fs.writeFileSync(path.join(outputDir, `${fileName}.svg`), result.data);
    console.log(`✅ Optimized SVG: ${file}`);
    return;
  }

  if (![".jpg", ".jpeg", ".png", ".tiff", ".bmp"].includes(ext)) {
    console.log(`⏩ Skipping unsupported file: ${file}`);
    return;
  }

  // Convert to WebP
  sharp(inputFile)
    .toFormat("webp")
    .toFile(path.join(outputDir, `${fileName}.webp`))
    .then(() => console.log(`✅ Converted ${file} to WebP`))
    .catch((err) =>
      console.error(`❌ Error converting ${file} to WebP:`, err.message)
    );

  // Convert to AVIF
  sharp(inputFile)
    .toFormat("avif")
    .toFile(path.join(outputDir, `${fileName}.avif`))
    .then(() => console.log(`✅ Converted ${file} to AVIF`))
    .catch((err) =>
      console.error(`❌ Error converting ${file} to AVIF:`, err.message)
    );

  // Copy original
  fs.copyFileSync(inputFile, path.join(outputDir, file));
});
