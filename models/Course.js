const { Schema } = require('mongoose')

const courseSchema = new Schema(
  {
    name: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = courseSchema
