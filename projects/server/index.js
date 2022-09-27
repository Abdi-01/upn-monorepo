import express from "express";
import cors from "cors";
import db from "./database/models";

const port = 8000;
const app = express();

const initDB = async () => {
  await db.sequelize.authenticate();
};

initDB();

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Hello world !");
});

app.listen(port, (err) => {
  if (!err) {
    console.log(`App running on http://localhost:${port}`);
    return;
  }

  console.log("Error", err);
});
