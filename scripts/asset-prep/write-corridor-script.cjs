const fs = require('node:fs');
const path = require('node:path');
const input = process.argv[2];
if (!input) throw new Error('Usage: node write-corridor-script.cjs corridor.json');
const corridor = JSON.parse(fs.readFileSync(input, 'utf8'));
corridor.meshes = corridor.meshes.filter(mesh => mesh.kind !== 'ceiling');
const target = path.resolve(__dirname, '../../public/assets/revenant-corridor-data.js');
fs.writeFileSync(target, 'window.REVENANT_CORRIDOR = ' + JSON.stringify(corridor) + ';\n');
console.log('Updated public/assets/revenant-corridor-data.js.');
