var UserModel = require('../model/user')
var express= require('express')
var router=express.Router();
var logger=require('../LoggerHandler/logger')
router.post('/register',(req,res)=>{
    console.log("qwcs c")
    UserModel.insertMany(req.body,(err,user)=>{
       if(err){
           logger.error("error")
             res.status(500).send("error")
        }
        if(user){
            logger.debug("User Added")
            res.status(200).send(user)
        }
        else{
            logger.info("No user Added")
            res.status(500).send("user not added")
        }
    })
})

router.get('/register',(req,res)=>{
    console.log(req.query)
    var query ={}
    query["status"]= {$eq: 'inactive'}
    query["email"] = {$ne: 'akash@triconinfotech.com'}
    UserModel.aggregate([{
        $match: {status: 'deleted'}
    },
    {
       $group: {
           _id: '$email',
           total: {$sum: '$salary'}
       }
    },
    {$sort: {total: -1}}
     ],function(err,result){
     console.log("cwcwvcwc",result)
     UserModel.findOne(query,'-password',function(err,users){
        if(err){
           logger.error("error")
            res.status(500).send("Internal Server error")
        }
        else if(!users){
           logger.error("No user found")
            res.status(404).send("No user found")
        }
        else{
           logger.debug("User found", users.metadata)
            res.status(200).send(users)
        }
   })
    })

})

module.exports=router