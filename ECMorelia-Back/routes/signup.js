const { jsonResponse } = require('../lib/jsonResponse');
const router = require('express').Router();

router.post('/', (req, res)=>{
    const {Username, email, password} = req.body;

    if (!Username || !email || !password ){
        return res.status(400).json(jsonResponse(400, {
            error: "Fields are required",
        })
        );
    }

    res.status(200).json(jsonResponse(200, {message: "User created successfully"}));

    res.send('signup');
});

module.exports = router;