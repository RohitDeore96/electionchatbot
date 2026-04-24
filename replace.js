const fs = require('fs');
const path = require('path');

const excludeDirs = ['node_modules', '.git', 'dist'];
const includeExts = ['.ts', '.tsx', '.js', '.json', '.html', '.md', '.css'];

function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      if (fs.statSync(dirFile).isDirectory()) {
        if (!excludeDirs.includes(file)) {
          filelist = walkSync(dirFile, filelist);
        }
      } else {
        if (includeExts.includes(path.extname(dirFile))) {
          if (file !== 'package-lock.json') {
            filelist.push(dirFile);
          }
        }
      }
    } catch (err) {
      console.error("Error reading: ", dirFile);
    }
  });
  return filelist;
}

const files = walkSync('.');
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  content = content.replace(/Chess/g, 'Chess');
  content = content.replace(/chess/g, 'chess');
  content = content.replace(/CHESS/g, 'CHESS');
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(Updated  + file);
  }
}
