const { Schema } = require('mongoose')

const studentSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String },
    studentId: { type: Number },
    courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
    results: [{ type: Schema.Types.ObjectId, ref: "Result" }]
  },
  { timestamps: true }
)

module.exports = studentSchema
