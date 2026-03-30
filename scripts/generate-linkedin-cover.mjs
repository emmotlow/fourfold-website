import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

// Base64 encode the logo
const logoBase64 = fs.readFileSync(path.join(root, "public/logo.png")).toString("base64");

// Circuit/node pattern — subtle dots and connecting lines
const nodes = [
  // Top scattered nodes
  { x: 120, y: 22 }, { x: 215, y: 45 }, { x: 310, y: 18 },
  { x: 430, y: 50 }, { x: 520, y: 28 }, { x: 640, y: 15 },
  { x: 730, y: 48 }, { x: 820, y: 20 }, { x: 920, y: 42 },
  { x: 1010, y: 25 },
  // Bottom scattered nodes
  { x: 160, y: 155 }, { x: 270, y: 170 }, { x: 380, y: 148 },
  { x: 490, y: 168 }, { x: 590, y: 152 }, { x: 700, y: 172 },
  { x: 800, y: 145 }, { x: 890, y: 165 }, { x: 980, y: 150 },
  // Mid-edge nodes
  { x: 85, y: 95 }, { x: 1060, y: 88 },
];

// Connect nearby nodes with faint lines
const connections = [
  [0, 1], [1, 2], [2, 4], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9],
  [10, 11], [11, 12], [12, 13], [13, 14], [14, 15], [15, 16], [16, 17], [17, 18],
  [0, 19], [1, 10], [3, 12], [6, 15], [8, 17], [9, 20],
];

const nodesSvg = nodes
  .map((n, i) => {
    const r = i % 3 === 0 ? 2.5 : 1.8;
    const opacity = 0.12 + (i % 4) * 0.03;
    return `<circle cx="${n.x}" cy="${n.y}" r="${r}" fill="rgba(200,164,78,${opacity})"/>`;
  })
  .join("\n  ");

const linesSvg = connections
  .map(([a, b]) => {
    const na = nodes[a];
    const nb = nodes[b];
    return `<line x1="${na.x}" y1="${na.y}" x2="${nb.x}" y2="${nb.y}" stroke="rgba(200,164,78,0.06)" stroke-width="0.8"/>`;
  })
  .join("\n  ");

const svg = `<svg width="1128" height="191" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1128" y2="191" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#1a3555"/>
      <stop offset="50%" stop-color="#1e3a5f"/>
      <stop offset="100%" stop-color="#1a3555"/>
    </linearGradient>
    <radialGradient id="glow1" cx="200" cy="95" r="200" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="rgba(200,164,78,0.04)"/>
      <stop offset="100%" stop-color="rgba(200,164,78,0)"/>
    </radialGradient>
    <radialGradient id="glow2" cx="900" cy="95" r="250" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="rgba(200,164,78,0.03)"/>
      <stop offset="100%" stop-color="rgba(200,164,78,0)"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="1128" height="191" fill="url(#bg)"/>
  <rect width="1128" height="191" fill="url(#glow1)"/>
  <rect width="1128" height="191" fill="url(#glow2)"/>

  <!-- Subtle top/bottom border lines -->
  <line x1="0" y1="0.5" x2="1128" y2="0.5" stroke="rgba(200,164,78,0.15)" stroke-width="1"/>
  <line x1="0" y1="190.5" x2="1128" y2="190.5" stroke="rgba(200,164,78,0.08)" stroke-width="1"/>

  <!-- Circuit/node pattern -->
  ${linesSvg}
  ${nodesSvg}

  <!-- Logo -->
  <image x="36" y="56" width="80" height="80" href="data:image/png;base64,${logoBase64}" preserveAspectRatio="xMidYMid meet"/>

  <!-- Main headline -->
  <text x="520" y="82" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-weight="bold" font-size="28" fill="white" letter-spacing="0.5">Your idea. Our engineering.</text>
  <text x="520" y="122" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-weight="bold" font-size="30" fill="#c8a44e" letter-spacing="0.5">Two weeks.</text>

  <!-- URL -->
  <text x="1090" y="100" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="13" fill="rgba(200,164,78,0.6)" letter-spacing="2">fourfold.ai</text>
</svg>`;

const outputPath = path.join(root, "linkedin-cover.png");

sharp(Buffer.from(svg))
  .png()
  .toFile(outputPath)
  .then(() => {
    console.log(`Created: ${outputPath}`);
    console.log("Dimensions: 1128 x 191");
  })
  .catch((err) => console.error("Error:", err));
