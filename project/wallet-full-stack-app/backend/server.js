import express from "express";
import dotenv from "dotenv";
import { sql } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import transactionsRoute from "./routes/transactionsRoute.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

app.use(rateLimiter);
app.use(express.json());

async function initDB() {
  try {
    await sql`CREATE TABLE IF NOT EXISTS transactions (
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

app.get("/health", (req, res) => {
  res.send("its working")
});

app.use("/api/transactions", transactionsRoute);

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
