const router = require('express').Router()
const controller = require('../controllers/StudentsCtrl')


// router.get('/', controller.getAllStudents)

router.post('/create', controller.createStudent)


module.exports = router