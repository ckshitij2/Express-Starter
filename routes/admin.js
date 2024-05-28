const express=require('express')
const path=require('path')
const rootDir=require('../util/path')
const router=express.Router()

router.get('/add-product',(req,res,next)=>{
    const htmlFilePath=path.join(rootDir,'/views','add-product.html')
    res.sendFile(htmlFilePath)

})

router.post('/add-product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')


})


module.exports=router