// Import libraries
import { Request, Response } from 'express'
import dotenv from 'dotenv'

// Config .env
dotenv.config()

// Controllers
exports.manageApi = (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", `${process.env.FRONTEND_URL_CONNECTION}`)
    res.status(200).send({msg: "Test message. Backend Server Working Correctly."})
}