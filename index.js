import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { userRoute } from "./routes/userRoute.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.listen(port, () => {
  console.log(`Server running on http//:localhost:${port}`);
});

// Routes
app.use("/api/user", userRoute);
