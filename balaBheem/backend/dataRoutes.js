const express= require("express");
const router=express.Router();
const dataController= require("./dataController");

router.post("/createData",dataController.createData)
router.get("/customerDetails",dataController.getData)
router.delete("/deleteData/:id",dataController.deleteData )

module.exports= router;