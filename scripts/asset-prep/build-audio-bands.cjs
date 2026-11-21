const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const publicRoot = path.resolve(__dirname, '../../public');
const ffmpeg = process.env.FFMPEG || 'ffmpeg';
const pcm = execFileSync(ffmpeg, [
  '-v', 'error', '-i', path.join(publicRoot, 'media/works/revenant.mp4'),
  '-ac', '1', '-ar', '12000', '-f', 's16le', 'pipe:1'
], { maxBuffer: 64 * 1024 * 1024 });
const frames = [];
const filters = [0, 0];
const frameSize = 400; // 30 measurements per second at 12 kHz.
for (let offset = 0; offset + frameSize * 2 <= pcm.length; offset += frameSize * 2) {
  const energy = [0, 0, 0];
  for (let sample = 0; sample < frameSize; sample++) {
    const value = pcm.readInt16LE(offset + sample * 2) / 32768;
    filters[0] += 0.064 * (value - filters[0]);
    filters[1] += 0.467 * (value - filters[1]);
    const bands = [filters[0], filters[1] - filters[0], value - filters[1]];
    bands.forEach((band, index) => { energy[index] += band * band; });
  }
  frames.push(energy.map(value => Math.sqrt(value / frameSize)));
}
const peak = [0, 1, 2].map(index => Math.max(0.001, ...frames.map(frame => frame[index])));
const bands = frames.map(frame => frame.map((value, index) => Math.round(255 * Math.sqrt(value / peak[index]))));
fs.writeFileSync(path.join(publicRoot, 'assets/revenant-hero-data.js'),
  'window.REVENANT_HERO = ' + JSON.stringify({ bands }) + ';\n');
console.log('Exported ' + bands.length + ' audio frames.');
