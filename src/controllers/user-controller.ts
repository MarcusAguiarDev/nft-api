import { Request, Response, NextFunction } from 'express'
import User from '../database/models/user'
import responseMessage from '../utils/response-message'

async function create(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await User.create(req.body)
        res.status(201).send(responseMessage(201, user.username, true))
    } catch (error) {
        console.log("catch", next)
        next(error)
    }
}

async function get(req: Request, res: Response) {
    const users = await User.findAll()
    res.send(responseMessage(200, users, true))
}

module.exports = {
    create,
    get
}