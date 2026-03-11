const validator = require("validator")

module.exports = (req, res, next) => {

 const { email } = req.body

 if (!validator.isEmail(email)) {
  return res.status(400).json({
   error: "Invalid email address"
  })
 }

 next()

}