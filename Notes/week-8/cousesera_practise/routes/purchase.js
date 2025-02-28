const {Router} = require("express")

const {purchasemodel} = require("../db")

const purchaseroute = Router()

purchaseroute.post("/purchase",(req,res)=>{

})

module.exports= {
    purchaseroute
}