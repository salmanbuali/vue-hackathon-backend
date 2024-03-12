const { Student, Result } = require('../models')

const getAllStudents = async (req, res) => {
  const Students = await Student.find({}).populate({
    path: 'results',
    populate: {
      path: 'grade',
      model: 'Grade'
    }
  }).lean();
  
  const avgStudents = Students.map((student) => {
      let totalScore = 0;
      let numOfResults = student.results.length;
      let avgStudent = student
      student.results.forEach(result => {
        totalScore += result.grade.score;
        console.log(totalScore)
      });
  
      let gpa = totalScore / numOfResults;
      return { ...avgStudent, gpa}

  });
  
  res.send(avgStudents);
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

const enrollStudent = async (req, res) => {
  
  const newResult = await Result.create({
    student: req.body.student,
    course: req.body.course,
    grade: req.body.grade
  })

  const student = await Student.updateOne(
    { _id: req.body.student },
    { $push: { results: newResult._id, courses: req.body.course } }
  )
  res.send(student)
}

module.exports = {
  createStudent,
  getAllStudents,
  enrollStudent
}
