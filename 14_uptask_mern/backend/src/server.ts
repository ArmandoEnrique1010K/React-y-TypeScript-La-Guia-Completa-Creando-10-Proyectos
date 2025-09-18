import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan"
import { corsConfig } from "./config/cors"
import { connectDB } from "./config/db"
import authRoutes from "./routes/authRoutes"
import projectRoutes from "./routes/projectRoutes"

dotenv.config()
connectDB()

const app = express()
// Logging
app.use(morgan("dev"))

// Leer datos de formularios
app.use(express.json())
app.use(cors(corsConfig))

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/projects", projectRoutes)

export default app