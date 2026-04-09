import express from "express"
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from '@clerk/express';
import clerkWebhooks from "./controllers/clerkwebhooks.js";

connectDB(); // Connect to MongoDB

const app = express();
app.use(cors()) // Enable Corss-Origin Resource Sharing

//middleware
app.use(express.json()) // Parse JSON bodies
app.use(clerkMiddleware());

// API to listen to clerk webhooks
app.use("/api/clerk", clerkWebhooks);


app.get("/", (req, res) => res.send("API is working properly!"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));