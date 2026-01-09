import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const injectOGImage = () => {
  return {
    name: "inject-og-image",
    transformIndexHtml(html: string) {
      const baseUrl =
        process.env.VITE_BASE_URL ||
        "https://correa4real.github.io/scroll-sell-page";
      const basePath = process.env.VITE_BASE_PATH || "/";
      const imagePath =
        basePath === "/"
          ? "/flyer-fintech-day.png"
          : `${basePath}flyer-fintech-day.png`;
      const imageUrl = `${baseUrl}${imagePath}`;

      let updatedHtml = html;

      updatedHtml = updatedHtml.replace(
        /<meta property="og:image" content="[^"]*"\s*\/?>/,
        `<meta property="og:image" content="${imageUrl}" />`
      );

      if (updatedHtml.includes('property="og:url"')) {
        updatedHtml = updatedHtml.replace(
          /<meta property="og:url" content="[^"]*"\s*\/?>/,
          `<meta property="og:url" content="${baseUrl}" />`
        );
      } else {
        updatedHtml = updatedHtml.replace(
          /<meta property="og:type" content="website" \/>/,
          `<meta property="og:type" content="website" />\n    <meta property="og:url" content="${baseUrl}" />`
        );
      }

      return updatedHtml;
    },
  };
};

export default defineConfig(({ mode }) => ({
  base: process.env.VITE_BASE_PATH || "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    injectOGImage(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
