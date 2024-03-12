const { Course } = require('../models')

const createCourse = async (req, res) => {

  const newCourse = await Course.create({
    name: req.body.name
  })

  res.send(newCourse)
}

module.exports = {
  createCourse
}
