import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import path from "path";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`listening to app on port ${PORT}`);
});
