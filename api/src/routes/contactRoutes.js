const express = require("express")

const router = express.Router()

const { sendMessage } = require("../controllers/ContactController")

const validateEmail = require("../middleware/validateEmail")
const limiter = require("../middleware/rateLimiter")

router.post(
 "/contact",
 limiter,
 validateEmail,
 sendMessage
)

module.exports = router