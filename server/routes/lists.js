const express = require("express");
const verify = require("../verifyTokens");
const router = express.Router();
const List = require("../models/List");

// Create
router.post("/", verify, async (req, res)=>{
    if(req.user.isAdmin) {
      const newList = new List(req.body);

      try {
        const saveList = await newList.save();
        res.status(200).json(saveList);
      } catch (error) {
        res.status(500).json(error)
      }
    } else{
        res.status(403).json("You are not allowed");
    }
})

// Delete
router.delete("/:id", verify, async (req, res)=>{
    if(req.user.isAdmin) {
      try {
         await List.findByIdAndDelete(req.params.id);
        res.status(200).json("The list has been deleted");
      } catch (error) {
        res.status(500).json(error)
      }
    } else{
        res.status(403).json("You are not allowed");
    }
})


// Get
router.get("/", verify, async (req, res)=>{
    const typeQuery = req.query.type;
    const genereQuery = req.query.genere;
    let list =[];

    try {
        if(typeQuery){
            if(genereQuery){
                list = await List.aggregate([{$sample: { size: 10}},
                {$match: {type:typeQuery,genere: genereQuery}}])
            } else{
                list = await List.aggregate([{$sample: { size: 10}},
                    {$match: {type:typeQuery}}])
            }
        } else{
            list = await List.aggregate([{$sample: {size: 10}}])
        }
        res.status(200).json(list)
    } catch (error) {
        res.status(500).json(error)
    }
   
})
module.exports = router;