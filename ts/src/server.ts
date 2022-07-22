import dotenv from "dotenv"
import express from "express"

import routes from "./routes"
dotenv.config()

const port = process.env.PORT ?? 8000
const app = express()

app.use("/api", routes)

app.listen(port, () => console.log(`Server listening on port number: `, port))
