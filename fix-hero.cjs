const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  const originalContent = content;

  // Change justify-end pb-32 to justify-center pt-20
  content = content.replace(/justify-end pb-32/g, 'justify-center pt-20');
  
  // Move indicator up
  content = content.replace(/absolute bottom-8 left-1\/2/g, 'absolute bottom-16 left-1/2');
  content = content.replace(/absolute bottom-12 left-1\/2/g, 'absolute bottom-16 left-1/2');
  
  // Recognition Page
  content = content.replace(/mt-20 flex flex-col items-center gap-3 text-\[\#F7F6F1\]\/30/g, 'absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[#F7F6F1]/50');

  // Remove mt-20 from text container
  content = content.replace(/text-center mt-20 text-bwf-ivory/g, 'text-center pt-12 text-bwf-ivory');

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log('Fixed', file);
  }
});
