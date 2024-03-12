const router = require('express').Router()
const controller = require('../controllers/CoursesCtrl')

router.post('/create', controller.createCourse)

module.exports = router