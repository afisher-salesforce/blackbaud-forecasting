import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "artifacts", "blackbaud-forecasting", "dist", "public")));

// SPA fallback
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "artifacts", "blackbaud-forecasting", "dist", "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
