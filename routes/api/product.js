
const router = require('express').Router();
const Product=require('../../models/product')

//get
router.get('/',(req,res)=>{
    Product.find((err,docs)=>{
        if(err) console.log(err)
        res.json(docs)
    })
})
//insert
router.post('/add',(req,res)=>{
    const product= new Product(req.body)
    product.save((err,docs)=>{
        if(err) console.log(err)
        res.json(docs)
    })
})
module.exports=router;