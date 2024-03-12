const mongoose = require('mongoose')

const studentSchema = require('./Student')
const gradeSchema = require('./Grade')
const resultSchema = require('./Result')
const courseSchema = require('./Course')

const Student = mongoose.model('Student', studentSchema)
const Grade = mongoose.model('Grade', gradeSchema)
const Result = mongoose.model('Result', resultSchema)
const Course = mongoose.model('Course', courseSchema)

module.exports = {
  Student,
  Grade,
  Result,
  Course
}
