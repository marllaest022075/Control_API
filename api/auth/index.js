const { jwt } = require("jsonwebtoken")
const Users = require('../models/Users')
const isAuthenticated = (req,res,next)=>{
    const token = req.headers.authorization
    if(!token){
        return res.sendStatus(400)
    }
    jwt.verify(token,'misecreto',(err,decoded)=>{
        const _id = decoded
        Users.findById({_id}).exec()
        .then(user =>{
            if(user){
                req.user = user
                next()
            }
        })
    })
}

module.exports = isAuthenticated