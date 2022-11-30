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

// 404 Error Handling
app.all('*', (req: Request, res: Response) => {
    res.status(400).send("404 Error! Sorry, The Page You Were Looking For Doesn't Exist.")
})

app.listen(PORT, () => {
    console.log(`[Server]: Server is running at: http://localhost:${PORT}`)
})