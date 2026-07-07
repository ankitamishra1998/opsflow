import express from "express";
import cors from "cors";
import { prisma } from "./lib/prisma";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", async (_req, res) => {
  const userCount = await prisma.user.count();

  res.json({
    status: "ok",
    message: "OpsFlow API running",
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});