const jwt = require('jsonwebtoken')

const tokenExpiration = '1d'

export function createJwt(username: string) {
    return jwt.sign({ username }, process.env.JWT_KEY, { expiresIn: tokenExpiration })
}

export function decodeJwt(token: string) {
    try {
        return jwt.verify(token, process.env.JWT_KEY)
    } catch (err) {
        return false
    }
}
