import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
import cors from "cors";
import aiRoutes from "./routes/ai.js";

const app = express();

app.use(cors());
app.use(json());

app.get("/", (req, res) => {
    res.send("Welcome to Rhinosnips API it is working");
});
app.use("/api/ai", aiRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
