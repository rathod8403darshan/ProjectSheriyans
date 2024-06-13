
const express = require("express");
const router = express.Router()
const ownerModel = require("../models/owner-model");
const { adminPanel } = require("../controllers/ragisterController");




router.get("/", (req, res) => {
    res.send("owner is running")
})

router.post("/", async (req, res) => {

    try {
        const owner = await ownerModel.find();
        if (owner.length > 0) {
            return res.status(503).json({ massage: "You don't have permission to create owner", isSuccess: false })
        }

        const { fullname, email, password } = req.body;
        const ownerdata = await ownerModel.create({
            fullname,
            email,
            password
        })

        return res.status(201).json({ massage: "Owner created successfull", data: ownerdata, isSuccess: true })



    } catch (error) {
        res.status(501).json({ massage: error.message, data: [], isSuccess: false })
    }


})

router.get("/admin",(req,res)=> {
    res.send("hellooo")
})




module.exports = router;
