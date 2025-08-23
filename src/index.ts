import express from "express";
import {env} from "node:process"

const app = express();
const port: number = Number(env.PORT) || 3000;
const address: string = "0.0.0.0" // localhost - required for Render

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from Hakim" });
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});