const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../src/Assets');
const outputDir = path.join(__dirname, '../public/optimized');

const imageExtensions = ['.jpg', '.jpeg', '.png', '.tiff', '.bmp'];

if (!fs.existsSync(inputDir)) {
  console.error(`Input directory "${inputDir}" does not exist. Please create it and add your images.`);
  process.exit(1);
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(file => {
  const ext = path.extname(file).toLowerCase();
  // Only process supported image files
  if (!imageExtensions.includes(ext)) {
    console.log(`Skipping unsupported file: ${file}`);
    return;
  }

  const inputFile = path.join(inputDir, file);
  const fileName = path.parse(file).name;

  // Convert to WebP
  sharp(inputFile)
    .toFormat('webp')
    .toFile(path.join(outputDir, `${fileName}.webp`))
    .catch(err => console.error(`Error converting ${file} to WebP:`, err.message));

  // Convert to AVIF
  sharp(inputFile)
    .toFormat('avif')
    .toFile(path.join(outputDir, `${fileName}.avif`))
    .catch(err => console.error(`Error converting ${file} to AVIF:`, err.message));

  // Copy the original image file to outputDir for fallback
  fs.copyFileSync(inputFile, path.join(outputDir, file));
});