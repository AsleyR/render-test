import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

// Import API Handlers
const manageApi = require('./api/ManageApi')

dotenv.config()

// Configure App
const app: Express = express()
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json())

// Routes
app.get('/', (req: Request, res: Response) => {
    res.send('Simple backend sever for web app.')
})

app.use('/api', manageApi)

app.listen(PORT, () => {
    console.log(`[Server]: Server is running at: http://localhost:${PORT}`)
})