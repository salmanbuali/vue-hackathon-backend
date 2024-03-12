const { response } = require('express')
const { Student } = require('../models')

const getAllStudents = async (req, res) => {
  const Students = await Student.find({}).populate('results')
  await Students.results?.populate('grade')
  // let response
  // Students.map((student) => {
  //   let total = 0
  //   for (let i = 0; i < student.results.length; i++) {
  //     total = total + student.results[i].grade
  //   }
  //   let avg = total / student.results.length
  // })
  res.send(Students)
}


const createStudent = async (req, res) => {
  let lastId = await Student.findOne().sort({ createdAt: -1 });

  const newStudent = await Student.create({
    name: req.body.name,
    email: req.body.email,
    studentId: lastId.studentId + 1,
  })

  res.send(newStudent)
}

module.exports = {
  createStudent,
  getAllStudents
}
