const { Course } = require('../models')
const { Grade } = require('../models')

const createCourse = async (req, res) => {
  const newCourse = await Course.create({
    name: req.body.name
  })

  res.send(newCourse)
}

const addGrade = async (req, res) => {
  const newGrade = await Grade.create({
    score: req.body.score,
    letter: req.body.letter,
  })

  res.send(newGrade)
}

const getCourses = async (req, res) => {
  const courses = await Course.find({})
  res.send(courses)
}

module.exports = {
  createCourse,
  addGrade,
  getCourses
}
