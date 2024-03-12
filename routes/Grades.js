const router = require('express').Router()
const controller = require('../controllers/GradesCtrl')

router.get('/', controller.getGrades)

module.exports = router