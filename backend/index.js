const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000


const cors=require("cors");
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

const app = express()

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended : false}))

app.use('/api/expenses',require('./routes/expenseRoutes'))
app.use('/api/expenses',require('./routes/expenseRoutes'))
app.use('/api/users',require('./routes/userRoutes'))

app.listen(port,()=>console.log(`server started on port ${port}`))


// ---------------- Testing webhook ------------ //

app.post("/webhook",(req,res)=>{
    const content = 'Hello from my app'
    fetch(process.env.DISCORD_WEBHOOK_URL,{
        method : "POST",
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify({content : content})
    })
    .then((response)=>{
        console.log("success!")
        res.send("done deal!")
    })
})