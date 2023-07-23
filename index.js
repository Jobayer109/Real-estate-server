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

// app.get("/", (req, res) => {
//   res.send("Hello from server");
// });

app.listen(port, () => {
  console.log(`Server running on http//:localhost:${port}`);
});

app.use("/api/user", userRoute);
