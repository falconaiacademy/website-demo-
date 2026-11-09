/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // PGlite ships WASM; keep it out of the bundler.
  serverExternalPackages: ["@electric-sql/pglite", "pg", "nodemailer"],
};

export default nextConfig;
