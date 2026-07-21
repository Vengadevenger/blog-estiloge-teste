/** @type {import('next').NextConfig} */
const nextConfig = {
  // permite rodar um servidor de preview isolado (pasta de build própria)
  // sem conflitar com outro `next dev` na mesma pasta
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

module.exports = nextConfig;
