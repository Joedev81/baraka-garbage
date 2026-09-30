// Assemble a ready-to-upload standalone bundle for cPanel Node.js App hosting.
//
// next build with output:"standalone" emits .next/standalone/server.js plus
// the traced node_modules, but NOT the static assets or the public/ folder.
// This copies them into place so .next/standalone is fully self-contained.
//
// Run via npm run build:cpanel. Upload the contents of .next/standalone to
// your cPanel app root and set the startup file to server.js.

import { cp, access } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const standalone = join(root, ".next", "standalone");

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

if (!(await exists(standalone))) {
  console.error(
    "✗ .next/standalone not found. Run next build with output:\"standalone\" first."
  );
  process.exit(1);
}

// .next/static → .next/standalone/.next/static  (hashed JS/CSS/chunks)
await cp(join(root, ".next", "static"), join(standalone, ".next", "static"), {
  recursive: true,
});

// public → .next/standalone/public  (logo, images, favicon, etc.)
if (await exists(join(root, "public"))) {
  await cp(join(root, "public"), join(standalone, "public"), {
    recursive: true,
  });
}

console.log(
  "✓ Standalone bundle ready at .next/standalone (server.js + static + public)."
);