
const express = require("express");
const { ragister, login, logout } = require("../controllers/ragisterController");
const router = express.Router()


router.get("/",(req,res)=> {
    res.send("user is running")
})
router.post("/ragister",ragister)
router.post("/login",login)
router.post("/logout",logout)



module.exports = router;
