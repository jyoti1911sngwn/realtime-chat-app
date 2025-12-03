import express from "express"

const app = express();
const PORT = "3000"

app.get("/api/auth/signup" , (req, res)=>{
    res.send("User has signed up")
})
app.get("/api/auth/login" , (req, res)=>{
    res.send("User has logged in")
})
app.get("/api/auth/logout" , (req, res)=>{
    res.send("User has logged out")
})


app.listen(PORT , ()=>{
    console.log("listening to app")
})