const fs = require('fs');
const path = require('path');

// Read all .ts files in src/content directory
const contentDir = path.join(__dirname, 'src', 'content');
const tsFiles = fs.readdirSync(contentDir).filter(f => f.endsWith('.ts'));

// Comprehensive list of corrupted character patterns to fix
const patterns = [
  // Em dash variations
  { bad: 'Ã¢â‚¬â€" ', good: '— ' },
  { bad: ' Ã¢â‚¬â€" ', good: ' — ' },
  { bad: ' â€"', good: ' —' },
  { bad: 'ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â', good: '—' },
  
  // Middle dot variations  
  { bad: 'Â·', good: '·' },
  { bad: 'Ã‚Â·', good: '·' },
  { bad: ' Â·', good: ' ·' },
  
  // Other common encodings issues
  { bad: 'Ã¡', good: 'á' },
  { bad: 'ãŸ¿', good: '' },
  { bad: 'ÃŽ', good: '' },
  { bad: 'ÃŠ', good: '' }
];

let totalFixed = 0;

tsFiles.forEach(file => {
  const filePath = path.join(contentDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  patterns.forEach(({ bad, good }) => {
    while (content.includes(bad)) {
      content = content.split(bad).join(good);
      totalFixed++;
    }
  });
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed ${file} (${(content.length - original.length)} chars changed)`);
  }
});

console.log(`\nTotal replacements made: ${totalFixed}`);
console.log('\nDone! Refresh your browser at http://localhost:3000');
