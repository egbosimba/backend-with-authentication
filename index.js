// importing express
const express = require("express")

// initializing express & storing it in a variable called app

const app = express()

// port
require (`dotenv`).config()
const PORT = process.env.PORT || 5030

// import database connection
const connectDB = require("./database/db")

// execute dabase connection
connectDB()

// import userRoute
const userRoute = require("./userRoutes/userRoutes")


// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// using userRoute
app.use("/api/users", userRoute)










// testing general route
app.get("/api", (req,res) => {
res.json({message:"welcome to my server"})
})







// listen for request 
app.listen(PORT, () => {
    console.log("server started sucessfully");

})