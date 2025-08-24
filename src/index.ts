import express from "express"
import {env} from "node:process"

const app = express()
const port: number = Number(env.PORT) || 3000
const address: string = "0.0.0.0" // localhost - required for Render
interface User {
  id: number;
  name: string;
  email: string;
}
const user: User = {
  id: 1,
  name: "Hakim",
  email: "hakim@sti.com"
}
app.get("/user", (req, res) => {
  res.status(201).json(user)
})

app.listen(port, address, () => {
  console.log(`Listening to port ${port}`)
})