import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { extname, join, normalize } from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFile } from 'node:child_process'

const root = join(fileURLToPath(new URL('..', import.meta.url)), 'dist')
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml' }

createServer(async (request, response) => {
  const requested = normalize(request.url === '/' ? '/index.html' : request.url)
  const filePath = join(root, requested)
  try {
    const content = await readFile(filePath)
    response.writeHead(200, { 'Content-Type': mime[extname(filePath)] || 'application/octet-stream' })
    response.end(content)
  } catch {
    response.writeHead(404)
    response.end('Not found')
  }
}).listen(4173, () => {
  console.log('Portfolio running at http://localhost:4173')
  execFile('open', ['http://localhost:4173'])
})