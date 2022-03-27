import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import routes from './routes'
import errorHandler from './utils/error-handler'

/* Environment config */
dotenv.config()

const app = express()

/* Malicious headers protection */
app.use(helmet())

/* Json Parser */
app.use(express.json())

/* Routes */
app.use(routes)

/* Error handler */
app.use(errorHandler)

/* Start listening */
const port = process.env.SERVER_PORT
app.listen(port, () => console.log(`API running at ${port}`))