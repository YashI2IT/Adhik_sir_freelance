const fs = require('fs');
const xml = fs.readFileSync('d:\\BWF Adhik Sir Website\\docs\\temp_docx\\word\\document.xml', 'utf8');

// Match <w:p>...</w:p> blocks
const paragraphs = xml.match(/<w:p\b[^>]*>(.*?)<\/w:p>/g);

if (!paragraphs) {
  console.log("No paragraphs found.");
  process.exit(0);
}

let result = "";

paragraphs.forEach(p => {
  // Extract all text inside <w:t>...</w:t> tags within this paragraph
  const textMatches = p.match(/<w:t\b[^>]*>(.*?)<\/w:t>/g);
  let text = "";
  if (textMatches) {
    textMatches.forEach(tMatch => {
      // Remove <w:t> and </w:t> tags
      let innerText = tMatch.replace(/<w:t[^>]*>/, '').replace(/<\/w:t>/, '');
      text += innerText;
    });
  }
  if (text) {
    result += text + "\n\n";
  }
});

fs.writeFileSync('d:\\BWF Adhik Sir Website\\docs\\courage_to_stay.txt', result);
console.log("Extraction complete.");
