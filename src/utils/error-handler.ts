import responseMessage from './response-message'

export default function errorHandler(error: any, req: any, res: any, next: any) {

    if (error.errors && Array.isArray(error.errors)) {
        const message = error.errors[0].message
        if (message) {
            return res.status(400).send(responseMessage(400, message, false))
        }
    }

    res.status(500).send(responseMessage(500, "Internal error", false))
}