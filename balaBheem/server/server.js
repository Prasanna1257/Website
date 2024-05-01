const express= require("express")
const dotenv= require("dotenv")
const mongoose= require("mongoose")
const bodyParser= require("body-parser")
const dataRoutes= require("./dataRoutes")
const cors= require("cors")
// const details=require("./RequiredModel")

const app= express();

app.use(bodyParser.json());
app.use(cors())

//database connection
dotenv.config();
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB connected Successfully");
})
.catch((error)=>{
    console.log(`Error: ${error}`)
}) 

//Routes connecetion
app.use("/deliveryDetails", dataRoutes)

//server connection
const port=1999;
app.listen(port, ()=>{
    console.log(`Server connected success with port: ${port}`);
})