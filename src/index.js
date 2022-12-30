import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
const app = express();

app.use(cors())
dotenv.config();

import routesPlayers from "./routes/players.route.js";

app.use(express.json());
app.use("/", routesPlayers);

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Application running on port ${port} `);
});
