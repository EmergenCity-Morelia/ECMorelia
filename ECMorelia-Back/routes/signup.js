const User = require('../schema/User');
const { jsonResponse } = require('../lib/jsonResponse');

const router = require('express').Router();


router.post('/', async (req, res)=>{
    const {username, email, password,fechaNacimiento} = req.body;
    

    if (username==="" || email==="" || password==="" || fechaNacimiento==="" ){
        return res.status(400).json(jsonResponse(400, {
            error: "Fields are required",
        })
    );
    } 

    //Crear usuariuo.
    const user = new User({username, email, password,fechaNacimiento}); 
    await user.save();


    res
    .status(200)
    .json(jsonResponse(200, {message: "User created successfully"}));


});
module.exports = router;