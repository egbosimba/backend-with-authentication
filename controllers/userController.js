// all functions that users can execute
const User = require ("../models/userModel")
const generateToken = require ("../middleWares/utils/generateToken")

const registerUser = async (req,res) => {
const{firstName,lastName,email,phone,password} = req.body
const userExist = await User.findOne({email})

if(userExist){
    return res.status(400).json({message:"User already exist"})
}

const user = await User.create({firstName,lastName,email,phone,password})

if(user){
    // return res.status(201).json({message:"User registered sucessfully"})
    const token = generateToken(user._id)
    res.cookie("jwt", token, {
        httpOnly:true,
        sameSite:"strict",
        maxAge:30 * 24 * 60 * 60 * 1000,
    });
     return res.status(201).json({
        message:"User registered sucessfully",
        user,
        token
    });
} else {
    res.status(400).json({error:"invalid user data"})
}
}

const registerAdmin = async (req,res) => {

    const {firstName,lastName,email,phone,password} = req.body
    const userExist = await User.findOne({email})

if(userExist){
    return res.status(400).json({message:"User already exist"})
}

const user = await User.create({firstName,lastName,email,phone,password,isAdmin:true})
if(user) {
    return res.status(201).json({message:"User registered sucessfully"})
} else {
    res.status(400).json({error:"invalid user data"})
}

}


module.exports = {registerUser, registerAdmin}