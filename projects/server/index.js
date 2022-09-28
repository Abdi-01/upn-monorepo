import 'dotenv/config'; // untuk access file .env
import express from "express";
import cors from "cors";
import db from "./database/models";

// #import routers
import configRouter from './routers';
// #endpoint

const port = process.env.PORT || 8000;
const app = express();

// Testing Connection
const initDB = async () => {
  await db.sequelize.authenticate();
};

initDB();

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Hello world !");
});

// Try to get data from database
// Configure import routing
app.use('/api', configRouter);
// #endpoint

// #Error Handling
app.use((error, req, res, next) => {
  res.status(500).send({
    success: false,
    error: error,
    message: error.message
  })
})

app.listen(port, (err) => {
  if (!err) {
    console.log(`App running on http://localhost:${port}`);
    return;
  }

  console.log("Error", err);
});
