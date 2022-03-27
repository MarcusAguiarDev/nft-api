import { Router } from 'express'

const router = Router()
const userController = require('../controllers/user-controller')


router.post('/', userController.create)
router.get('/', userController.get)

module.exports = router