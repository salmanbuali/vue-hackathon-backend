const { Schema } = require('mongoose')

const resultSchema = new Schema(
  {
    course: { type: Schema.Types.ObjectId, ref: "Course" },
    student: { type: Schema.Types.ObjectId, ref: "Student"},
    grade: { type: Schema.Types.ObjectId, ref: "Grade" }
  },
  { timestamps: true }
)

module.exports = resultSchema