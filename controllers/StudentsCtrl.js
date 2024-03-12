const { Student } = require('../models')

const getAllStudents = async () => {
  const Students = await Student.find({}).populate('results')
  await Students.results?.populate('grade')
  Students.map((student) => {
    let total = 0
    for (let i = 0; i < student.results.length; i++) {
      total = total + student.results[i].grade
    }
    let avg = total / student.results.length
    return { student, avg }
  })
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
