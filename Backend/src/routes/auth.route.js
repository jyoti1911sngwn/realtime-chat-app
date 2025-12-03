import express from "express"

const router = express.Router();

router.get("/signup" , (req, res)=>{
    res.send("User has signed up")
})
router.get("/login" , (req, res)=>{
    res.send("User has logged in")
})
router.get("/logout" , (req, res)=>{
    res.send("User has logged out")
})

export default router