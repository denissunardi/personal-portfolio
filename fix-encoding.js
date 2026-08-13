const fs = require('fs');
const path = require('path');

const files = [
  'src/content/hero.ts',
  'src/content/work.ts', 
  'src/content/capabilities.ts',
  'src/content/experience.ts',
  'src/content/about.ts',
  'src/content/tech.ts'
];

// More comprehensive replacements for various encoding issues
const replacements = [
  // Em dash variants (—)
  { bad: 'ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â', good: '—' },
  { bad: 'â€"', good: '—' },
  { bad: 'Ã¢â‚¬â€" ', good: '— ' },
  { bad: ' Ã¢â‚¬â€" ', good: ' — ' },
  
  // Middle dot (·)
  { bad: 'Â·', good: '·' },
  { bad: 'Ã‚Â·', good: '·' },
  
  // Other common issues
  { bad: 'ÃƒÂ¢', good: '' },
  { bad: 'Ã„Â¸', good: '' },
  { bad: 'â€˜', good: '' },
  { bad: 'â€¹', good: '' }
];

files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (!fs.existsSync(fullPath)) return;
  
  let content = fs.readFileSync(fullPath, 'utf8');
  let changed = false;
  
  replacements.forEach(({ bad, good }) => {
    const count = (content.match(new RegExp(bad.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g')) || []).length;
    if (count > 0) {
      content = content.split(bad).join(good);
      console.log(`Fixed "${bad.replace(/\s/g, ' ')}" -> "${good}" (${count} times)`);
      changed = true;
    }
  });
  
  if (changed) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✓ Updated ${file}`);
  } else {
    console.log(`- No changes needed in ${file}`);
  }
});

console.log('\nDone! Refresh your browser at http://localhost:3000');
process.exit(0);
