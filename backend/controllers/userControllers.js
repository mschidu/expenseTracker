//------------------------- @desc     register a new user
//@route    POST /api/users
//@access   Public

const registerUser = (req,res)=>{
    res.json({ message : "Register user"})
}

//------------------------- @desc     Login existing new user
//@route    POST /api/users/login
//@access   Public

const loginUser = (req,res)=>{
    res.json({message : "login user"})
}

module.exports = {registerUser,loginUser}