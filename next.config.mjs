/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    additionalData: `@import "_variables.scss"; @import "_mixins.scss";`,
  },
};

export default nextConfig;
