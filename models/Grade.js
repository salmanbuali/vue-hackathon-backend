const { Schema } = require('mongoose')

const gradeSchema = new Schema(
  {
    score: { type: Number, required: true },
    letter: [ { type: String } ]
  },
  { timestamps: true }
)

module.exports = gradeSchema
