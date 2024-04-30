const Data=require("./RequiredModel");

//post
const createData= async(req, res)=>{
    try{
    const {name, address, phoneNumber, deliveryInstructions, product, quantity}= req.body;

    if (!name || !address || !phoneNumber || !product || !quantity) {
        return res.status(400).json({ message: "Missing required fields" });
      }

    const data= new Data({
        name, address, phoneNumber, deliveryInstructions, product, quantity, orderDateTime: new Date()
    });
    await data.save()
    res.status(201).json(data)
    }catch(error){
        console.log("There is an error: ",error)
        res.status(500).json({message: "Server error"})
    }
}

//get
const getData=async(req, res)=>{
try{
    const data= await Data.find();
    res.status(201).json(data)
}catch(err){
    console.log('Error: ', err)
}
}

//delete
const deleteData=async(req, res)=>{
    try{
        const deleteData= await Data.findByIdAndDelete(req.params.id)
        res.status(204).send();
    }catch(err){
        console.log(err)
    }
}

module.exports={createData, getData, deleteData}