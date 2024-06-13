
const express = require("express");
const router = express.Router()
const ownerRouter = require("./ownerRouter")
const productRouter = require("./productRouter")
const userRouter = require("./userRouter")


router.get("/",(req,res)=> {
    res.send("app is running")
})

router.use("/owner",ownerRouter)
router.use("/users",userRouter)
router.use("/products",productRouter)


module.exports = router;
