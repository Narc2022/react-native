import express from "express";
import dotenv from "dotenv";
import { sql } from "./config/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

async function initDB() {
  try {
    await sql`CREATE TABLE NOT EXISTS transactions (
        id SERIAL PRIMARY KEY,
        user_id VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        amount DECIMAL(10,2) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;
    console.log("Database initialized successfully");
  } catch (error) {
    console.log("Error initializing database:", error);
    process.exit(1);
  }
}

app.get("/", (req, res, next) => {
  console.log("Hey we hit a req, the method is", req.method);
  next();
});

CONSOLE.LOG("my port:", process.env.PORT);

app.listen(5000, () => {
  console.log("Server is running on port 5001");
});
