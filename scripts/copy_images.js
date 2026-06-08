const fs = require('fs');
const path = require('path');

const dataDir = '/mnt/data/';
const publicImagesDir = path.join(process.cwd(), 'public', 'images');

if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

if (fs.existsSync(dataDir)) {
  const files = fs.readdirSync(dataDir);
  for (const file of files) {
    if (file.endsWith('.jpeg') || file.endsWith('.jpg') || file.endsWith('.png')) {
      fs.copyFileSync(path.join(dataDir, file), path.join(publicImagesDir, file));
      console.log(`Copied ${file}`);
    }
  }
} else {
  console.log('/mnt/data/ does not exist');
}
