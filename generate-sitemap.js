import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

// __dirname workaround in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set your live website domain here:
const BASE_URL = "https://www.mpcpropertysolutions.in";

const sitemap = new SitemapStream({ hostname: BASE_URL });
const filePath = resolve(__dirname, "public", "sitemap.xml");
const writeStream = createWriteStream(filePath);

sitemap.pipe(writeStream);

// Add your page routes here
const routes = [
  "/",
  "/about-us",
  "/contact-us",
  "/privacy-policy",
  "/terms",
  "/servicePage/Real Estate",
  "/servicePage/Agreement",
  "/servicePage/Interior Design",
  "/servicePage/Pan Card",
  "/servicePage/Driving License",
  "/servicePage/BDA and BMC Work",
  "/servicePage/Affidavite",
  "/servicePage/Architectural Work",
];

routes.forEach((route) => {
  sitemap.write({ url: route, changefreq: "weekly", priority: 0.8 });
});

sitemap.end();

streamToPromise(sitemap)
  .then(() => {
    console.log(`✅ Sitemap created successfully at: ${filePath}`);
  })
  .catch((err) => {
    console.error("❌ Failed to generate sitemap:", err);
  });
