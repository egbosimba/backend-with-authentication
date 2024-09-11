// all user endpoints is defined here
const express = require("express")
const {registerUser,registerAdmin} = require ("../controllers/userController")

const router = express.Router()

// user routes
router.post("/register", registerUser)

// admin routes
router.post("/admin", registerAdmin)










module.exports = router