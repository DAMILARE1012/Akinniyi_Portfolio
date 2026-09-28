// Generates optimised web images, the social share (Open Graph) card and
// favicons from the original source files in the project root.
// Run with: npm run images
import sharp from 'sharp';
import { copyFile, mkdir } from 'node:fs/promises';

const PHOTO = 'Akinniyi Photo.jpeg';
const CV = 'Abraham Akinniyi CV.pdf';
const NAVY = '#1e3a5f';

await mkdir('public/images', { recursive: true });
await mkdir('public/icons', { recursive: true });

// Portrait in modern + fallback formats at two sizes (for srcset).
for (const size of [480, 640, 960]) {
  const base = sharp(PHOTO).resize(size, size, { fit: 'cover' });
  await base.clone().webp({ quality: 80 }).toFile(`public/images/abraham-akinniyi-${size}.webp`);
  await base.clone().jpeg({ quality: 82, mozjpeg: true }).toFile(`public/images/abraham-akinniyi-${size}.jpg`);
}

// 1200x630 Open Graph / Twitter card.
const portrait = await sharp(PHOTO).resize(630, 630, { fit: 'cover' }).toBuffer();
const text = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <style>
    .name { font: 700 56px 'Segoe UI', Arial, sans-serif; fill: #0f172a; }
    .role { font: 600 32px 'Segoe UI', Arial, sans-serif; fill: ${NAVY}; }
    .meta { font: 400 24px 'Segoe UI', Arial, sans-serif; fill: #475569; }
  </style>
  <rect x="690" y="228" width="64" height="6" fill="${NAVY}"/>
  <text x="690" y="300" class="name">Abraham Akinniyi</text>
  <text x="690" y="352" class="role">MEP Project Engineer</text>
  <text x="690" y="412" class="meta">Electrical installation · Testing</text>
  <text x="690" y="446" class="meta">Commissioning · Quality control</text>
  <text x="690" y="500" class="meta">Lagos, Nigeria</text>
</svg>`);
await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#ffffff' } })
  .composite([{ input: portrait, left: 0, top: 0 }, { input: text, left: 0, top: 0 }])
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile('public/og-image.jpg');

// Favicons: plain initials, no decorative logo.
const monogram = (size, radius) => Buffer.from(`
<svg width="${size}" height="${size}" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="${radius}" fill="${NAVY}"/>
  <text x="32" y="42" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="28" font-weight="700" fill="#fff">AA</text>
</svg>`);
await sharp(monogram(32, 14)).png().toFile('public/icons/favicon-32.png');
await sharp(monogram(180, 0)).png().toFile('public/icons/apple-touch-icon.png');
await sharp(monogram(192, 0)).png().toFile('public/icons/icon-192.png');
await sharp(monogram(512, 0)).png().toFile('public/icons/icon-512.png');

await copyFile(CV, 'public/Abraham-Akinniyi-CV.pdf');
console.log('Images, icons and CV written to /public');
