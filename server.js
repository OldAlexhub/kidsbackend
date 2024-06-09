import express from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import connectToDB from "./db/connectToDB.js";
import cookieParser from "cookie-parser";
import router from "./routes/routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

const __driname = path.dirname(fileURLToPath(import.meta.url));
const publicDirectory = path.join(__driname, "./public");
app.use(express.static(publicDirectory));

app.use(cors());
app.use(cookieParser());
app.use(helmet());
app.use(express.json({ limit: "64mb", extended: true }));
app.use(express.urlencoded({ limit: "64mb", extended: true }));

connectToDB();
app.use("/", router);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
