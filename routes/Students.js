const router = require('express').Router()
const controller = require('../controllers/StudentsCtrl')


router.get('/', controller.getAllStudents)

router.post('/create', controller.createStudent)

router.post('/enroll', controller.enrollStudent)


module.exports = router