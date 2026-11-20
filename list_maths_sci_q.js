const fs = require('fs');

function inspectFile(file) {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  const qMatches = content.matchAll(/id:\s*["']([^"']+)["'][\s\S]*?mark:\s*["']([^"']+)["'][\s\S]*?(?:examYear:\s*["']([^"']+)["'])?[\s\S]*?(?:examTag:\s*["']([^"']+)["'])?[\s\S]*?q:\s*["']([^"']+)["']/g);
  console.log(`\n=== ${file} ===`);
  for (const m of qMatches) {
    const id = m[1];
    const mark = m[2];
    const year = m[3] || '';
    const tag = m[4] || '';
    const q = m[5].substring(0, 50).replace(/\n/g, ' ');
    console.log(`[${id}] (${mark}) [Year: ${year}] [Tag: ${tag}] -> ${q}`);
  }
}

inspectFile('data_maths_tm_u5.js');
inspectFile('data_maths_tm_u6.js');
inspectFile('data_maths_tm_u7.js');
inspectFile('data_maths_tm_u8.js');
