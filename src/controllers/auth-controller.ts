import User from '../database/models/user'
import { compare } from '../utils/encrypt-utils'
import { createJwt } from '../utils/session-utils'
import responseMessage from '../utils/response-message'
import { Request, Response } from 'express'

async function login(req: Request, res: Response) {
    const username = req.body?.username
    const password = req.body?.password

    if (!username || !password) {
        const httpStatus = 400
        const message = "Username or password missing"
        return res.status(httpStatus).send(responseMessage(httpStatus, message, false))
    }

    const user = await User.findOne({ where: { username } })

    if (user) {
        if (compare(password, user.password)) {
            //success
            const httpStatus = 200
            const token = createJwt(user.username)
            return res.status(httpStatus).send(responseMessage(httpStatus, token, true))
        }
    }
    //fail
    const httpStatus = 401
    const message = "Wrong username or password"
    res.status(httpStatus).send(responseMessage(httpStatus, message, false))
}

module.exports = { login }