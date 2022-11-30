import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
const cors = require('cors')

// Import API Handlers
const manageApi = require('./api/ManageApi')

// Enviromental Variables
dotenv.config()
const frontendWhitelist = [`${process.env.FRONTEND_URL_CONNECTION}`, 'http://localhost:4000']

// Cors configuration
const corsOptions = {
    origin: function (origin: any, callback: any) {
        if (frontendWhitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

// Configure App
const app: Express = express()
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json())
// app.use(cors()) // Cors middleware

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