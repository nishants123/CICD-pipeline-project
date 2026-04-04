const fs = require('fs');
const path = require('path');

// Copy all files from root to dist
function copyFiles() {
  const files = ['index.html', 'style.css', 'script.js'];
  
  files.forEach(file => {
    const source = path.join(__dirname, file);
    const dest = path.join(__dirname, 'dist', file);
    fs.copyFileSync(source, dest);
  });
  
  console.log('✅ Files copied to dist!');
}

copyFiles();