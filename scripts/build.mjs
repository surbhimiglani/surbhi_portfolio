import { build } from 'esbuild'
import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises'

await rm('dist', { recursive: true, force: true })
await mkdir('dist', { recursive: true })
await cp('public', 'dist', { recursive: true })
await cp('index.html', 'dist/index.html')

await build({
  entryPoints: ['src/main.jsx'],
  bundle: true,
  minify: true,
  format: 'esm',
  outfile: 'dist/assets/app.js',
  assetNames: 'assets/[name]-[hash]',
  loader: { '.css': 'css' },
})

const indexPath = 'dist/index.html'
const index = await readFile(indexPath, 'utf8')
const updatedIndex = index
  .replace('/src/main.jsx', './assets/app.js')
  .replace('</head>', '    <link rel="stylesheet" href="./assets/app.css" />\n  </head>')
await writeFile(indexPath, updatedIndex)