export default function responseMessage(statusCode: number, message: any, success: boolean) {
    return {
        status: statusCode,
        success,
        message
    }
}