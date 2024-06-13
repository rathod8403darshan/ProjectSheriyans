const userModel = require("../models/user-model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {generateToken} = require("../utils/generateToken")




const ragister = async (req, res) => {
    try {
        const { email, password, fullname } = req.body
        const userFind = await userModel.findOne({email})

        if(userFind){
           return res.status(401).json({message:"user have already account please login ",data:[],isSuccess:false})
         }

            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(password, salt, async function  (err, hash) {
                    if (err) {
                        return res.send(error.message)
                    }
                    else {
                        const user = await userModel.create({
                            email,
                            password:hash,
                            fullname
                        })
    
                        const token = generateToken(user)
                        res.cookie("token",token);
                        res.status(200).json({message:"user ragister success",data:user,isSuccess:true})
    
                    }
                });
            });


       

        // const user = await userModel.create({
        //     email,
        //     password,
        //     fullname
        // })

        //  res.status(200).json({message:"user ragister success",data:user,isSuccess:true})

    } catch (error) {
        res.status(500).json({ message: error.message, data: [], isSuccess: false })
    }
}
const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({email})
        if(!user){
          return   res.status(401).json({ message: "email password incorrect", data: [], isSuccess: false })
        }

        bcrypt.compare(password,user.password,(err,result)=>{
            if(result){
            const token = generateToken(user);
            res.cookie("token",token);
            res.status(200).json({message:"user login success",token,isSuccess:true})
            }
            else{
                return   res.status(401).json({ message: "email password incorrect", data: [], isSuccess: false })
            }
        })

    } catch (error) {
        res.status(500).json({ message: error.message, data: [], isSuccess: false })
    }
}
const logout = async (req, res) => {
  res.cookie("token","");
  res.redirect("/");
}




module.exports = {
    ragister,
    login,
    logout,
}