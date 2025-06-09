const fs = require('fs');
const tokens = require('./tokens.json');

const lines = Object.entries(tokens).map(
  ([key, val]) => `  --${key}: ${val};`
);

const css = `:root {\n${lines.join('\n')}\n}\n`;

fs.writeFileSync('tokens/tokens.css', css);
console.log('✅ tokens/tokens.css generated');