const axios = require("axios")

async function verifyRecaptcha(token) {

 const res = await axios.post(
  "https://www.google.com/recaptcha/api/siteverify",
  null,
  {
   params: {
    secret: process.env.RECAPTCHA_SECRET,
    response: token
   }
  }
 )

 return res.data.success
}

module.exports = verifyRecaptcha