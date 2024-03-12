const router = require('express').Router()
const controller = require('../controllers/CoursesCtrl')

router.post('/create', controller.createCourse)

router.post('/grade', controller.addGrade)

module.exports = router