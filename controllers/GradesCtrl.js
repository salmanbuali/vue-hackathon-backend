const { Grade } = require('../models')

const getGrades = async ( req, res ) => {
  const grades = await Grade.find({})
  res.send(grades)
}

module.exports = {
  getGrades
}
