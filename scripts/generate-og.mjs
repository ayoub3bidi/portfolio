import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const W = 1200
const H = 630

const ACCENT = 'hsl(200, 85%, 62%)'

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#081420"/>
      <stop offset="55%" stop-color="#0b1e2d"/>
      <stop offset="100%" stop-color="#0e2739"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${ACCENT}" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="${ACCENT}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <circle cx="1050" cy="90" r="420" fill="url(#glow)"/>
  <circle cx="120" cy="600" r="380" fill="url(#glow)"/>

  <rect x="80" y="118" width="56" height="6" rx="3" fill="${ACCENT}"/>

  <text x="80" y="180" font-family="DejaVu Sans" font-weight="700" font-size="26"
        letter-spacing="10" fill="${ACCENT}">PORTFOLIO</text>

  <text x="76" y="300" font-family="DejaVu Sans" font-weight="700" font-size="96"
        fill="#f2f7fb">Ayoub Abidi</text>

  <text x="80" y="368" font-family="DejaVu Sans" font-weight="400" font-size="44"
        fill="#9fc0d8">Software Developer</text>

  <text x="80" y="446" font-family="DejaVu Sans" font-weight="400" font-size="30"
        fill="#6f8ba0">&#8220;Designing logic for the real world.&#8221;</text>

  <rect x="80" y="520" width="1040" height="1.5" fill="#24425a"/>

  <text x="80" y="568" font-family="DejaVu Sans Mono" font-size="28"
        fill="${ACCENT}">ayoub3bidi.me</text>
</svg>`

const AVATAR_SIZE = 320
const RING_PAD = 7

const avatar = await sharp(path.join(root, 'src/assets/images/profile-pic-2.jpg'))
  .resize(AVATAR_SIZE, AVATAR_SIZE, { fit: 'cover', position: 'attention' })
  .toBuffer()

const mask = Buffer.from(
  `<svg width="${AVATAR_SIZE}" height="${AVATAR_SIZE}">
     <circle cx="${AVATAR_SIZE / 2}" cy="${AVATAR_SIZE / 2}" r="${AVATAR_SIZE / 2 - 1}" fill="#fff"/>
   </svg>`,
)

const maskedAvatar = await sharp(avatar)
  .composite([{ input: mask, blend: 'dest-in' }])
  .png()
  .toBuffer()

const ringSize = AVATAR_SIZE + RING_PAD * 2
const ring = Buffer.from(
  `<svg width="${ringSize}" height="${ringSize}">
     <circle cx="${ringSize / 2}" cy="${ringSize / 2}" r="${ringSize / 2 - 3}"
             fill="none" stroke="${ACCENT}" stroke-width="5"/>
   </svg>`,
)

await sharp(Buffer.from(svg))
  .composite([
    { input: ring, top: 155, left: 800 },
    { input: maskedAvatar, top: 155 + RING_PAD, left: 800 + RING_PAD },
  ])
  .png({ compressionLevel: 9 })
  .toFile(path.join(root, 'public/og/default.png'))

console.log('OG image written to public/og/default.png')
