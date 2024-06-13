
const express = require("express");
const router = express.Router()
const multer  = require('multer');
const { createProduct, getAllProduct } = require("../controllers/productController");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
   
        req.body.picture = file.originalname
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })


router.get("/",(req,res)=> {
    res.send("product is running")
})

router.post("/createproduct",upload.single("image"),createProduct)
router.get("/getproduct",getAllProduct)




module.exports = router;
