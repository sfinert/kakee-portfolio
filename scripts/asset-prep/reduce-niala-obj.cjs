const fs = require('node:fs');
const readline = require('node:readline');

async function main() {
  const [source, target, resolution = '.013'] = process.argv.slice(2);
  if (!source || !target) throw new Error('Usage: node reduce-niala-obj.cjs input.obj output.obj [spacing]');
  const spacing = Number(resolution);
  if (!Number.isFinite(spacing) || spacing <= 0) throw new Error('Spacing must be a positive number');
  const clusterForVertex = new Uint32Array(7500000);
  const objects = [];
  let vertexCount = 0;
  let sourceFaces = 0;
  let nextCluster = 0;
  let object;

  for await (const line of readline.createInterface({ input: fs.createReadStream(source), crlfDelay: Infinity })) {
    if (line.startsWith('o ')) {
      object = { name: line.slice(2).trim(), cells: new Map(), vertices: [], faces: [], duplicates: new Set() };
      objects.push(object);
      continue;
    }
    if (line.startsWith('v ')) {
      const [, xText, yText, zText] = line.split(' ');
      const x = Number(xText), y = Number(yText), z = Number(zText);
      const cell = Math.floor(x / spacing) * 1048576 + Math.floor(y / spacing) * 1024 + Math.floor(z / spacing);
      let node = object.cells.get(cell);
      if (!node) {
        nextCluster += 1;
        node = { id: nextCluster, x, y, z, samples: 1 };
        object.cells.set(cell, node);
        object.vertices.push(node);
      } else {
        node.x += x;
        node.y += y;
        node.z += z;
        node.samples += 1;
      }
      vertexCount += 1;
      if (vertexCount >= clusterForVertex.length) throw new Error('Unexpected source vertex count');
      clusterForVertex[vertexCount] = node.id;
      continue;
    }
    if (!line.startsWith('f ')) continue;
    sourceFaces += 1;
    const values = line.trimEnd().split(/ +/).slice(1).map(value => clusterForVertex[parseInt(value, 10)]);
    if (values.some(value => !value)) throw new Error(`Invalid vertex in face ${sourceFaces}`);
    const face = [...new Set(values)];
    if (face.length < 3) continue;
    const id = [...face].sort((a, b) => a - b).join('/');
    if (object.duplicates.has(id)) continue;
    object.duplicates.add(id);
    object.faces.push(`f ${face.join(' ')}\n`);
  }

  const parts = ['# Nomad Sculpt Project niala 2 surface cluster reduction\n'];
  for (const piece of objects) {
    parts.push(`o ${piece.name}\n`);
    for (const v of piece.vertices) {
      const s = v.samples;
      parts.push(`v ${(v.x/s).toFixed(6)} ${(v.y/s).toFixed(6)} ${(v.z/s).toFixed(6)}\n`);
    }
    parts.push('s 1\n');
    for (const face of piece.faces) parts.push(face);
    console.log(piece.name, piece.vertices.length, 'vertices', piece.faces.length, 'faces');
  }
  fs.writeFileSync(target, parts.join(''));
  console.log('Source', vertexCount, sourceFaces, 'reduction spacing', spacing, 'output size', fs.statSync(target).size);
}

main().catch(error => { console.error(error); process.exitCode = 1; });
