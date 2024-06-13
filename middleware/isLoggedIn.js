
// const 
const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model")

module.exports = async (req,res,next) => {
    if(!req.cookie.token){
        res.flash("error","you need to login first")
        return res.redirect("/")
    }

    try {
        
        let decoded = jwt.decoded(req.cookie.token,process.env.JWT_KEY)
        let user = await userModel.findOne({email:decoded.email}).select("-password")
        req.user = user
        next();

    } catch (error) {
        res.flash("something went wrong")
        return res.redirect("/")
    }
}