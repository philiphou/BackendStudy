const { Router } = require('express')
const express = require('express')
const router = express.Router()
router.get('/home',(req,res)=>{
    res.send('home')
})
router.get('/detail',(req,res)=>{
    res.send('detail')
})
module.exports=router