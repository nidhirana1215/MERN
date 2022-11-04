const express = require('express')
const router = express.Router()
const logininfo = require('../models/student_models')

router.post('/login', async(req, res) => 
{
    console.log(req.body)
    if (req.body.username && req.body.password) 
    {
        let loginchk =await logininfo.findOne(req.body).select('-password')
        if (loginchk) 
        {
            res.send(loginchk)
        }
        else
        {
            res.send({result:"Invalid Login or Password"});
        }
    }
    else
    {
        res.send({result:"Invalid login or password"})
    }
})

module.exports=router