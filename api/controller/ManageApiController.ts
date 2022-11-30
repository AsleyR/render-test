import { Request, Response } from 'express'

exports.manageApi = (req: Request, res: Response) => {
    res.status(200).send({msg: "Test message. Backend Server Working Correctly."})
}