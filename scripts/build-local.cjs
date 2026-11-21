const fs = require('node:fs');
const path = require('node:path');
const esbuild = process.platform === 'win32' && process.arch === 'x64'
  ? require('./vendor/esbuild')
  : require('esbuild');
const root = path.resolve(__dirname, '..');
const publicRoot = path.join(root, 'public');
for (const [source, output] of [['index.html', 'OPEN-PORTFOLIO.html'], ['works.html', 'OPEN-WORKS.html']]) {
  const html = fs.readFileSync(path.join(publicRoot, source), 'utf8');
  const portable = html
    .replace(/\s*<script type="importmap">.*?<\/script>/, '')
    .replace(/\s*<script type="module" src="main.js"><\/script>/, '\n  <script defer src="app-local.js"></script>')
    .replace(/\s*<script type="module" src="(?:hero-field|works-ribbon).js"><\/script>/g, '')
    .replaceAll('href="index.html', 'href="OPEN-PORTFOLIO.html')
    .replaceAll('href="works.html', 'href="OPEN-WORKS.html');
  fs.writeFileSync(path.join(publicRoot, output), portable);
}
fs.writeFileSync(path.join(root, 'OPEN-PORTFOLIO.html'), '<!doctype html><html lang="ko"><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=public/OPEN-PORTFOLIO.html"><title>Kakee 포트폴리오 열기</title><a href="public/OPEN-PORTFOLIO.html">포트폴리오 열기</a></html>');
const models = fs.readdirSync(path.join(publicRoot, 'assets')).filter(name => name.endsWith('.glb')).sort();
for (const name of models) {
  const url = 'assets/' + name;
  const bytes = fs.readFileSync(path.join(publicRoot, url));
  const wrapper = 'window.KAKEE_VIEWPORT_ASSETS ??= {};\nwindow.KAKEE_VIEWPORT_ASSETS[' + JSON.stringify(url) + '] = ' + JSON.stringify(bytes.toString('base64')) + ';\n';
  fs.writeFileSync(path.join(publicRoot, url.replace(/\.glb$/, '-data.js')), wrapper);
}
esbuild.buildSync({
  stdin: { contents: "import './main.js'; import './hero-field.js'; import './works-ribbon.js';", resolveDir: publicRoot },
  bundle: true,
  format: 'iife',
  platform: 'browser',
  target: 'es2020',
  minify: true,
  alias: { three: path.join(publicRoot, 'vendor/three.module.js') },
  outfile: path.join(publicRoot, 'app-local.js')
});
console.log('Built direct-open HTML, classic JavaScript bundle, and local viewport assets.');
