const express = require('express');
const router  = express.Router();
const Ngo = require('../../db/models/ngo');

router.get('/find',async (req,res)=>{
    try{
        const ngoName = req.query.name;
        let filter = req.query.filter;
        if(filter=='') filter='name'
        console.log(filter)
        const data = await Ngo.find({name:{$regex:ngoName}}).sort(filter)
        res.status(200).send({message:'Data Returned Successfully',data})
    }catch(e){
        res.status(404).send({message:e.message,data:null})
    }
})

router.post('/create',async (req,res)=>{
    try{
        const ngo = new Ngo(req.body)
        await ngo.save();
        res.status(200).send({message:'Data Interpreted Successfully',data:ngo})
    }catch(e){
        res.status(404).send({message:e.message,data:null})
    }
})

router.patch('/update/:id',async(req,res)=>{
    try{
        const ngo = await Ngo.findOne({_id:req.params.id})
        ngo.status = true
        await ngo.save()
        res.status(200).send({message:'Data Interpreted Successfully',data:ngo})
    }catch(e){
        res.status(404).send({message:e.message,data:null})
    }
})

module.exports  = router