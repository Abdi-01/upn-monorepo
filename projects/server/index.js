import 'dotenv/config'; // untuk access file .env
import express from "express";
import cors from "cors";
import db from "./database/models";
import { Sequelize } from "sequelize";

// #import routers
import configRouter from './routers';
// #endpoint

const port = process.env.PORT || 8000;
const app = express();

// Testing Connection
const initDB = async () => {
  await db.sequelize.authenticate();
};

// initDB();
const checkDB = async () => {
  try {
    let res = new Sequelize("postgresql://abdi:007@001@localhost:5432/locadata", {
      dialect: "postgres"
    })
    await res.authenticate();
    console.log("Connection to DB Succesfully ✅")

  } catch (error) {
    console.log("Unable to connect db", error)
  }
}

checkDB()

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
