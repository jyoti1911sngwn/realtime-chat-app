import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000 

authRoutes.get("/api/auth/signup" , (req, res)=>{
    res.send("User has signed up")
})
authRoutes.get("/api/auth/login" , (req, res)=>{
    res.send("User has logged in")
})
authRoutes.get("/api/auth/logout" , (req, res)=>{
    res.send("User has logged out")
})


app.listen(PORT , ()=>{
    console.log(`listening to app on port ${PORT}`)
})