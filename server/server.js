import express from "express";
import connectDB from "./config/db.js";
import { config } from 'dotenv'
import { router } from "./routes/travelRoutes.js";

const app = express()
config()
connectDB()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use((req, res, next) => {
    // res.header('Access-Control-Allow-Origin', '*'); // => hammasini ochib qo'y
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    next()
  })

app.get('/', (req, res) => res.send('Bismillah'))

app.use('/api/travel', router)