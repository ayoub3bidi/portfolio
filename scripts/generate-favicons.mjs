import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))

const tileSvg = size => {
  const radius = Math.round(size * 0.22)
  const fontSize = Math.round(size * 0.58)
  const baseline = Math.round(size * 0.5 + fontSize * 0.36)
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="hsl(200, 70%, 38%)"/>
      <stop offset="100%" stop-color="hsl(200, 85%, 55%)"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${radius}" fill="url(#g)"/>
  <text x="50%" y="${baseline}" text-anchor="middle"
        font-family="DejaVu Sans" font-weight="700" font-size="${fontSize}"
        fill="#f2f7fb">A</text>
</svg>`
}

const targets = [
  { file: 'icon-512.png', size: 512 },
  { file: 'icon-192.png', size: 192 },
  { file: 'apple-touch-icon.png', size: 180 },
  { file: 'favicon-32.png', size: 32 },
]

for (const { file, size } of targets) {
  await sharp(Buffer.from(tileSvg(size)))
    .png({ compressionLevel: 9 })
    .toFile(path.join(root, 'public/favicon', file))
  console.log(`written public/favicon/${file}`)
}
