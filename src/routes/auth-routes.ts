import { Router } from 'express'
const router = Router()
const authController = require('../controllers/auth-controller')

router.post('/login', authController.login)

router.post('/logout', (req, res) => {
    res.send("logout")
})

module.exports = router